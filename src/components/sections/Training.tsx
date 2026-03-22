"use client";

import { motion, Variants } from "framer-motion";

const steps = [
  {
    title: "Enroll in Program",
    description: "Start your journey by enrolling in our specialized AI & Tech programs.",
  },
  {
    title: "Hands-On Learning",
    description: "Work on real-world projects with guided mentorship.",
  },
  {
    title: "Build Portfolio",
    description: "Create industry-level projects to showcase your skills.",
  },
  {
    title: "Placement Support",
    description: "Get career guidance, resume building, and placement opportunities.",
  },
];

// 🔥 Animation Variants
const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Training() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute w-[500px] h-[500px] bg-purple-500/10 blur-3xl rounded-full top-10 left-0" />

        <div className="absolute w-[400px] h-[400px] bg-blue-500/10 blur-3xl rounded-full bottom-10 right-0" />

      </div>

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold">
            Training Process
          </h2>
          <p className="text-gray-400 mt-4">
            A step-by-step journey to transform you into an industry-ready professional
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          className="relative"
        >

          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 w-[2px] h-full bg-gradient-to-b from-purple-500 to-blue-500 transform -translate-x-1/2" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={item}
              className={`mb-16 flex items-center w-full ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >

              {/* Card */}
              <div className="w-full md:w-[45%] relative">

                <div className="group p-[1px] rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 transition duration-300 hover:scale-105">

                  <div className="bg-black/60 backdrop-blur-md rounded-2xl p-6 transition duration-300 hover:bg-black/80">

                    <h3 className="text-xl font-semibold mb-2">
                      {step.title}
                    </h3>

                    <p className="text-gray-400 text-sm">
                      {step.description}
                    </p>

                  </div>

                </div>

              </div>

              {/* Dot */}
              <div className="w-4 h-4 bg-purple-500 rounded-full absolute left-1/2 transform -translate-x-1/2" />

            </motion.div>
          ))}

        </motion.div>

      </div>
    </section>
  );
}