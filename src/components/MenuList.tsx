import React, { useState, useMemo } from 'react';
import { Search, X, Sparkles, UtensilsCrossed, Info, Bike, ExternalLink, Umbrella, MapPin, Star } from 'lucide-react';
import { MenuItem, MenuCategory, SubCategory } from '../types';
import { MENU_ITEMS, MENU_CATEGORIES, RESTAURANT_INFO } from '../data/menuData';
import { CategoryNav } from './CategoryNav';
import { MenuRowItem } from './MenuRowItem';

interface MenuListProps {
  cart: Record<string, number>;
  onAddToCart: (item: MenuItem) => void;
  onRemoveOneFromCart: (item: MenuItem) => void;
}

export const MenuList: React.FC<MenuListProps> = ({
  cart,
  onAddToCart,
  onRemoveOneFromCart,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>('pratos-feitos');
  const [selectedSubCategory, setSelectedSubCategory] = useState<SubCategory>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Item counts per category
  const getItemCountForCategory = (catId: MenuCategory) => {
    return MENU_ITEMS.filter((item) => item.category === catId).length;
  };

  // Filtered menu items
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category filter
      if (item.category !== selectedCategory) return false;

      // Subcategory filter
      if (selectedSubCategory !== 'todos' && item.subCategory !== selectedSubCategory) {
        return false;
      }

      // Search query filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description?.toLowerCase().includes(query) || false;
        const matchesAcc = item.accompaniments?.toLowerCase().includes(query) || false;
        const matchesSub = item.subCategoryName?.toLowerCase().includes(query) || false;
        return matchesName || matchesDesc || matchesAcc || matchesSub;
      }

      return true;
    });
  }, [selectedCategory, selectedSubCategory, searchQuery]);

  const currentCategoryObj = MENU_CATEGORIES.find((c) => c.id === selectedCategory);

  return (
    <section id="cardapio-section" className="py-12 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="bg-orange-500 text-white font-black text-xs uppercase px-3.5 py-1 rounded-full shadow-xs tracking-wider inline-block">
            Cardápio Digital Interativo
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-800 tracking-tight">
            Sabores da Praia do Francês
          </h2>
          <p className="text-slate-600 font-medium text-sm sm:text-base">
            Selecione uma categoria abaixo para explorar nossos pratos, marmitas executivas, petiscos e bebidas. Peça pelo iFood, pelo WhatsApp ou garanta seu atendimento na mesa na praia.
          </p>
        </div>

        {/* iFood vs Consumo Local Channel Highlight Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* iFood Card */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-4 sm:p-5 rounded-3xl shadow-md border-2 border-red-500 flex items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="bg-white text-red-600 text-xs font-black px-2 py-0.5 rounded uppercase">
                  iFood Oficial
                </span>
                <span className="flex items-center gap-1 text-amber-200 text-xs font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-300" />
                  4.9 ★ (100+ avaliações)
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-black text-white">
                Peça no iFood com Entrega na sua Pousada
              </h3>
              <p className="text-xs text-red-100 font-medium">
                Pratos quentinhos, marmitas bem servidas e embalagens herméticas para sua comodidade.
              </p>
            </div>

            <a
              href={RESTAURANT_INFO.ifoodUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-red-600 font-black px-4 py-2.5 rounded-2xl text-xs hover:bg-red-50 transition-all shrink-0 flex items-center gap-1.5 shadow-sm cursor-pointer"
            >
              <span>Abrir iFood</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Consumo Local Pé na Areia Card */}
          <div className="bg-gradient-to-r from-amber-400 to-amber-500 text-orange-950 p-4 sm:p-5 rounded-3xl shadow-md border-2 border-orange-400 flex items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="bg-orange-950 text-amber-300 text-xs font-black px-2 py-0.5 rounded uppercase">
                  Consumo Local
                </span>
                <span className="text-xs font-black text-teal-800">
                  Praia do Francês
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-black text-slate-900">
                Atendimento Pé na Areia & Salão
              </h3>
              <p className="text-xs text-orange-950 font-medium">
                Mesas com guarda-sol e atendimento exclusivo de garçom na praia (08h às 16h).
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <div className="w-10 h-10 rounded-2xl bg-white/80 flex items-center justify-center font-black text-orange-600 shadow-xs">
                <Umbrella className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>

        {/* Category Nav Buttons */}
        <CategoryNav
          selectedCategory={selectedCategory}
          selectedSubCategory={selectedSubCategory}
          onSelectCategory={setSelectedCategory}
          onSelectSubCategory={setSelectedSubCategory}
          getItemCountForCategory={getItemCountForCategory}
        />

        {/* Search & Category Header Bar */}
        <div className="bg-white p-4 rounded-3xl border-4 border-amber-200 shadow-sm space-y-4 sm:space-y-0 sm:flex sm:items-center sm:justify-between gap-4">
          {/* Current Category Info */}
          <div className="flex items-center gap-3">
            <span className="text-3xl p-2 bg-amber-100 rounded-2xl">{currentCategoryObj?.icon}</span>
            <div>
              <h3 className="text-xl font-black text-orange-600 uppercase">
                {currentCategoryObj?.name}
              </h3>
              <p className="text-xs text-slate-500 font-semibold">
                {filteredItems.length} {filteredItems.length === 1 ? 'opção encontrada' : 'opções encontradas em linha'}
              </p>
            </div>
          </div>

          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar por prato, peixe, suco, cerveja..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-10 py-2.5 rounded-2xl border-2 border-amber-200 focus:border-orange-500 focus:outline-none text-xs sm:text-sm font-semibold bg-amber-50/50"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Informational Banner for Pratos Feitos / Marmita */}
        {selectedCategory === 'pratos-feitos' && (
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white p-4 rounded-2xl shadow-sm border-2 border-orange-400 flex items-center gap-3">
            <Info className="w-6 h-6 text-amber-200 shrink-0" />
            <div className="text-xs sm:text-sm">
              <strong className="font-extrabold uppercase block text-amber-100">
                Acompanhamentos Padrão inclusos em todos os Pratos Feitos (Ideais para iFood / Marmita):
              </strong>
              <span>Arroz, feijão, macarrão, salada de legumes e salada crua bem servida.</span>
            </div>
          </div>
        )}

        {/* Informational Banner for Refeições Principais */}
        {selectedCategory === 'refeicoes-principais' && (
          <div className="bg-gradient-to-r from-amber-500 to-teal-600 text-white p-4 rounded-2xl shadow-sm border-2 border-teal-400 flex items-center gap-3">
            <UtensilsCrossed className="w-6 h-6 text-amber-200 shrink-0" />
            <div className="text-xs sm:text-sm">
              <strong className="font-extrabold uppercase block text-amber-100">
                Refeições para Família e Amigos (Serve 2 a 3 pessoas):
              </strong>
              <span>Acompanham arroz, feijão, salada fresca, batata frita e farofa crocante alagoana!</span>
            </div>
          </div>
        )}

        {/* Menu Line Items Listing */}
        {filteredItems.length > 0 ? (
          <div className="space-y-3">
            {filteredItems.map((item) => (
              <MenuRowItem
                key={item.id}
                item={item}
                quantityInCart={cart[item.id] || 0}
                onAddToCart={onAddToCart}
                onRemoveOneFromCart={onRemoveOneFromCart}
              />
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="bg-white p-8 rounded-3xl border-4 border-amber-200 text-center space-y-3 max-w-md mx-auto">
            <span className="text-4xl">🔍</span>
            <h4 className="text-lg font-black text-slate-800">
              Nenhum item encontrado
            </h4>
            <p className="text-xs text-slate-500">
              Não encontramos nenhum item correspondente a "{searchQuery}". Tente buscar por outros termos como "peixe", "frango", "camarão" ou "suco".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedSubCategory('todos');
              }}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-xl text-xs cursor-pointer"
            >
              Limpar Filtros
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

