"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'

export default function Navber() {
    const pathname = usePathname();
    const dashboard = pathname.includes("dashboard");
    const [isOpen, setIsOpen] = useState(false);
    console.log(dashboard)
    if (!dashboard) {
        return (
            <nav className="bg-white shadow-md sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="text-2xl font-extrabold text-blue-600">
                        MyShop
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        <Link href="/" className="text-gray-700 hover:text-blue-600 transition">
                            Home
                        </Link>
                        <Link href="/product" className="text-gray-700 hover:text-blue-600 transition">
                            Products
                        </Link>
                        <Link href="/about" className="text-gray-700 hover:text-blue-600 transition">
                            About
                        </Link>
                        <Link href="/user-dashboard" className="text-gray-700 hover:text-blue-600 transition">
                            Dashboard
                        </Link>
                    </div>

                    {/* Login Button */}
                    <div className="hidden md:block">
                        <Link
                            href="/login"
                            className="bg-blue-600 text-white px-5 py-2 rounded-full shadow hover:bg-blue-700 transition"
                        >
                            Login
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-700"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        ☰
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden bg-white px-6 pb-4 space-y-3 shadow">
                        <Link href="/" className="block text-gray-700 hover:text-blue-600">
                            Home
                        </Link>
                        <Link href="/products" className="block text-gray-700 hover:text-blue-600">
                            Products
                        </Link>
                        <Link href="/about" className="block text-gray-700 hover:text-blue-600">
                            About
                        </Link>
                        <Link href="/contact" className="block text-gray-700 hover:text-blue-600">
                            Contact
                        </Link>
                        <Link
                            href="/login"
                            className="block bg-blue-600 text-white px-4 py-2 rounded-full text-center hover:bg-blue-700"
                        >
                            Login
                        </Link>
                    </div>
                )}
            </nav>
        )
    } else {
        <></>
    }
}
