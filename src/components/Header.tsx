import React from 'react';
import { ShoppingBag, MapPin, Phone, ExternalLink } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

interface HeaderProps {
  cartItemCount: number;
  cartTotal: number;
  onOpenCart: () => void;
  onScrollToMenu: () => void;
  onScrollToLocation: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartItemCount,
  cartTotal,
  onOpenCart,
  onScrollToMenu,
  onScrollToLocation,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white border-b-4 border-amber-400 shadow-md">
      {/* Top Banner info bar */}
      <div className="bg-orange-600 text-white text-xs font-semibold py-1.5 px-4 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-3 mx-auto sm:mx-0">
          <span className="flex items-center gap-1 font-bold">
            <MapPin className="w-3.5 h-3.5" />
            Praia do Francês, Marechal Deodoro - AL
          </span>
          <span className="hidden md:inline-block">•</span>
          <span className="hidden md:inline-block font-medium">
            Seg a Dom: 08:00 às 16:00
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-3 text-amber-100 font-medium">
          <a
            href={RESTAURANT_INFO.ifoodUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 bg-red-600 hover:bg-red-700 text-white px-2.5 py-0.5 rounded-full font-black text-xs transition-colors shadow-xs"
          >
            <span>iFood</span>
            <span className="bg-white text-red-600 text-[10px] px-1.5 rounded-full font-bold">
              4.9 ★
            </span>
          </a>
          <span>Almoço individual a partir de <strong className="text-white font-black">R$ 20,00</strong></span>
          <a
            href={`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${encodeURIComponent('Olá! Gostaria de tirar uma dúvida sobre o cardápio do Food Time.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 bg-green-500 hover:bg-green-600 text-white px-2.5 py-0.5 rounded-full font-bold text-xs transition-colors"
          >
            <Phone className="w-3 h-3" />
            (82) 99311-8752
          </a>
        </div>
      </div>

      {/* Main Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-3">
        {/* Logo */}
        <div
          onClick={onScrollToMenu}
          className="flex items-center gap-2 sm:gap-3 cursor-pointer group select-none"
        >
          {/* Animated Pulsing Glow Logo Image */}
          <div className="relative shrink-0">
            <img
              src={RESTAURANT_INFO.logoUrl}
              alt="Food Time Logo"
              className="w-12 h-12 sm:w-14 sm:h-14 object-contain animate-pulseGlow transition-transform group-hover:scale-110"
            />
          </div>

          <div>
            <div className="flex items-center gap-1.5">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tighter text-orange-600 uppercase italic leading-none">
                Food Time
              </h1>
              <span className="hidden sm:inline-flex bg-red-100 text-red-700 text-[10px] font-black px-2 py-0.5 rounded-md border border-red-200">
                iFood Official
              </span>
            </div>
            <p className="text-[10px] sm:text-xs font-bold text-teal-700 tracking-wider uppercase mt-0.5">
              Praia do Francês • Restaurante & iFood Oficial
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2.5">
          {/* Direct iFood Button */}
          <a
            href={RESTAURANT_INFO.ifoodUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 bg-red-600 hover:bg-red-700 text-white font-black py-2 px-2.5 sm:py-2.5 sm:px-3.5 rounded-xl shadow-[2px_2px_0px_0px_#991b1b] sm:shadow-[3px_3px_0px_0px_#991b1b] transition-all active:translate-y-0.5 active:shadow-none text-xs sm:text-sm cursor-pointer"
            title="Peça no aplicativo iFood"
          >
            <span className="bg-white text-red-600 px-1.5 py-0.5 rounded font-extrabold text-[10px] sm:text-xs">
              iFood
            </span>
            <span className="hidden md:inline">Pedir no iFood</span>
            <ExternalLink className="w-3.5 h-3.5 hidden xs:inline opacity-80" />
          </a>

          {/* Cart Tray Button */}
          <button
            onClick={onOpenCart}
            className="relative flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-black py-2 px-3 sm:py-2.5 sm:px-4 rounded-xl shadow-[2px_2px_0px_0px_#16a34a] sm:shadow-[3px_3px_0px_0px_#16a34a] transition-all active:translate-y-0.5 active:shadow-none text-xs sm:text-sm cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="hidden xs:inline">Seu Pedido</span>
            {cartItemCount > 0 ? (
              <span className="bg-amber-300 text-orange-950 text-xs font-black px-2 py-0.5 rounded-full border border-orange-500">
                {cartItemCount}
              </span>
            ) : null}
            {cartTotal > 0 && (
              <span className="hidden sm:inline-block font-black text-amber-200 ml-1 border-l border-green-400 pl-2">
                R$ {cartTotal.toFixed(2).replace('.', ',')}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

