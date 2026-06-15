import React from 'react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';
import { Award, Layers, TrendingUp, Sparkles } from 'lucide-react';

interface ProductGridProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onBuyNow: (product: Product) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  onSelectProduct,
  onAddToCart,
  onBuyNow,
  sortBy,
  onSortChange
}) => {
  return (
    <div className="flex-1 space-y-4">
      
      {/* Search Header Statistics & Sort Bar */}
      <div className="bg-white dark:bg-zinc-900 border border-stone-200/80 dark:border-zinc-800 p-3.5 rounded-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-left shadow-xs transition select-none">
        <div>
          <h2 className="text-sm font-black text-zinc-900 dark:text-white uppercase tracking-wider flex items-center">
            <Layers className="h-4 w-4 mr-1.5 text-amber-500" />
            Catalog Results
          </h2>
          <p className="text-xs text-stone-500 dark:text-stone-400 font-medium">
            Showing <strong className="text-zinc-850 dark:text-white font-bold">{products.length}</strong> elite inventory commodities matching parameters
          </p>
        </div>

        {/* Sort Operator dropdown */}
        <div className="flex items-center space-x-2 w-full sm:w-auto justify-end">
          <label htmlFor="catalog-sort" className="text-xs text-stone-500 dark:text-stone-400 whitespace-nowrap font-semibold">
            Sort by:
          </label>
          <select
            id="catalog-sort"
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="text-xs bg-stone-100 dark:bg-zinc-805 text-zinc-800 dark:text-white border border-stone-200 dark:border-zinc-700 rounded px-2.5 py-1.5 outline-none font-bold cursor-pointer hover:border-amber-400"
          >
            <option value="featured">Featured / Relevance</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Avg. Customer Review</option>
          </select>
        </div>
      </div>

      {/* Grid List */}
      {products.length === 0 ? (
        <div className="bg-white dark:bg-zinc-900 border border-dashed border-stone-300 dark:border-zinc-800 rounded p-12 text-center text-stone-500 max-w-lg mx-auto space-y-3 shadow-sm select-none">
          <Award className="h-10 w-10 mx-auto text-amber-500 stroke-[1.5]" />
          <h3 className="font-black text-zinc-900 dark:text-white text-base">No Matching Products</h3>
          <p className="text-xs text-stone-400 max-w-sm mx-auto leading-relaxed">
            There are no commodities matching your combined filter settings. Let's reset your active Brand and Price range parameters to find products.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={() => onSelectProduct(product)}
              onAddToCart={(e) => {
                e.stopPropagation();
                onAddToCart(product);
              }}
              onBuyNow={(e) => {
                e.stopPropagation();
                onBuyNow(product);
              }}
            />
          ))}
        </div>
      )}

    </div>
  );
};
