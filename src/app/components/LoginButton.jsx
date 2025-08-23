"use client";
import { signIn } from "next-auth/react"


const LoginButton = () => {
    return (
        <div>
            <button onClick={() => signIn()} className='bg-blue-600 text-white px-5 py-2 rounded-full shadow hover:bg-blue-700 transition'>Login</button>
        </div>
    );
};

export default LoginButton;