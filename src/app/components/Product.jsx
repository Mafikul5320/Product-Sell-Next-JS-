import Link from "next/link";

async function getProducts() {
  const res = await fetch("http://localhost:5000/product", {
    cache: "no-store", 
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

export default async function ProductPage() {
  const data = await getProducts();

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-center py-5">Our Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {data.map((one) => (
          <div
            key={one._id}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition"
          >
            <Link href={`/product/${one._id}`}>
              <img
                src={one.image}
                alt={one.name}
                className="h-40 w-full object-cover rounded"
              />
            </Link>
            <h2 className="text-lg font-semibold mt-3">{one.name}</h2>
            <p className="text-gray-600">Price: ${one.price}</p>
            <p className="text-sm text-gray-500">Stock: {one.stock}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
