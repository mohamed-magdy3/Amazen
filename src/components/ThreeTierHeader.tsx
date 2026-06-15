import React, { useState, useEffect, useRef, useMemo } from 'react';
import { MapPin, Search, ShoppingCart, Menu, ChevronDown, Globe, Sun, Moon } from 'lucide-react';
import { DEPARTMENTS, MOCK_PRODUCTS } from '../data';

interface ThreeTierHeaderProps {
  cartItemCount: number;
  selectedDepartment: string;
  onDepartmentChange: (dept: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSearchSubmit: () => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
  onLogoClick: () => void;
  onNavigateToDeals: () => void;
  deliverZip: string;
  setDeliverZip: (zip: string) => void;
  onOpenCart: () => void;
  onSelectProduct?: (product: any) => void;
}

export const ThreeTierHeader: React.FC<ThreeTierHeaderProps> = ({
  cartItemCount,
  selectedDepartment,
  onDepartmentChange,
  searchQuery,
  onSearchChange,
  onSearchSubmit,
  isDarkMode,
  toggleTheme,
  onLogoClick,
  onNavigateToDeals,
  deliverZip,
  setDeliverZip,
  onOpenCart,
  onSelectProduct
}) => {
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [showAccountDropdown, setShowAccountDropdown] = useState(false);
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [zipInput, setZipInput] = useState(deliverZip);
  const [selectedLanguage, setSelectedLanguage] = useState('EN');
  const [searchFocused, setSearchFocused] = useState(false);

  const searchRef = useRef<HTMLDivElement>(null);

  // Close search suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleZipSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (zipInput.trim()) {
      setDeliverZip(zipInput);
      setShowLocationModal(false);
    }
  };

  // Live auto-suggestions filtering based on active input
  const liveSuggestions = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return [];
    
    return MOCK_PRODUCTS.filter((prod) => {
      const matchText = 
        prod.title.toLowerCase().includes(query) ||
        prod.description.toLowerCase().includes(query) ||
        prod.brand.toLowerCase().includes(query) ||
        prod.asin.toLowerCase().includes(query);
      
      const matchDept = selectedDepartment === 'all' || prod.department.toLowerCase() === selectedDepartment.toLowerCase();
      
      return matchText && matchDept;
    }).slice(0, 6);
  }, [searchQuery, selectedDepartment]);

  return (
    <header className="w-full flex flex-col select-none relative z-40 shadow-md">
      {/* TIER 1: TOP BAR NAVIGATION */}
      <div className="bg-[#131921] text-xs text-stone-300 py-1.5 px-4 flex items-center justify-between border-b border-zinc-800">
        <div className="flex items-center space-x-5">
          {/* Deliver Location Indicator */}
          <button
            onClick={() => setShowLocationModal(true)}
            id="deliver-to-zip-btn"
            className="flex items-center hover:ring-1 hover:ring-white p-1 rounded transition duration-150 cursor-pointer text-left"
          >
            <MapPin className="text-white h-4 w-4 mr-1.5 shrink-0" />
            <div className="leading-tight">
              <p className="text-[10px] text-stone-400">Deliver to</p>
              <p className="text-white font-bold text-xs">New York {deliverZip}</p>
            </div>
          </button>

          {/* Quick Stats Metric Bar (Amazon Style Dense Indicators) */}
          <div className="hidden md:flex items-center space-x-4 border-l border-zinc-700 pl-4 h-5 text-[10px] text-stone-400 uppercase tracking-wider">
            <span>Server Latency: <strong className="text-emerald-400">2.1ms</strong></span>
            <span className="h-3 w-[1px] bg-zinc-700"></span>
            <span>Est. Ingress: <strong className="text-sky-400">99.8% Perfect</strong></span>
          </div>
        </div>

        {/* Right side widgets */}
        <div className="flex items-center space-x-3 sm:space-x-5">
          {/* Custom Theme Master Control */}
          <button
            onClick={toggleTheme}
            id="theme-toggler"
            className="flex items-center space-x-1.5 bg-[#232f3e] text-white px-2.5 py-1 rounded-sm hover:bg-slate-700 hover:ring-1 hover:ring-amber-400 transition cursor-pointer shrink-0"
            title="Toggle theme between eye-safe Light and Dark mode"
          >
            {isDarkMode ? (
              <>
                <Sun className="h-3.5 w-3.5 text-amber-400" />
                <span className="font-semibold text-[11px] text-amber-100 hidden xs:inline">Day Mode</span>
              </>
            ) : (
              <>
                <Moon className="h-3.5 w-3.5 text-stone-300" />
                <span className="font-semibold text-[11px] text-stone-300 hidden xs:inline">Dark Mode</span>
              </>
            )}
          </button>

          {/* Language Picker */}
          <div className="relative">
            <button
              onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
              onBlur={() => setTimeout(() => setShowLanguageDropdown(false), 200)}
              id="language-picker-btn"
              className="flex items-center space-x-1 hover:ring-1 hover:ring-white p-1 rounded font-bold text-white cursor-pointer transition shrink-0"
            >
              <Globe className="h-3.5 w-3.5 mr-0.5" />
              <span>{selectedLanguage}</span>
              <span className="text-[9px] text-stone-400 hidden sm:inline">USD</span>
              <ChevronDown className="h-3 w-3 text-stone-400" />
            </button>
            {showLanguageDropdown && (
              <div className="absolute right-0 mt-1 bg-white text-zinc-900 border border-zinc-200 rounded shadow-xl py-2 w-32 z-50 text-xs">
                <button
                  onClick={() => setSelectedLanguage('EN')}
                  className="w-full text-left px-3 py-1.5 hover:bg-amber-50 hover:text-amber-800 font-medium"
                >
                  🇺🇸 EN (English)
                </button>
                <button
                  onClick={() => setSelectedLanguage('ES')}
                  className="w-full text-left px-3 py-1.5 hover:bg-amber-50 hover:text-amber-800"
                >
                  🇪🇸 ES (Español)
                </button>
                <button
                  onClick={() => setSelectedLanguage('DE')}
                  className="w-full text-left px-3 py-1.5 hover:bg-amber-50 hover:text-amber-800"
                >
                  🇩🇪 DE (Deutsch)
                </button>
                <div className="border-t border-zinc-100 my-1"></div>
                <p className="px-3 py-0.5 text-[9px] text-zinc-400 uppercase tracking-widest">Base: USD ($)</p>
              </div>
            )}
          </div>

          <button className="hover:underline p-1 cursor-pointer hidden xs:inline whitespace-nowrap">
            Returns & <span className="font-bold text-white">Orders</span>
          </button>
        </div>
      </div>

      {/* TIER 2: MAIN HEADER BAR */}
      <div className="bg-[#19222d] text-white py-2.5 px-4 flex flex-col lg:flex-row lg:items-center justify-between gap-3 lg:gap-4">
        
        {/* Top/Front Row: Logo & Mobile Quick Actions */}
        <div className="flex items-center justify-between w-full lg:w-auto gap-4 shrink-0">
          {/* Brand Logo */}
          <button
            onClick={onLogoClick}
            id="brand-logo-btn"
            className="flex flex-col items-start leading-none pr-2 hover:ring-1 hover:ring-white p-1 rounded cursor-pointer shrink-0"
          >
            <div className="flex items-baseline text-2xl font-black italic tracking-tighter">
              <span>ama</span>
              <span className="text-amber-400">zen</span>
              <span className="text-[10px] not-italic font-bold tracking-widest text-[#4ade80] ml-1">PRO</span>
            </div>
            {/* CSS signature Amazon yellow arrow arc */}
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent -mt-0.5 rounded-full ml-1"></div>
          </button>

          {/* Mobile Right items (Only visible below LG screen sizes) */}
          <div className="flex items-center space-x-3 lg:hidden shrink-0">
            {/* Account compact trigger */}
            <button
              onClick={() => setShowAccountDropdown(!showAccountDropdown)}
              className="flex items-center space-x-1 hover:ring-1 hover:ring-white p-1 px-1.5 rounded text-xs font-bold text-white cursor-pointer relative"
            >
              <span>Guest</span>
              <ChevronDown className="h-3 w-3 text-stone-400" />
            </button>

            {/* Shopping Cart Trigger */}
            <button
              onClick={onOpenCart}
              className="flex items-center space-x-1.5 hover:ring-1 hover:ring-white p-1 rounded font-bold text-white cursor-pointer relative"
            >
              <div className="relative">
                <ShoppingCart className="h-6 w-6 text-white" />
                <span className="absolute -top-1 px-1.5 py-0.5 bg-amber-500 text-zinc-900 text-[10px] font-black rounded-full leading-none left-1/2 -translate-x-1/2 border border-[#19222d] shadow">
                  {cartItemCount}
                </span>
              </div>
            </button>
          </div>
        </div>

        {/* Massive Centralized Search Bar (with Suggestion Popover container) */}
        <div ref={searchRef} className="flex-1 max-w-4xl flex items-center h-10 shadow-sm rounded-md bg-white focus-within:ring-2 focus-within:ring-amber-500 relative">
          
          {/* Department Selector */}
          <div className="relative h-full bg-stone-100 hover:bg-stone-200 text-zinc-800 border-r border-stone-300 rounded-l-md shrink-0">
            <select
              value={selectedDepartment}
              onChange={(e) => onDepartmentChange(e.target.value)}
              id="department-selector"
              className="h-full pl-3 pr-7 text-xs bg-transparent border-none outline-none font-bold appearance-none cursor-pointer text-ellipsis max-w-[80px] xs:max-w-[130px]"
            >
              <option value="all">All</option>
              {DEPARTMENTS.filter(d => d !== 'All Departments').map(dept => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-stone-500 pointer-events-none" />
          </div>

          {/* Search Input */}
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              onSearchChange(e.target.value);
              setSearchFocused(true);
            }}
            onFocus={() => setSearchFocused(true)}
            onKeyDown={(e) => e.key === 'Enter' && (onSearchSubmit(), setSearchFocused(false))}
            placeholder={`Search and match items in ${selectedDepartment === 'all' ? 'everything' : selectedDepartment}...`}
            id="search-input"
            className="flex-1 px-3 text-sm text-zinc-900 bg-white border-none outline-none h-full placeholder-stone-400 min-w-0"
            autoComplete="off"
          />

          {/* Submit Search Button */}
          <button
            onClick={() => {
              onSearchSubmit();
              setSearchFocused(false);
            }}
            id="search-submit-btn"
            className="h-full bg-amber-400 hover:bg-amber-500 text-[#131921] px-5 flex items-center justify-center transition duration-150 cursor-pointer rounded-r-md shrink-0 border-l border-stone-200"
            aria-label="Submit search query"
          >
            <Search className="h-5 w-5 text-stone-900 stroke-[2.5]" />
          </button>

          {/* HIGH-DENSITY SUGGESTION DROP DOWN OVERLAY */}
          {searchFocused && searchQuery.trim().length > 0 && (
            <div className="absolute top-[42px] left-0 right-0 bg-white dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 rounded shadow-2xl overflow-hidden z-50 text-left">
              <div className="p-2 border-b border-stone-100 dark:border-zinc-850 bg-stone-50 dark:bg-zinc-850/40 text-[9px] text-stone-400 uppercase tracking-widest font-mono font-bold flex items-center justify-between">
                <span>Instant Matches</span>
                <span>Found: {liveSuggestions.length} items</span>
              </div>
              <ul className="divide-y divide-stone-150 dark:divide-zinc-850 max-h-80 overflow-y-auto">
                {liveSuggestions.length === 0 ? (
                  <li className="p-4 text-center text-xs text-stone-400">
                    No matching commodities found. Press ENTER to search entire repository.
                  </li>
                ) : (
                  liveSuggestions.map((prod) => (
                    <li key={prod.id}>
                      <button
                        type="button"
                        onClick={() => {
                          onSelectProduct?.(prod);
                          setSearchFocused(false);
                        }}
                        className="w-full text-left p-2 hover:bg-stone-50 dark:hover:bg-zinc-805 flex items-center space-x-3 transition cursor-pointer"
                      >
                        <img
                          src={prod.imageUrl}
                          alt={prod.title}
                          className="h-9 w-9 object-contain shrink-0 bg-stone-50 dark:bg-zinc-805 p-0.5 rounded"
                          referrerPolicy="no-referrer"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="text-[9px] uppercase font-black tracking-widest text-amber-700 dark:text-amber-400">
                              {prod.brand}
                            </span>
                            <span className="text-[9px] font-mono text-zinc-400">{prod.asin}</span>
                          </div>
                          <h5 className="text-xs font-bold text-zinc-900 dark:text-white truncate">
                            {prod.title}
                          </h5>
                          <p className="text-[10px] text-stone-500 dark:text-stone-400 line-clamp-1">
                            {prod.description}
                          </p>
                        </div>
                        <div className="text-right shrink-0">
                          <span className="text-xs font-black text-amber-600 dark:text-amber-400">
                            ${prod.price.toFixed(2)}
                          </span>
                          <span className="block text-[8px] text-stone-400">{prod.rating} ★</span>
                        </div>
                      </button>
                    </li>
                  ))
                )}
                <li className="bg-amber-50/50 dark:bg-amber-950/20">
                  <button
                    type="button"
                    onClick={() => {
                      onSearchSubmit();
                      setSearchFocused(false);
                    }}
                    className="w-full text-center py-2 text-xs font-extrabold text-amber-700 dark:text-amber-400 hover:underline hover:bg-amber-100/50 cursor-pointer"
                  >
                    See All Matches in Catalog Results →
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Desktop elements layout side widgets (Visible only on LG screen sizes and up) */}
        <div className="hidden lg:flex items-center space-x-5 shrink-0">
          
          {/* Account Lists drop */}
          <div className="relative">
            <button
              onClick={() => setShowAccountDropdown(!showAccountDropdown)}
              onBlur={() => setTimeout(() => setShowAccountDropdown(false), 200)}
              id="account-lists-btn"
              className="flex flex-col text-left hover:ring-1 hover:ring-white p-1 rounded leading-tight text-xs cursor-pointer"
            >
              <span className="text-stone-300 text-[10px]">Hello, Guest Account</span>
              <span className="font-bold flex items-center text-white">
                Account & Lists
                <ChevronDown className="h-3 w-3 text-stone-400 ml-1" />
              </span>
            </button>

            {showAccountDropdown && (
              <div className="absolute right-0 mt-2 bg-white text-zinc-900 border border-zinc-200 rounded shadow-2xl p-4 w-72 z-50 text-xs text-left">
                <div className="flex flex-col items-center justify-center pb-3 border-b border-zinc-100">
                  <button
                    onClick={() => alert('Mock Login Success! Ready for production.')}
                    className="w-full bg-gradient-to-b from-amber-300 to-amber-400 hover:from-amber-400 hover:to-amber-500 text-zinc-900 py-1.5 px-3 rounded text-center font-semibold shadow-sm text-xs cursor-pointer"
                  >
                    Sign in securely
                  </button>
                  <p className="text-[10px] text-zinc-500 mt-2">
                    New customer? <span className="text-blue-600 hover:underline cursor-pointer">Start here.</span>
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-3">
                  <div>
                    <h4 className="font-bold text-zinc-800 mb-1 text-[11px] uppercase tracking-wider">Your Lists</h4>
                    <ul className="space-y-1 text-zinc-650">
                      <li className="hover:text-amber-700 cursor-pointer hover:underline">Create a Wish List</li>
                      <li className="hover:text-amber-700 cursor-pointer hover:underline">Find a Registry</li>
                      <li className="hover:text-amber-700 cursor-pointer hover:underline">Amazen Labs Tracker</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-800 mb-1 text-[11px] uppercase tracking-wider">Your Account</h4>
                    <ul className="space-y-1 text-zinc-650">
                      <li className="hover:text-amber-700 cursor-pointer hover:underline">Customer Account</li>
                      <li className="hover:text-amber-700 cursor-pointer hover:underline">Recent Orders</li>
                      <li className="hover:text-amber-700 cursor-pointer hover:underline">Browsing History</li>
                      <li className="hover:text-amber-700 cursor-pointer hover:underline">Kindle Dashboard</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Shopping Cart Button */}
          <button
            onClick={onOpenCart}
            id="cart-trigger-btn"
            className="flex items-end space-x-1.5 hover:ring-1 hover:ring-white p-1 rounded font-bold text-white cursor-pointer relative"
          >
            <div className="relative">
              <ShoppingCart className="h-7 w-7 text-white" />
              <span className="absolute -top-1 px-1.5 py-0.5 bg-amber-500 text-zinc-900 text-xs font-black rounded-full leading-none left-1/2 -translate-x-1/2 border border-[#19222d] shadow">
                {cartItemCount}
              </span>
            </div>
            <span className="text-xs font-bold leading-none select-none pb-1 hidden sm:inline">Cart</span>
          </button>
        </div>
      </div>

      {/* TIER 3: SUB-NAV DEPARTMENTS */}
      <div className="bg-[#232f3e] text-zinc-100 text-xs leading-none py-1 px-4 flex items-center justify-between border-b border-[#2d3a4b]">
        <div className="flex items-center space-x-4 overflow-x-auto scrollbar-none py-1">
          <button
            onClick={() => onDepartmentChange('all')}
            className="flex items-center font-bold text-white hover:ring-1 hover:ring-white px-2 py-1.5 rounded transition cursor-pointer"
          >
            <Menu className="h-4 w-4 mr-1 stroke-[2.5]" />
            All
          </button>
          <button
            onClick={onNavigateToDeals}
            className="hover:ring-1 hover:ring-white px-2 py-1.5 rounded text-amber-300 font-bold tracking-tight cursor-pointer"
          >
            Today's Deals
          </button>
          <button
            onClick={() => alert('Connecting to Enterprise CSR Support API...')}
            className="hover:ring-1 hover:ring-white px-2 py-1.5  rounded cursor-pointer"
          >
            Customer Service
          </button>
          <button className="hover:ring-1 hover:ring-white px-2 py-1.5 rounded cursor-pointer hidden md:inline">Registry</button>
          <button className="hover:ring-1 hover:ring-white px-2 py-1.5 rounded cursor-pointer hidden md:inline">Gift Cards</button>
          <button className="hover:ring-1 hover:ring-white px-2 py-1.5 rounded cursor-pointer text-stone-300">Sell</button>
          <button className="hover:ring-1 hover:ring-white px-2 py-1.5 rounded cursor-pointer font-semibold text-emerald-400">Web Architecture Specials</button>
        </div>

        {/* Free shipping banner cue */}
        <div className="hidden lg:block text-slate-300 text-[11px] font-medium tracking-tight">
          📦 Super Saver Delivery: <strong className="text-amber-300">FREE Tomorrow</strong> on orders over $35
        </div>
      </div>

      {/* ZIP Code Modal */}
      {showLocationModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-2xl max-w-sm w-full p-6 text-zinc-900 border border-zinc-200 text-left">
            <h3 className="font-bold text-lg text-zinc-900 mb-2">Configure Routing Hub</h3>
            <p className="text-xs text-zinc-500 mb-4 leading-relaxed">
              Enter a US Zip Code to check real-time distribution logistics, stock availability levels, and matching delivery dates.
            </p>
            <form onSubmit={handleZipSubmit} className="space-y-3">
              <div>
                <label className="block text-[11px] font-bold uppercase text-zinc-400 mb-1">US Zip Code</label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    maxLength={5}
                    value={zipInput}
                    onChange={(e) => setZipInput(e.target.value.replace(/\D/g, ''))}
                    placeholder="e.g. 10001"
                    className="flex-1 px-3 py-2 border border-zinc-300 rounded text-sm bg-stone-100 uppercase tracking-widest font-mono text-zinc-800 outline-none focus:border-amber-500"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-amber-400 hover:bg-amber-500 text-zinc-900 font-bold px-4 py-2 rounded text-xs tracking-wider uppercase cursor-pointer transition shadow-xs"
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </form>
            <div className="border-t border-zinc-100 mt-4 pt-3 flex items-center justify-between text-[11px] text-zinc-400">
              <span>Standard ZIP: <strong className="text-zinc-650">10001 (NY)</strong></span>
              <button
                type="button"
                className="text-amber-700 hover:underline font-semibold"
                onClick={() => {
                  setZipInput('10001');
                  setDeliverZip('10001');
                  setShowLocationModal(false);
                }}
              >
                Reset Default
              </button>
            </div>
            <button
              onClick={() => setShowLocationModal(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-650 font-bold"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
