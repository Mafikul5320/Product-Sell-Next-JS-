async function getProduct(id) {
  const res = await fetch(`http://localhost:5000/product/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  return res.json();
}

export default async function ProductDetails({ params }) {
  const product = await getProduct(params.id);

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-80 object-cover rounded mb-6"
      />
      <h1 className="text-3xl font-bold mb-3">{product.name}</h1>
      <p className="text-xl text-blue-600 mb-2">Price: ${product.price}</p>
      <p className="text-xl text-black mb-2">Description: {product.description}</p>
      <p className="text-gray-700">Stock Available: {product.stock}</p>
    </div>
  );
}
