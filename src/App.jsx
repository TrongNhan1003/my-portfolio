// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Portfolio from "./Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div className="p-5">
        {/* Thanh menu */}
        <nav className="flex space-x-6 mb-8">
          <Link to="/" className="text-lg text-blue-700 hover:underline">
            Portfolio
          </Link>
          <Link to="/contact" className="text-lg text-blue-700 hover:underline">
            Contact
          </Link>
        </nav>

        {/* Các trang */}
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
