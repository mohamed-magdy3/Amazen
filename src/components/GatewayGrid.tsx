import React from 'react';
import { Product } from '../types';
import { Star, ShieldAlert, Award, ArrowUpRight } from 'lucide-react';

interface GatewayGridProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onNavigateToDepartment: (department: string) => void;
}

export const GatewayGrid: React.FC<GatewayGridProps> = ({
  products,
  onSelectProduct,
  onNavigateToDepartment
}) => {
  // Extract specific products to display in the gateway panels
  const electronicsList = products.filter(p => p.department === 'Electronics').slice(0, 4);
  const homeKitchenList = products.filter(p => p.department === 'Home & Kitchen').slice(0, 4);
  const sportsList = products.filter(p => p.department === 'Sports & Outdoors').slice(0, 2);
  const apparelList = products.filter(p => p.department === 'Fashion & Apparel').slice(0, 2);
  const pcGamingList = products.filter(p => p.department === 'PC Gaming & Games').slice(0, 4);

  // Fallbacks in case filter produces fewer than needed
  const monitor = products.find(p => p.id === 'prod-2');
  const fryer = products.find(p => p.id === 'prod-5');
  const book = products.find(p => p.id === 'prod-11');
  const watch = products.find(p => p.id === 'prod-10');

  return (
    <div className="max-w-7xl mx-auto px-4 relative z-30 -mt-16 md:-mt-24 lg:-mt-48 pb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
        
        {/* CARD 1: 2x2 GRID - Top Electronics Hardware */}
        <div className="bg-white dark:bg-zinc-900 rounded-sm shadow-md hover:shadow-lg p-4 flex flex-col justify-between border border-stone-200/60 dark:border-zinc-800 transition">
          <div>
            <h3 className="text-zinc-900 dark:text-white font-black text-base md:text-lg mb-3 tracking-tight">
              Deals on Premium Electronics
            </h3>
            <div className="grid grid-cols-2 gap-2.5">
              {electronicsList.map(prod => (
                <button
                  key={prod.id}
                  onClick={() => onSelectProduct(prod)}
                  id={`gateway-${prod.id}`}
                  className="flex flex-col text-left group/item cursor-pointer"
                >
                  <div className="aspect-square bg-stone-100 dark:bg-zinc-805 rounded overflow-hidden p-1 flex items-center justify-center">
                    <img
                      src={prod.imageUrl}
                      alt={prod.title}
                      className="max-h-full max-w-full object-contain group-hover/item:scale-105 transition duration-300"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="text-[10px] md:text-[11px] text-zinc-700 dark:text-stone-300 font-bold mt-1 line-clamp-1 group-hover/item:text-amber-600">
                    {prod.brand}
                  </span>
                  <span className="text-[9px] text-stone-500 dark:text-stone-400 font-medium -mt-0.5">
                    ${prod.price.toFixed(2)}
                  </span>
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => onNavigateToDepartment('Electronics')}
            className="text-amber-700 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-300 text-xs font-bold text-left hover:underline mt-4 pt-3 border-t border-stone-100 dark:border-zinc-800 flex items-center justify-between cursor-pointer"
          >
            See all Electronics
            <ArrowUpRight className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* CARD 2: SINGLE FEATURED - Smart Coffee Mug / Espresso */}
        <div className="bg-white dark:bg-zinc-900 rounded-sm shadow-md hover:shadow-lg p-4 flex flex-col justify-between border border-stone-200/60 dark:border-zinc-800 transition">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-zinc-900 dark:text-white font-black text-base md:text-lg tracking-tight">
                Featured Gourmet Kitchen
              </h3>
              <span className="bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-200 text-[9px] font-black px-1.5 py-0.5 rounded uppercase tracking-wide">
                Top Choice
              </span>
            </div>
            {fryer && (
              <button
                onClick={() => onSelectProduct(fryer)}
                className="w-full text-left flex flex-col group/featured cursor-pointer"
              >
                <div className="aspect-video w-full bg-stone-100 dark:bg-zinc-805 rounded overflow-hidden p-2 flex items-center justify-center mb-3">
                  <img
                    src={fryer.imageUrl}
                    alt={fryer.title}
                    className="max-h-full max-w-full object-contain group-hover/featured:scale-105 transition duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex items-center space-x-1.5 mb-1 text-[10px]">
                  <span className="bg-red-600 text-white font-bold px-1 rounded-sm">25% OFF</span>
                  <span className="text-red-650 dark:text-red-400 font-bold">Deal of the Day</span>
                </div>
                <h4 className="text-sm font-bold text-zinc-900 dark:text-white line-clamp-2 leading-snug group-hover/featured:text-amber-600">
                  {fryer.title}
                </h4>
                <div className="flex items-center space-x-2 mt-1.5">
                  <div className="flex items-center text-amber-500 text-xs">
                    <Star className="h-3.5 w-3.5 fill-current" />
                    <span className="font-bold ml-1">{fryer.rating}</span>
                  </div>
                  <span className="text-stone-400 text-xs font-semibold">({fryer.reviewCount.toLocaleString()} reviews)</span>
                </div>
                <div className="flex items-baseline space-x-2 mt-1">
                  <span className="text-lg font-black text-zinc-900 dark:text-white">
                    ${fryer.price.toFixed(2)}
                  </span>
                  {fryer.listPrice && (
                    <span className="text-stone-400 text-xs line-through">
                      ${fryer.listPrice.toFixed(2)}
                    </span>
                  )}
                </div>
              </button>
            )}
          </div>
          <button
            onClick={() => onNavigateToDepartment('Home & Kitchen')}
            className="text-amber-700 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-300 text-xs font-bold text-left hover:underline mt-4 pt-3 border-t border-stone-100 dark:border-zinc-800 flex items-center justify-between cursor-pointer"
          >
            Shop Home & Kitchen
            <ArrowUpRight className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* CARD 3: 2x2 GRID - Outdoors Adventures */}
        <div className="bg-white dark:bg-zinc-900 rounded-sm shadow-md hover:shadow-lg p-4 flex flex-col justify-between border border-stone-200/60 dark:border-zinc-800 transition">
          <div>
            <h3 className="text-zinc-900 dark:text-white font-black text-base md:text-lg mb-3 tracking-tight">
              Elite Outdoor Equipment
            </h3>
            <div className="grid grid-cols-2 gap-2.5">
              {products.filter(p => p.department === 'Sports & Outdoors').slice(0, 4).map(prod => (
                <button
                  key={prod.id}
                  onClick={() => onSelectProduct(prod)}
                  id={`gateway-${prod.id}`}
                  className="flex flex-col text-left group/item cursor-pointer"
                >
                  <div className="aspect-square bg-stone-100 dark:bg-zinc-805 rounded overflow-hidden p-1 flex items-center justify-center">
                    <img
                      src={prod.imageUrl}
                      alt={prod.title}
                      className="max-h-full max-w-full object-contain group-hover/item:scale-105 transition duration-300"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="text-[10px] md:text-[11px] text-zinc-700 dark:text-stone-300 font-bold mt-1 line-clamp-1 group-hover/item:text-amber-600">
                    {prod.title}
                  </span>
                  <span className="text-[9px] text-zinc-500 dark:text-stone-400 font-medium">
                    ${prod.price.toFixed(2)}
                  </span>
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => onNavigateToDepartment('Sports & Outdoors')}
            className="text-amber-700 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-300 text-xs font-bold text-left hover:underline mt-4 pt-3 border-t border-stone-100 dark:border-zinc-800 flex items-center justify-between cursor-pointer"
          >
            Explore Outdoors Deals
            <ArrowUpRight className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* CARD 4: TOP HIGHLIGHT - Web Architect / Engineering Reading */}
        <div className="bg-white dark:bg-zinc-900 rounded-sm shadow-md hover:shadow-lg p-4 flex flex-col justify-between border border-stone-200/60 dark:border-zinc-800 transition">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-zinc-900 dark:text-white font-black text-base md:text-lg tracking-tight">
                Software & AI Blueprints
              </h3>
              <span className="bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-200 text-[9px] tracking-widest font-black px-1.5 py-0.5 rounded uppercase">
                Best Seller
              </span>
            </div>
            {book && (
              <button
                onClick={() => onSelectProduct(book)}
                className="w-full text-left flex flex-col group/book cursor-pointer"
              >
                <div className="aspect-video w-full bg-stone-100 dark:bg-zinc-805 rounded overflow-hidden p-2 flex items-center justify-center mb-3">
                  <img
                    src={book.imageUrl}
                    alt={book.title}
                    className="max-h-full max-w-full object-contain group-hover/book:scale-105 transition duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="text-sm font-black text-zinc-900 dark:text-white line-clamp-2 leading-snug group-hover/book:text-amber-600">
                  {book.title}
                </h4>
                <p className="text-[10px] text-stone-500 mt-1">Author: Evelyn Sterling</p>
                <div className="flex items-center space-x-1 mt-1 text-amber-500 font-bold text-xs">
                  <Star className="h-3 w-3 fill-current" />
                  <span>{book.rating}</span>
                  <span className="text-stone-400 text-[10px] font-semibold">({book.reviewCount} total views)</span>
                </div>
                <div className="flex items-baseline space-x-2 mt-1">
                  <span className="text-md font-bold text-zinc-900 dark:text-white">
                    ${book.price.toFixed(2)}
                  </span>
                  <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider">
                    FREE delivery tomorrow
                  </span>
                </div>
              </button>
            )}
          </div>
          <button
            onClick={() => onNavigateToDepartment('Books & Literature')}
            className="text-amber-700 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-300 text-xs font-bold text-left hover:underline mt-4 pt-3 border-t border-stone-100 dark:border-zinc-800 flex items-center justify-between cursor-pointer"
          >
            See all Tech Books
            <ArrowUpRight className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* CARD 5: 2x2 GRID - PC Gaming Arena */}
        <div className="bg-white dark:bg-zinc-900 rounded-sm shadow-md hover:shadow-lg p-4 flex flex-col justify-between border border-stone-200/60 dark:border-zinc-800 transition">
          <div>
            <h3 className="text-zinc-900 dark:text-white font-black text-base md:text-lg mb-3 tracking-tight">
              PC Gaming & Esports
            </h3>
            <div className="grid grid-cols-2 gap-2.5">
              {pcGamingList.map(prod => (
                <button
                  key={prod.id}
                  onClick={() => onSelectProduct(prod)}
                  id={`gateway-${prod.id}`}
                  className="flex flex-col text-left group/item cursor-pointer"
                >
                  <div className="aspect-square bg-stone-100 dark:bg-zinc-805 rounded overflow-hidden p-1 flex items-center justify-center">
                    <img
                      src={prod.imageUrl}
                      alt={prod.title}
                      className="max-h-full max-w-full object-contain group-hover/item:scale-105 transition duration-300"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="text-[10px] md:text-[11px] text-zinc-700 dark:text-stone-300 font-bold mt-1 line-clamp-1 group-hover/item:text-amber-600">
                    {prod.brand}
                  </span>
                  <span className="text-[9px] text-zinc-500 dark:text-stone-400 font-medium -mt-0.5">
                    ${prod.price.toFixed(2)}
                  </span>
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => onNavigateToDepartment('PC Gaming & Games')}
            className="text-amber-700 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-300 text-xs font-bold text-left hover:underline mt-4 pt-3 border-t border-stone-100 dark:border-zinc-800 flex items-center justify-between cursor-pointer"
          >
            See the Gaming Den
            <ArrowUpRight className="h-3.5 w-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
