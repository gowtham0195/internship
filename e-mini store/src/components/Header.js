import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

export default function Header() {
  const { cart } = useContext(StoreContext);

  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">Mini Store</h1>
      <div>🛒 Cart: {cart.length}</div>
    </header>
  );
}
