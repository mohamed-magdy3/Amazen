import React, { useState } from 'react';
import { Product } from '../types';
import { Star, ShieldAlert, BadgeCheck, ShoppingCart, HelpCircle, X, Check, Award, Flame } from 'lucide-react';

interface ProductDetailModalProps {
  product: Product;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
  onBuyNow: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onBuyNow
}) => {
  const [activeImage, setActiveImage] = useState(product.imageUrl);
  const [votedReviews, setVotedReviews] = useState<Record<string, boolean>>({});

  const handleHelpfulClick = (reviewId: string) => {
    if (votedReviews[reviewId]) return;
    setVotedReviews((prev) => ({ ...prev, [reviewId]: true }));
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-xs flex items-center justify-center z-50 p-4 transition-all duration-300">
      <div 
        className="bg-white dark:bg-zinc-900 rounded-lg shadow-2xl w-full max-w-5xl h-full max-h-[90vh] flex flex-col overflow-hidden border border-stone-200 dark:border-zinc-800 transition"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* MODAL HEADER */}
        <div className="bg-[#19222d] text-white px-5 py-3.5 flex items-center justify-between border-b border-zinc-700">
          <div className="flex items-center space-x-2.5">
            <span className="bg-[#c45500] text-white text-[9px] font-black px-2 py-0.5 rounded tracking-wide uppercase">
              Elite Tech Spec
            </span>
            <p className="text-xs font-mono text-stone-300">
              ASIN Registration: <strong className="text-amber-400 select-all font-bold">{product.asin}</strong>
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-stone-300 hover:text-white bg-zinc-800 hover:bg-zinc-700 p-1.5 rounded-full transition cursor-pointer"
            aria-label="Close modal viewer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* MODAL BODY (SCROLLABLE AREA) */}
        <div className="flex-1 overflow-y-auto p-5 md:p-8 space-y-8 scrollbar-thin text-left">
          
          {/* TOP MODULE: TWO COLUMN BRAND METRICS & CART ACTIONS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* COLUMN 1: INTERACTIVE IMAGE PICKER VIEW & SLIDER */}
            <div className="space-y-4">
              <div className="aspect-square w-full bg-stone-50 dark:bg-zinc-805/40 p-4 rounded border border-stone-200/60 dark:border-zinc-800/80 flex items-center justify-center">
                <img
                  src={activeImage}
                  alt={product.title}
                  className="max-h-80 md:max-h-96 object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Alternate Thumbnail Panel */}
              {product.thumbnails && product.thumbnails.length > 1 && (
                <div className="flex justify-center space-x-2 pr-2">
                  {product.thumbnails.map((thumb, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(thumb)}
                      className={`h-16 w-16 p-1 bg-stone-50 dark:bg-zinc-805 rounded border-2 cursor-pointer transition ${
                        activeImage === thumb
                          ? 'border-amber-500 ring-1 ring-amber-400'
                          : 'border-stone-205 dark:border-zinc-800'
                      }`}
                    >
                      <img
                        src={thumb}
                        alt={`Angle ${idx + 1}`}
                        className="h-full w-full object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* COLUMN 2: BRAND SPECIFICS, BADGES & ACQUISITION */}
            <div className="flex flex-col justify-between">
              <div className="space-y-4">
                
                {/* Brand and Ribbon Line */}
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-extrabold uppercase bg-amber-100 dark:bg-amber-955 text-amber-800 dark:text-amber-300 px-2 py-0.5 rounded tracking-widest">
                    Brand: {product.brand}
                  </span>
                  {product.isBestSeller && (
                    <span className="bg-[#c45500] text-white text-[9px] font-black px-2 py-0.5 rounded uppercase font-mono tracking-widest">
                      Best Seller
                    </span>
                  )}
                  {product.isAmazonsChoice && (
                    <span className="bg-slate-900 dark:bg-zinc-300 text-white dark:text-zinc-900 text-[9px] font-black px-2 py-0.5 rounded uppercase font-mono tracking-widest">
                      AmazenChoice
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-base md:text-xl font-black text-zinc-900 dark:text-white leading-tight">
                  {product.title}
                </h3>

                {/* Star rating summary */}
                <div className="flex items-center space-x-2">
                  <div className="flex items-center text-amber-550 mr-1">
                    {[...Array(5)].map((_, idx) => (
                      <Star
                        key={idx}
                        className={`h-4 w-4 ${
                          idx < Math.floor(product.rating)
                            ? 'fill-current'
                            : 'text-stone-200 dark:text-zinc-700'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-black text-zinc-900 dark:text-white">{product.rating} stars</span>
                  <span className="text-stone-400 dark:text-stone-500">•</span>
                  <span className="text-xs text-stone-505 font-bold">
                    {product.reviewCount.toLocaleString()} Customer Ratings
                  </span>
                </div>

                {/* Separation Line */}
                <hr className="border-stone-100 dark:border-zinc-800" />

                {/* Micro Price metrics */}
                <div className="flex items-baseline space-x-3">
                  <span className="text-3xl font-black text-zinc-900 dark:text-white">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.listPrice && (
                    <div className="text-xs text-stone-400">
                      Standard List Price:{' '}
                      <span className="line-through font-medium">${product.listPrice.toFixed(2)}</span>{' '}
                      <span className="text-red-600 dark:text-red-400 font-bold">
                        (Save ${ (product.listPrice - product.price).toFixed(2) })
                      </span>
                    </div>
                  )}
                </div>

                {/* Fulfillment specifics */}
                <div className="bg-stone-50 dark:bg-zinc-805/40 rounded p-3.5 border border-stone-100 dark:border-zinc-805 space-y-1">
                  <p className="text-xs text-zinc-800 dark:text-stone-200">
                    📦 Logistic Status: <strong className="text-emerald-600 dark:text-emerald-400">Available • In Stock</strong> (Ready to dispatch)
                  </p>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    Get it as fast as <strong className="text-zinc-800 dark:text-stone-100">{product.shippingSpeed === 'tomorrow' ? 'Tomorrow morning' : 'within 2 Days'}</strong>. Ships securely inside signature cardboard parcels.
                  </p>
                </div>

                {/* Rich Bullets feature description */}
                <div>
                  <h4 className="font-bold text-xs text-zinc-800 dark:text-stone-300 mb-2 uppercase tracking-wide">
                    About this product:
                  </h4>
                  <ul className="text-xs text-stone-600 dark:text-stone-400 space-y-2 list-disc pl-4 leading-relaxed">
                    {product.features ? product.features.map((feature, idx) => (
                      <li key={idx}>
                        <strong className="text-zinc-800 dark:text-stone-250 uppercase text-[10px] tracking-wider block">
                          {feature.split(':')[0]}:
                        </strong>
                        <span>{feature.split(':')[1] || feature}</span>
                      </li>
                    )) : (
                      <li>{product.description}</li>
                    )}
                  </ul>
                </div>

              </div>

              {/* ACTION COMPONENT FOOTER */}
              <div className="grid grid-cols-2 gap-3 mt-6 pt-5 border-t border-stone-200 dark:border-zinc-800">
                <button
                  onClick={() => {
                    onAddToCart(product);
                  }}
                  className="bg-amber-400 hover:bg-amber-500 text-zinc-950 font-black py-3 px-4 rounded shadow hover:shadow-md cursor-pointer transition flex items-center justify-center space-x-2"
                >
                  <ShoppingCart className="h-4.5 w-4.5" />
                  <span>Add to Cart</span>
                </button>

                <button
                  onClick={() => {
                    onBuyNow(product);
                    onClose();
                  }}
                  className="bg-amber-550 hover:bg-amber-600 text-zinc-950 font-black py-3 px-4 rounded shadow hover:shadow-md cursor-pointer transition flex items-center justify-center"
                >
                  <span>Quick Checkout</span>
                </button>
              </div>

            </div>
          </div>

          {/* MIDDLE MODULE: HIGH-DENSITY SPECIFICATIONS BLOCK CHASSIS */}
          <div>
            <h3 className="text-sm font-black text-zinc-900 dark:text-white uppercase tracking-wider mb-3.5 pb-2 border-b border-stone-200 dark:border-zinc-805 flex items-center">
              <Award className="h-4 w-4 mr-2 text-amber-500" />
              Technical Characterization & Metadata
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1.5 font-mono text-xs">
              {product.specifications.map((spec, idx) => (
                <div 
                  key={idx} 
                  className={`flex justify-between py-2 px-3 border-b border-stone-100 dark:border-zinc-805 ${
                    idx % 4 < 2 ? 'bg-stone-50/60 dark:bg-zinc-805/20' : ''
                  }`}
                >
                  <span className="text-stone-500 dark:text-stone-400 text-[11px] font-bold">{spec.label}</span>
                  <span className="text-zinc-800 dark:text-stone-200 text-[11px] font-semibold text-right max-w-xs truncate">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* LOWER MODULE: CLIENT OPINIONS & EXPERIENCES (REVIEWS) */}
          <div className="space-y-4">
            <h3 className="text-sm font-black text-zinc-900 dark:text-white uppercase tracking-wider pb-2 border-b border-stone-200 dark:border-zinc-805 flex items-center">
              <Flame className="h-4 w-4 mr-2 text-red-500 animate-pulse" />
              Customer Reviews ({product.reviewCount.toLocaleString()})
            </h3>

            {product.reviews && product.reviews.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {product.reviews.map((review) => {
                  const hasVoted = votedReviews[review.id];
                  return (
                    <div 
                      key={review.id} 
                      className="bg-white dark:bg-zinc-805 p-4 rounded border border-stone-200 dark:border-zinc-800/80 hover:border-stone-300 dark:hover:border-zinc-750 transition flex flex-col justify-between"
                    >
                      <div className="space-y-2">
                        {/* Profile Header */}
                        <div className="flex items-center space-x-2.5">
                          <div className="h-7 w-7 bg-amber-100 dark:bg-zinc-700 rounded-full flex items-center justify-center font-bold text-amber-800 dark:text-amber-100 text-xs text-center border border-amber-200 dark:border-zinc-650">
                            {review.author[0]}
                          </div>
                          <div>
                            <p className="text-xs font-bold text-zinc-900 dark:text-white leading-tight">{review.author}</p>
                            <p className="text-[10px] text-stone-400">Date Posted: {review.date}</p>
                          </div>
                        </div>

                        {/* Stars & Title */}
                        <div className="flex items-center space-x-2">
                          <div className="flex text-amber-550">
                            {[...Array(5)].map((_, idx) => (
                              <Star
                                key={idx}
                                className={`h-3 w-3 ${idx < review.rating ? 'fill-current' : 'text-stone-200 dark:text-zinc-700'}`}
                              />
                            ))}
                          </div>
                          <span className="text-xs font-black text-zinc-900 dark:text-white">{review.title}</span>
                        </div>

                        {/* Verified Badge */}
                        {review.verifiedPurchase && (
                          <div className="inline-flex items-center space-x-1.5 text-xs text-amber-700 dark:text-amber-400 font-extrabold bg-amber-50 dark:bg-amber-900 px-1.5 py-0.5 rounded-sm">
                            <BadgeCheck className="h-3.5 w-3.5 text-amber-600" />
                            <span className="text-[10px] uppercase">Verified Purchase</span>
                          </div>
                        )}

                        {/* Contents */}
                        <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed pt-1.5">
                          {review.content}
                        </p>
                      </div>

                      {/* Review Helpful Actions Counter */}
                      <div className="mt-4 pt-3.5 border-t border-stone-100 dark:border-zinc-750 flex items-center justify-between">
                        <span className="text-[10px] font-mono text-stone-400">
                          Log: HELPFUL_VOTES={review.helpfulVotes + (hasVoted ? 1 : 0)}
                        </span>
                        
                        <button
                          onClick={() => handleHelpfulClick(review.id)}
                          className={`text-xs px-2.5 py-1 rounded border shadow-xs transition flex items-center space-x-1 font-semibold ${
                            hasVoted
                              ? 'bg-emerald-50 dark:bg-emerald-950 border-emerald-400 text-emerald-800 dark:text-emerald-200 cursor-not-allowed'
                              : 'bg-stone-50 dark:bg-zinc-805 hover:bg-stone-100 border-stone-200 dark:border-zinc-750 text-zinc-700 dark:text-stone-300'
                          }`}
                        >
                          {hasVoted ? (
                            <>
                              <Check className="h-3 w-3 text-emerald-600" />
                              <span>Helpful Checked!</span>
                            </>
                          ) : (
                            <span>Was this helpful?</span>
                          )}
                        </button>
                      </div>

                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="text-xs text-stone-400 italic">No direct customer testimonials mapped on this node yet.</p>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
