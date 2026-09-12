import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { PRODUCTS } from '../data/barberData';
import { PageHeader } from '../components/PageHeader';
import { useCart } from '../context/CartContext';
import { Check, Plus, Minus, ShoppingBag, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';

export const ProductDetailPage: React.FC = () => {
  const { productSlug } = useParams<{ productSlug: string }>();
  const { addItem } = useCart();

  const product = PRODUCTS.find((p) => p.slug === productSlug);

  const [quantity, setQuantity] = useState(1);
  const [selectedAddonIds, setSelectedAddonIds] = useState<string[]>([]);
  const [addedNotice, setAddedNotice] = useState(false);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const toggleAddon = (addonId: string) => {
    setSelectedAddonIds((prev) =>
      prev.includes(addonId) ? prev.filter((id) => id !== addonId) : [...prev, addonId]
    );
  };

  const selectedAddonsList = product.availableAddons?.filter((a) =>
    selectedAddonIds.includes(a.id)
  ) || [];

  const addonsTotal = selectedAddonsList.reduce((sum, a) => sum + a.price, 0);
  const singleUnitTotal = product.price + addonsTotal;
  const grandTotal = singleUnitTotal * quantity;

  const handleAddToCart = () => {
    addItem({
      productId: product.id,
      name: product.name,
      price: singleUnitTotal,
      quantity,
      image: product.image,
      selectedAddons: selectedAddonsList.map((a) => ({ name: a.name, price: a.price }))
    });
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[#0c0d0e] text-[#f4f2ee]">
      <PageHeader
        badge="Product Detail"
        title={product.name}
        subtitle={product.description}
        breadcrumbs={[
          { label: 'Products', href: '/products' },
          { label: product.name }
        ]}
        price={product.priceDisplay}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Product Image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-sm overflow-hidden border border-[#24262d] shadow-2xl bg-[#14151a]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#0c0d0e]/80 backdrop-blur-md px-3 py-1.5 border border-[#272931] text-xs font-mono text-[#c5a880]">
                Authentic Offering
              </div>
            </div>
          </div>

          {/* Configuration & Order Box */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-2 border-b border-[#1f2127] pb-6">
              <span className="text-xs uppercase tracking-[0.2em] text-[#c5a880] font-semibold">
                Available In Studio & Online
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-white">
                {product.name}
              </h2>
              <div className="flex items-baseline gap-3 pt-2">
                <span className="font-serif text-3xl font-semibold text-[#c5a880]">
                  ${singleUnitTotal}
                </span>
                {addonsTotal > 0 && (
                  <span className="text-xs text-[#828692]">
                    (Base ${product.price} + ${addonsTotal} add-ons)
                  </span>
                )}
              </div>
              <p className="text-xs sm:text-sm text-[#9599a5] leading-relaxed pt-2">
                {product.description}
              </p>
            </div>

            {/* Features list */}
            {product.features && (
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-widest text-[#7a7d88] block font-semibold">
                  Package & Service Details
                </span>
                <ul className="space-y-2">
                  {product.features.map((feat, i) => (
                    <li key={i} className="text-xs text-[#c3c7d2] flex items-center gap-2.5">
                      <Check className="w-3.5 h-3.5 text-[#c5a880] flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Add-ons Selector (for Luxury Barber Hair Cut) */}
            {product.availableAddons && product.availableAddons.length > 0 && (
              <div className="space-y-3 pt-4 border-t border-[#1f2127]">
                <div className="flex justify-between items-center">
                  <span className="text-xs uppercase tracking-widest text-[#c5a880] font-semibold">
                    Customize With Grooming Add-ons:
                  </span>
                  <span className="text-[11px] text-[#787b85]">Optional</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {product.availableAddons.map((addon) => {
                    const isChecked = selectedAddonIds.includes(addon.id);
                    return (
                      <div
                        key={addon.id}
                        onClick={() => toggleAddon(addon.id)}
                        className={`p-3 rounded-sm border cursor-pointer transition-all flex items-center justify-between text-xs ${
                          isChecked
                            ? 'bg-[#1c1e24] border-[#c5a880] text-white'
                            : 'bg-[#131417] border-[#22242a] text-[#8e929d] hover:border-[#353842]'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <div
                            className={`w-4 h-4 rounded-sm border flex items-center justify-center ${
                              isChecked
                                ? 'bg-[#c5a880] border-[#c5a880] text-[#0c0d0e]'
                                : 'border-[#3a3d46]'
                            }`}
                          >
                            {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                          <span>{addon.name}</span>
                        </div>
                        <span className="font-mono text-[#c5a880]">+{addon.price}$</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Quantity and Actions */}
            <div className="space-y-4 pt-6 border-t border-[#1f2127]">
              <div className="flex items-center gap-6">
                <div className="flex items-center border border-[#2b2e36] rounded-sm bg-[#15161a]">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="p-3 text-[#8b8f9a] hover:text-white transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 text-sm font-mono font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="p-3 text-[#8b8f9a] hover:text-white transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <div className="text-xs text-[#848792]">
                  <span>Total Investment:</span>
                  <p className="font-serif text-xl text-white font-medium">
                    ${grandTotal.toFixed(2)}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  id="add-to-cart-btn"
                  onClick={handleAddToCart}
                  className="w-full py-4 bg-[#c5a880] hover:bg-[#d6ba94] text-[#0c0d0e] font-semibold text-xs tracking-widest uppercase transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <ShoppingBag className="w-4 h-4" />
                  {addedNotice ? 'Added to Cart ✓' : 'Add to Selection'}
                </button>

                <Link
                  to={`/book?service=full-service`}
                  className="w-full py-4 bg-[#1a1c22] hover:bg-[#252832] text-white border border-[#333742] font-semibold text-xs tracking-widest uppercase transition-all flex items-center justify-center gap-2 text-center"
                >
                  Schedule in Studio <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {addedNotice && (
                <p className="text-xs text-[#c5a880] flex items-center gap-1.5 animate-in fade-in">
                  <Check className="w-3.5 h-3.5" /> Item saved. View your items via the top bag icon.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
