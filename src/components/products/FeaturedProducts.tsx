import React from 'react';
import { ProductCard } from './ProductCard';
import { useFeaturedProducts } from '../../hooks/useFeaturedProducts';

export function FeaturedProducts() {
  const products = useFeaturedProducts();

  return (
    <div className="py-16">
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Featured Products</h2>
      <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}