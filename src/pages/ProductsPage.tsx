import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../data/barberData';
import { PageHeader } from '../components/PageHeader';
import { ShoppingBag, ArrowRight, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const ProductsPage: React.FC = () => {
  const { addItem } = useCart();

  return (
    <div className="min-h-screen bg-[#0c0d0e] text-[#f4f2ee]">
      <PageHeader
        badge="Provisions & Services"
        title="Products & Curated Packages"
        subtitle="Explore our signature service packages, customizable haircut offerings with add-on options, and Papi Style styling essentials."
        breadcrumbs={[{ label: 'Products' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="bg-[#121316] border border-[#22242a] hover:border-[#383b44] rounded-sm transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              <div>
                <div className="relative h-64 overflow-hidden bg-[#16181d]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-[#0c0d0e]/80 backdrop-blur-md px-3 py-1 rounded-sm border border-[#26282f] text-xs font-serif text-[#c5a880] font-semibold">
                    {product.priceDisplay}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-serif text-2xl font-medium text-white group-hover:text-[#c5a880] transition-colors">
                      {product.name}
                    </h3>
                    <p className="font-serif text-lg text-[#c5a880] mt-1 font-semibold">
                      {product.priceDisplay}
                    </p>
                  </div>

                  <p className="text-xs text-[#8c909c] leading-relaxed">
                    {product.description}
                  </p>

                  {product.features && (
                    <ul className="space-y-1.5 pt-3 border-t border-[#1e2025]">
                      {product.features.map((feat, i) => (
                        <li key={i} className="text-[11px] text-[#9ca0ac] flex items-start gap-2">
                          <Check className="w-3 h-3 text-[#c5a880] flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              <div className="p-6 pt-0 space-y-2.5">
                <Link
                  to={`/products/${product.slug}`}
                  className="w-full py-3 px-4 text-center bg-[#181a1f] hover:bg-[#22252c] text-white text-xs uppercase tracking-wider font-medium border border-[#2a2c34] transition-colors flex items-center justify-center gap-1.5"
                >
                  Configure & View Details <ArrowRight className="w-3 h-3" />
                </Link>

                {product.availableAddons ? (
                  <Link
                    to={`/products/${product.slug}`}
                    className="w-full py-2.5 px-4 text-center bg-[#c5a880]/15 hover:bg-[#c5a880]/25 text-[#c5a880] text-xs uppercase tracking-wider font-medium border border-[#c5a880]/30 transition-colors block"
                  >
                    Select Add-Ons
                  </Link>
                ) : (
                  <button
                    onClick={() =>
                      addItem({
                        productId: product.id,
                        name: product.name,
                        price: product.price,
                        quantity: 1,
                        image: product.image
                      })
                    }
                    className="w-full py-2.5 px-4 text-center bg-[#c5a880] hover:bg-[#d6ba94] text-[#0c0d0e] text-xs uppercase tracking-wider font-semibold transition-colors flex items-center justify-center gap-1.5"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" /> Quick Add to Cart
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
