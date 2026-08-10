import React from 'react';
import { Plus, Minus, Check, Users, Sparkles } from 'lucide-react';
import { MenuItem } from '../types';

interface MenuRowItemProps {
  item: MenuItem;
  quantityInCart: number;
  onAddToCart: (item: MenuItem) => void;
  onRemoveOneFromCart: (item: MenuItem) => void;
}

export const MenuRowItem: React.FC<MenuRowItemProps> = ({
  item,
  quantityInCart,
  onAddToCart,
  onRemoveOneFromCart,
}) => {
  return (
    <div className="bg-white rounded-2xl border-2 border-amber-200 hover:border-orange-400 p-4 transition-all hover:shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4 group">
      
      {/* Left Details Block */}
      <div className="flex-1 space-y-1.5">
        <div className="flex flex-wrap items-center gap-2">
          {/* Item Name */}
          <h4 className="text-base sm:text-lg font-black text-slate-800 group-hover:text-orange-600 transition-colors">
            {item.name}
          </h4>

          {/* Badges */}
          {item.serves && (
            <span className="inline-flex items-center gap-1 bg-amber-100 text-amber-900 border border-amber-300 text-[10px] font-bold px-2 py-0.5 rounded-full">
              <Users className="w-3 h-3 text-amber-700" />
              {item.serves}
            </span>
          )}

          {item.badge && (
            <span className="bg-orange-100 text-orange-800 border border-orange-300 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-orange-600" />
              {item.badge}
            </span>
          )}

          {item.isPopular && (
            <span className="bg-teal-100 text-teal-800 border border-teal-300 text-[10px] font-bold px-2 py-0.5 rounded-full">
              ★ Popular
            </span>
          )}

          {item.isPromo && (
            <span className="bg-green-100 text-green-800 border border-green-300 text-[10px] font-bold px-2 py-0.5 rounded-full">
              🏷️ Oferta
            </span>
          )}
        </div>

        {/* Accompaniments (Acompanhamentos) */}
        {item.accompaniments && (
          <p className="text-xs font-semibold text-slate-600 leading-relaxed bg-amber-50/80 p-2 rounded-xl border border-amber-100">
            <strong className="text-orange-800 font-bold">Acompanha: </strong>
            {item.accompaniments}
          </p>
        )}

        {/* Optional Description */}
        {item.description && (
          <p className="text-xs text-slate-500 italic">
            {item.description}
          </p>
        )}
      </div>

      {/* Right Price & Order Controls Block */}
      <div className="flex items-center justify-between sm:justify-end gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-amber-100 min-w-[200px]">
        {/* Price Tag */}
        <div className="text-left sm:text-right">
          <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            Preço
          </span>
          <span className="text-xl sm:text-2xl font-black text-orange-600">
            R$ {item.price.toFixed(2).replace('.', ',')}
          </span>
        </div>

        {/* Action Button / Counter */}
        <div>
          {quantityInCart === 0 ? (
            <button
              onClick={() => onAddToCart(item)}
              className="bg-teal-500 hover:bg-teal-600 text-white font-black py-2.5 px-4 rounded-xl shadow-[3px_3px_0px_0px_#0d9488] transition-all active:translate-y-0.5 active:shadow-none flex items-center gap-1.5 text-xs cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Adicionar</span>
            </button>
          ) : (
            <div className="flex items-center gap-1.5 bg-teal-50 border-2 border-teal-500 p-1 rounded-xl shadow-xs">
              <button
                onClick={() => onRemoveOneFromCart(item)}
                className="w-7 h-7 rounded-lg bg-teal-200 hover:bg-teal-300 text-teal-900 font-black flex items-center justify-center transition-colors cursor-pointer"
                title="Remover 1"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>

              <span className="w-6 text-center font-black text-teal-900 text-sm">
                {quantityInCart}
              </span>

              <button
                onClick={() => onAddToCart(item)}
                className="w-7 h-7 rounded-lg bg-teal-500 hover:bg-teal-600 text-white font-black flex items-center justify-center transition-colors cursor-pointer"
                title="Adicionar mais 1"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      </div>

    </div>
  );
};
