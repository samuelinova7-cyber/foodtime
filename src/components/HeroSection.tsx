import React from 'react';
import { Utensils, Phone, Sun, MapPin, Sparkles, CheckCircle2, ExternalLink, Bike, Star, BookOpen } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

interface HeroSectionProps {
  onScrollToMenu: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onScrollToMenu,
}) => {
  const heroBgUrl = 'https://res.cloudinary.com/xhuikt2k/image/upload/v1786984977/WhatsApp_Image_2026-08-17_at_1.39.02_PM.jpg';

  return (
    <section className="relative bg-slate-950 text-white overflow-hidden border-b-4 border-amber-400 min-h-[520px] sm:min-h-[580px] flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all scale-105 duration-1000"
        style={{ backgroundImage: `url('${heroBgUrl}')` }}
      />

      {/* Dark & Vibrant Multi-layer Gradient Overlay for Ultra Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-950/75 z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/50 z-0" />

      {/* Decorative Warm Ambient Glows */}
      <div className="absolute -right-20 -top-20 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute left-1/4 -bottom-20 w-80 h-80 bg-amber-500/15 rounded-full blur-2xl pointer-events-none z-0" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10 w-full text-center flex flex-col items-center">
        
        {/* Badges Row */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-5">
          <span className="inline-flex items-center gap-1.5 bg-red-600 text-white font-black px-4 py-1.5 rounded-full uppercase text-xs tracking-wider shadow-md border border-red-400">
            <Bike className="w-4 h-4 animate-bounce" />
            <span>iFood Oficial • 4.9 ★</span>
          </span>
          <span className="inline-flex items-center gap-1.5 bg-amber-400 text-orange-950 font-black px-4 py-1.5 rounded-full uppercase text-xs tracking-wider shadow-md border border-amber-300">
            <Sun className="w-4 h-4 text-orange-800 fill-orange-800" />
            <span>Praia do Francês - AL</span>
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight drop-shadow-lg max-w-4xl">
          Sua melhor opção <span className="text-amber-400 underline decoration-orange-500 decoration-4">na Praia do Francês</span> e <span className="text-amber-400 underline decoration-orange-500 decoration-4">iFood</span>
        </h2>

        {/* Slogan & Description */}
        <p className="text-slate-200 text-base sm:text-xl font-medium mt-4 max-w-3xl leading-relaxed drop-shadow-sm">
          Sabores inesquecíveis entregues no seu hotel ou pousada pelo iFood e servidos quentinhos no nosso restaurante! Pratos executivos individuais, frutos do mar frescos e petiscos generosos na Praia do Francês.
        </p>

        {/* Highlights pill row */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-6 text-xs sm:text-sm font-bold text-white">
          <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 shadow-xs">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            iFood: Entrega 25-40 min
          </span>
          <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 shadow-xs">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            Almoço a partir de R$ 20,00
          </span>
          <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 shadow-xs">
            <CheckCircle2 className="w-4 h-4 text-teal-300" />
            Restaurante & Delivery
          </span>
        </div>

        {/* Main Action Channels */}
        <div className="mt-8 space-y-3 w-full max-w-3xl">
          <span className="text-xs font-black uppercase tracking-wider text-amber-300/90 block text-center">
            Escolha como deseja pedir ou ver os pratos:
          </span>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full">
            {/* iFood Main CTA */}
            <a
              href={RESTAURANT_INFO.ifoodUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white font-black p-4 rounded-2xl shadow-[4px_4px_0px_0px_#991b1b] transition-all active:translate-y-1 active:shadow-none flex flex-col items-center justify-center gap-1 text-center cursor-pointer group border-2 border-red-400"
            >
              <div className="flex items-center gap-1.5">
                <span className="bg-white text-red-600 text-xs font-black px-2 py-0.5 rounded">iFood</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </div>
              <span className="text-sm font-extrabold mt-1">Pedir no iFood</span>
              <span className="text-[10px] text-red-100 font-semibold">Entrega Pousadas & Região</span>
            </a>

            {/* WhatsApp Direct CTA */}
            <a
              href={`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${encodeURIComponent('Olá, Food Time! Gostaria de fazer um pedido.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-black p-4 rounded-2xl shadow-[4px_4px_0px_0px_#16a34a] transition-all active:translate-y-1 active:shadow-none flex flex-col items-center justify-center gap-1 text-center cursor-pointer border-2 border-green-400"
            >
              <div className="flex items-center gap-1.5">
                <Phone className="w-4 h-4" />
                <span className="text-sm font-extrabold">WhatsApp Direto</span>
              </div>
              <span className="text-xs font-extrabold mt-0.5">Pedir pelo WhatsApp</span>
              <span className="text-[10px] text-green-100 font-semibold">Atendimento personalizado</span>
            </a>

            {/* Interactive Digital Menu Button */}
            <button
              onClick={onScrollToMenu}
              className="bg-amber-400 hover:bg-amber-500 text-orange-950 font-black p-4 rounded-2xl border-2 border-orange-500 shadow-[4px_4px_0px_0px_#ea580c] transition-all active:translate-y-1 active:shadow-none flex flex-col items-center justify-center gap-1 text-center cursor-pointer"
            >
              <div className="flex items-center gap-1.5">
                <Utensils className="w-4 h-4 text-orange-900" />
                <span className="text-sm font-black">Cardápio Digital</span>
              </div>
              <span className="text-xs font-black mt-0.5">Ver Todos os Pratos</span>
              <span className="text-[10px] text-orange-900 font-bold">Preços & Fotos</span>
            </button>
          </div>
        </div>

        {/* Address and info footer */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-slate-300 font-bold text-xs">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
            <span>{RESTAURANT_INFO.address}</span>
          </div>
          <span className="hidden sm:inline-block text-amber-400">•</span>
          <span>Horário: 08h às 16h (Todos os dias)</span>
        </div>

      </div>
    </section>
  );
};

