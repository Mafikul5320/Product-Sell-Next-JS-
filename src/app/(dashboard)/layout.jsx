"use client";
import React, { useState } from "react";
import { Menu, X, Home, BarChart, Users, Settings } from "lucide-react";
import Link from "next/link";

export default function Layout({ children }) {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <div
                className={`${isOpen ? "w-64" : "w-16"
                    } bg-white shadow-md transition-all duration-300`}
            >
                <div className="flex items-center justify-between px-4 py-4 border-b">
                    <Link href={"/"}>                    <h1
                        className={`${isOpen ? "block" : "hidden"
                            } text-xl font-bold text-gray-800`}
                    >
                        MyShop Admin
                    </h1></Link>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-600 focus:outline-none"
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>

                <nav className="mt-6">
                    <ul className="space-y-2">
                        <li className="flex items-center px-4 py-2 hover:bg-gray-200 cursor-pointer">
                            <Home className="w-5 h-5 text-gray-600" />
                            {isOpen && <span className="ml-3 text-gray-700">Dashboard</span>}
                        </li>
                        <Link href={"/user-dashboard/add-product"}>
                            <li className="flex items-center px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                <BarChart className="w-5 h-5 text-gray-600" />
                                {isOpen && <span className="ml-3 text-gray-700">Add Product</span>}
                            </li>
                        </Link>
                        <li className="flex items-center px-4 py-2 hover:bg-gray-200 cursor-pointer">
                            <Users className="w-5 h-5 text-gray-600" />
                            {isOpen && <span className="ml-3 text-gray-700">Users</span>}
                        </li>
                        <li className="flex items-center px-4 py-2 hover:bg-gray-200 cursor-pointer">
                            <Settings className="w-5 h-5 text-gray-600" />
                            {isOpen && <span className="ml-3 text-gray-700">Settings</span>}
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Main content area */}
            <main className="flex-1 p-6">{children}</main>
        </div>
    );
}
