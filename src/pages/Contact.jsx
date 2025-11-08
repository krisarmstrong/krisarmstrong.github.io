import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [sent, setSent] = useState(false);

  // This does NOT actually send mail yet—could use Formspree/Cloudflare Workers.
  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="max-w-xl mx-auto py-12 px-4">
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8"
      >
        Contact Me
      </motion.h1>
      {!sent ? (
        <form onSubmit={handleSubmit} className="space-y-6 bg-gray-900 p-8 rounded-2xl shadow-lg">
          <input
            required
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white outline-none"
          />
          <input
            required
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white outline-none"
          />
          <textarea
            required
            name="message"
            placeholder="Your Message"
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white outline-none min-h-[120px]"
          />
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-violet-600 hover:bg-violet-800 text-white font-semibold text-lg transition"
          >
            Send Message
          </button>
          <p className="text-xs text-gray-400 mt-4">* Form does not send yet (demo only).</p>
        </form>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-900 p-8 rounded-2xl shadow-lg text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Thank you!</h2>
          <p className="text-gray-300">Your message has been received. I’ll be in touch soon.</p>
        </motion.div>
      )}
      <div className="mt-8 text-center">
        <p>
          Or email directly:{" "}
          <a href="mailto:kris@icloud.com" className="text-violet-400 underline">
            kris@icloud.com
          </a>
        </p>
      </div>
    </section>
  );
}