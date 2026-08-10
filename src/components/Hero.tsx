import React from 'react';
import { Utensils, Phone, Clock, MapPin, Sparkles, Award } from 'lucide-react';

interface HeroProps {
  onScrollToMenu: () => void;
  onOpenReservation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToMenu, onOpenReservation }) => {
  return (
    <section className="relative bg-gradient-to-br from-orange-400 via-amber-400 to-amber-300 text-slate-800 overflow-hidden py-10 sm:py-16 px-4 sm:px-8 lg:px-12 border-b-8 border-orange-500">
      {/* Decorative Beach Shapes */}
      <div className="absolute -right-20 -top-20 w-80 h-80 sm:w-[500px] sm:h-[500px] bg-white/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-orange-300/30 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* Left Column: Brand & Copy */}
        <div className="lg:col-span-7 space-y-5 text-left">
          
          <div className="inline-flex items-center gap-2 bg-white text-orange-600 font-black px-4 py-1.5 rounded-full uppercase text-xs sm:text-sm tracking-wider shadow-sm border border-orange-200">
            <Sparkles className="w-4 h-4 text-amber-500 fill-amber-400 animate-spin" style={{ animationDuration: '6s' }} />
            <span>Praia do Francês • Marechal Deodoro - AL</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight drop-shadow-md tracking-tight">
            Sua melhor opção à beira-mar!
          </h2>

          <p className="text-orange-950 text-base sm:text-xl font-medium max-w-2xl leading-relaxed opacity-95">
            Sabores inesquecíveis com o pé na areia. Almoços executivos fartos, frutos do mar frescos e cervejas estupidamente geladas na beira da praia.
          </p>

          {/* Highlights Grid */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            {/* Price Badge */}
            <div className="bg-white p-3.5 sm:p-4 rounded-2xl shadow-xl border-2 border-orange-200 flex flex-col items-center justify-center min-w-[150px] transform hover:scale-105 transition-transform">
              <span className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider">Almoço a partir de</span>
              <span className="text-2xl sm:text-3xl font-black text-orange-600 leading-none mt-1">R$ 19,99</span>
            </div>

            {/* Operating info & Address */}
            <div className="space-y-1.5 bg-white/40 backdrop-blur-sm p-3.5 rounded-2xl border border-white/50 text-xs sm:text-sm text-slate-900 font-bold">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-orange-700 shrink-0" />
                <span>Segunda a Domingo: <strong className="text-orange-950 font-black">08h às 16h</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-orange-700 shrink-0" />
                <span>Av. dos Arrecifes, 06 - Praia do Francês</span>
              </div>
              <div className="flex items-center gap-2 text-teal-900 font-extrabold">
                <Award className="w-4 h-4 text-teal-700 shrink-0" />
                <span>Atendimento de praia completo na areia</span>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-3 flex flex-wrap items-center gap-3 sm:gap-4">
            <button
              onClick={onScrollToMenu}
              className="bg-orange-600 hover:bg-orange-700 text-white font-black py-3.5 px-6 sm:px-8 rounded-2xl shadow-[4px_4px_0px_0px_#9a3412] transition-all active:translate-y-1 active:shadow-none flex items-center gap-2.5 text-sm sm:text-base cursor-pointer"
            >
              <Utensils className="w-5 h-5" />
              Ver Cardápio Completo
            </button>

            <button
              onClick={onOpenReservation}
              className="bg-teal-500 hover:bg-teal-600 text-white font-black py-3.5 px-6 rounded-2xl shadow-[4px_4px_0px_0px_#0d9488] transition-all active:translate-y-1 active:shadow-none text-sm sm:text-base cursor-pointer"
            >
              Reservar Mesa Pé na Areia
            </button>

            <a
              href="https://wa.me/5582993118752?text=Ol%C3%A1!%20Estou%20na%20Praia%20do%20Franc%C3%AAs%20e%20gostaria%20de%20fazer%20um%20pedido%20no%20Food%20Time!"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-black py-3.5 px-5 rounded-2xl shadow-[4px_4px_0px_0px_#16a34a] transition-all active:translate-y-1 active:shadow-none flex items-center gap-2 text-sm sm:text-base"
            >
              <Phone className="w-4 h-4" />
              WhatsApp
            </a>
          </div>

        </div>

        {/* Right Column: Featured Seafood / Beach Dish Card */}
        <div className="lg:col-span-5 flex justify-center relative mt-6 lg:mt-0">
          <div className="relative w-full max-w-md bg-white rounded-3xl p-3 sm:p-4 shadow-2xl rotate-2 sm:rotate-3 border-8 border-white group hover:rotate-0 transition-transform duration-500">
            <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80"
                alt="Moqueca de Camarão e Peixe no Food Time"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              {/* Badge Over Photo */}
              <div className="absolute top-3 left-3 bg-orange-500 text-white font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                ⭐ O Queridinho da Praia
              </div>

              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-xs font-bold text-amber-300 uppercase tracking-widest block">Frutos do Mar Frescos</span>
                <h3 className="text-xl sm:text-2xl font-black leading-tight">Moqueca Alagoana Pé na Areia</h3>
                <p className="text-xs text-slate-200 mt-1 line-clamp-2">
                  Servida com pirão aveludado, arroz soltinho e dente de alho. O sabor autêntico de Alagoas!
                </p>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between px-2 text-xs font-bold text-slate-600">
              <span className="flex items-center gap-1 text-orange-600 font-extrabold">
                <Award className="w-4 h-4" />
                Porções Generosas
              </span>
              <span className="bg-amber-100 text-amber-900 font-black px-2.5 py-1 rounded-lg">
                Atendimento Rápido
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
