import React, { useState } from 'react';
import { X, Calendar, Clock, Users, Umbrella, Send, CheckCircle2 } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('11:30');
  const [peopleCount, setPeopleCount] = useState(4);
  const [locationPref, setLocationPref] = useState<'salao' | 'varanda'>('salao');
  const [specialRequests, setSpecialRequests] = useState('');

  if (!isOpen) return null;

  const handleSendReservation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    let text = `*🍽️ SOLICITAÇÃO DE RESERVA DE MESA - FOOD TIME*\n`;
    text += `------------------------------------\n`;
    text += `👤 *Nome:* ${name.trim()}\n`;
    if (phone.trim()) text += `📞 *Telefone:* ${phone.trim()}\n`;
    if (date) text += `📅 *Data:* ${date}\n`;
    text += `⏰ *Horário Previsto:* ${time}\n`;
    text += `👥 *Quantidade de Pessoas:* ${peopleCount} pessoas\n`;
    text += `📍 *Ambiente Preferido:* ${locationPref === 'salao' ? 'Salão Principal' : 'Varanda / Área Externa'}\n`;

    if (specialRequests.trim()) {
      text += `📝 *Observações:* ${specialRequests.trim()}\n`;
    }

    text += `------------------------------------\n`;
    text += `_Reserva enviada via site Food Time Praia do Francês_`;

    const url = `https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-lg bg-amber-50 rounded-[2.5rem] border-4 border-amber-400 shadow-2xl p-6 sm:p-8 z-10 space-y-6 max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b-2 border-amber-200 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-400 text-orange-950 flex items-center justify-center font-black text-xl shadow-xs border-2 border-orange-400">
              <Umbrella className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-black text-slate-800 uppercase leading-none">
                Reservar Mesa
              </h3>
              <p className="text-xs text-orange-600 font-bold mt-1">
                Garante sua mesa e atendimento no restaurante
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-amber-100 hover:bg-amber-200 text-slate-700 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSendReservation} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-xs font-black uppercase text-slate-700 mb-1">
              Seu Nome Completo *
            </label>
            <input
              type="text"
              required
              placeholder="Ex: Maria Santos"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl border-2 border-amber-200 focus:border-orange-500 focus:outline-none text-xs sm:text-sm font-bold bg-white"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-xs font-black uppercase text-slate-700 mb-1">
              WhatsApp de Contato
            </label>
            <input
              type="tel"
              placeholder="Ex: (82) 99999-8888"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl border-2 border-amber-200 focus:border-orange-500 focus:outline-none text-xs sm:text-sm font-bold bg-white"
            />
          </div>

          {/* Date & Time Grid */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-black uppercase text-slate-700 mb-1">
                Data Prevista
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-3 py-2.5 rounded-2xl border-2 border-amber-200 focus:border-orange-500 focus:outline-none text-xs font-bold bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-black uppercase text-slate-700 mb-1">
                Horário (08h às 16h)
              </label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full px-3 py-2.5 rounded-2xl border-2 border-amber-200 focus:border-orange-500 focus:outline-none text-xs font-bold bg-white"
              />
            </div>
          </div>

          {/* People Count & Location */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-black uppercase text-slate-700 mb-1">
                Pessoas
              </label>
              <select
                value={peopleCount}
                onChange={(e) => setPeopleCount(Number(e.target.value))}
                className="w-full px-3 py-2.5 rounded-2xl border-2 border-amber-200 focus:border-orange-500 focus:outline-none text-xs font-bold bg-white"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 15, 20].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'Pessoa' : 'Pessoas'}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-black uppercase text-slate-700 mb-1">
                Ambiente Preferido
              </label>
              <select
                value={locationPref}
                onChange={(e) => setLocationPref(e.target.value as any)}
                className="w-full px-3 py-2.5 rounded-2xl border-2 border-amber-200 focus:border-orange-500 focus:outline-none text-xs font-bold bg-white"
              >
                <option value="salao">Salão Principal</option>
                <option value="varanda">Varanda / Área Externa</option>
              </select>
            </div>
          </div>

          {/* Special Requests */}
          <div>
            <label className="block text-xs font-black uppercase text-slate-700 mb-1">
              Pedidos Especiais / Aniversário
            </label>
            <textarea
              rows={2}
              placeholder="Ex: Mesa para comemoração em família..."
              value={specialRequests}
              onChange={(e) => setSpecialRequests(e.target.value)}
              className="w-full px-3 py-2.5 rounded-2xl border-2 border-amber-200 focus:border-orange-500 focus:outline-none text-xs font-medium resize-none bg-white"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-black py-4 px-4 rounded-2xl shadow-[4px_4px_0px_0px_#c2410c] transition-all active:translate-y-1 active:shadow-none flex items-center justify-center gap-2 text-sm uppercase tracking-wider cursor-pointer"
          >
            <Send className="w-5 h-5" />
            <span>Confirmar Reserva no WhatsApp</span>
          </button>
        </form>

      </div>
    </div>
  );
};
