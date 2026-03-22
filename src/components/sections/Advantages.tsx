"use client";

import { motion } from "framer-motion";

const advantages = [
  {
    title: "Learn from industry experts",
    desc: "Our courses are led by experienced instructors who have years of experience in the software industry. You'll gain practical knowledge you can apply in real-world scenarios.",
    img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
  {
    title: "Hands-on learning",
    desc: "Work on real-world projects and build a portfolio that impresses employers. Learn by doing, not just watching.",
    img: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
  },
  {
    title: "Flexible learning options",
    desc: "Learn at your own pace with flexible schedules. Access materials anytime and learn without pressure.",
    img: "https://cdn-icons-png.flaticon.com/512/10618/10618003.png",
  },
];

export default function Advantages() {
  return (
    <section id="advantages" className="py-24 relative">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold">
            Our Advantages
          </h2>
          <p className="text-gray-400 mt-4 text-lg">
            You’ve come to the right place to learn
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-12">

          {advantages.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="text-center group"
            >
              {/* Image */}
              <img
                src={item.img}
                className="w-32 mx-auto mb-6 transition-transform duration-300 group-hover:scale-110"
              />

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}