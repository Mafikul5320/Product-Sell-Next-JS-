🛍️ Next.js 15 Product App

A simple product management app built with Next.js 15 (App Router) and NextAuth.js. Users can browse products publicly and add new products after logging in.

🚀 Features

Landing page with Navbar, Hero, Products, Footer

Login with NextAuth ( Credentials)

Product list & details (public)

Add Product (protected) – only for logged-in users

Redirect unauthenticated users to login

🛠️ Tech Stack

Next.js 15 (App Router)

NextAuth.js (authentication)

Tailwind CSS (styling)

API Routes / Express.js (backend)

MongoDB or Mock JSON (data storage)

⚙️ Setup

Clone repo & install packages:

git clone https://github.com/Mafikul5320/Product-Sell-Next-JS-.git
cd nextjs-product-app
npm install


Run dev server:

npm run dev


Open 👉https://first-next-js-ruby.vercel.app

📂 Pages

/ → Landing page

/login → Login with NextAuth

/products → Product list

/products/[id] → Product details

/dashboard/add-product → Protected (add new product)
