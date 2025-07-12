import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(StoreContext);

  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-2"/>
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-700">${product.price.toFixed(2)}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
}
