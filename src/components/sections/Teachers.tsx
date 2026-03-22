"use client";

import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";

const teachers = [
  {
    name: "Ramya Ganesh",
    role: "CEO & Trainer",
    img: "https://cdn-icons-png.flaticon.com/512/6997/6997662.png",
    link: "https://www.instagram.com/ramyaganesh191/",
  },
  {
    name: "Vel Eswaran",
    role: "Trainer",
    img: "https://image.freepik.com/free-vector/man-profile-cartoon_18591-58482.jpg",
    link: "https://www.instagram.com/veleswaran3/",
  },
];

export default function Teachers() {
  return (
    <section id="teachers" className="py-24">

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Qualified Teachers
          </h2>
          <p className="text-gray-400 mt-4">
            Meet the experts who guide you
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-12 justify-center">

          {teachers.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center text-center"
            >

              {/* Image wrapper */}
              <div className="relative w-[220px] h-[220px]">

                {/* Profile */}
                <img
                  src={t.img}
                  className="w-full h-full rounded-full object-cover"
                />

                {/* Instagram Icon */}
                <a
                  href={t.link}
                  target="_blank"
                  className="absolute bottom-2 right-2 bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full"
                >
                  <FaInstagram />
                </a>

              </div>

              {/* Name */}
              <h3 className="text-xl font-semibold mt-6">
                {t.name}
              </h3>

              {/* Role */}
              <p className="text-gray-400 text-sm">
                {t.role}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}