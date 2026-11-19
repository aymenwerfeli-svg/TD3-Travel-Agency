import { Product } from '../types';

export function useFeaturedProducts(): Product[] {
  // In a real app, this would fetch from an API
  return [
    {
      id: '1',
      name: 'Natural Face Cream',
      description: 'Hydrating face cream with natural ingredients',
      price: 29.99,
      image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
      category: 'skincare',
      inStock: true,
    },
    {
      id: '2',
      name: 'Organic Lipstick',
      description: 'Long-lasting natural lipstick',
      price: 19.99,
      image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      category: 'makeup',
      inStock: true,
    },
    {
      id: '3',
      name: 'Hair Serum',
      description: 'Nourishing hair serum for smooth, silky hair',
      price: 24.99,
      image: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      category: 'haircare',
      inStock: true,
    },
  ];
}