import React from "react";
import { Link } from "react-router-dom";
import DarkModeToggle from "../components/DarkModeToggle";

export default function HomePage() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-24 relative">
        <div className="absolute top-6 right-6">
          <DarkModeToggle />
        </div>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Learn Anytime, Anywhere</h1>
          <p className="text-lg mb-8">
            Interactive courses, quizzes, and progress tracking to make learning fun and effective.
          </p>
          <Link
            to="/courses"
            className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition"
          >
            Browse Courses
          </Link>
        </div>
      </section>

      {/* Features / Courses */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Popular Courses</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Example Course Cards */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:scale-105 transition">
            <img src="https://source.unsplash.com/400x200/?coding" alt="Web Dev" className="rounded mb-4"/>
            <h3 className="text-xl font-semibold mb-2 text-blue-600">Web Development</h3>
            <p className="mb-3">Learn HTML, CSS, JavaScript, and React to build modern web apps.</p>
            <Link to="/courses" className="text-blue-600 font-medium hover:underline">Enroll Now →</Link>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:scale-105 transition">
            <img src="https://source.unsplash.com/400x200/?data" alt="Data Science" className="rounded mb-4"/>
            <h3 className="text-xl font-semibold mb-2 text-blue-600">Data Science</h3>
            <p className="mb-3">Python, statistics, and machine learning for data analysis.</p>
            <Link to="/courses" className="text-blue-600 font-medium hover:underline">Enroll Now →</Link>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:scale-105 transition">
            <img src="https://source.unsplash.com/400x200/?ai" alt="AI" className="rounded mb-4"/>
            <h3 className="text-xl font-semibold mb-2 text-blue-600">AI & Machine Learning</h3>
            <p className="mb-3">Deep learning, neural networks, and cutting-edge AI tools.</p>
            <Link to="/courses" className="text-blue-600 font-medium hover:underline">Enroll Now →</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-200 dark:bg-gray-800 py-6 text-center mt-12">
        <p>© {new Date().getFullYear()} EduStream. All rights reserved.</p>
      </footer>
    </div>
  );
}
