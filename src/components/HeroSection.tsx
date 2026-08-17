import React from 'react';
import { Utensils, Phone, Sun, Umbrella, MapPin, Sparkles, CheckCircle2, ExternalLink, Bike, Star } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';
import heroImg from '../assets/images/food_time_hero_1786388031156.jpg';

interface HeroSectionProps {
  onOpenReservation: () => void;
  onScrollToMenu: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenReservation,
  onScrollToMenu,
}) => {
  const heroBgUrl = 'https://res.cloudinary.com/xhuikt2k/image/upload/v1786984977/WhatsApp_Image_2026-08-17_at_1.39.02_PM.jpg';

  return (
    <section className="relative bg-slate-950 text-white overflow-hidden border-b-4 border-amber-400 min-h-[560px] flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all scale-105 duration-1000"
        style={{ backgroundImage: `url('${heroBgUrl}')` }}
      />

      {/* Dark & Vibrant Multi-layer Gradient Overlay for Ultra Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-950/70 z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/40 z-0" />

      {/* Decorative Warm Ambient Glows */}
      <div className="absolute -right-20 -top-20 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute left-1/4 -bottom-20 w-80 h-80 bg-amber-500/15 rounded-full blur-2xl pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Badges Row */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 bg-red-600 text-white font-black px-3.5 py-1.5 rounded-full uppercase text-xs tracking-wider shadow-md border border-red-400">
                <Bike className="w-4 h-4 animate-bounce" />
                <span>iFood Oficial • 4.9 ★</span>
              </span>
              <span className="inline-flex items-center gap-1.5 bg-amber-400 text-orange-950 font-black px-3.5 py-1.5 rounded-full uppercase text-xs tracking-wider shadow-md border border-amber-300">
                <Sun className="w-4 h-4 text-orange-800 fill-orange-800" />
                <span>Praia do Francês - AL</span>
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight drop-shadow-lg">
              Sua melhor opção <span className="text-amber-400 underline decoration-orange-500 decoration-4">no iFood</span> e <span className="text-amber-400 underline decoration-orange-500 decoration-4">Pé na Areia</span>
            </h2>

            {/* Slogan & Description */}
            <p className="text-slate-200 text-base sm:text-xl font-medium mt-4 max-w-2xl leading-relaxed drop-shadow-sm">
              Sabores inesquecíveis entregues no seu hotel/pousada pelo iFood ou servidos quentinhos na sua mesa com pé na areia! Pratos executivos individuais, frutos do mar frescos e petiscos generosos.
            </p>

            {/* Highlights pill row */}
            <div className="flex flex-wrap gap-2 sm:gap-2.5 mt-5 text-xs sm:text-sm font-bold text-white">
              <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/20 shadow-xs">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                iFood: Entrega 25-40 min
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/20 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Almoço a partir de R$ 20,00
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/20 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-teal-300" />
                Atendimento Pé na Areia
              </span>
            </div>

            {/* Main Action Channels */}
            <div className="mt-8 space-y-3 w-full">
              <span className="text-xs font-black uppercase tracking-wider text-amber-300/90 block">
                Escolha como deseja pedir:
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
                  <span className="text-[10px] text-red-100 font-semibold">Entrega Pousadas & Praia</span>
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

                {/* Interactive Digital Menu / Table Reservation */}
                <button
                  onClick={onOpenReservation}
                  className="bg-amber-400 hover:bg-amber-500 text-orange-950 font-black p-4 rounded-2xl border-2 border-orange-500 shadow-[4px_4px_0px_0px_#ea580c] transition-all active:translate-y-1 active:shadow-none flex flex-col items-center justify-center gap-1 text-center cursor-pointer"
                >
                  <div className="flex items-center gap-1.5">
                    <Umbrella className="w-4 h-4 text-orange-900" />
                    <span className="text-sm font-black">Consumo Local</span>
                  </div>
                  <span className="text-xs font-black mt-0.5">Reservar Mesa Praia</span>
                  <span className="text-[10px] text-orange-900 font-bold">Guarda-Sol + Garçom</span>
                </button>
              </div>
            </div>

            {/* Secondary Menu Jump Link */}
            <div className="mt-5 flex flex-wrap items-center justify-between w-full gap-3">
              <button
                onClick={onScrollToMenu}
                className="text-amber-400 hover:text-amber-300 font-black text-xs sm:text-sm underline underline-offset-4 flex items-center gap-1.5 cursor-pointer transition-colors"
              >
                <Utensils className="w-4 h-4" />
                <span>Explorar Cardápio Digital Interativo</span>
              </button>

              <div className="flex items-center gap-1 text-slate-300 font-bold text-xs">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="truncate max-w-[280px]">{RESTAURANT_INFO.address}</span>
              </div>
            </div>
          </div>

          {/* Right Column Beach Photo Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Photo Frame Container with Vibrant theme rotatable card */}
              <div className="relative bg-white/10 backdrop-blur-md p-3 rounded-3xl shadow-2xl rotate-2 sm:rotate-3 border-4 border-white/30 overflow-hidden transform hover:rotate-0 transition-transform duration-300">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-orange-950">
                  <img
                    src={heroImg}
                    alt="Pratos e Frutos do Mar na Praia do Francês - Food Time"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  
                  {/* Floating iFood Badge on photo */}
                  <div className="absolute top-3 left-3 bg-red-600 text-white font-black text-xs px-3 py-1 rounded-full shadow-lg border border-red-400 flex items-center gap-1">
                    <Bike className="w-3.5 h-3.5" />
                    <span>iFood 4.9 ★</span>
                  </div>

                  {/* Floating Pé na Areia Badge on photo */}
                  <div className="absolute top-3 right-3 bg-amber-400 text-orange-950 font-black text-xs px-3 py-1.5 rounded-full shadow-lg border border-orange-500 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Pé na Areia</span>
                  </div>

                  {/* Bottom caption overlay */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 text-white">
                    <p className="font-black text-sm sm:text-base">Moqueca, Peixes & Marmitas Executivas</p>
                    <p className="text-xs text-amber-300">No iFood para viagem ou servidos na praia</p>
                  </div>
                </div>
              </div>

              {/* Beach Atmosphere Badge overlay without rental price */}
              <div 
                onClick={onOpenReservation}
                className="absolute -bottom-4 -left-2 sm:-left-6 bg-white p-3.5 rounded-2xl shadow-2xl border-4 border-amber-400 flex items-center gap-3 cursor-pointer hover:scale-105 transition-transform"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center font-bold text-lg shadow-sm">
                  <Umbrella className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-extrabold uppercase text-slate-400">Consumo Local</span>
                  <span className="block text-sm font-black text-slate-800">Atendimento Pé na Areia</span>
                  <span className="block text-[10px] font-bold text-teal-600">Mesa + Guarda-sol + Garçom na Praia</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

