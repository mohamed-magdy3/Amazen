import React, { useState } from 'react';
import { DEPARTMENTS, BRANDS } from '../data';
import { Star, Truck, Sparkles, RefreshCw, ChevronDown } from 'lucide-react';

interface SidebarFiltersProps {
  selectedDepartment: string;
  onDepartmentSelect: (dept: string) => void;
  selectedRating: number | null;
  onRatingSelect: (rating: number | null) => void;
  selectedBrands: string[];
  onBrandToggle: (brand: string) => void;
  priceMin: number;
  priceMax: number;
  onPriceChange: (min: number, max: number) => void;
  selectedShipping: string | null;
  onShippingChange: (speed: string | null) => void;
  onlyDeals: boolean;
  onToggleDeals: () => void;
  onResetFilters: () => void;
}

export const SidebarFilters: React.FC<SidebarFiltersProps> = ({
  selectedDepartment,
  onDepartmentSelect,
  selectedRating,
  onRatingSelect,
  selectedBrands,
  onBrandToggle,
  priceMin,
  priceMax,
  onPriceChange,
  selectedShipping,
  onShippingChange,
  onlyDeals,
  onToggleDeals,
  onResetFilters
}) => {
  const [isMobileExpanded, setIsMobileExpanded] = useState(false);
  const ratingTiers = [4, 3, 2];

  // Calculate live count of active filters so user gets immediate metrics in mobile toggle
  const activeFiltersCount = [
    selectedDepartment !== 'all' ? 1 : 0,
    selectedRating !== null ? 1 : 0,
    selectedBrands.length,
    priceMax < 600 ? 1 : 0,
    selectedShipping !== null ? 1 : 0,
    onlyDeals ? 1 : 0
  ].reduce((a, b) => a + b, 0);

  return (
    <aside className="w-full md:w-64 flex-shrink-0 bg-white dark:bg-zinc-900 border border-stone-200/80 dark:border-zinc-800 rounded-xl p-4 overflow-y-auto flex flex-col space-y-4 md:space-y-5 text-left transition select-none">
      
      {/* Mobile Toggle Trigger Header */}
      <div className="block md:hidden">
        <button
          onClick={() => setIsMobileExpanded(!isMobileExpanded)}
          className="w-full flex items-center justify-between bg-stone-55 bg-stone-100 dark:bg-zinc-800 hover:bg-stone-200 dark:hover:bg-zinc-750 p-2.5 rounded-lg border border-stone-200 dark:border-zinc-700 cursor-pointer font-extrabold text-xs transition duration-200"
        >
          <div className="flex items-center space-x-2 text-zinc-900 dark:text-white">
            <span className="uppercase tracking-wider">Catalog Filters</span>
            {activeFiltersCount > 0 && (
              <span className="bg-amber-400 text-zinc-950 text-[10px] font-black h-5 w-5 rounded-full flex items-center justify-center">
                {activeFiltersCount}
              </span>
            )}
          </div>
          <div className="flex items-center space-x-1.5 text-amber-700 dark:text-amber-400">
            <span>{isMobileExpanded ? 'Hide Panel' : 'Show Panel'}</span>
            <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isMobileExpanded ? 'rotate-180' : ''}`} />
          </div>
        </button>
      </div>

      {/* Main filter container, visible always on desktop, and collapsible on mobile */}
      <div className={`${isMobileExpanded ? 'flex' : 'hidden md:flex'} flex-col space-y-5 w-full`}>
        
        {/* Reset Controls */}
        <div className="flex items-center justify-between pb-3 border-b border-stone-100 dark:border-zinc-805">
          <h3 className="font-bin font-black text-xs text-zinc-905 dark:text-stone-300 uppercase tracking-widest">
            Filter Options
          </h3>
          <button
            onClick={() => {
              onResetFilters();
              setIsMobileExpanded(false);
            }}
            className="text-[11px] text-amber-700 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-300 font-bold flex items-center space-x-1 cursor-pointer hover:underline"
          >
            <RefreshCw className="h-3 w-3" />
            <span>Reset All</span>
          </button>
        </div>

        {/* DEPARTMENT CATEGORIES */}
        <div>
          <h4 className="font-black text-xs text-zinc-800 dark:text-stone-300 mb-2 uppercase tracking-wide">
            Department
          </h4>
          <ul className="space-y-1.5 text-xs text-stone-600 dark:text-stone-400">
            <li>
              <button
                onClick={() => {
                  onDepartmentSelect('all');
                  // Collapse filters panel on mobile after choice for smoother flow
                  setIsMobileExpanded(false);
                }}
                className={`w-full text-left font-medium hover:text-amber-600 transition truncate ${
                  selectedDepartment === 'all'
                    ? 'text-amber-700 dark:text-amber-400 font-black'
                    : 'text-zinc-700 dark:text-stone-300'
                }`}
              >
                All Departments
              </button>
            </li>
            {DEPARTMENTS.filter(d => d !== 'All Departments').map(dept => (
              <li key={dept}>
                <button
                  onClick={() => {
                    onDepartmentSelect(dept);
                    setIsMobileExpanded(false);
                  }}
                  className={`w-full text-left pl-2.5 border-l-2 hover:text-amber-600 transition truncate ${
                    selectedDepartment === dept
                      ? 'border-amber-500 text-amber-700 dark:text-amber-400 font-black'
                      : 'border-transparent text-zinc-650 dark:text-stone-400'
                  }`}
                >
                  {dept}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* RATING FACET */}
        <div>
          <h4 className="font-black text-xs text-zinc-800 dark:text-stone-300 mb-2 uppercase tracking-wide">
            Customer Reviews
          </h4>
          <div className="space-y-1.5">
            {ratingTiers.map(rating => (
              <button
                key={rating}
                onClick={() => onRatingSelect(rating)}
                className="flex items-center text-xs text-zinc-700 dark:text-stone-300 hover:text-amber-600 transition cursor-pointer"
              >
                <div className="flex items-center text-amber-500 mr-2 shrink-0">
                  {[...Array(5)].map((_, idx) => (
                    <Star
                      key={idx}
                      className={`h-3 w-3 ${
                        idx < rating ? 'fill-current' : 'text-stone-200 dark:text-zinc-700'
                      }`}
                    />
                  ))}
                </div>
                <span className={`text-[11px] ${selectedRating === rating ? 'text-amber-700 dark:text-amber-400 font-bold' : ''}`}>
                  & Up
                </span>
              </button>
            ))}
            {selectedRating !== null && (
              <button
                onClick={() => onRatingSelect(null)}
                className="mt-1 text-[10px] text-amber-700 dark:text-amber-400 font-bold hover:underline block"
              >
                Clear rating filter
              </button>
            )}
          </div>
        </div>

        {/* DEAL TOGGLE */}
        <div className="pt-1.5">
          <label className="flex items-center space-x-2.5 text-xs text-zinc-800 dark:text-stone-300 cursor-pointer font-bold duration-155 select-none">
            <input
              type="checkbox"
              checked={onlyDeals}
              onChange={onToggleDeals}
              className="rounded border-zinc-300 text-amber-500 focus:ring-amber-500 h-4 w-4 shrink-0"
            />
            <span className="flex items-center text-red-600 dark:text-red-400">
              <Sparkles className="h-3.5 w-3.5 mr-1 text-red-500 animate-pulse fill-red-500 shrink-0" />
              Deals & Discounts Only
            </span>
          </label>
        </div>

        {/* PRICE RANGE SLIDER */}
        <div>
          <h4 className="font-black text-xs text-zinc-800 dark:text-stone-300 mb-2 uppercase tracking-wide">
            Price Limit
          </h4>
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-xs">
              <span className="font-mono text-zinc-700 dark:text-stone-300 font-bold">${priceMin}</span>
              <span className="flex-1 h-[2px] bg-stone-200 dark:bg-zinc-800 rounded"></span>
              <span className="font-mono text-zinc-700 dark:text-stone-300 font-bold">${priceMax}</span>
            </div>
            <input
              type="range"
              min={10}
              max={600}
              step={10}
              value={priceMax}
              onChange={(e) => onPriceChange(priceMin, Number(e.target.value))}
              className="w-full accent-amber-500 h-1 bg-stone-200 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer"
            />
            <p className="text-[10px] text-stone-400 text-right font-medium">Under ${priceMax}</p>
          </div>
        </div>

        {/* BRANDS CHECKBOX SELECTION */}
        <div>
          <h4 className="font-black text-xs text-zinc-800 dark:text-stone-300 mb-2 uppercase tracking-wide">
            Brand Name
          </h4>
          <div className="space-y-1.5 max-h-40 overflow-y-auto pr-1 scrollbar-thin">
            {BRANDS.map(brand => {
              const isChecked = selectedBrands.includes(brand);
              return (
                <label
                  key={brand}
                  className="flex items-center space-x-2.5 text-xs text-zinc-700 dark:text-stone-300 cursor-pointer hover:text-amber-600 transition"
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => onBrandToggle(brand)}
                    className="rounded border-zinc-300 text-amber-500 focus:ring-amber-500 h-3.5 w-3.5 shrink-0"
                  />
                  <span className={isChecked ? 'font-bold text-amber-700 dark:text-amber-400' : ''}>{brand}</span>
                </label>
              );
            })}
          </div>
        </div>

        {/* SHIPPING SPEED SELECTION */}
        <div>
          <h4 className="font-black text-xs text-zinc-800 dark:text-stone-300 mb-2 uppercase tracking-wide">
            Shipping Logistics
          </h4>
          <div className="space-y-2">
            <button
              onClick={() => onShippingChange(selectedShipping === 'tomorrow' ? null : 'tomorrow')}
              className={`w-full flex items-center justify-between text-xs p-2 rounded border text-left cursor-pointer transition ${
                selectedShipping === 'tomorrow'
                  ? 'bg-amber-50 dark:bg-amber-950 border-amber-400 text-amber-800 dark:text-amber-200 font-bold'
                  : 'border-stone-200 dark:border-zinc-800 hover:bg-stone-50 dark:hover:bg-zinc-805 text-zinc-700 dark:text-stone-400'
              }`}
            >
              <div className="flex items-center space-x-1.5">
                <Truck className="h-4 w-4 text-emerald-600" />
                <span>Get it Tomorrow</span>
              </div>
              <span className="text-[9px] bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-200 px-1 py-0.5 rounded font-black uppercase">
                Free
              </span>
            </button>

            <button
              onClick={() => onShippingChange(selectedShipping === 'two-day' ? null : 'two-day')}
              className={`w-full flex items-center justify-between text-xs p-2 rounded border text-left cursor-pointer transition ${
                selectedShipping === 'two-day'
                  ? 'bg-amber-50 dark:bg-amber-950 border-amber-400 text-amber-800 dark:text-amber-200 font-bold'
                  : 'border-stone-200 dark:border-zinc-800 hover:bg-stone-50 dark:hover:bg-zinc-805 text-zinc-700 dark:text-stone-400'
              }`}
            >
              <div className="flex items-center space-x-1.5 font-medium">
                <Truck className="h-4 w-4 text-sky-600" />
                <span>Within 2 Days</span>
              </div>
            </button>
          </div>
        </div>

        {/* FOOTER METRIC CODES */}
        <div className="pt-2 border-t border-stone-100 dark:border-zinc-800 text-[9px] text-stone-400 leading-relaxed space-y-0.5 font-mono">
          <p>RETAIL_INGRESS: PORT_3000</p>
          <p>CATALOG_REVISION: v24.2.0-PRO</p>
          <p className="text-emerald-500">Logistics engines operating nominally.</p>
        </div>

      </div>

    </aside>
  );
};
