'use client';

import Link from 'next/link';
import { Star, ArrowRight } from 'lucide-react'; // For icons

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-teal-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">Trusted by 10,000+ customers</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Discover Amazing
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                  {' '}Products
                </span>
              </h1>

              <p className="text-xl text-gray-600 max-w-2xl">
                Find the perfect products for your lifestyle. From electronics to accessories, 
                we have everything you need with unbeatable quality and prices.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/products"
                className="flex items-center justify-center gap-2 bg-blue-600 text-white text-lg px-8 py-3 rounded-lg shadow hover:bg-blue-700 transition"
              >
                Shop Now
                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                href="#highlights"
                className="flex items-center justify-center text-lg px-8 py-3 rounded-lg border-2 border-gray-300 text-gray-700 hover:bg-gray-100 transition"
              >
                Learn More
              </Link>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">10K+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/3945667/pexels-photo-3945667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Featured Products"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-blue-200 to-teal-200 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute -bottom-4 -left-4 w-64 h-64 bg-gradient-to-br from-orange-200 to-pink-200 rounded-full blur-3xl opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
