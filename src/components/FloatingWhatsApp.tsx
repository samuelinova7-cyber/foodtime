import React from 'react';
import { MessageCircle, ShoppingBag, Bike, ExternalLink } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

interface FloatingWhatsAppProps {
  cartCount: number;
  onOpenCart: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ cartCount, onOpenCart }) => {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      {/* Floating Order Cart Trigger (If cart has items) */}
      {cartCount > 0 && (
        <button
          onClick={onOpenCart}
          className="bg-amber-400 hover:bg-amber-500 text-orange-950 font-black py-2.5 px-4 rounded-2xl border-2 border-orange-500 shadow-xl transition-transform hover:scale-105 active:scale-95 flex items-center gap-2 text-xs sm:text-sm animate-bounce"
        >
          <ShoppingBag className="w-4 h-4 text-orange-800" />
          <span>Ver Pedido ({cartCount})</span>
        </button>
      )}

      {/* Floating iFood Direct Button */}
      <a
        href={RESTAURANT_INFO.ifoodUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Pedir no iFood"
        className="group relative bg-red-600 hover:bg-red-700 text-white w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-2xl border-4 border-white transition-all hover:scale-110 active:scale-95 cursor-pointer"
      >
        <Bike className="w-6 h-6 sm:w-7 sm:h-7" />
        <span className="absolute -top-1 -right-1 bg-amber-400 text-orange-950 font-black text-[9px] px-1.5 py-0.5 rounded-full border border-orange-500">
          4.9★
        </span>

        {/* Tooltip on hover */}
        <span className="absolute right-full mr-3 bg-red-950 text-white font-bold text-xs px-3 py-1.5 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-md pointer-events-none hidden sm:inline-block">
          Pedir no iFood
        </span>
      </a>

      {/* Main WhatsApp Direct Chat Button */}
      <a
        href={`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${encodeURIComponent('Olá, Food Time! Gostaria de tirar uma dúvida ou fazer um pedido.')}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Atendimento via WhatsApp"
        className="group relative bg-green-500 hover:bg-green-600 text-white w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-2xl border-4 border-white transition-all hover:scale-110 active:scale-95 cursor-pointer"
      >
        <MessageCircle className="w-8 h-8 sm:w-9 sm:h-9 fill-white text-green-500" />
        
        {/* Pulse ring animation */}
        <span className="absolute -inset-1 rounded-full bg-green-500/40 animate-ping pointer-events-none" />

        {/* Tooltip on hover */}
        <span className="absolute right-full mr-3 bg-slate-900 text-white font-bold text-xs px-3 py-1.5 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-md pointer-events-none hidden sm:inline-block">
          Dúvidas & Pedidos no WhatsApp
        </span>
      </a>
    </div>
  );
};

