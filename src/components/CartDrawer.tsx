import React, { useState } from 'react';
import { X, ShoppingBag, Plus, Minus, Trash2, Send, Phone, MapPin, Umbrella, Bike, ExternalLink, Sparkles } from 'lucide-react';
import { MenuItem } from '../types';
import { RESTAURANT_INFO, MENU_ITEMS } from '../data/menuData';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: Record<string, number>;
  onAddToCart: (item: MenuItem) => void;
  onRemoveOneFromCart: (item: MenuItem) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onAddToCart,
  onRemoveOneFromCart,
  onClearCart,
}) => {
  const [customerName, setCustomerName] = useState('');
  const [orderType, setOrderType] = useState<'ifood' | 'whatsapp' | 'areia' | 'mesa'>('ifood');
  const [locationDetail, setLocationDetail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Pix');
  const [includeServiceFee, setIncludeServiceFee] = useState(true);
  const [generalNotes, setGeneralNotes] = useState('');

  if (!isOpen) return null;

  // Build items list
  const cartItems: { item: MenuItem; quantity: number }[] = Object.entries(cart)
    .map(([id, qty]) => {
      const found = MENU_ITEMS.find((m) => m.id === id);
      return found ? { item: found, quantity: Number(qty) } : null;
    })
    .filter((entry): entry is { item: MenuItem; quantity: number } => entry !== null && Number(entry.quantity) > 0);

  const subtotal = cartItems.reduce((acc, curr) => acc + curr.item.price * curr.quantity, 0);
  const serviceFee = (orderType === 'areia' || orderType === 'mesa') && includeServiceFee ? subtotal * 0.10 : 0;
  const grandTotal = subtotal + serviceFee;

  // Generate WhatsApp Order Message
  const handleSendWhatsAppOrder = () => {
    if (cartItems.length === 0) return;

    let text = `*🏖️ NOVO PEDIDO - FOOD TIME PRAIA DO FRANCÊS*\n`;
    text += `------------------------------------\n`;

    if (customerName.trim()) {
      text += `👤 *Cliente:* ${customerName.trim()}\n`;
    }

    if (orderType === 'ifood') {
      text += `🛵 *Tipo de Pedido:* Delivery / Entrega em Pousada (${locationDetail || 'Praia do Francês'})\n`;
    } else if (orderType === 'whatsapp') {
      text += `🛵 *Tipo de Pedido:* Delivery WhatsApp (${locationDetail || 'Pousada / Casa'})\n`;
    } else if (orderType === 'areia') {
      text += `🏖️ *Local:* Consumo Pé na Areia (Guarda-sol / Mesa nº ${locationDetail || 'A informar'})\n`;
    } else {
      text += `🍽️ *Local:* Mesa no Restaurante (${locationDetail || 'Salão Principal'})\n`;
    }

    text += `💳 *Forma de Pagamento:* ${paymentMethod}\n`;
    text += `------------------------------------\n`;
    text += `*ITENS DO PEDIDO:*\n\n`;

    cartItems.forEach(({ item, quantity }, index) => {
      const itemTotal = (item.price * quantity).toFixed(2).replace('.', ',');
      text += `${index + 1}. *${quantity}x ${item.name}* - R$ ${itemTotal}\n`;
      if (item.accompaniments) {
        text += `   _Acompanha: ${item.accompaniments}_\n`;
      }
    });

    text += `\n------------------------------------\n`;
    text += `Subtotal: R$ ${subtotal.toFixed(2).replace('.', ',')}\n`;
    if (serviceFee > 0) {
      text += `Taxa de Garçom (10%): R$ ${serviceFee.toFixed(2).replace('.', ',')}\n`;
    }
    text += `*TOTAL FINAL: R$ ${grandTotal.toFixed(2).replace('.', ',')}*\n`;

    if (generalNotes.trim()) {
      text += `\n📝 *Observações:* ${generalNotes.trim()}\n`;
    }

    text += `\n_Enviado através do Cardápio Digital Food Time_`;

    const url = `https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs animate-fade-in">
      {/* Backdrop overlay click to close */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Slide-over panel */}
      <div className="relative w-full max-w-md bg-amber-50 h-full shadow-2xl flex flex-col justify-between border-l-4 border-amber-400 z-10 overflow-hidden">
        
        {/* Drawer Header */}
        <div className="bg-white p-4 sm:p-5 border-b-4 border-amber-300 flex items-center justify-between gap-3 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-orange-500 text-white flex items-center justify-center font-black">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-800 uppercase leading-none">
                Seu Pedido
              </h3>
              <p className="text-xs text-orange-600 font-bold mt-0.5">
                Food Time • iFood & Pé na Areia
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

        {/* Drawer Body (Scrollable) */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-5">

          {/* Direct iFood Shortcut Banner */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-4 rounded-3xl shadow-md border-2 border-red-500 flex items-center justify-between gap-3">
            <div className="space-y-0.5 flex-1">
              <div className="flex items-center gap-1.5">
                <Bike className="w-4 h-4 text-amber-200" />
                <span className="font-black text-xs uppercase tracking-wider text-amber-200">
                  Preferência iFood Official
                </span>
              </div>
              <p className="text-xs font-bold leading-tight text-white">
                Peça no aplicativo iFood e receba na sua pousada ou hotel!
              </p>
              <p className="text-[10px] text-red-100 font-medium">
                Avaliação 4.9 ★ • Entregas rápidas
              </p>
            </div>

            <a
              href={RESTAURANT_INFO.ifoodUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-red-600 font-black px-3 py-2 rounded-2xl text-xs hover:bg-red-50 transition-colors shrink-0 flex items-center gap-1 shadow-xs cursor-pointer"
            >
              <span>Abrir iFood</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
          
          {cartItems.length > 0 ? (
            <>
              {/* Item list */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-black uppercase text-slate-500">
                  <span>Itens Selecionados ({cartItems.length})</span>
                  <button
                    onClick={onClearCart}
                    className="text-red-600 hover:text-red-700 font-bold flex items-center gap-1 cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    Esvaziar
                  </button>
                </div>

                {cartItems.map(({ item, quantity }) => (
                  <div
                    key={item.id}
                    className="bg-white p-3.5 rounded-2xl border-2 border-amber-200 flex items-center justify-between gap-3 shadow-xs"
                  >
                    <div className="flex-1 min-w-0">
                      <h4 className="font-extrabold text-sm text-slate-800 truncate">
                        {item.name}
                      </h4>
                      <span className="text-xs font-black text-orange-600 block">
                        R$ {(item.price * quantity).toFixed(2).replace('.', ',')}
                      </span>
                      {item.accompaniments && (
                        <span className="text-[10px] text-slate-500 line-clamp-1 italic">
                          Acompanha: {item.accompaniments}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-300 p-1 rounded-xl">
                      <button
                        onClick={() => onRemoveOneFromCart(item)}
                        className="w-6 h-6 rounded-lg bg-amber-200 hover:bg-amber-300 text-slate-800 font-bold flex items-center justify-center cursor-pointer text-xs"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-5 text-center font-extrabold text-xs text-slate-800">
                        {quantity}
                      </span>
                      <button
                        onClick={() => onAddToCart(item)}
                        className="w-6 h-6 rounded-lg bg-teal-500 hover:bg-teal-600 text-white font-bold flex items-center justify-center cursor-pointer text-xs"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Mode & Destination Form */}
              <div className="bg-white p-4 rounded-3xl border-2 border-amber-200 space-y-3.5">
                <h4 className="font-extrabold text-xs uppercase tracking-wider text-slate-500">
                  Tipo e Canal de Pedido:
                </h4>

                {/* Spot selector */}
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setOrderType('ifood')}
                    className={`p-2.5 rounded-2xl border-2 font-black text-xs flex flex-col items-center gap-1 transition-all cursor-pointer ${
                      orderType === 'ifood'
                        ? 'bg-red-600 border-red-700 text-white shadow-xs'
                        : 'bg-amber-50 border-amber-200 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-1">
                      <Bike className="w-4 h-4" />
                      <span>iFood / Pousadas</span>
                    </div>
                    <span className="text-[10px] font-normal opacity-90">Via iFood Official</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setOrderType('whatsapp')}
                    className={`p-2.5 rounded-2xl border-2 font-black text-xs flex flex-col items-center gap-1 transition-all cursor-pointer ${
                      orderType === 'whatsapp'
                        ? 'bg-green-600 border-green-700 text-white shadow-xs'
                        : 'bg-amber-50 border-amber-200 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-1">
                      <Phone className="w-4 h-4" />
                      <span>Delivery WhatsApp</span>
                    </div>
                    <span className="text-[10px] font-normal opacity-90">Direto com a Cozinha</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setOrderType('areia')}
                    className={`p-2.5 rounded-2xl border-2 font-black text-xs flex flex-col items-center gap-1 transition-all cursor-pointer ${
                      orderType === 'areia'
                        ? 'bg-amber-400 border-orange-500 text-orange-950 shadow-xs'
                        : 'bg-amber-50 border-amber-200 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-1">
                      <Umbrella className="w-4 h-4" />
                      <span>Pé na Areia</span>
                    </div>
                    <span className="text-[10px] font-semibold text-orange-900">Mesa na Praia</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setOrderType('mesa')}
                    className={`p-2.5 rounded-2xl border-2 font-black text-xs flex flex-col items-center gap-1 transition-all cursor-pointer ${
                      orderType === 'mesa'
                        ? 'bg-teal-500 border-teal-600 text-white shadow-xs'
                        : 'bg-amber-50 border-amber-200 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>Restaurante</span>
                    </div>
                    <span className="text-[10px] font-normal opacity-90">Salão Coberto</span>
                  </button>
                </div>

                {/* Specific Location Input */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">
                    {orderType === 'ifood' || orderType === 'whatsapp'
                      ? 'Endereço de Entrega / Nome da Pousada:'
                      : orderType === 'areia'
                      ? 'Número do Guarda-sol / Mesa na Praia:'
                      : 'Número da Mesa no Salão:'}
                  </label>
                  <input
                    type="text"
                    placeholder={
                      orderType === 'ifood' || orderType === 'whatsapp'
                        ? 'Ex: Pousada Hibiscus - Quarto 04'
                        : orderType === 'areia'
                        ? 'Ex: Guarda-sol 12 na areia'
                        : 'Ex: Mesa 05 perto da varanda'
                    }
                    value={locationDetail}
                    onChange={(e) => setLocationDetail(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border-2 border-amber-200 focus:border-orange-500 focus:outline-none text-xs font-bold"
                  />
                </div>

                {/* Name */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">
                    Seu Nome:
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: João Silva"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border-2 border-amber-200 focus:border-orange-500 focus:outline-none text-xs font-bold"
                  />
                </div>

                {/* Payment method */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">
                    Forma de Pagamento Preferida:
                  </label>
                  <select
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border-2 border-amber-200 focus:border-orange-500 focus:outline-none text-xs font-bold bg-white"
                  >
                    <option value="Pix">Pix (QR Code / Chave)</option>
                    <option value="iFood Pay / Cupom">iFood Pay (Via App)</option>
                    <option value="Cartão de Crédito (Visa / Master / Elo)">Cartão de Crédito</option>
                    <option value="Cartão de Débito">Cartão de Débito</option>
                    <option value="Dinheiro">Dinheiro</option>
                  </select>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">
                    Observações / Preferências:
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Ex: Marmita bem embalada, feijão por cima do arroz, talheres descartáveis..."
                    value={generalNotes}
                    onChange={(e) => setGeneralNotes(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border-2 border-amber-200 focus:border-orange-500 focus:outline-none text-xs font-medium resize-none"
                  />
                </div>
              </div>

              {/* Service fee toggle for table dining */}
              {(orderType === 'areia' || orderType === 'mesa') && (
                <div className="bg-amber-100/70 p-3 rounded-2xl border border-amber-200 flex items-center justify-between">
                  <div className="text-xs">
                    <span className="font-extrabold text-slate-800 block">
                      Taxa de Garçom (10%)
                    </span>
                    <span className="text-[10px] text-slate-500">
                      Opcional para o atendimento presencial
                    </span>
                  </div>
                  <input
                    type="checkbox"
                    checked={includeServiceFee}
                    onChange={(e) => setIncludeServiceFee(e.target.checked)}
                    className="w-5 h-5 accent-orange-600 cursor-pointer"
                  />
                </div>
              )}
            </>
          ) : (
            /* Empty Cart state */
            <div className="py-12 text-center space-y-4">
              <div className="w-20 h-20 bg-amber-100 text-orange-500 rounded-full flex items-center justify-center mx-auto text-3xl">
                🛒
              </div>
              <h4 className="text-xl font-black text-slate-800">
                Seu pedido está vazio
              </h4>
              <p className="text-xs text-slate-500 max-w-xs mx-auto">
                Adicione pratos executivos, frutos do mar e bebidas ao seu pedido. Você pode pedir via iFood ou direto no WhatsApp!
              </p>

              <div className="pt-2 flex flex-col gap-2 max-w-xs mx-auto">
                <a
                  href={RESTAURANT_INFO.ifoodUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 hover:bg-red-700 text-white font-black py-3 px-4 rounded-2xl flex items-center justify-center gap-2 text-xs shadow-md"
                >
                  <Bike className="w-4 h-4" />
                  <span>Ir Direto para a Loja do iFood</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}

        </div>

        {/* Drawer Footer (Totals & Send Order button) */}
        {cartItems.length > 0 && (
          <div className="bg-white p-4 sm:p-5 border-t-4 border-amber-300 space-y-3 shadow-lg">
            
            <div className="space-y-1 text-xs font-bold text-slate-600">
              <div className="flex justify-between">
                <span>Subtotal dos itens:</span>
                <span>R$ {subtotal.toFixed(2).replace('.', ',')}</span>
              </div>

              {serviceFee > 0 && (
                <div className="flex justify-between text-teal-700">
                  <span>Garçom (10%):</span>
                  <span>R$ {serviceFee.toFixed(2).replace('.', ',')}</span>
                </div>
              )}

              <div className="flex justify-between text-base font-black text-slate-900 pt-1 border-t border-amber-100">
                <span>TOTAL FINAL:</span>
                <span className="text-orange-600 text-xl">
                  R$ {grandTotal.toFixed(2).replace('.', ',')}
                </span>
              </div>
            </div>

            {/* If user selected iFood mode */}
            {orderType === 'ifood' ? (
              <a
                href={RESTAURANT_INFO.ifoodUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-3.5 px-4 rounded-2xl shadow-[4px_4px_0px_0px_#991b1b] transition-all active:translate-y-1 active:shadow-none flex items-center justify-center gap-2 text-sm uppercase tracking-wider cursor-pointer"
              >
                <Bike className="w-5 h-5" />
                <span>Finalizar Pedido no App iFood</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            ) : (
              /* WhatsApp Order Send button */
              <button
                onClick={handleSendWhatsAppOrder}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-black py-3.5 px-4 rounded-2xl shadow-[4px_4px_0px_0px_#16a34a] transition-all active:translate-y-1 active:shadow-none flex items-center justify-center gap-2 text-sm uppercase tracking-wider cursor-pointer"
              >
                <Send className="w-5 h-5" />
                <span>Enviar Pedido pelo WhatsApp</span>
              </button>
            )}

            <p className="text-[10px] text-center text-slate-400 font-semibold">
              {orderType === 'ifood'
                ? 'Você será redirecionado para a loja oficial do Food Time no iFood.'
                : 'Sua mensagem será montada com os itens para atendimento imediato.'}
            </p>
          </div>
        )}

      </div>
    </div>
  );
};

