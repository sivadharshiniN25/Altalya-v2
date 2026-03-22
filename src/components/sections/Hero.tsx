"use client";

import { motion } from "framer-motion";

type HeroProps = {
  data: {
    heroTitle: string;
    heroSubtitle: string;
  };
};

export default function Hero({ data }: any) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-6"
      >

        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          {data.heroTitle}
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          {data.heroSubtitle}
        </p>

        <div className="mt-10 flex justify-center">
          <a href="#courses">
            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg hover:shadow-purple-500/50 hover:scale-105 transition">
              Learn in Demand IT course
            </button>
          </a>
        </div>

      </motion.div>
    </section>
  );
}