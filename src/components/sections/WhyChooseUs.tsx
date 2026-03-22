"use client";

import { motion, Variants } from "framer-motion";
import { Brain, Cpu, Rocket, Users } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Driven Learning",
    description: "Learn cutting-edge AI technologies with real-world applications.",
  },
  {
    icon: Cpu,
    title: "Hands-On Projects",
    description: "Work on live industry projects to build practical experience.",
  },
  {
    icon: Rocket,
    title: "Career Acceleration",
    description: "Get placement support and career-focused training programs.",
  },
  {
    icon: Users,
    title: "Expert Mentors",
    description: "Learn from industry experts with years of experience.",
  },
];

// 🔥 Parent container animation (STAGGER)
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// 🔥 Card animation
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function WhyChooseUs() {
  return (
    <section className="py-20">

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Why Choose Altalya?
          </h2>
          <p className="text-gray-400 mt-4">
            Discover what makes us different from the rest
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative p-[1px] rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 transition duration-300 hover:-translate-y-3 hover:scale-105"
              >

                {/* Inner Card */}
                <div className="bg-black/60 backdrop-blur-md rounded-2xl p-6 h-full flex flex-col transition duration-300 hover:bg-black/80">

                  {/* Glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition duration-300" />

                  {/* Icon */}
                  <div className="mb-4 text-purple-400 transition duration-300 group-hover:text-blue-400 group-hover:scale-110">
                    <Icon size={40} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm">
                    {feature.description}
                  </p>

                </div>

              </motion.div>
            );
          })}

        </motion.div>

      </div>
    </section>
  );
}