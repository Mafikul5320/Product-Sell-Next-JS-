"use client"

import axios from "axios";
import Swal from "sweetalert2";

export default function page() {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const fromData = new FormData(form);
        const { name, email, password } = Object.fromEntries(fromData.entries());
        const data = { name, email, password, role: "user" };
        const res = await axios.post("http://localhost:5000/user", data)
        console.log(res.data.insertedId)
        if (res.data.insertedId) {
            Swal.fire({
                icon: "success",
                title: "Register Sucessfull",
                showConfirmButton: false,
                timer: 1500
            });

        } else {
            Swal.fire({
                icon: "error",
                title: "Already Register Use This Email",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
                    Create an Account
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-600">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            className="mt-1 block w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
                            placeholder="John Doe"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            className="mt-1 block w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
                            placeholder="you@example.com"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            className="mt-1 block w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
                            placeholder="********"
                            required
                        />
                    </div>


                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
                    >
                        Register
                    </button>
                </form>

                <p className="mt-6 text-center text-gray-600 text-sm">
                    Already have an account?{" "}
                    <a href="/login" className="text-blue-600 hover:underline">
                        Login here
                    </a>
                </p>
            </div>
        </div>
    )
}
