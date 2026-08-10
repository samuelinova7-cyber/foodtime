import React from 'react';
import { MenuCategory } from '../types';

interface CategoryGridProps {
  selectedCategory: MenuCategory | 'todos';
  onSelectCategory: (category: MenuCategory | 'todos') => void;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  const categories = [
    {
      id: 'pratos-feitos' as MenuCategory,
      title: 'Almoço Executivo',
      subtitle: 'Pratos individuais & comerciais a partir de R$ 19,99',
      emoji: '🥘',
      borderColor: 'border-amber-200 hover:border-orange-400',
      activeBorderColor: 'border-orange-500 bg-orange-50/80',
      textColor: 'text-orange-600',
      badge: 'Almoço',
    },
    {
      id: 'petiscos-frutos-mar' as MenuCategory,
      title: 'Frutos do Mar & Petiscos',
      subtitle: 'Porções fartas para compartilhar na praia',
      emoji: '🦐',
      borderColor: 'border-teal-200 hover:border-teal-400',
      activeBorderColor: 'border-teal-500 bg-teal-50/80',
      textColor: 'text-teal-600',
      badge: 'Pé na Areia',
    },
    {
      id: 'bebidas-sucos' as MenuCategory,
      title: 'Bebidas & Sucos',
      subtitle: 'Sucos detox, água de coco & cerveja gelada',
      emoji: '🍹',
      borderColor: 'border-sky-200 hover:border-sky-400',
      activeBorderColor: 'border-sky-500 bg-sky-50/80',
      textColor: 'text-sky-600',
      badge: 'Refrescante',
    },
    {
      id: 'lanches-sobremesas' as MenuCategory,
      title: 'Lanches & Doces',
      subtitle: 'Tapiocas rendadas, açaí, cartola & burgers',
      emoji: '🍰',
      borderColor: 'border-pink-200 hover:border-pink-400',
      activeBorderColor: 'border-pink-500 bg-pink-50/80',
      textColor: 'text-pink-600',
      badge: 'Tarde na Praia',
    },
  ];

  return (
    <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-6 sm:mb-8">
        <div>
          <span className="text-xs font-black uppercase tracking-widest text-orange-600 bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
            Nossos Destaques
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight mt-1">
            Categorias do Cardápio
          </h3>
        </div>

        {selectedCategory !== 'todos' && (
          <button
            onClick={() => onSelectCategory('todos')}
            className="text-xs sm:text-sm font-bold text-orange-600 hover:text-orange-700 underline bg-white px-3 py-1.5 rounded-xl border border-orange-200 shadow-sm"
          >
            Ver Todas as Categorias
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.id;

          return (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(isSelected ? 'todos' : cat.id)}
              className={`bg-white p-5 sm:p-6 rounded-[2rem] sm:rounded-[2.5rem] border-4 transition-all duration-200 cursor-pointer flex flex-col items-center text-center relative overflow-hidden shadow-sm hover:shadow-md transform active:scale-95 ${
                isSelected ? cat.activeBorderColor + ' shadow-lg -translate-y-1' : cat.borderColor
              }`}
            >
              <span className="absolute top-3 right-4 text-[10px] font-black uppercase tracking-wider text-slate-400 bg-slate-100 px-2.5 py-0.5 rounded-full">
                {cat.badge}
              </span>

              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4 transform group-hover:scale-110 transition-transform">
                {cat.emoji}
              </div>

              <h4 className={`font-black text-base sm:text-lg uppercase mb-1.5 ${cat.textColor}`}>
                {cat.title}
              </h4>

              <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
                {cat.subtitle}
              </p>

              <div className="mt-4 pt-3 border-t border-slate-100 w-full flex items-center justify-center">
                <span
                  className={`text-xs font-black px-3 py-1 rounded-full transition-colors ${
                    isSelected
                      ? 'bg-orange-600 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {isSelected ? '✓ Selecionado' : 'Explorar Opções'}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
