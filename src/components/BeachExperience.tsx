import React from 'react';
import { Sun, Waves, Utensils, ShieldCheck, Clock, Heart, Umbrella, Coffee } from 'lucide-react';

export const BeachExperience: React.FC = () => {
  const differentials = [
    {
      icon: Umbrella,
      title: 'Pé na Areia de Verdade',
      desc: 'Mesas confortáveis com guarda-sóis com vista livre para as piscinas naturais da Praia do Francês.',
      color: 'bg-amber-100 text-orange-600 border-amber-300',
    },
    {
      icon: Clock,
      title: 'Atendimento Contínuo',
      desc: 'Aberto de Segunda a Domingo, das 08h às 16h. Almoço quente e petiscos a qualquer hora do dia.',
      color: 'bg-teal-100 text-teal-700 border-teal-300',
    },
    {
      icon: Utensils,
      title: 'Porções Fartas & Saborosas',
      desc: 'Pratos feitos e comerciais generosos preparados no capricho para satisfazer toda a família.',
      color: 'bg-sky-100 text-sky-700 border-sky-300',
    },
    {
      icon: Heart,
      title: 'Sabor Autêntico Alagoano',
      desc: 'Sururu de capota, peixe fresco, camarão no alho e óleo e tapioca rendada de carne do sol.',
      color: 'bg-pink-100 text-pink-700 border-pink-300',
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-white border-y-4 border-amber-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs font-black uppercase tracking-widest text-orange-600 bg-amber-100 px-4 py-1.5 rounded-full border border-amber-300 inline-block">
            Sinta a Vibe de Alagoas
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mt-3">
            A Experiência Food Time
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 font-medium">
            Tudo pensado para você relaxar e aproveitar o melhor dia de praia no litoral de Marechal Deodoro.
          </p>
        </div>

        {/* 4 Cards Grid with Vibrant Theme */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {differentials.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="bg-amber-50/60 p-6 rounded-[2rem] border-2 border-amber-200 hover:border-orange-400 transition-all shadow-sm hover:shadow-md flex flex-col items-center text-center group"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 border-2 shadow-sm ${item.color} group-hover:scale-110 transition-transform`}>
                  <IconComp className="w-7 h-7" />
                </div>
                <h3 className="font-black text-lg text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Gallery Visual Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative h-64 sm:h-72 rounded-3xl overflow-hidden shadow-md group border-4 border-amber-200">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
              alt="Praia do Francês Marechal Deodoro Alagoas"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-xs font-bold text-amber-300 uppercase tracking-widest block">Praia do Francês</span>
              <h4 className="font-black text-lg">Águas cristalinas & coqueirais</h4>
            </div>
          </div>

          <div className="relative h-64 sm:h-72 rounded-3xl overflow-hidden shadow-md group border-4 border-teal-200">
            <img
              src="https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=800&q=80"
              alt="Camarão alho e óleo no Food Time"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-xs font-bold text-teal-300 uppercase tracking-widest block">Petiscos Fresquinhos</span>
              <h4 className="font-black text-lg">Camarão Alho & Óleo na praia</h4>
            </div>
          </div>

          <div className="relative h-64 sm:h-72 rounded-3xl overflow-hidden shadow-md group border-4 border-sky-200">
            <img
              src="https://images.unsplash.com/photo-1525385133512-2f3bdd039054?auto=format&fit=crop&w=800&q=80"
              alt="Água de coco gelada Food Time"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-xs font-bold text-sky-300 uppercase tracking-widest block">Bebidas Naturais</span>
              <h4 className="font-black text-lg">Coco verde trincando de gelado</h4>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
