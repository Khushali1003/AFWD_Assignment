import React, { useEffect, useState } from "react";
import DarkModeToggle from "../components/DarkModeToggle";

export default function CartPage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const removeFromCart = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen px-6 py-12">
      <div className="flex justify-end mb-6">
        <DarkModeToggle />
      </div>
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-700 dark:text-gray-300">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cart.map(course => (
            <div key={course.id} className="flex items-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
              <img src={course.image} alt={course.title} className="w-24 h-24 object-cover rounded mr-6"/>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-blue-600">{course.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{course.description}</p>
              </div>
              <div className="text-right">
                <p className="font-bold">${course.price}</p>
                <button
                  onClick={() => removeFromCart(course.id)}
                  className="mt-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="text-right mt-6">
            <p className="text-2xl font-bold">Total: ${totalPrice}</p>
            <button className="mt-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded transition">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
