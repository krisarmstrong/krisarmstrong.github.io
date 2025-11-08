import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/resume", label: "Resume" },
  { to: "/about", label: "About" },
  { to: "/certifications", label: "Certifications" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-gray-900 shadow-lg px-6 py-3 flex items-center justify-between z-10 sticky top-0">
      <Link to="/" className="text-2xl font-bold tracking-wide">
        Kris Armstrong
      </Link>
      <div className="hidden md:flex gap-6 items-center">
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              "transition-colors duration-200 " +
              (isActive
                ? "text-violet-400 underline"
                : "hover:text-violet-400 text-white")
            }
          >
            {link.label}
          </NavLink>
        ))}
        <ThemeToggle />
      </div>
      {/* Hamburger Button */}
      <button
        className="md:hidden focus:outline-none"
        aria-label="Open menu"
        onClick={() => setOpen(!open)}
      >
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={open ? "M6 18L18 6M6 6l12 12" : "M4 8h16M4 16h16"}
          />
        </svg>
      </button>
      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.5 }}
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  "text-3xl font-bold transition-colors " +
                  (isActive
                    ? "text-violet-400 underline"
                    : "hover:text-violet-400 text-white")
                }
              >
                {link.label}
              </NavLink>
            ))}
            <ThemeToggle />
            <button
              onClick={() => setOpen(false)}
              className="absolute top-8 right-8 text-white text-3xl"
              aria-label="Close menu"
            >
              &times;
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}