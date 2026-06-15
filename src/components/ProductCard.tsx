import React from 'react';
import { Product } from '../types';
import { Star, ShoppingCart, Eye, Sparkles } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onSelect: () => void;
  onAddToCart: (e: React.MouseEvent) => void;
  onBuyNow: (e: React.MouseEvent) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelect,
  onAddToCart,
  onBuyNow
}) => {
  // Format price into dollars and cents
  const dollars = Math.floor(product.price);
  const cents = Math.round((product.price - dollars) * 100).toString().padStart(2, '0');

  // Format list price display if available
  const listDollars = product.listPrice ? Math.floor(product.listPrice) : null;
  const listCents = product.listPrice ? Math.round((product.listPrice - listDollars!) * 100).toString().padStart(2, '0') : null;

  return (
    <div
      onClick={onSelect}
      id={`product-card-${product.id}`}
      className="group relative bg-white dark:bg-zinc-900 border border-stone-200/80 dark:border-zinc-800 rounded-xl hover:shadow-xl hover:border-amber-400 dark:hover:border-amber-400 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer select-none text-left"
    >
      
      {/* Dynamic Ribbon Badges (Best Seller or Choice) */}
      <div className="absolute top-2 left-0 z-10 flex flex-col space-y-1 items-start">
        {product.isBestSeller && (
          <div className="bg-[#c45500] text-white text-[9px] font-black uppercase px-2 py-0.5 rounded-r shadow-sm tracking-wide">
            Best Seller
          </div>
        )}
        {product.isAmazonsChoice && (
          <div className="bg-[#131921] text-white text-[9px] font-bold px-2 py-0.5 rounded-r border-r-2 border-amber-400 shadow-sm tracking-wide">
            Amazen's <span className="text-amber-400 font-extrabold">Choice</span>
          </div>
        )}
        {product.listPrice && (
          <div className="bg-red-600 text-white text-[9px] font-black px-2 py-0.5 rounded-r shadow-sm tracking-wide">
            {Math.round(((product.listPrice - product.price) / product.listPrice) * 100)}% OFF
          </div>
        )}
      </div>

      {/* ASIN Code Stamp (High density indicator) */}
      <div className="absolute top-2 right-2 text-[9px] font-mono text-stone-400 dark:text-stone-500 font-semibold uppercase">
        {product.asin}
      </div>

      {/* Product Image Area */}
      <div className="p-3 bg-stone-50 dark:bg-zinc-805/40 flex items-center justify-center min-h-[160px] md:min-h-[180px] lg:min-h-[200px] relative transition-colors">
        <img
          src={product.imageUrl}
          alt={product.title}
          className="max-h-40 md:max-h-44 object-contain group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        {/* Quick Review Hint Overlay */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-2 text-[10px] text-white opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-between">
          <span className="font-bold flex items-center"><Eye className="h-3 w-3 mr-1" /> Quick Inspect</span>
          <span className="text-amber-400 font-black">{product.rating} ★★★★☆</span>
        </div>
      </div>

      {/* Product Text Metas */}
      <div className="p-3.5 flex-1 flex flex-col justify-between">
        <div className="space-y-1.5">
          {/* Brand/Department */}
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-black tracking-widest uppercase text-amber-700 dark:text-amber-400">
              {product.brand}
            </span>
            <span className="text-[9px] px-1.5 py-0.5 bg-stone-100 dark:bg-zinc-800 text-stone-500 dark:text-stone-400 rounded">
              {product.department}
            </span>
          </div>

          {/* Title */}
          <h4 className="text-xs md:text-sm font-bold text-zinc-900 dark:text-white line-clamp-2 md:line-clamp-3 leading-snug group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
            {product.title}
          </h4>

          {/* Star Rating Section */}
          <div className="flex items-center space-x-1 whitespace-nowrap">
            <span className="text-xs text-amber-500 font-black">{product.rating}</span>
            <div className="flex items-center text-amber-550">
              {[...Array(5)].map((_, idx) => (
                <Star
                  key={idx}
                  className={`h-3 w-3 ${
                    idx < Math.floor(product.rating)
                      ? 'fill-current'
                      : 'text-stone-200 dark:text-zinc-700'
                  }`}
                />
              ))}
            </div>
            <span className="text-[10px] text-stone-500 dark:text-stone-400 font-semibold">
              ({product.reviewCount.toLocaleString()})
            </span>
          </div>

          {/* Price Component with Superscript Cents */}
          <div className="flex items-baseline space-x-2.5 pt-1">
            <div className="flex items-start text-zinc-900 dark:text-white font-black">
              <span className="text-xs font-bold leading-none mt-0.5">$</span>
              <span className="text-2xl md:text-3.5xl leading-none tracking-tight">{dollars}</span>
              <span className="text-xs font-bold leading-none align-super ml-0.5">{cents}</span>
            </div>

            {product.listPrice && (
              <div className="text-[11px] text-stone-400 dark:text-stone-500 line-through">
                List: ${product.listPrice.toFixed(2)}
              </div>
            )}
          </div>

          {/* Delivery & Logistics badging */}
          <div className="space-y-0.5 pt-0.5">
            <p className="text-[11px] text-zinc-800 dark:text-stone-300 font-semibold flex items-center">
              <span className="text-emerald-600 dark:text-emerald-400 font-black mr-1">✓</span>
              {product.shippingSpeed === 'tomorrow' ? (
                <>FREE delivery <strong className="text-emerald-600 dark:text-emerald-400 ml-1">Tomorrow</strong></>
              ) : product.shippingSpeed === 'two-day' ? (
                <>FREE delivery <strong className="text-sky-600 ml-1">Within 2 Days</strong></>
              ) : (
                <>Standard Fulfilled Logistics</>
              )}
            </p>
            <p className="text-[10px] text-stone-500 dark:text-stone-450">
              Service Area: NY Metro • <span className="text-stone-500 dark:text-stone-400 font-semibold">In Stock: {product.stockCount}</span>
            </p>
          </div>
        </div>

        {/* Action Buttons Block - Highly responsive on hovering */}
        <div className="grid grid-cols-2 gap-2 mt-4 pt-3.5 border-t border-stone-100 dark:border-zinc-800">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(e);
            }}
            id={`add-to-cart-btn-${product.id}`}
            className="bg-amber-400 hover:bg-amber-500 text-[#131921] text-xs font-black py-2 px-1.5 rounded-sm shadow-sm hover:shadow active:scale-95 transition-all text-center flex items-center justify-center space-x-1 cursor-pointer"
          >
            <ShoppingCart className="h-3.5 w-3.5 shrink-0" />
            <span>Add Basket</span>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onBuyNow(e);
            }}
            id={`buy-now-btn-${product.id}`}
            className="bg-[#e4a800] hover:bg-amber-600 text-zinc-950 text-xs font-bold py-2 px-1.5 rounded-sm shadow-sm active:scale-95 transition-all text-center flex items-center justify-center cursor-pointer"
          >
            Buy Now
          </button>
        </div>

      </div>
    </div>
  );
};
