"use client";

import { motion, Variants } from "framer-motion";
import { useState } from "react";

type Testimonial = {
  name: string;
  review: string;
};

type TestimonialsProps = {
  data: {
    testimonials: Testimonial[];
  };
};

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const card: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Testimonials({ data }: TestimonialsProps) {
  const [isHovered, setIsHovered] = useState(false);

  const testimonials = data?.testimonials || [];

  return (
    <section id="testimonials" className="py-24 relative">

      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-10">
          Testimonials
        </h2>
      </div>

      <div className="overflow-hidden w-full px-6">

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div
            className="flex gap-8 "
            animate={isHovered ? { x: 0 } : { x: ["0%", "-50%"] }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: 1,
              repeatType: "mirror"
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >

            {[...testimonials, ...testimonials].map((t, i) => (
              <motion.div
                key={i}
                variants={card}
                className="min-w-[280px] max-w-sm bg-black/60 p-6 rounded-xl h-auto flex flex-col"
              >
                <p className="text-gray-300 mb-4">
                  "{t.review}"
                </p>
                <h4 className="text-white font-semibold">
                  {t.name}
                </h4>
              </motion.div>
            ))}

          </motion.div>
        </motion.div>

      </div>

    </section>
  );
}