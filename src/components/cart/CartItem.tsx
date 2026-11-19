import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../../hooks/useCart';
import type { CartItem as CartItemType } from '../../types';

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const { dispatch } = useCart();

  return (
    <div className="flex items-center py-4 border-b">
      <img
        src={item.product.image}
        alt={item.product.name}
        className="h-16 w-16 object-cover rounded"
      />
      <div className="ml-4 flex-1">
        <h3 className="text-sm font-medium">{item.product.name}</h3>
        <p className="text-sm text-gray-500">${item.product.price}</p>
      </div>
      <div className="flex items-center space-x-2">
        <button
          className="p-1 hover:bg-gray-100 rounded"
          onClick={() => dispatch({
            type: 'UPDATE_QUANTITY',
            payload: { id: item.product.id, quantity: Math.max(0, item.quantity - 1) }
          })}
        >
          <Minus className="h-4 w-4" />
        </button>
        <span className="w-8 text-center">{item.quantity}</span>
        <button
          className="p-1 hover:bg-gray-100 rounded"
          onClick={() => dispatch({
            type: 'UPDATE_QUANTITY',
            payload: { id: item.product.id, quantity: item.quantity + 1 }
          })}
        >
          <Plus className="h-4 w-4" />
        </button>
        <button
          className="p-1 hover:bg-gray-100 rounded text-red-500"
          onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.product.id })}
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}