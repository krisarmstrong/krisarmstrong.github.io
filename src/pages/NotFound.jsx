import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex flex-col justify-center items-center text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-7xl mb-8"
      >
        🕵️‍♂️
      </motion.div>
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-gray-400 mb-6">
        The page you’re looking for doesn’t exist. Try the links below!
      </p>
      <Link to="/" className="px-6 py-2 rounded-lg bg-violet-600 text-white font-semibold hover:bg-violet-800 transition">
        Back to Home
      </Link>
    </section>
  );
}