import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4">
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl md:text-6xl font-bold mb-6 tracking-tight"
      >
        Kris Armstrong
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="text-xl md:text-2xl text-violet-400 mb-10"
      >
        Animation &amp; Network Solutions · Security · Creative Tech
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="flex flex-col md:flex-row gap-6"
      >
        <Link
          to="/resume"
          className="px-8 py-4 rounded-2xl bg-violet-600 hover:bg-violet-800 text-white font-bold text-xl shadow-xl transition"
        >
          View Resume
        </Link>
        <Link
          to="/about"
          className="px-8 py-4 rounded-2xl bg-gray-900 hover:bg-gray-800 text-white font-bold text-xl shadow-lg transition"
        >
          About Me
        </Link>
      </motion.div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
        <Card title="Certifications" to="/certifications">
          Industry-leading wireless, networking, and security certifications, including CWNA, CWDP, CWSP, CISSP.
        </Card>
        <Card title="Animations" to="/about">
          Motion design and creative tech for technical storytelling and engagement.
        </Card>
        <Card title="Contact" to="/contact">
          Let’s collaborate! Reach out for consulting, speaking, or creative projects.
        </Card>
      </div>
      <Projects />
    </section>
  );
}

function Card({ title, to, children }) {
  return (
    <motion.div
      whileHover={{ scale: 1.04, boxShadow: "0 8px 40px 0 rgba(80,0,255,0.18)" }}
      className="bg-gray-900 p-8 rounded-2xl shadow-xl flex flex-col items-center transition"
    >
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="mb-6 text-gray-300">{children}</p>
      <Link
        to={to}
        className="mt-auto px-6 py-2 rounded-lg bg-violet-600 hover:bg-violet-700 text-white font-semibold transition"
      >
        Learn More
      </Link>
    </motion.div>
  );
}