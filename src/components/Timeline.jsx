import { motion } from "framer-motion";

const items = [
  {
    year: "2024",
    title: "Launched Wi-Fi Vigilante",
    desc: "Created a modern case-based network storytelling platform.",
  },
  {
    year: "2022",
    title: "Founded Armstrong Consulting",
    desc: "Offered animation and network engineering services to clients nationwide.",
  },
  {
    year: "2018",
    title: "CWDP, CWSP, CISSP Achieved",
    desc: "Advanced wireless, security, and design certifications.",
  },
  // ...more milestones as you want
];

export default function Timeline() {
  return (
    <div className="relative pl-8 my-12">
      <div className="absolute left-2 top-0 bottom-0 w-1 bg-violet-700 rounded-full" />
      <ul>
        {items.map((item, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 }}
            className="mb-10 ml-2"
          >
            <div className="flex items-center gap-4">
              <span className="bg-violet-700 w-6 h-6 rounded-full flex items-center justify-center text-white font-bold shadow-lg">{item.year}</span>
              <h3 className="text-xl font-semibold">{item.title}</h3>
            </div>
            <p className="ml-10 mt-2 text-gray-400">{item.desc}</p>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}