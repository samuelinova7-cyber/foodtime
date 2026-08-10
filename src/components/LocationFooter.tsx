import React from 'react';
import { MapPin, Phone, Instagram, Clock, Navigation, ExternalLink, Sun, Heart, Sparkles } from 'lucide-react';

export const LocationFooter: React.FC = () => {
  // Google Maps & Waze URLs for Av. dos Arrecifes, 06 - Praia do Francês, Marechal Deodoro - AL
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Food Time Av. dos Arrecifes 06 Praia do Francês Marechal Deodoro AL'
  )}`;

  const wazeUrl = `https://waze.com/ul?q=${encodeURIComponent(
    'Av. dos Arrecifes 06 Praia do Francês Marechal Deodoro AL'
  )}`;

  return (
    <footer id="localizacao" className="bg-slate-900 text-slate-100 pt-12 sm:pt-16 pb-8 border-t-8 border-amber-400 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Location + Info + Interactive Map Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-slate-800">
          
          {/* Left Column: Brand & Info */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="flex items-center gap-3">
              <div className="bg-orange-500 text-white w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xl italic shadow-md">
                FT
              </div>
              <div>
                <h3 className="text-3xl font-black tracking-tighter text-orange-500 uppercase italic">
                  Food Time
                </h3>
                <p className="text-xs text-amber-300 font-bold tracking-wider uppercase">
                  Praia do Francês • Marechal Deodoro - AL
                </p>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed max-w-lg">
              Sabores inesquecíveis pé na areia. Venha saborear os melhores pratos executivos, frutos do mar frescos e cervejas trincando de geladas com a brisa do mar da Praia do Francês.
            </p>

            {/* Address Card */}
            <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700 space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white text-sm block">Endereço Completo:</strong>
                  <span className="text-xs text-slate-300">
                    Av. dos Arrecifes, 06 - Praia do Francês, Marechal Deodoro - AL, 57160-000
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2 border-t border-slate-700/60">
                <Clock className="w-5 h-5 text-teal-400 shrink-0" />
                <div>
                  <strong className="text-white text-sm block">Horário de Funcionamento:</strong>
                  <span className="text-xs text-slate-300">
                    Segunda a Domingo, das <strong className="text-amber-300">08:00 às 16:00</strong>
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2 border-t border-slate-700/60">
                <Phone className="w-5 h-5 text-green-400 shrink-0" />
                <div>
                  <strong className="text-white text-sm block">WhatsApp & Pedidos:</strong>
                  <a 
                    href="https://wa.me/5582993118752" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs text-green-400 hover:underline font-extrabold"
                  >
                    (82) 99311-8752
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Navigation Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sky-500 hover:bg-sky-600 text-white font-black text-xs sm:text-sm py-3 px-5 rounded-2xl shadow-[3px_3px_0px_0px_#0284c7] transition-all flex items-center gap-2"
              >
                <Navigation className="w-4 h-4" />
                Abrir no Google Maps
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>

              <a
                href={wazeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-500 hover:bg-teal-600 text-white font-black text-xs sm:text-sm py-3 px-5 rounded-2xl shadow-[3px_3px_0px_0px_#0d9488] transition-all flex items-center gap-2"
              >
                <Navigation className="w-4 h-4" />
                Abrir no Waze
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>

              <a
                href="https://instagram.com/foodttime"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-600 hover:bg-pink-700 text-white font-black text-xs sm:text-sm py-3 px-5 rounded-2xl shadow-[3px_3px_0px_0px_#be185d] transition-all flex items-center gap-2"
              >
                <Instagram className="w-4 h-4" />
                @foodttime
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Map Preview Box */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="bg-slate-800 rounded-3xl p-4 sm:p-5 border-4 border-slate-700 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between mb-3 px-2">
                <span className="text-xs font-black uppercase text-amber-400 tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Localização Exata na Praia
                </span>
                <span className="text-[11px] text-slate-400 bg-slate-900 px-2.5 py-1 rounded-full border border-slate-700">
                  Marechal Deodoro - AL
                </span>
              </div>

              {/* Map Canvas Visual Mockup */}
              <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden bg-slate-900 border-2 border-slate-700">
                <iframe
                  title="Mapa Food Time Praia do Francês"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.185312389104!2d-35.84365!3d-9.76954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7014631241a54a7%3A0x8ff2fb2167d58e39!2sPraia%20do%20Franc%C3%AAs!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr"
                  className="w-full h-full border-0 opacity-90"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Floating Map Marker */}
                <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md p-3 rounded-2xl border border-amber-400/40 text-white shadow-xl max-w-[220px]">
                  <div className="flex items-center gap-2">
                    <div className="bg-orange-500 text-white p-1.5 rounded-lg">
                      <Sun className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-black text-xs text-orange-400">Food Time</h4>
                      <p className="text-[10px] text-slate-300">Av. dos Arrecifes, 06</p>
                    </div>
                  </div>
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 text-[10px] font-bold text-sky-400 hover:underline block flex items-center gap-1"
                  >
                    Navegar com GPS →
                  </a>
                </div>
              </div>

              <div className="mt-3 text-center text-xs text-slate-400 font-medium">
                📍 Ponto de referência: Próximo à orla principal da Praia do Francês.
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 font-bold gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span>© 2026 Food Time. Todos os direitos reservados.</span>
          </div>

          <div className="flex items-center gap-4 text-slate-300">
            <span>Aberto Seg a Dom: 08h — 16h</span>
            <span className="w-1 h-1 bg-slate-600 rounded-full" />
            <a href="https://instagram.com/foodttime" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">
              @foodttime
            </a>
            <span className="w-1 h-1 bg-slate-600 rounded-full" />
            <span className="text-teal-400">(82) 99311-8752</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
