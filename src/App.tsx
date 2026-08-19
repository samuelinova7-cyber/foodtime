import React, { useState, useEffect } from 'react';
import { MenuItem } from './types';
import { MENU_ITEMS } from './data/menuData';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { VideoShowcaseSection } from './components/VideoShowcaseSection';
import { MenuList } from './components/MenuList';
import { BeachServicesSection } from './components/BeachServicesSection';
import { InstagramSection } from './components/InstagramSection';
import { GoogleReviewsSection } from './components/GoogleReviewsSection';
import { LocationContactSection } from './components/LocationContactSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  // Cart state persisted in localStorage
  const [cart, setCart] = useState<Record<string, number>>(() => {
    try {
      const saved = localStorage.getItem('foodtime_cart');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('foodtime_cart', JSON.stringify(cart));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [cart]);

  // Cart operations
  const handleAddToCart = (item: MenuItem) => {
    setCart((prev) => ({
      ...prev,
      [item.id]: (prev[item.id] || 0) + 1,
    }));
  };

  const handleRemoveOneFromCart = (item: MenuItem) => {
    setCart((prev) => {
      const currentQty = prev[item.id] || 0;
      if (currentQty <= 1) {
        const copy = { ...prev };
        delete copy[item.id];
        return copy;
      }
      return {
        ...prev,
        [item.id]: currentQty - 1,
      };
    });
  };

  const handleClearCart = () => {
    setCart({});
  };

  // Total items and sum
  const cartItemCount = Object.values(cart).reduce((acc: number, qty: number) => acc + qty, 0);

  const cartTotal = Object.entries(cart).reduce((acc: number, [id, qty]: [string, number]) => {
    const found = MENU_ITEMS.find((m) => m.id === id);
    return acc + (found ? found.price * qty : 0);
  }, 0);

  // Smooth scroll helpers
  const scrollToMenu = () => {
    const el = document.getElementById('cardapio-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToLocation = () => {
    const el = document.getElementById('localizacao-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-amber-50 font-sans text-slate-800 flex flex-col antialiased selection:bg-orange-500 selection:text-white">
      {/* Header */}
      <Header
        cartItemCount={cartItemCount}
        cartTotal={cartTotal}
        onOpenCart={() => setIsCartOpen(true)}
        onScrollToMenu={scrollToMenu}
        onScrollToLocation={scrollToLocation}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          onScrollToMenu={scrollToMenu}
        />

        {/* Instagram Reels Auto-scrolling Section */}
        <InstagramSection />

        {/* Video Showcase Section */}
        <VideoShowcaseSection />

        {/* Interactive Cardápio List */}
        <MenuList
          cart={cart}
          onAddToCart={handleAddToCart}
          onRemoveOneFromCart={handleRemoveOneFromCart}
        />

        {/* Channels & Differentials */}
        <BeachServicesSection />

        {/* 5-Star Google Reviews Auto-scrolling Section */}
        <GoogleReviewsSection />

        {/* Location & Contact Section */}
        <LocationContactSection />
      </main>

      {/* Footer */}
      <Footer
        onScrollToMenu={scrollToMenu}
        onScrollToLocation={scrollToLocation}
      />

      {/* Slide-over WhatsApp Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onAddToCart={handleAddToCart}
        onRemoveOneFromCart={handleRemoveOneFromCart}
        onClearCart={handleClearCart}
      />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp
        cartCount={cartItemCount}
        onOpenCart={() => setIsCartOpen(true)}
      />
    </div>
  );
}
