import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
    <footer className="bg-gray-200 text-gray-700 py-5 border-t">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">MyShop</h2>
          <p className="text-gray-600">
            Your one-stop shop for the best products at the best prices.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
            <li><Link href="/products" className="hover:text-blue-600">Products</Link></li>
            <li><Link href="/about" className="hover:text-blue-600">About</Link></li>
            <li><Link href="/contact" className="hover:text-blue-600">Contact</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Subscribe</h3>
          <p className="text-gray-600 mb-3">Get updates on our latest products and offers.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 rounded-l-md w-full border focus:outline-none"
            />
            <button className="bg-blue-600 px-4 rounded-r-md text-white hover:bg-blue-700">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t mt-8 pt-4 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} MyShop. All rights reserved.</p>
      </div>
    </footer>
    )
}
