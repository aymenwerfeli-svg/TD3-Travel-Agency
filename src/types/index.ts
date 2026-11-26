export interface Destination {
  id: number;
  image: string;
  nom: string;
  pays: string;
  description: string;
  prix: number;
  rating: number;
  reviews: number;
  categorie: string;
  duree: string;
  highlights: string[];
}

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  featured?: boolean;
  inStock?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
