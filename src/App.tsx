import React, { useState, useEffect, useMemo } from 'react';
import { ThreeTierHeader } from './components/ThreeTierHeader';
import { HeroCarousel } from './components/HeroCarousel';
import { GatewayGrid } from './components/GatewayGrid';
import { SidebarFilters } from './components/SidebarFilters';
import { ProductGrid } from './components/ProductGrid';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { MOCK_PRODUCTS } from './data';
import { Product, CartItem, FilterState } from './types';
import { Compass, ShoppingCart, ShieldCheck, Flame, Info, ExternalLink, Sparkles, AlertCircle, Bookmark } from 'lucide-react';

export default function App() {
  // --- INGREDIENT STATE MANAGEMENT ---
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('amazen_cart_v1');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [deliverZip, setDeliverZip] = useState(() => {
    return localStorage.getItem('amazen_zip_v1') || '10001';
  });

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('amazen_theme_dark');
    return saved === 'true';
  });

  const [activeView, setActiveView] = useState<'homepage' | 'catalog'>('homepage');
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [sortBy, setSortBy] = useState<string>('featured');

  // --- FACTION SEARCH FILTERS STATE ---
  const [filterState, setFilterState] = useState<FilterState>({
    department: 'all',
    rating: null,
    brands: [],
    priceMin: 10,
    priceMax: 600,
    shippingSpeed: null,
    onlyDeals: false,
    searchQuery: ''
  });

  // --- SYNCHRONIZATION EFFECT LABELS ---
  useEffect(() => {
    try {
      localStorage.setItem('amazen_cart_v1', JSON.stringify(cartItems));
    } catch (e) {
      console.error('Error writing cart state to disk', e);
    }
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem('amazen_zip_v1', deliverZip);
  }, [deliverZip]);

  // Master Theme synchronization on document.documentElement
  useEffect(() => {
    localStorage.setItem('amazen_theme_dark', isDarkMode.toString());
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  // --- SELECTION ENGINE ACTION PROCEDURES ---
  const handleDepartmentChange = (dept: string) => {
    setFilterState((prev) => ({
      ...prev,
      department: dept
    }));
    setActiveView('catalog');
  };

  const handleSearchSubmit = () => {
    setActiveView('catalog');
  };

  const handleBrandToggle = (brandName: string) => {
    setFilterState((prev) => {
      const isSelected = prev.brands.includes(brandName);
      if (isSelected) {
        return { ...prev, brands: prev.brands.filter((b) => b !== brandName) };
      } else {
        return { ...prev, brands: [...prev.brands, brandName] };
      }
    });
  };

  const handlePriceChange = (min: number, max: number) => {
    setFilterState((prev) => ({
      ...prev,
      priceMin: min,
      priceMax: max
    }));
  };

  const handleShippingChange = (speed: string | null) => {
    setFilterState((prev) => ({
      ...prev,
      shippingSpeed: speed
    }));
  };

  const handleToggleDeals = () => {
    setFilterState((prev) => ({
      ...prev,
      onlyDeals: !prev.onlyDeals
    }));
  };

  const handleResetFilters = () => {
    setFilterState({
      department: 'all',
      rating: null,
      brands: [],
      priceMin: 10,
      priceMax: 600,
      shippingSpeed: null,
      onlyDeals: false,
      searchQuery: ''
    });
    setSortBy('featured');
  };

  const handleLogoClick = () => {
    handleResetFilters();
    setActiveView('homepage');
  };

  const handleNavigateToDeals = () => {
    handleResetFilters();
    setFilterState((prev) => ({ ...prev, onlyDeals: true }));
    setActiveView('catalog');
  };

  // --- CART MUTATORS ---
  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const matchIdx = prev.findIndex((item) => item.product.id === product.id);
      if (matchIdx > -1) {
        const updated = [...prev];
        updated[matchIdx].quantity += 1;
        return updated;
      } else {
        return [...prev, { product, quantity: 1 }];
      }
    });
    // Trigger cart drawer open as a positive tactile cue
    setIsCartOpen(true);
  };

  const handleBuyNow = (product: Product) => {
    setCartItems((prev) => {
      const matchIdx = prev.findIndex((item) => item.product.id === product.id);
      if (matchIdx > -1) {
        return prev;
      } else {
        return [...prev, { product, quantity: 1 }];
      }
    });
    // Open cart in checkout action mode
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCartItems((prev) => {
      return prev
        .map((item) => {
          if (item.product.id === productId) {
            const nextQty = item.quantity + delta;
            return { ...item, quantity: nextQty };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);
    });
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleCheckoutSecurely = () => {
    const totalCount = cartItems.reduce((acc, match) => acc + match.quantity, 0);
    const totalCost = cartItems.reduce((acc, match) => acc + (match.product.price * match.quantity), 0);
    alert(`💳 SECURE TRANSACTION PROCESSING SIMULATION\n\n- Package Routing Hub: ZIP ${deliverZip}\n- Total Merchandise Count: ${totalCount} units\n- Total Cost (inc. Tax/Deliveries): $${totalCost.toFixed(2)}\n\nThank you for choosing Amazen Enterprise Storefront! Your orders compile on our platform instantly.`);
    setCartItems([]);
    setIsCartOpen(false);
  };

  // --- FILTER & SORT CALCIFICATION PIPELINE (USEMEMO) ---
  const filteredProducts = useMemo(() => {
    return MOCK_PRODUCTS.filter((product) => {
      // 1. Department match
      if (filterState.department !== 'all') {
        const canonicalDept = filterState.department.toLowerCase();
        if (product.department.toLowerCase() !== canonicalDept) {
          return false;
        }
      }

      // 2. Star ratings map
      if (filterState.rating !== null) {
        if (product.rating < filterState.rating) {
          return false;
        }
      }

      // 3. Brand checkbox checks
      if (filterState.brands.length > 0) {
        if (!filterState.brands.includes(product.brand)) {
          return false;
        }
      }

      // 4. Price bounds
      if (product.price < filterState.priceMin || product.price > filterState.priceMax) {
        return false;
      }

      // 5. Shipping speeds
      if (filterState.shippingSpeed === 'tomorrow') {
        if (product.shippingSpeed !== 'tomorrow') {
          return false;
        }
      } else if (filterState.shippingSpeed === 'two-day') {
        if (product.shippingSpeed !== 'tomorrow' && product.shippingSpeed !== 'two-day') {
          return false;
        }
      }

      // 6. Only promo deals
      if (filterState.onlyDeals) {
        if (!product.listPrice) {
          return false;
        }
      }

      // 7. Dynamic text input search match (check title, brand, description, and ASIN code matches!)
      if (filterState.searchQuery.trim() !== '') {
        const query = filterState.searchQuery.toLowerCase();
        const isInTitle = product.title.toLowerCase().includes(query);
        const isInDesc = product.description.toLowerCase().includes(query);
        const isInBrand = product.brand.toLowerCase().includes(query);
        const isInAsin = product.asin.toLowerCase().includes(query);

        if (!isInTitle && !isInDesc && !isInBrand && !isInAsin) {
          return false;
        }
      }

      return true;
    });
  }, [filterState]);

  // Apply sorting models on top of filtered array
  const sortedAndFilteredProducts = useMemo(() => {
    const list = [...filteredProducts];
    if (sortBy === 'price-asc') {
      return list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      return list.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      return list.sort((a, b) => b.rating - a.rating);
    }
    // Featured default - relevance order based on primary data
    return list;
  }, [filteredProducts, sortBy]);

  const totalCartCount = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  }, [cartItems]);

  return (
    <div id="amazen-root-container" className="min-h-screen bg-stone-100 dark:bg-zinc-950 font-sans text-zinc-900 dark:text-stone-100 transition-colors duration-200 flex flex-col justify-between">
      
      {/* 3-TIER MASTER NAV BAR */}
      <ThreeTierHeader
        cartItemCount={totalCartCount}
        selectedDepartment={filterState.department}
        onDepartmentChange={handleDepartmentChange}
        searchQuery={filterState.searchQuery}
        onSearchChange={(q) => setFilterState((prev) => ({ ...prev, searchQuery: q }))}
        onSearchSubmit={handleSearchSubmit}
        isDarkMode={isDarkMode}
        toggleTheme={() => setIsDarkMode(!isDarkMode)}
        onLogoClick={handleLogoClick}
        onNavigateToDeals={handleNavigateToDeals}
        deliverZip={deliverZip}
        setDeliverZip={setDeliverZip}
        onOpenCart={() => setIsCartOpen(true)}
        onSelectProduct={setActiveProduct}
      />

      {/* VIEW PANEL ROUTER ROUTING */}
      <main id="amazen-main-layout" className="flex-1 pb-16">
        {activeView === 'homepage' ? (
          /* HOMEPAGE FLUID LAYOUT */
          <div className="w-full space-y-8">
            {/* Promo Carousel */}
            <HeroCarousel onCtaClick={handleDepartmentChange} />

            {/* Dashboard Bento grids (Brings incredible high information density below) */}
            <GatewayGrid
              products={MOCK_PRODUCTS}
              onSelectProduct={setActiveProduct}
              onNavigateToDepartment={handleDepartmentChange}
            />

            {/* HIGH-DENSITY HIGHLIGHT SHELF */}
            <div className="max-w-7xl mx-auto px-4 md:-mt-10 lg:-mt-12">
              <div className="bg-gradient-to-r from-[#19222d] to-[#253242] text-white p-5 rounded border border-zinc-850 shadow-md text-left flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="inline-flex items-center space-x-1 bg-amber-400 text-zinc-950 text-[10px] uppercase font-black px-1.5 rounded">
                    <Sparkles className="h-3 w-3" />
                    <span>PRO ACCESS</span>
                  </div>
                  <h3 className="font-black text-base md:text-lg tracking-tight">Need a full technical catalog revision?</h3>
                  <p className="text-stone-300 text-xs max-w-xl leading-relaxed">
                    Filter across 15+ highly responsive computer panels, physical home cookers, sports titanium watches, and structured books with one single dynamic workspace.
                  </p>
                </div>
                <button
                  onClick={() => {
                    handleResetFilters();
                    setActiveView('catalog');
                  }}
                  className="bg-amber-400 hover:bg-amber-500 text-zinc-950 font-black px-5 py-2.5 rounded-sm transition tracking-wider uppercase text-xs cursor-pointer shadow whitespace-nowrap"
                >
                  Inspect Full Catalog
                </button>
              </div>
            </div>

            {/* HOME STRIP: QUICK TRENDING CARDS (DEAL GRID) */}
            <div className="max-w-7xl mx-auto px-4 space-y-4">
              <div className="flex items-center space-x-2 border-b border-stone-200 dark:border-zinc-800 pb-2 text-left">
                <Flame className="h-5 w-5 text-red-500" />
                <h3 className="font-extrabold text-lg text-zinc-900 dark:text-white tracking-tight uppercase">
                  Trending Deals of the Day
                </h3>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {MOCK_PRODUCTS.filter((p) => p.isBestSeller || p.isAmazonsChoice).slice(0, 6).map((prod) => (
                  <button
                    key={prod.id}
                    onClick={() => setActiveProduct(prod)}
                    className="bg-white dark:bg-zinc-900 p-3 rounded border border-stone-200/60 dark:border-zinc-800 text-left group hover:border-amber-400 transition"
                  >
                    <div className="aspect-square bg-stone-50 dark:bg-zinc-805 rounded overflow-hidden p-1 flex items-center justify-center mb-2">
                      <img
                        src={prod.imageUrl}
                        alt={prod.title}
                        className="max-h-full max-w-full object-contain group-hover:scale-105 transition"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <span className="text-[9px] bg-red-650 text-white font-extrabold px-1 py-0.5 rounded uppercase">
                      Deal
                    </span>
                    <h4 className="text-xs font-bold text-zinc-900 dark:text-white truncate mt-2">
                      {prod.title}
                    </h4>
                    <p className="text-[11px] font-mono font-black text-amber-700 dark:text-amber-400 mt-0.5">
                      ${prod.price.toFixed(2)}
                    </p>
                  </button>
                ))}
              </div>
            </div>

          </div>
        ) : (
          /* DETAILED ADVANCED CATALOG / COUPLING VIEW */
          <div className="max-w-7xl mx-auto px-4 mt-6">
            <div className="flex flex-col md:flex-row gap-6">
              
              {/* SIDEBAR DEEP FACET FILTERS */}
              <SidebarFilters
                selectedDepartment={filterState.department}
                onDepartmentSelect={handleDepartmentChange}
                selectedRating={filterState.rating}
                onRatingSelect={(rating) => setFilterState((prev) => ({ ...prev, rating }))}
                selectedBrands={filterState.brands}
                onBrandToggle={handleBrandToggle}
                priceMin={filterState.priceMin}
                priceMax={filterState.priceMax}
                onPriceChange={handlePriceChange}
                selectedShipping={filterState.shippingSpeed}
                onShippingChange={handleShippingChange}
                onlyDeals={filterState.onlyDeals}
                onToggleDeals={handleToggleDeals}
                onResetFilters={handleResetFilters}
              />

              {/* HIGH-DENSITY PRODUCT LISTING CONTAINER */}
              <ProductGrid
                products={sortedAndFilteredProducts}
                onSelectProduct={setActiveProduct}
                onAddToCart={handleAddToCart}
                onBuyNow={handleBuyNow}
                sortBy={sortBy}
                onSortChange={setSortBy}
              />

            </div>
          </div>
        )}
      </main>

      {/* MODAL DIALOG QUICK-VIEW PANEL */}
      {activeProduct && (
        <ProductDetailModal
          product={activeProduct}
          onClose={() => setActiveProduct(null)}
          onAddToCart={handleAddToCart}
          onBuyNow={handleBuyNow}
        />
      )}

      {/* CART SLIDE-OUT PANEL BAR */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        allProducts={MOCK_PRODUCTS}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onAddToCart={handleAddToCart}
        onCheckout={handleCheckoutSecurely}
      />

      {/* MASTER FOOTER (AMAZON ENTERPRISE CREDIT STAGES) */}
      <footer id="amazen-master-footer" className="bg-[#19222d] text-zinc-400 text-xs py-10 border-t border-zinc-800 tracking-tight">
        <div className="max-w-7xl mx-auto px-4 space-y-8 select-none">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-left border-b border-zinc-800 pb-8">
            <div>
              <h4 className="font-black text-[11px] text-white uppercase tracking-wider mb-3">Get to Know Us</h4>
              <ul className="space-y-1.5 text-stone-300">
                <li className="hover:underline cursor-pointer">Careers at Amazen</li>
                <li className="hover:underline cursor-pointer">Investor Relations</li>
                <li className="hover:underline cursor-pointer">Amazen Smart Devices</li>
                <li className="hover:underline cursor-pointer">Sustainability Programs</li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-[11px] text-white uppercase tracking-wider mb-3">Amazen Payment Products</h4>
              <ul className="space-y-1.5 text-stone-300">
                <li className="hover:underline cursor-pointer">Amazen Business Account</li>
                <li className="hover:underline cursor-pointer">Credit Card Integration</li>
                <li className="hover:underline cursor-pointer">Shop with Rewards Points</li>
                <li className="hover:underline cursor-pointer">Reload Your Balance</li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-[11px] text-white uppercase tracking-wider mb-3">Let Us Help You</h4>
              <ul className="space-y-1.5 text-stone-300">
                <li className="hover:underline cursor-pointer">Your Account Portal</li>
                <li className="hover:underline cursor-pointer">Delivery Rates & Logistics</li>
                <li className="hover:underline cursor-pointer">Returns & Exchanges</li>
                <li className="hover:underline cursor-pointer">Amazen Assistant Support</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-black text-[11px] text-white uppercase tracking-wider mb-1">Logistics Status</h4>
              <div className="bg-zinc-950 p-3.5 rounded border border-zinc-800 text-left space-y-1.5 font-mono text-[10px]">
                <p>BASE_CONTAINER: <strong className="text-emerald-400">NOMINAL</strong></p>
                <p>ROUTING_PORT: <strong className="text-stone-300">3000 (INGRESS)</strong></p>
                <p className="text-[9px] text-sky-400">SSL verified encryption handshake ok</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-baseline text-lg font-black italic text-white leading-none">
              <span>ama</span>
              <span className="text-amber-400">zen</span>
            </div>
            <p className="text-[11px] text-stone-500 leading-normal text-center sm:text-right">
              © 2026 Amazen Corporation. Developed securely for portfolio assessment. All pictures Unsplash. SSL certified checkout layers. Standard metadata keys are active.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
