export interface Product {
  id: number;
  title: string;
  category: string;
  brand: string;
  image: string;
  originalPrice: number;
  discountPercent?: number;
  rating: number;
  reviewCount: number;
  inStock: boolean;
}

export interface CategoryItem {
  id: number;
  title: string;
  image: string;
  itemCount?: string;
}
