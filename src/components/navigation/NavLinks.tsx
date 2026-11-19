import React from 'react';

export function NavLinks() {
  return (
    <div className="hidden lg:flex items-center space-x-8">
      <a href="#" className="text-gray-600 hover:text-rose-600">Skincare</a>
      <a href="#" className="text-gray-600 hover:text-rose-600">Makeup</a>
      <a href="#" className="text-gray-600 hover:text-rose-600">Haircare</a>
      <a href="#" className="text-gray-600 hover:text-rose-600">Body Care</a>
    </div>
  );
}