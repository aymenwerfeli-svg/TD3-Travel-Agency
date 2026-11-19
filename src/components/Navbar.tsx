import React, { useState } from 'react';
import { Menu, Search } from 'lucide-react';
import { NavLinks } from './navigation/NavLinks';
import { CartButton } from './navigation/CartButton';
import { CartDrawer } from './cart/CartDrawer';

export function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <button className="p-2 rounded-md text-gray-600 lg:hidden">
                <Menu className="h-6 w-6" />
              </button>
              <div className="ml-2 lg:ml-0 font-serif text-2xl text-rose-600">Beauté</div>
            </div>
            
            <NavLinks />

            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-md text-gray-600">
                <Search className="h-5 w-5" />
              </button>
              <CartButton onClick={() => setIsCartOpen(true)} />
            </div>
          </div>
        </div>
      </nav>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}