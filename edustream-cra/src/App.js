import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import DashboardPage from "./pages/DashboardPage";
import CartPage from "./pages/CartPage";

export default function App() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Navbar */}
      <header className="bg-white dark:bg-gray-800 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">EduStream</h1>
          <nav className="space-x-6">
            <Link to="/" className="hover:text-blue-600 text-gray-700 dark:text-gray-200">
              Home
            </Link>
            <Link to="/courses" className="hover:text-blue-600 text-gray-700 dark:text-gray-200">
              Courses
            </Link>
            <Link to="/dashboard" className="hover:text-blue-600 text-gray-700 dark:text-gray-200">
              Dashboard
            </Link>
            <Link to="/cart" className="hover:text-blue-600 text-gray-700 dark:text-gray-200">
              Cart
            </Link>
          </nav>
        </div>
      </header>

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
}
