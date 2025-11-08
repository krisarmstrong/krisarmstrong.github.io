import { motion } from "framer-motion";
import Timeline from "../components/Timeline";
import Testimonials from "../components/Testimonials";

export default function About() {
  return (
    <section className="max-w-3xl mx-auto py-12 px-4">
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8"
      >
        About Kris Armstrong
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="space-y-8"
      >
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-3">Who I Am</h2>
          <p>
            I’m Kris Armstrong, a senior engineer and animations expert with a passion for networking, creative technology, and technical storytelling. My background includes wireless, security, and advanced network diagnostics. I blend technical rigor with visual creativity to make complex ideas approachable and actionable.
          </p>
        </div>
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-3">Key Achievements</h2>
          <ul className="list-disc pl-6">
            <li>Designed and led Wi-Fi Vigilante—modern technical storytelling platform.</li>
            <li>Delivered advanced network solutions to enterprise, SLED, and public safety sectors.</li>
            <li>Industry certifications: CWNA, CWDP, CWSP, CISSP, and more.</li>
          </ul>
        </div>
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-3">What Drives Me</h2>
          <p>
            I’m driven by curiosity and a desire to connect people—both through networks and through storytelling. Whether it’s solving a complex technical problem or creating an animated explainer, I want to deliver clarity, impact, and real-world results.
          </p>
        </div>
      </motion.div>
      <Timeline />
      <Testimonials />
    </section>
  );
}