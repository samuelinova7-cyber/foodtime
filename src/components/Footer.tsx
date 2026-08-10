import React from 'react';
import { MapPin, Phone, Instagram, Clock, Heart } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

interface FooterProps {
  onScrollToMenu: () => void;
  onScrollToLocation: () => void;
  onOpenReservation: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onScrollToMenu,
  onScrollToLocation,
  onOpenReservation,
}) => {
  return (
    <footer className="bg-slate-900 text-white border-t-4 border-amber-400 py-10 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Top Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-3">
              <img
                src={RESTAURANT_INFO.logoUrl}
                alt="Food Time Logo"
                className="w-12 h-12 sm:w-14 sm:h-14 object-contain animate-pulseGlow shrink-0"
              />
              <h3 className="text-2xl font-black tracking-tighter text-orange-500 uppercase italic">
                Food Time
              </h3>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-medium">
              Sua melhor opção na Praia do Francês. Sabores inesquecíveis com o pé na areia e o melhor tempero alagoano.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2 text-xs">
            <h4 className="font-extrabold uppercase text-amber-400 tracking-wider">Navegação Rápida</h4>
            <ul className="space-y-1.5 font-bold text-slate-300">
              <li>
                <button onClick={onScrollToMenu} className="hover:text-orange-400 transition-colors cursor-pointer">
                  Cardápio Digital
                </button>
              </li>
              <li>
                <button onClick={onOpenReservation} className="hover:text-orange-400 transition-colors cursor-pointer">
                  Reserva de Mesas na Praia
                </button>
              </li>
              <li>
                <button onClick={onScrollToLocation} className="hover:text-orange-400 transition-colors cursor-pointer">
                  Localização & GPS
                </button>
              </li>
            </ul>
          </div>

          {/* Hours & Location */}
          <div className="space-y-2 text-xs">
            <h4 className="font-extrabold uppercase text-amber-400 tracking-wider">Horário & Endereço</h4>
            <div className="space-y-1.5 font-medium text-slate-300">
              <p className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-teal-400" />
                <span>Segunda a Domingo: 08:00 às 16:00</span>
              </p>
              <p className="flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-orange-400 shrink-0 mt-0.5" />
                <span>{RESTAURANT_INFO.address}</span>
              </p>
            </div>
          </div>

          {/* Socials & WhatsApp */}
          <div className="space-y-2 text-xs">
            <h4 className="font-extrabold uppercase text-amber-400 tracking-wider">Redes & WhatsApp</h4>
            <div className="space-y-2 font-bold">
              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>{RESTAURANT_INFO.whatsappFormatted}</span>
              </a>
              <a
                href="https://instagram.com/foodttime"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>{RESTAURANT_INFO.instagram}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-semibold gap-4">
          <p>© {new Date().getFullYear()} Food Time - Praia do Francês, Marechal Deodoro - AL. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1 text-slate-400">
            <span>Feito com</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            <span>para moradores e turistas na Praia do Francês</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
