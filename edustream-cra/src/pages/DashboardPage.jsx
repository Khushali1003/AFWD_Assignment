import React from "react";
import DarkModeToggle from "../components/DarkModeToggle";

export default function DashboardPage() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen px-6 py-12">
      <div className="flex justify-end mb-6">
        <DarkModeToggle />
      </div>
      <h2 className="text-3xl font-bold mb-6">Dashboard</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Courses Completed</h3>
          <p className="text-4xl font-bold">5</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Active Courses</h3>
          <p className="text-4xl font-bold">3</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Total Cart Items</h3>
          <p className="text-4xl font-bold">2</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Progress</h3>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded h-6">
            <div className="bg-blue-600 h-6 rounded" style={{ width: "60%" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
