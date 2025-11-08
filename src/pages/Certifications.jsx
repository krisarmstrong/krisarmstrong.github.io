import { motion } from "framer-motion";

const certs = [
  { name: "CWNA", desc: "Certified Wireless Network Administrator" },
  { name: "CWDP", desc: "Certified Wireless Design Professional" },
  { name: "CWSP", desc: "Certified Wireless Security Professional" },
  { name: "CISSP", desc: "Certified Information Systems Security Professional" },
  // Add more as desired
];

export default function Certifications() {
  return (
    <section className="max-w-4xl mx-auto py-12 px-4">
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8"
      >
        Certifications
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {certs.map((cert, i) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.08 }}
            className="bg-gray-900 p-6 rounded-2xl shadow-lg"
          >
            <h2 className="text-2xl font-semibold">{cert.name}</h2>
            <p className="text-gray-300">{cert.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}