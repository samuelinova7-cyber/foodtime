import React from 'react';
import { Umbrella, CreditCard, Clock, Bike, ExternalLink, ShieldCheck, HeartHandshake, Star } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

interface BeachServicesSectionProps {
  onOpenReservation: () => void;
}

export const BeachServicesSection: React.FC<BeachServicesSectionProps> = ({
  onOpenReservation,
}) => {
  return (
    <section className="py-12 bg-gradient-to-b from-amber-50 to-orange-100/60 border-t-4 border-amber-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Title */}
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="bg-teal-500 text-white font-black text-xs uppercase px-3.5 py-1 rounded-full tracking-wider inline-block">
            Restaurante & iFood
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-800">
            Canais de Atendimento & Diferenciais
          </h2>
          <p className="text-sm text-slate-600 font-medium">
            Desfrute das melhores refeições da Praia do Francês na sua pousada via iFood ou presencialmente em nosso restaurante.
          </p>
        </div>

        {/* 4 Cards Grid (iFood Delivery, Mesa no Restaurante, Horários, Pagamento) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: iFood Delivery */}
          <div className="bg-white p-6 rounded-[2rem] border-4 border-red-500 shadow-md hover:border-red-600 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-red-600 text-white flex items-center justify-center font-black text-2xl shadow-sm border-2 border-red-700">
                <Bike className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs font-black uppercase text-red-600 tracking-wider flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-red-600" />
                  iFood 4.9 ★ (100+ avaliações)
                </span>
                <h3 className="text-xl font-black text-slate-800">Entrega em Pousadas</h3>
                <p className="text-xs text-slate-600 font-medium mt-1">
                  Marmitas executivas bem servidas, peixes e refeições completas embaladas hermeticamente para você almoçar sem sair do quarto.
                </p>
              </div>
              <div className="bg-red-50 p-3 rounded-xl border border-red-200">
                <span className="block text-xs font-bold text-slate-600">Tempo estimado de entrega:</span>
                <span className="text-xl font-black text-red-600">25 a 40 min</span>
                <span className="block text-[10px] text-red-700 font-semibold">Entrega em toda a Praia do Francês</span>
              </div>
            </div>

            <a
              href={RESTAURANT_INFO.ifoodUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white font-black py-3 px-4 rounded-xl shadow-[3px_3px_0px_0px_#991b1b] transition-all active:translate-y-0.5 active:shadow-none text-xs uppercase tracking-wider cursor-pointer text-center flex items-center justify-center gap-1.5"
            >
              <span>Pedir no iFood</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Card 2: Mesas & Salão */}
          <div className="bg-white p-6 rounded-[2rem] border-4 border-amber-300 shadow-md hover:border-orange-400 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-400 text-orange-950 flex items-center justify-center font-black text-2xl shadow-sm border-2 border-orange-400">
                <Umbrella className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs font-black uppercase text-orange-600 tracking-wider">Consumo Local</span>
                <h3 className="text-xl font-black text-slate-800">Atendimento no Restaurante</h3>
                <p className="text-xs text-slate-600 font-medium mt-1">
                  Mesas confortáveis e atendimento atencioso para você e sua família almoçarem com tranquilidade na Praia do Francês.
                </p>
              </div>
              <div className="bg-amber-50 p-3 rounded-xl border border-amber-200">
                <span className="block text-xs font-bold text-slate-500">Conforto & Sabor:</span>
                <span className="text-lg font-black text-orange-600">Ambiente Acolhedor</span>
                <span className="block text-[10px] text-teal-700 font-semibold">Atendimento no salão e delivery</span>
              </div>
            </div>

            <button
              onClick={onOpenReservation}
              className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white font-black py-3 px-4 rounded-xl shadow-[3px_3px_0px_0px_#c2410c] transition-all active:translate-y-0.5 active:shadow-none text-xs uppercase tracking-wider cursor-pointer text-center"
            >
              Reservar Mesa
            </button>
          </div>

          {/* Card 3: Horários & Praticidade */}
          <div className="bg-white p-6 rounded-[2rem] border-4 border-teal-300 shadow-md hover:border-teal-400 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-teal-400 text-teal-950 flex items-center justify-center font-black text-2xl shadow-sm border-2 border-teal-500">
                <Clock className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs font-black uppercase text-teal-600 tracking-wider">Atendimento Contínuo</span>
                <h3 className="text-xl font-black text-slate-800">Aberto Todos os Dias</h3>
                <p className="text-xs text-slate-600 font-medium mt-1">
                  Funcionamos de segunda a domingo, das 08h às 16h. Pratos executivos e petiscos servidos sem interrupção.
                </p>
              </div>
              <div className="bg-teal-50 p-3 rounded-xl border border-teal-200 space-y-1">
                <div className="flex justify-between items-center text-xs font-bold text-slate-700">
                  <span>Segunda a Domingo:</span>
                  <span className="text-teal-800 font-extrabold">08h às 16h</span>
                </div>
                <div className="flex justify-between items-center text-xs font-bold text-slate-700">
                  <span>iFood & Salão:</span>
                  <span className="text-teal-800 font-extrabold">Simultâneo</span>
                </div>
              </div>
            </div>

            <div className="mt-6 p-3 bg-teal-100/60 rounded-xl text-center text-[11px] font-extrabold text-teal-900 border border-teal-200">
              ⚡ Preparo ágil na cozinha e no delivery!
            </div>
          </div>

          {/* Card 4: Formas de Pagamento */}
          <div className="bg-white p-6 rounded-[2rem] border-4 border-sky-300 shadow-md hover:border-sky-400 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-sky-400 text-sky-950 flex items-center justify-center font-black text-2xl shadow-sm border-2 border-sky-500">
                <CreditCard className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs font-black uppercase text-sky-600 tracking-wider">Formas de Pagamento</span>
                <h3 className="text-xl font-black text-slate-800">iFood Pay & Cartões</h3>
                <p className="text-xs text-slate-600 font-medium mt-1">
                  Pagamento no app iFood, Pix ou cartões de débito/crédito na sua mesa ou na entrega.
                </p>
              </div>

              {/* Payment badges */}
              <div className="space-y-1.5">
                <span className="block text-[10px] font-extrabold text-slate-500 uppercase">Aceitos:</span>
                <div className="flex flex-wrap gap-1">
                  {RESTAURANT_INFO.payments.map((p) => (
                    <span
                      key={p}
                      className="bg-sky-50 text-sky-900 border border-sky-200 text-[10px] font-black px-2 py-0.5 rounded"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 p-3 bg-sky-100/60 rounded-xl text-center text-[11px] font-extrabold text-sky-900 border border-sky-200 flex items-center justify-center gap-1">
              <ShieldCheck className="w-4 h-4 text-sky-700" />
              <span>Transparência e Rapidez</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

