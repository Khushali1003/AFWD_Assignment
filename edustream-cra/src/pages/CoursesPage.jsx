import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DarkModeToggle from "../components/DarkModeToggle";

export default function CoursesPage() {
  const courses = [
    {
      id: 1,
      title: "Web Development",
      description: "Learn HTML, CSS, JavaScript, and React to build modern web apps.",
      image: "https://source.unsplash.com/400x200/?coding",
      price: 49
    },
    {
      id: 2,
      title: "Data Science",
      description: "Python, statistics, and machine learning for data analysis.",
      image: "https://source.unsplash.com/400x200/?data",
      price: 59
    },
    {
      id: 3,
      title: "AI & Machine Learning",
      description: "Deep learning, neural networks, and cutting-edge AI tools.",
      image: "https://source.unsplash.com/400x200/?ai",
      price: 69
    }
  ];

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const addToCart = (course) => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    if (!savedCart.find((item) => item.id === course.id)) {
      const updatedCart = [...savedCart, course];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setCart(updatedCart);
      alert(`${course.title} added to cart!`);
    } else {
      alert(`${course.title} is already in cart`);
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen px-6 py-12">
      <div className="flex justify-end mb-6">
        <DarkModeToggle />
      </div>

      <h2 className="text-3xl font-bold text-center mb-6">Explore Our Courses</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {courses.map(course => (
          <div key={course.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:scale-105 transition">
            <img src={course.image} alt={course.title} className="rounded mb-4"/>
            <h3 className="text-xl font-semibold mb-2 text-blue-600">{course.title}</h3>
            <p className="mb-3">{course.description}</p>
            <p className="mb-3 font-bold">${course.price}</p>
            <button
              onClick={() => addToCart(course)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart Summary */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold mb-4">Your Cart ({cart.length})</h3>
        {cart.length === 0 ? (
          <p className="text-gray-700 dark:text-gray-300">Your cart is empty</p>
        ) : (
          <ul className="space-y-4">
            {cart.map(item => (
              <li key={item.id} className="bg-gray-100 dark:bg-gray-700 p-4 rounded flex justify-between items-center">
                <span>{item.title}</span>
                <span className="font-bold">${item.price}</span>
              </li>
            ))}
          </ul>
        )}
        {cart.length > 0 && (
          <Link to="/cart" className="mt-4 inline-block bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition">
            Go to Cart
          </Link>
        )}
      </div>
    </div>
  );
}
