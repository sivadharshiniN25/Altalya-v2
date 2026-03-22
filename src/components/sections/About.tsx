"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

type AboutProps = {
  data: {
    about: string;
  };
};

export default function About({ data }: AboutProps) {
  return (
    <section id="about" className="py-20">

      <div className="max-w-6xl mx-auto px-6 grid md:px-8 gap-12 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-purple-400 mb-2">Get to know us</p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Altalya?
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            {data?.about || "Altalya is a DPIIT-recognized startup focused on upskilling individuals..."}
          </p>

          {/* Points */}
          <div className="space-y-3 text-gray-300">
            <p>✔ Expert trainers</p>
            <p>✔ Cutting edge curriculum</p>
            <p>✔ Real-time Projects Hands-on</p>
            <p>✔ Comprehensive placement support</p>
            <p> </p>
          </div>

          {/* Button */}
          <button
            onClick={() => {
              const el = document.getElementById("about");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg hover:shadow-purple-500/50 hover:scale-105 transition"
          >
            Discover more
          </button>

          <p className="mt-6 text-gray-400">
            <span className="text-white font-bold">Altalya</span> 10+ Years of Experience
          </p>
        </motion.div>

        {/* RIGHT SIDE (IMAGE + STATS) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="space-y-8"
        >
          {/* Image */}
          <img
            src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
            alt="about"
            className="w-full max-w-sm mx-auto"
          />

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">

            <div className="text-center">
              <h3 className="text-4xl font-bold text-purple-400">
                <CountUp end={1000} duration={3} />+
              </h3>
              <p className="text-gray-400 mt-2">Students Trained</p>
            </div>

            <div className="text-center">
              <h3 className="text-4xl font-bold text-blue-400">
                <CountUp end={50} duration={3} />+
              </h3>
              <p className="text-gray-400 mt-2">Industry Projects</p>
            </div>

            <div className="text-center">
              <h3 className="text-4xl font-bold text-purple-400">
                <CountUp end={25} duration={3} />+
              </h3>
              <p className="text-gray-400 mt-2">Expert Mentors</p>
            </div>

            <div className="text-center">
              <h3 className="text-4xl font-bold text-blue-400">
                <CountUp end={10} duration={3} />+
              </h3>
              <p className="text-gray-400 mt-2">Partner Institutions</p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}