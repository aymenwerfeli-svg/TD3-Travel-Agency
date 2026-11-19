import React from 'react';

export function NewsletterForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
  };

  return (
    <form className="sm:flex" onSubmit={handleSubmit}>
      <input
        type="email"
        className="block w-full px-4 py-3 text-base rounded-md border-gray-300 shadow-sm focus:ring-rose-500 focus:border-rose-500 sm:flex-1"
        placeholder="Enter your email"
      />
      <button
        type="submit"
        className="mt-3 w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-rose-600 shadow-sm hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0"
      >
        Subscribe
      </button>
    </form>
  );
}