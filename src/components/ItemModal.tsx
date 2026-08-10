import React, { useState } from 'react';
import { MenuItem, CartItem } from '../types';
import { X, Plus, Minus, ShoppingBag, Clock, Users, Check } from 'lucide-react';

interface ItemModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onAddToCart: (cartItem: CartItem) => void;
}

export const ItemModal: React.FC<ItemModalProps> = ({ item, onClose, onAddToCart }) => {
  if (!item) return null;

  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    if (item.options) {
      item.options.forEach((opt) => {
        if (opt.choices.length > 0) {
          initial[opt.name] = opt.choices[0];
        }
      });
    }
    return initial;
  });
  const [notes, setNotes] = useState('');

  const totalPrice = item.price * quantity;

  const handleOptionChange = (optionName: string, choice: string) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [optionName]: choice,
    }));
  };

  const handleConfirm = () => {
    onAddToCart({
      item,
      quantity,
      selectedOptions: Object.keys(selectedOptions).length > 0 ? selectedOptions : undefined,
      notes: notes.trim() || undefined,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-white rounded-[2.5rem] max-w-lg w-full overflow-hidden shadow-2xl border-4 border-amber-300 max-h-[90vh] flex flex-col relative animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-slate-900/80 hover:bg-slate-900 text-white p-2 rounded-full backdrop-blur-sm transition-transform hover:scale-110"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Image Header */}
        <div className="relative h-56 sm:h-64 shrink-0 bg-slate-100">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
          
          <div className="absolute bottom-4 left-5 right-5 text-white">
            <span className="bg-orange-500 text-white font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-1 inline-block">
              {item.categoryName}
            </span>
            <h3 className="text-2xl font-black leading-tight">{item.name}</h3>
          </div>
        </div>

        {/* Modal Body Scrollable */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5 flex-1">
          
          {/* Price & Meta info */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wide block">Preço do Item</span>
              <span className="text-2xl font-black text-orange-600">
                R$ {item.price.toFixed(2).replace('.', ',')}
              </span>
            </div>

            <div className="flex items-center gap-3 text-xs font-bold text-slate-500">
              {item.serves && (
                <span className="flex items-center gap-1 bg-amber-50 text-amber-900 px-2.5 py-1 rounded-xl border border-amber-200">
                  <Users className="w-3.5 h-3.5 text-orange-500" />
                  {item.serves}
                </span>
              )}
              {item.prepTime && (
                <span className="flex items-center gap-1 bg-teal-50 text-teal-900 px-2.5 py-1 rounded-xl border border-teal-200">
                  <Clock className="w-3.5 h-3.5 text-teal-600" />
                  {item.prepTime}
                </span>
              )}
            </div>
          </div>

          <p className="text-slate-600 text-sm leading-relaxed">
            {item.description}
          </p>

          {/* Option Groups */}
          {item.options && item.options.length > 0 && (
            <div className="space-y-4 pt-2">
              <h4 className="font-black text-sm uppercase text-slate-800 tracking-wide border-b border-slate-100 pb-1">
                Personalize seu pedido
              </h4>

              {item.options.map((optGroup) => (
                <div key={optGroup.name} className="space-y-2">
                  <label className="text-xs font-black text-slate-700 uppercase">
                    {optGroup.name}:
                  </label>
                  <div className="grid grid-cols-1 gap-2">
                    {optGroup.choices.map((choice) => {
                      const isSelected = selectedOptions[optGroup.name] === choice;
                      return (
                        <button
                          key={choice}
                          type="button"
                          onClick={() => handleOptionChange(optGroup.name, choice)}
                          className={`p-3 rounded-xl text-xs font-bold text-left flex items-center justify-between transition-all border-2 ${
                            isSelected
                              ? 'bg-orange-50 border-orange-500 text-orange-950 font-black shadow-sm'
                              : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          <span>{choice}</span>
                          {isSelected && (
                            <Check className="w-4 h-4 text-orange-600 shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Notes Input */}
          <div className="pt-2">
            <label className="text-xs font-black text-slate-700 uppercase block mb-1">
              Observações especiais (opcional):
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Ex: Pimenta à parte, sem cebola, extra gelo..."
              rows={2}
              className="w-full p-3 bg-slate-50 border-2 border-slate-200 rounded-xl text-xs font-semibold focus:border-orange-500 outline-none resize-none"
            />
          </div>

        </div>

        {/* Modal Footer Controls */}
        <div className="p-5 bg-amber-50 border-t-2 border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Quantity Controls */}
          <div className="flex items-center gap-3 bg-white px-3 py-1.5 rounded-2xl border-2 border-amber-300 shadow-sm">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="w-8 h-8 rounded-xl bg-amber-100 text-orange-800 font-black flex items-center justify-center hover:bg-amber-200"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="font-black text-slate-900 w-6 text-center text-base">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="w-8 h-8 rounded-xl bg-orange-500 text-white font-black flex items-center justify-center hover:bg-orange-600"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          {/* Confirm Button */}
          <button
            onClick={handleConfirm}
            className="w-full sm:w-auto flex-1 bg-orange-500 hover:bg-orange-600 text-white font-black py-3.5 px-6 rounded-2xl shadow-[4px_4px_0px_0px_#c2410c] transition-all active:translate-y-1 active:shadow-none flex items-center justify-center gap-2 text-sm"
          >
            <ShoppingBag className="w-5 h-5" />
            <span>Adicionar • R$ {totalPrice.toFixed(2).replace('.', ',')}</span>
          </button>

        </div>

      </div>
    </div>
  );
};
