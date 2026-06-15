export interface Specification {
  label: string;
  value: string;
}

export interface Review {
  id: string;
  author: string;
  avatar?: string;
  rating: number;
  title: string;
  date: string;
  content: string;
  verifiedPurchase: boolean;
  helpfulVotes: number;
}

export interface Product {
  id: string;
  asin: string; // Amazon standard identification number for rich density
  title: string;
  description: string;
  price: number;
  listPrice?: number; // For discount presentation ($xx.xx vs list)
  rating: number;
  reviewCount: number;
  department: string;
  brand: string;
  imageUrl: string;
  thumbnails: string[];
  isBestSeller?: boolean;
  isAmazonsChoice?: boolean;
  isDealOfTheDay?: boolean;
  stars4AndUp?: boolean;
  shippingSpeed: 'tomorrow' | 'two-day' | 'standard';
  freeShipping: boolean;
  stockCount: number;
  specifications: Specification[];
  reviews: Review[];
  features: string[]; // Bullted feature highlights
  frequentlyBoughtWith?: string[]; // IDs of cross-sell products
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
  selectedSize?: string;
}

export interface FilterState {
  department: string; // "all" or specific
  rating: number | null; // e.g. 4 for 4 stars and up
  brands: string[]; // selected brand names
  priceMin: number;
  priceMax: number;
  shippingSpeed: string | null; // e.g. "tomorrow", "express", null
  onlyDeals: boolean;
  searchQuery: string;
}

export interface PromoBanner {
  id: string;
  imageUrl: string;
  title: string;
  tagline: string;
  ctaText: string;
  department: string;
  bgHex: string;
  textColorClass: string;
}
