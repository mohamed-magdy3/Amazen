import React from 'react';
import { CartItem, Product } from '../types';
import { X, Plus, Minus, Trash2, CornerDownRight, Coins, Lock } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  allProducts: Product[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onAddToCart: (product: Product) => void;
  onCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  allProducts,
  onUpdateQuantity,
  onRemoveItem,
  onAddToCart,
  onCheckout
}) => {
  if (!isOpen) return null;

  // Compute stats
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cartItems.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);

  // Cross-sell recommendations based on items in the cart
  // Find "frequentlyBoughtWith" IDs of products in cart, or fall back to products in same departments
  const inCartIds = cartItems.map((item) => item.product.id);
  
  // Extract custom recommendations
  const recommendedIds = Array.from(
    new Set(
      cartItems.flatMap((item) => item.product.frequentlyBoughtWith || [])
    )
  ).filter((id) => !inCartIds.includes(id));

  // Load actual Product objects matching recommendations, or use default high-rated products
  let recommendations = allProducts.filter((p) => recommendedIds.includes(p.id));
  
  // If no specific recommendations, append popular items not in cart
  if (recommendations.length < 2) {
    const popularFallbacks = allProducts
      .filter((p) => !inCartIds.includes(p.id))
      .slice(0, 3);
    recommendations = [...recommendations, ...popularFallbacks].slice(0, 3);
  }

  return (
    <div className="fixed inset-0 z-50 overflow-hidden select-none">
      {/* Black backdrop overlay */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity duration-300" 
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white dark:bg-zinc-900 shadow-2xl flex flex-col justify-between border-l border-stone-200 dark:border-zinc-850 transition">
          
          {/* CART HEADER */}
          <div className="px-5 py-4 bg-[#19222d] text-white flex items-center justify-between border-b border-zinc-700">
            <div className="flex items-center space-x-2">
              <span className="font-mono text-[10px] bg-amber-500 text-zinc-950 px-1.5 py-0.5 rounded font-black">
                BASKET
              </span>
              <h2 className="text-sm font-black uppercase tracking-wider">Your Shopping Cart</h2>
            </div>
            <button
              onClick={onClose}
              className="text-stone-300 hover:text-white bg-zinc-805 p-1 rounded transition cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* CENTRAL PRODUCTS AREA (SCROLLABLE) */}
          <div className="flex-1 overflow-y-auto max-h-[calc(100vh-280px)] p-4 space-y-4 scrollbar-thin">
            {cartItems.length === 0 ? (
              <div className="text-center py-16 text-stone-400 space-y-3.5">
                <div className="h-12 w-12 rounded-full border border-stone-305 dark:border-zinc-800 flex items-center justify-center mx-auto text-stone-330">
                  🗑️
                </div>
                <h4 className="font-bold text-zinc-900 dark:text-white text-sm">Your basket is totally empty</h4>
                <p className="text-xs text-stone-450 max-w-xs mx-auto leading-relaxed">
                  Explore our elite technical monitors, home multi-fryers, outdoor carbon equipment, and specialized research guidelines to load your basket!
                </p>
                <div className="pt-2">
                  <button
                    onClick={onClose}
                    className="border border-amber-500 hover:bg-amber-50 dark:hover:bg-amber-955 text-amber-700 dark:text-amber-400 text-xs font-bold px-4 py-2 rounded transition cursor-pointer"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                {cartItems.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex p-3 bg-stone-50 dark:bg-zinc-805/45 border border-stone-200/60 dark:border-zinc-800 rounded-sm relative group text-left"
                  >
                    {/* Tiny thumbnail */}
                    <div className="h-16 w-16 bg-white rounded overflow-hidden p-1 flex items-center justify-center shrink-0 border border-stone-150">
                      <img
                        src={item.product.imageUrl}
                        alt={item.product.title}
                        className="max-h-full max-w-full object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Meta & quantity controllers */}
                    <div className="ml-3 flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="text-xs font-bold text-zinc-900 dark:text-white line-clamp-2 leading-snug">
                          {item.product.title}
                        </h4>
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-xs text-zinc-90 w font-extrabold font-mono">
                            ${(item.product.price * item.quantity).toFixed(2)}
                          </span>
                          <span className="text-[10px] text-stone-404">
                            (${item.product.price.toFixed(2)} ea)
                          </span>
                        </div>
                      </div>

                      {/* Control toolbar */}
                      <div className="flex items-center justify-between mt-2.5">
                        
                        {/* Quantity operators */}
                        <div className="flex items-center space-x-1 border border-stone-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 rounded-sm">
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, -1)}
                            className="p-1 px-2.5 hover:bg-stone-100 dark:hover:bg-zinc-800 text-stone-500 dark:text-stone-300 font-bold transition cursor-pointer"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="px-2 text-xs font-mono font-bold text-zinc-800 dark:text-white select-none">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, 1)}
                            className="p-1 px-2.5 hover:bg-stone-100 dark:hover:bg-zinc-800 text-stone-500 dark:text-stone-300 font-bold transition cursor-pointer"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>

                        {/* Trash delete */}
                        <button
                          onClick={() => onRemoveItem(item.product.id)}
                          className="text-stone-400 hover:text-red-500 p-1.5 rounded hover:bg-red-50 dark:hover:bg-red-955 transition cursor-pointer"
                          title="Wipe item from basket"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            )}
          </div>

          {/* LOWER FIXED ACTIONS & REC CROSS-SELL MODULE */}
          <div className="border-t border-stone-200 dark:border-zinc-800 bg-stone-50 dark:bg-[#12141c]">
            
            {/* CROSS-SELL COMPONENT SLIDER (FREQUENTLY BOUGHT TOGETHER) */}
            {recommendations.length > 0 && cartItems.length > 0 && (
              <div className="p-3 bg-amber-50/40 dark:bg-amber-955/5 border-b border-stone-150 dark:border-zinc-805 text-left">
                <h3 className="text-[10px] font-black tracking-wider uppercase text-amber-800 dark:text-amber-400 mb-2 flex items-center">
                  <CornerDownRight className="h-3.5 w-3.5 mr-1" />
                  Frequently Bought Together:
                </h3>
                
                <div className="flex space-x-2.5 overflow-x-auto scrollbar-none pb-1">
                  {recommendations.map((prod) => (
                    <div
                      key={prod.id}
                      className="flex-shrink-0 w-36 bg-white dark:bg-zinc-805 p-2 rounded border border-stone-200/80 dark:border-zinc-800 flex flex-col justify-between space-y-1 text-left shadow-xs"
                    >
                      <div className="space-y-1">
                        <div className="h-10 w-full bg-stone-50 dark:bg-zinc-900 rounded flex items-center justify-center p-0.5 select-none">
                          <img
                            src={prod.imageUrl}
                            alt={prod.title}
                            className="h-full object-contain"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <h4 className="text-[9px] font-bold text-zinc-905 dark:text-stone-300 truncate leading-tight">
                          {prod.title}
                        </h4>
                        <p className="text-[9px] font-mono font-black text-zinc-900 dark:text-white">
                          ${prod.price.toFixed(2)}
                        </p>
                      </div>
                      <button
                        onClick={() => onAddToCart(prod)}
                        id={`cross-sell-add-${prod.id}`}
                        className="w-full bg-amber-400 hover:bg-amber-500 text-zinc-900 text-[9px] font-black py-1 px-1.5 rounded-sm transition cursor-pointer text-center whitespace-nowrap"
                      >
                        + Add Basket
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CART SUBTOTAL SUMMARY AREA */}
            <div className="p-4 space-y-3.5">
              <div className="flex items-center justify-between text-xs">
                <div>
                  <p className="text-stone-500 dark:text-stone-400 font-medium">Logistic Shipping:</p>
                  <p className="text-[9px] text-stone-405 font-mono">CODE: EXPRESS_CARRIER</p>
                </div>
                <p className="text-right text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-tight">
                  {subtotal > 35 ? 'FREE Tomorrow' : '+$5.99 Ship Fee'}
                </p>
              </div>

              <div className="flex items-baseline justify-between">
                <span className="text-xs font-bold text-stone-500">
                  Subtotal ({totalItems} items):
                </span>
                <span className="text-xl font-black text-zinc-900 dark:text-white font-mono">
                  ${subtotal.toFixed(2)}
                </span>
              </div>

              <div className="space-y-1.5">
                <button
                  onClick={onCheckout}
                  disabled={cartItems.length === 0}
                  className={`w-full py-3 rounded font-black text-xs tracking-wider uppercase shadow-md flex items-center justify-center space-x-2 cursor-pointer transition ${
                    cartItems.length === 0
                      ? 'bg-stone-300 text-stone-450 cursor-not-allowed opacity-50 shadow-none'
                      : 'bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-zinc-900 duration-150 active:scale-95'
                  }`}
                >
                  <Lock className="h-4 w-4" />
                  <span>Secure Checkout</span>
                </button>
                <div className="flex justify-center items-center space-x-1 text-[10px] text-stone-405">
                  <span className="text-emerald-600">✓</span>
                  <span>SSL encrypted checkout transaction layers</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
