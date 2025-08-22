import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Side - Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Find Your Next <span className="text-indigo-600">Favorite Book</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Browse through our curated collection of books with the best prices 
            and quality. Perfect for readers of all ages.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:justify-start justify-center">
            <Link
              href="/products"
              className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow hover:bg-indigo-700 transition"
            >
              Shop Now
            </Link>
            <Link
              href="/about"
              className="px-6 py-3 border border-indigo-600 text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="https://i.ibb.co.com/5xYK2h1D/3815024-project-hail-mary-andy-weir-front-cover-1.jpg"
            alt="Hero Book"
            className="w-64 md:w-80 lg:w-96 rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
