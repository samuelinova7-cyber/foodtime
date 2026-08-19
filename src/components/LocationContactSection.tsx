import React from 'react';
import { MapPin, Navigation, Phone, Instagram, Clock, Compass, ExternalLink, MessageCircle, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

export const LocationContactSection: React.FC = () => {
  const locationPhotos = [
    {
      url: 'https://res.cloudinary.com/xhuikt2k/image/upload/v1786986228/WhatsApp_Image_2026-08-17_at_2.02.04_PM_1.jpg',
      title: 'Fachada & Ponto de Referência',
      subtitle: 'Entrada principal na Av. dos Arrecifes',
      badge: 'Fácil Acesso',
    },
    {
      url: 'https://res.cloudinary.com/xhuikt2k/image/upload/v1786986228/WhatsApp_Image_2026-08-17_at_2.02.04_PM.jpg',
      title: 'Estrutura & Salão do Restaurante',
      subtitle: 'Ambiente aconchegante na Praia do Francês',
      badge: 'Ambiente Aconchegante',
    },
  ];

  return (
    <section id="localizacao-section" className="py-14 bg-gradient-to-b from-amber-50/50 via-white to-amber-50/70 border-t-4 border-amber-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Title */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="bg-gradient-to-r from-orange-500 to-amber-500 text-white font-black text-xs uppercase px-4 py-1.5 rounded-full tracking-wider inline-flex items-center gap-1.5 shadow-sm">
            <MapPin className="w-3.5 h-3.5" />
            <span>Localização & Ponto de Referência</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Como Chegar ao Food Time
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
            Estamos localizados no coração da <strong className="text-orange-600">Praia do Francês</strong> em Marechal Deodoro - AL. Veja as fotos reais da nossa fachada e trace sua rota pelo GPS!
          </p>
        </div>

        {/* Visual Photos Row - Visual Landmarks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {locationPhotos.map((photo, index) => (
            <div
              key={index}
              className="group relative rounded-3xl overflow-hidden bg-slate-950 border-4 border-amber-300 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Photo */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-slate-900">
                <img
                  src={photo.url}
                  alt={`Foto Food Time - ${photo.title}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Badge Overlay */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-orange-500/90 backdrop-blur-md text-white font-black text-xs px-3.5 py-1.5 rounded-full shadow-lg border border-orange-300 inline-flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-amber-200" />
                    <span>{photo.badge}</span>
                  </span>
                </div>

                {/* Bottom Gradient and Caption */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-5 text-white flex flex-col justify-end">
                  <h3 className="font-black text-base sm:text-lg leading-tight drop-shadow-sm">
                    {photo.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-amber-200 font-medium mt-0.5">
                    {photo.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Grid layout: Details Card + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Address & Direct Contact Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-amber-50 to-orange-50 p-6 sm:p-8 rounded-[2.5rem] border-4 border-amber-300 shadow-lg flex flex-col justify-between space-y-6">
            
            <div className="space-y-6">
              {/* Address Header */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-orange-500 text-white flex items-center justify-center font-black text-xl shrink-0 shadow-md border-2 border-orange-600">
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
              <div className="bg-white p-4 rounded-2xl border-2 border-amber-200 flex items-center gap-3 shadow-xs">
                <Clock className="w-5 h-5 text-teal-600 shrink-0" />
                <div>
                  <span className="block text-[11px] font-extrabold text-slate-400 uppercase">Horário de Atendimento</span>
                  <span className="block text-sm font-black text-slate-800">{RESTAURANT_INFO.hours}</span>
                </div>
              </div>

              {/* Socials & Direct Channels */}
              <div className="space-y-3">
                <span className="block text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                  Canais de Atendimento Direto
                </span>

                <a
                  href={RESTAURANT_INFO.ifoodUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-red-600 hover:bg-red-700 text-white font-black p-3.5 rounded-2xl shadow-[3px_3px_0px_0px_#991b1b] transition-all active:translate-y-0.5 active:shadow-none text-sm group border border-red-500"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="bg-white text-red-600 font-black text-xs px-2 py-0.5 rounded">iFood</span>
                    <span>Loja Oficial Food Time</span>
                  </div>
                  <span className="text-xs bg-red-800/80 text-white px-2.5 py-0.5 rounded-full font-bold flex items-center gap-1">
                    <span>Pedir</span>
                    <ExternalLink className="w-3 h-3" />
                  </span>
                </a>

                <a
                  href={`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${encodeURIComponent('Olá! Encontrei o Food Time pelo site e gostaria de saber como chegar.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-green-500 hover:bg-green-600 text-white font-black p-3.5 rounded-2xl shadow-[3px_3px_0px_0px_#16a34a] transition-all active:translate-y-0.5 active:shadow-none text-sm group border border-green-400"
                >
                  <div className="flex items-center gap-2.5">
                    <MessageCircle className="w-5 h-5 fill-white text-green-500" />
                    <span>WhatsApp: {RESTAURANT_INFO.whatsappFormatted}</span>
                  </div>
                  <span className="text-xs bg-green-700/70 text-white px-2.5 py-0.5 rounded-full font-bold">
                    Mensagem ➔
                  </span>
                </a>

                <a
                  href={RESTAURANT_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white font-black p-3.5 rounded-2xl shadow-[3px_3px_0px_0px_#9333ea] transition-all active:translate-y-0.5 active:shadow-none text-sm border border-pink-400"
                >
                  <div className="flex items-center gap-2.5">
                    <Instagram className="w-5 h-5" />
                    <span>Instagram: {RESTAURANT_INFO.instagram}</span>
                  </div>
                  <span className="text-xs bg-black/30 text-white px-2.5 py-0.5 rounded-full font-bold">
                    Seguir ➔
                  </span>
                </a>
              </div>
            </div>

            {/* Navigation Buttons for GPS */}
            <div className="space-y-2 pt-4 border-t-2 border-amber-200">
              <span className="block text-xs font-extrabold text-slate-600 uppercase tracking-wider">
                Traçar Rota no seu GPS:
              </span>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-teal-50 text-slate-800 font-extrabold py-3 px-3 rounded-2xl border-2 border-amber-300 shadow-sm transition-all active:scale-95 text-xs flex items-center justify-center gap-2"
                >
                  <Navigation className="w-4 h-4 text-teal-600" />
                  <span>Google Maps</span>
                </a>

                <a
                  href={RESTAURANT_INFO.wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-sky-50 text-slate-800 font-extrabold py-3 px-3 rounded-2xl border-2 border-amber-300 shadow-sm transition-all active:scale-95 text-xs flex items-center justify-center gap-2"
                >
                  <Compass className="w-4 h-4 text-sky-600" />
                  <span>Waze GPS</span>
                </a>
              </div>
            </div>

          </div>

          {/* Interactive Map Display */}
          <div className="lg:col-span-7 bg-amber-100 rounded-[2.5rem] border-4 border-amber-300 p-3 shadow-lg min-h-[400px] relative overflow-hidden flex flex-col justify-between">
            {/* Embedded Google Map iframe */}
            <iframe
              title="Mapa de Localização Food Time Praia do Francês"
              src="https://maps.google.com/maps?q=Av.+dos+Arrecifes,+06+-+Praia+do+Franc%C3%AAs,+Marechal+Deodoro+-+AL&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[380px] rounded-[2rem] border-2 border-white shadow-inner"
              loading="lazy"
              allowFullScreen
            />

            {/* Map Overlay Badge with Logo */}
            <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-xl border-2 border-orange-400 flex items-center gap-3 max-w-xs">
              <img
                src={RESTAURANT_INFO.logoUrl}
                alt="Food Time Logo"
                className="w-10 h-10 object-contain shrink-0"
              />
              <div>
                <span className="block text-xs font-black text-slate-800">Food Time Praia do Francês</span>
                <span className="block text-[10px] font-bold text-orange-600">Av. dos Arrecifes, 06 • Francês</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
