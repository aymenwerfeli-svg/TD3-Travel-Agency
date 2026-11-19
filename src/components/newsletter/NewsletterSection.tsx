import React from 'react';
import { NewsletterForm } from './NewsletterForm';

export function NewsletterSection() {
  return (
    <section className="py-16">
      <div className="bg-rose-50 rounded-2xl px-6 py-16 sm:p-16">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
            Subscribe to our newsletter
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Get the latest updates on new products and upcoming sales.
          </p>
          <div className="mt-6">
            <NewsletterForm />
          </div>
        </div>
      </div>
    </section>
  );
}