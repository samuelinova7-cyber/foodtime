import React from 'react';
import { MapPin, Navigation, Phone, Instagram, Clock, Compass, Share2, MessageCircle } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

export const LocationContactSection: React.FC = () => {
  return (
    <section id="localizacao-section" className="py-12 bg-white border-t-4 border-amber-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Title */}
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="bg-orange-500 text-white font-black text-xs uppercase px-3.5 py-1 rounded-full tracking-wider inline-block">
            Localização & Acesso
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-800">
            Como Chegar ao Food Time
          </h2>
          <p className="text-sm text-slate-600 font-medium">
            Estamos localizados no coração da Praia do Francês em Marechal Deodoro - AL, de frente para as águas cristalinas.
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Address & Direct Contact Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-amber-50 to-orange-50 p-6 sm:p-8 rounded-[2.5rem] border-4 border-amber-300 shadow-md flex flex-col justify-between space-y-6">
            
            <div className="space-y-6">
              {/* Address Header */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-orange-500 text-white flex items-center justify-center font-black text-xl shrink-0 shadow-sm border-2 border-orange-600">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-black uppercase text-orange-600 tracking-wider">Endereço Completo</span>
                  <h3 className="text-xl font-black text-slate-800 leading-snug">
                    {RESTAURANT_INFO.address}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Praia do Francês • Marechal Deodoro - Alagoas
                  </p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="bg-white p-4 rounded-2xl border-2 border-amber-200 flex items-center gap-3">
                <Clock className="w-5 h-5 text-teal-600 shrink-0" />
                <div>
                  <span className="block text-[11px] font-extrabold text-slate-400 uppercase">Horário de Atendimento</span>
                  <span className="block text-sm font-black text-slate-800">{RESTAURANT_INFO.hours}</span>
                </div>
              </div>

              {/* Socials & WhatsApp */}
              <div className="space-y-3">
                <span className="block text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                  Canais de Atendimento Direto
                </span>

                <a
                  href={RESTAURANT_INFO.ifoodUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-red-600 hover:bg-red-700 text-white font-black p-3.5 rounded-2xl shadow-[3px_3px_0px_0px_#991b1b] transition-all active:translate-y-0.5 active:shadow-none text-sm group"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="bg-white text-red-600 font-black text-xs px-2 py-0.5 rounded">iFood</span>
                    <span>Loja Oficial Food Time</span>
                  </div>
                  <span className="text-xs bg-red-800/80 text-white px-2 py-0.5 rounded-full font-bold">
                    Pedir no App ➔
                  </span>
                </a>

                <a
                  href={`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${encodeURIComponent('Olá! Encontrei o Food Time pelo site e gostaria de mais informações.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-green-500 hover:bg-green-600 text-white font-black p-3.5 rounded-2xl shadow-[3px_3px_0px_0px_#16a34a] transition-all active:translate-y-0.5 active:shadow-none text-sm group"
                >
                  <div className="flex items-center gap-2.5">
                    <MessageCircle className="w-5 h-5 fill-white text-green-500" />
                    <span>WhatsApp: {RESTAURANT_INFO.whatsappFormatted}</span>
                  </div>
                  <span className="text-xs bg-green-700/60 text-white px-2 py-0.5 rounded-full font-bold">
                    Mensagem Direta ➔
                  </span>
                </a>

                <a
                  href="https://instagram.com/foodttime"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white font-black p-3.5 rounded-2xl shadow-[3px_3px_0px_0px_#9333ea] transition-all active:translate-y-0.5 active:shadow-none text-sm"
                >
                  <div className="flex items-center gap-2.5">
                    <Instagram className="w-5 h-5" />
                    <span>Instagram: {RESTAURANT_INFO.instagram}</span>
                  </div>
                  <span className="text-xs bg-black/20 text-white px-2 py-0.5 rounded-full font-bold">
                    Seguir ➔
                  </span>
                </a>
              </div>
            </div>

            {/* Navigation Buttons for GPS */}
            <div className="space-y-2 pt-4 border-t-2 border-amber-200">
              <span className="block text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                Abrir Rota no seu GPS:
              </span>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-teal-50 text-slate-800 font-bold py-2.5 px-3 rounded-xl border-2 border-amber-300 shadow-xs transition-colors text-xs flex items-center justify-center gap-1.5"
                >
                  <Navigation className="w-4 h-4 text-teal-600" />
                  <span>Google Maps</span>
                </a>

                <a
                  href={RESTAURANT_INFO.wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-sky-50 text-slate-800 font-bold py-2.5 px-3 rounded-xl border-2 border-amber-300 shadow-xs transition-colors text-xs flex items-center justify-center gap-1.5"
                >
                  <Compass className="w-4 h-4 text-sky-600" />
                  <span>Waze</span>
                </a>
              </div>
            </div>

          </div>

          {/* Interactive Map Display */}
          <div className="lg:col-span-7 bg-amber-100 rounded-[2.5rem] border-4 border-amber-300 p-3 shadow-md min-h-[350px] relative overflow-hidden flex flex-col justify-between">
            {/* Embedded Google Map iframe */}
            <iframe
              title="Mapa de Localização Food Time Praia do Francês"
              src="https://maps.google.com/maps?q=Av.+dos+Arrecifes,+06+-+Praia+do+Franc%C3%AAs,+Marechal+Deodoro+-+AL&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[360px] rounded-[2rem] border-2 border-white shadow-inner"
              loading="lazy"
              allowFullScreen
            />

            {/* Map Overlay Badge */}
            <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-lg border-2 border-orange-400 flex items-center gap-3 max-w-xs">
              <div className="w-9 h-9 rounded-xl bg-orange-500 text-white font-black flex items-center justify-center italic text-sm">
                FT
              </div>
              <div>
                <span className="block text-xs font-black text-slate-800">Food Time Pé na Areia</span>
                <span className="block text-[10px] font-bold text-orange-600">Av. dos Arrecifes, 06</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
