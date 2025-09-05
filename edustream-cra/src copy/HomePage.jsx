import React from "react";

export default function HomePage() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <header className="bg-white dark:bg-gray-800 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">EduStream</h1>
          <nav className="space-x-6 hidden md:flex">
            <a href="#" className="text-gray-700 dark:text-gray-200 hover:text-blue-500">Courses</a>
            <a href="#" className="text-gray-700 dark:text-gray-200 hover:text-blue-500">Dashboard</a>
            <a href="#" className="text-gray-700 dark:text-gray-200 hover:text-blue-500">Sign In</a>
          </nav>
          <button className="md:hidden p-2 text-gray-600 dark:text-gray-200">☰</button>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="text-center py-20 px-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Learn Anytime, Anywhere 🌍
        </h2>
        <p className="max-w-2xl mx-auto text-lg mb-6">
          EduStream brings you interactive online courses with videos, quizzes, and progress tracking — designed to make learning engaging and fun.
        </p>
        <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100">
          Browse Courses
        </button>
      </section>

      {/* Courses Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-gray-100">
          Popular Courses
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:scale-105 transition">
            <img src="https://source.unsplash.com/400x200/?coding" alt="Course" className="rounded-md mb-4"/>
            <h4 className="text-xl font-semibold mb-2 text-blue-600">Web Development</h4>
            <p className="text-gray-600 dark:text-gray-300 mb-3">
              Learn HTML, CSS, JavaScript, and React to build modern web apps.
            </p>
            <button className="text-blue-600 font-medium hover:underline">Enroll Now →</button>
          </div>

          {/* Card 2 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:scale-105 transition">
            <img src="https://source.unsplash.com/400x200/?data" alt="Course" className="rounded-md mb-4"/>
            <h4 className="text-xl font-semibold mb-2 text-blue-600">Data Science</h4>
            <p className="text-gray-600 dark:text-gray-300 mb-3">
              Master Python, statistics, and machine learning for data analysis.
            </p>
            <button className="text-blue-600 font-medium hover:underline">Enroll Now →</button>
          </div>

          {/* Card 3 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:scale-105 transition">
            <img src="https://source.unsplash.com/400x200/?ai" alt="Course" className="rounded-md mb-4"/>
            <h4 className="text-xl font-semibold mb-2 text-blue-600">AI & Machine Learning</h4>
            <p className="text-gray-600 dark:text-gray-300 mb-3">
              Explore deep learning, neural networks, and cutting-edge AI tools.
            </p>
            <button className="text-blue-600 font-medium hover:underline">Enroll Now →</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-200 dark:bg-gray-800 py-6 text-center">
        <p className="text-gray-700 dark:text-gray-300">
          © {new Date().getFullYear()} EduStream. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
