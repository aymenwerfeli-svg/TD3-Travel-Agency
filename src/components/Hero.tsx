import React from 'react';

export function Hero() {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <img
          className="w-full h-[500px] object-cover"
          src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2187&q=80"
          alt="Beauty products"
        />
        <div className="absolute inset-0 bg-gray-900/40 mix-blend-multiply" />
      </div>
      
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Natural Beauty Products
        </h1>
        <p className="mt-6 text-xl text-white max-w-3xl">
          Discover our collection of premium cosmetics made with natural ingredients.
          Enhance your natural beauty with our carefully curated products.
        </p>
        <div className="mt-10">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-rose-600 bg-white hover:bg-gray-50">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}