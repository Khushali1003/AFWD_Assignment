import React from "react";

export default function CoursesPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
        Explore Our Courses
      </h2>
      <ul className="space-y-4">
        <li className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          Web Development - Learn React, Node.js, and more.
        </li>
        <li className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          Data Science - Python, Machine Learning, and Statistics.
        </li>
        <li className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          AI & Machine Learning - Deep Learning, Neural Networks.
        </li>
      </ul>
    </div>
  );
}
