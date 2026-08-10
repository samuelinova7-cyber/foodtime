import React from 'react';
import { MenuCategory, SubCategory } from '../types';
import { MENU_CATEGORIES, SUBCATEGORIES_MAP } from '../data/menuData';

interface CategoryNavProps {
  selectedCategory: MenuCategory;
  selectedSubCategory: SubCategory;
  onSelectCategory: (category: MenuCategory) => void;
  onSelectSubCategory: (subCategory: SubCategory) => void;
  getItemCountForCategory: (category: MenuCategory) => number;
}

export const CategoryNav: React.FC<CategoryNavProps> = ({
  selectedCategory,
  selectedSubCategory,
  onSelectCategory,
  onSelectSubCategory,
  getItemCountForCategory,
}) => {
  const currentSubcategories = SUBCATEGORIES_MAP[selectedCategory] || [];

  return (
    <div className="w-full space-y-4">
      {/* Category Selection Buttons Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {MENU_CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          const count = getItemCountForCategory(cat.id);

          return (
            <button
              key={cat.id}
              onClick={() => {
                onSelectCategory(cat.id);
                onSelectSubCategory('todos');
              }}
              className={`relative flex flex-col items-center justify-between p-3.5 sm:p-4 rounded-2xl border-4 transition-all text-center cursor-pointer select-none ${
                isSelected
                  ? `${cat.color} ${cat.borderColor} shadow-[4px_4px_0px_0px_#00000020] translate-y-0 scale-102`
                  : 'bg-white border-amber-200 hover:border-orange-400 text-slate-800 shadow-xs hover:-translate-y-0.5'
              }`}
            >
              <span className="text-3xl mb-1.5">{cat.icon}</span>
              <span className="font-extrabold text-xs sm:text-sm uppercase leading-tight">
                {cat.name}
              </span>
              <span
                className={`mt-2 text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  isSelected
                    ? 'bg-black/20 text-white'
                    : 'bg-amber-100 text-amber-900 border border-amber-300'
                }`}
              >
                {count} {count === 1 ? 'item' : 'itens'}
              </span>
            </button>
          );
        })}
      </div>

      {/* Subcategory Pills Row (if applicable) */}
      {currentSubcategories.length > 1 && (
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t-2 border-amber-200">
          <span className="text-xs font-black uppercase tracking-wider text-slate-500 mr-1">
            Filtrar por:
          </span>
          {currentSubcategories.map((sub) => {
            const isSubSelected = selectedSubCategory === sub.id;
            return (
              <button
                key={sub.id}
                onClick={() => onSelectSubCategory(sub.id)}
                className={`px-3.5 py-1.5 rounded-full font-bold text-xs transition-all cursor-pointer border ${
                  isSubSelected
                    ? 'bg-orange-600 text-white border-orange-700 shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-amber-100 border-amber-300'
                }`}
              >
                {sub.name}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
