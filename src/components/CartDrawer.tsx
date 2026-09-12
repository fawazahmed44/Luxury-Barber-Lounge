import React from 'react';
import { useCart } from '../context/CartContext';
import { X, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CartDrawer: React.FC = () => {
  const { items, isCartOpen, setIsCartOpen, removeItem, updateQuantity, totalPrice } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#121316] border-l border-[#26282d] text-[#f4f2ee] shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-6 border-b border-[#26282d] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-5 h-5 text-[#c5a880]" />
              <h2 className="text-lg font-medium tracking-wide">Selected Items</h2>
              <span className="text-xs px-2 py-0.5 rounded-full bg-[#1e2025] text-[#c5a880] border border-[#33363e]">
                {items.length}
              </span>
            </div>
            <button
              id="close-cart-btn"
              onClick={() => setIsCartOpen(false)}
              className="p-2 text-[#9da0a6] hover:text-white transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 text-[#8a8d94]">
                <ShoppingBag className="w-12 h-12 stroke-[1.2] text-[#3e4149]" />
                <p className="text-sm">Your cart is currently empty.</p>
                <Link
                  to="/products"
                  onClick={() => setIsCartOpen(false)}
                  className="px-5 py-2.5 bg-[#1d1f24] hover:bg-[#252830] text-[#c5a880] text-xs uppercase tracking-widest transition-colors border border-[#353942]"
                >
                  Explore Products
                </Link>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-sm bg-[#181a1e] border border-[#26282e] space-y-3"
                >
                  <div className="flex gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded bg-[#202228] flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start gap-2">
                        <h4 className="text-sm font-medium text-white truncate">{item.name}</h4>
                        <span className="text-sm font-serif text-[#c5a880] whitespace-nowrap">
                          ${item.price * item.quantity}
                        </span>
                      </div>
                      <p className="text-xs text-[#8e929a]">${item.price} each</p>

                      {item.selectedAddons && item.selectedAddons.length > 0 && (
                        <div className="mt-2 text-[11px] text-[#a4a8b2] space-y-0.5">
                          <span className="text-[#c5a880] text-[10px] uppercase tracking-wider block">
                            Add-ons included:
                          </span>
                          {item.selectedAddons.map((ad, idx) => (
                            <div key={idx} className="flex justify-between text-[#8b8f99]">
                              <span>+ {ad.name}</span>
                              <span>${ad.price}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-[#23252b]">
                    <div className="flex items-center border border-[#2d3038] rounded">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="p-1 hover:bg-[#252830] text-[#8e929a] hover:text-white transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-3 text-xs font-mono">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="p-1 hover:bg-[#252830] text-[#8e929a] hover:text-white transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-[11px] text-[#c75c5c] hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer checkout */}
          {items.length > 0 && (
            <div className="p-6 border-t border-[#26282d] bg-[#101114] space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-[#8e929a]">Estimated Subtotal</span>
                <span className="text-xl font-serif text-[#f4f2ee] font-semibold">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              <p className="text-[11px] text-[#71757f] leading-relaxed">
                Studio services and packages can be reserved directly or coordinated with your scheduled appointment.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <Link
                  to="/book"
                  onClick={() => setIsCartOpen(false)}
                  className="w-full py-3 px-3 text-center bg-[#c5a880] hover:bg-[#d6ba94] text-[#0c0d0e] font-medium text-xs tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-1.5"
                >
                  Schedule <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <button
                  onClick={() => {
                    alert('Order request received! Our guest concierge will coordinate with you.');
                    setIsCartOpen(false);
                  }}
                  className="w-full py-3 px-3 text-center bg-[#1e2025] hover:bg-[#282b33] text-[#f4f2ee] border border-[#373a43] text-xs tracking-wider uppercase transition-all duration-200"
                >
                  Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
