import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-gray-400 py-6 text-center relative">
  <p className="mb-4">© 2025 Nguyen Ho Trong Nhan. All rights reserved.</p>
  <motion.button
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    className="p-3 rounded-full bg-purple-600 text-white shadow-md 
               hover:bg-purple-500 transition"
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.9 }}
  >
    ↑
  </motion.button>
</footer>
  );
}
