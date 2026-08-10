import React, { useState, useMemo } from 'react';
import { MenuItem, MenuCategory } from '../types';
import { MENU_ITEMS } from '../data/menuData';
import { Search, Plus, Sparkles, Clock, Users, Check, Flame } from 'lucide-react';

interface MenuSectionProps {
  selectedCategory: MenuCategory | 'todos';
  onSelectCategory: (cat: MenuCategory | 'todos') => void;
  onSelectItem: (item: MenuItem) => void;
  onAddToCartDirect: (item: MenuItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  selectedCategory,
  onSelectCategory,
  onSelectItem,
  onAddToCartDirect,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterPromoOnly, setFilterPromoOnly] = useState(false);
  const [addedItemAnimation, setAddedItemAnimation] = useState<string | null>(null);

  // Filter items
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory =
        selectedCategory === 'todos' || item.category === selectedCategory;

      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.categoryName.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesPromo = !filterPromoOnly || item.isPromo || item.isPopular;

      return matchesCategory && matchesSearch && matchesPromo;
    });
  }, [selectedCategory, searchQuery, filterPromoOnly]);

  const handleQuickAdd = (e: React.MouseEvent, item: MenuItem) => {
    e.stopPropagation();
    const itemWithOptions = item as MenuItem & { options?: unknown[] };
    if (itemWithOptions.options && itemWithOptions.options.length > 0) {
      // If item has options, open modal so user can choose
      onSelectItem(item);
    } else {
      onAddToCartDirect(item);
      setAddedItemAnimation(item.id);
      setTimeout(() => setAddedItemAnimation(null), 1200);
    }
  };

  return (
    <section id="cardapio" className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      
      {/* Header & Controls Bar */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border-4 border-amber-200 shadow-md mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-orange-500 text-white font-black text-xs uppercase px-3 py-1 rounded-full">
                Cardápio Digital
              </span>
              <span className="text-xs font-bold text-slate-500">
                Almoço, Petiscos & Bebidas Pé na Areia
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mt-1">
              Escolha e Peça no WhatsApp
            </h2>
          </div>

          {/* Quick Promo Toggle */}
          <button
            onClick={() => setFilterPromoOnly(!filterPromoOnly)}
            className={`px-4 py-2.5 rounded-2xl font-black text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer border-2 ${
              filterPromoOnly
                ? 'bg-orange-500 text-white border-orange-600 shadow-md'
                : 'bg-amber-50 text-orange-700 border-amber-300 hover:bg-amber-100'
            }`}
          >
            <Flame className="w-4 h-4 text-amber-300 fill-amber-300" />
            <span>Ver Apenas Mais Vendidos & Promoções</span>
          </button>
        </div>

        {/* Search Input & Category Filters */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          {/* Search Box */}
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por prato, camarão, suco..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border-2 border-slate-200 focus:border-orange-500 rounded-2xl text-sm font-semibold outline-none transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-black text-slate-400 hover:text-slate-600"
              >
                ✕
              </button>
            )}
          </div>

          {/* Category Quick Filter Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full pb-2 sm:pb-0 scrollbar-none">
            <button
              onClick={() => onSelectCategory('todos')}
              className={`px-3.5 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all ${
                selectedCategory === 'todos'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Todos ({MENU_ITEMS.length})
            </button>
            <button
              onClick={() => onSelectCategory('pratos-feitos')}
              className={`px-3.5 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all ${
                selectedCategory === 'pratos-feitos'
                  ? 'bg-orange-600 text-white shadow-sm'
                  : 'bg-orange-50 text-orange-700 hover:bg-orange-100'
              }`}
            >
              🥘 Almoço Executivo
            </button>
            <button
              onClick={() => onSelectCategory('petiscos-frutos-mar')}
              className={`px-3.5 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all ${
                selectedCategory === 'petiscos-frutos-mar'
                  ? 'bg-teal-600 text-white shadow-sm'
                  : 'bg-teal-50 text-teal-700 hover:bg-teal-100'
              }`}
            >
              🦐 Frutos do Mar
            </button>
            <button
              onClick={() => onSelectCategory('bebidas-sucos')}
              className={`px-3.5 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all ${
                selectedCategory === 'bebidas-sucos'
                  ? 'bg-sky-600 text-white shadow-sm'
                  : 'bg-sky-50 text-sky-700 hover:bg-sky-100'
              }`}
            >
              🍹 Bebidas & Sucos
            </button>
            <button
              onClick={() => onSelectCategory('lanches-sobremesas')}
              className={`px-3.5 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all ${
                selectedCategory === 'lanches-sobremesas'
                  ? 'bg-pink-600 text-white shadow-sm'
                  : 'bg-pink-50 text-pink-700 hover:bg-pink-100'
              }`}
            >
              🍰 Lanches & Doces
            </button>
          </div>
        </div>
      </div>

      {/* Menu Item Cards Grid */}
      {filteredItems.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border-4 border-dashed border-amber-200 my-8">
          <div className="text-5xl mb-4">🔍</div>
          <h3 className="text-xl font-black text-slate-800">
            Nenhum prato encontrado
          </h3>
          <p className="text-slate-500 text-sm mt-1 max-w-md mx-auto">
            Não encontramos nenhum item para a busca "{searchQuery}". Tente pesquisar por palavras como "camarão", "peixe", "frango" ou limpe os filtros.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              onSelectCategory('todos');
              setFilterPromoOnly(false);
            }}
            className="mt-4 bg-orange-500 text-white font-bold text-sm px-5 py-2.5 rounded-2xl shadow-md hover:bg-orange-600 transition-colors"
          >
            Limpar Filtros de Busca
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const isJustAdded = addedItemAnimation === item.id;

            return (
              <div
                key={item.id}
                onClick={() => onSelectItem(item)}
                className="bg-white rounded-3xl border-2 border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-orange-400 transition-all duration-300 flex flex-col justify-between group cursor-pointer relative transform hover:-translate-y-1"
              >
                <div>
                  {/* Photo with Overlay Badge */}
                  <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Badge */}
                    {item.badge && (
                      <span className="absolute top-3 left-3 bg-orange-500 text-white font-black text-[11px] px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                        {item.badge}
                      </span>
                    )}

                    {/* Price Tag Overlay */}
                    <div className="absolute bottom-3 right-3 bg-slate-900/90 text-amber-300 font-black text-lg px-3 py-1 rounded-2xl backdrop-blur-sm border border-amber-400/30 shadow-lg">
                      R$ {item.price.toFixed(2).replace('.', ',')}
                    </div>
                  </div>

                  {/* Content Info */}
                  <div className="p-5">
                    <div className="flex items-center justify-between text-[11px] font-extrabold text-slate-400 uppercase tracking-wider mb-1">
                      <span>{item.categoryName}</span>
                      {item.serves && (
                        <span className="flex items-center gap-1 text-slate-500">
                          <Users className="w-3.5 h-3.5 text-orange-500" />
                          {item.serves}
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-black text-slate-900 group-hover:text-orange-600 transition-colors leading-snug">
                      {item.name}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm mt-1.5 leading-relaxed line-clamp-2">
                      {item.description}
                    </p>

                    {item.prepTime && (
                      <div className="mt-2.5 flex items-center gap-1 text-[11px] text-slate-400 font-semibold">
                        <Clock className="w-3.5 h-3.5 text-teal-600" />
                        <span>Preparo médio: {item.prepTime}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer Action Button */}
                <div className="px-5 pb-5 pt-2 flex items-center gap-2">
                  <button
                    onClick={(e) => handleQuickAdd(e, item)}
                    className={`w-full py-2.5 px-4 rounded-2xl font-black text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md active:translate-y-0.5 ${
                      isJustAdded
                        ? 'bg-green-600 text-white'
                        : item.options && item.options.length > 0
                        ? 'bg-amber-100 hover:bg-amber-200 text-orange-900 border border-amber-300'
                        : 'bg-orange-500 hover:bg-orange-600 text-white'
                    }`}
                  >
                    {isJustAdded ? (
                      <>
                        <Check className="w-4 h-4" />
                        Adicionado!
                      </>
                    ) : item.options && item.options.length > 0 ? (
                      <>
                        <Sparkles className="w-4 h-4 text-orange-600" />
                        Personalizar Opções
                      </>
                    ) : (
                      <>
                        <Plus className="w-4 h-4" />
                        Adicionar ao Pedido
                      </>
                    )}
                  </button>
                </div>

              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};
