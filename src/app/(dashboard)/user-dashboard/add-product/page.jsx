"use client";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

const AddProduct = () => {


    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const fromData = new FormData(form);
        const { name, price, stock, image, description } = Object.fromEntries(fromData.entries());
        const Product = {
            name, price, stock, image, description
        };
        console.log(Product)
        const res = await axios.post("https://buy-sell-server-one.vercel.app/product", Product);
        console.log(res.data.insertedId)
        if (res.data.insertedId) {
            Swal.fire({
                icon: "success",
                title: "Your Product has been saved",
                showConfirmButton: false,
                timer: 1500
            });
        }

    };



    return (
        <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Add New Product
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                    <label className="block text-gray-700 mb-1">Product Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter product name"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                        required
                    />
                </div>

                {/* Price */}
                <div>
                    <label className="block text-gray-700 mb-1">Price ($)</label>
                    <input
                        type="number"
                        name="price"
                        placeholder="Enter price"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                        required
                    />
                </div>

                {/* Stock */}
                <div>
                    <label className="block text-gray-700 mb-1">Stock</label>
                    <input
                        type="number"
                        name="stock"
                        placeholder="Enter stock quantity"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700 mb-1">Description</label>
                    <input
                        type="text"
                        name="description"
                        placeholder="Enter description"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                        required
                    />
                </div>
                {/* Image URL */}
                <div>
                    <label className="block text-gray-700 mb-1">Image URL</label>
                    <input
                        type="text"
                        name="image"
                        placeholder="https://example.com/image.jpg"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                    Add Product
                </button>
            </form>
        </div>
    );
};

export default AddProduct;