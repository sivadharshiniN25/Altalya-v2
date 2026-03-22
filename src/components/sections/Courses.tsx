"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import coursesData from "@/content/courses.json";

type Course = {
  slug: string;
  title: string;
  description: string;
  image: string;
};

export default function Courses() {
  const courses = coursesData;

  return (
    <section id="courses" className="py-24">

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">
            Our Courses
          </h2>
          <p className="text-gray-400 mt-4">
            Explore cutting-edge programs designed for future innovators
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {courses.map((course, index) => (
            <Link key={index} href={`/courses/${course.slug}`}>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: false }}
                className="cursor-pointer relative p-[1px] rounded-2xl bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition duration-300 hover:-translate-y-2 hover:scale-105"
              >
                
                <div className="bg-black/60 backdrop-blur-md rounded-2xl p-6 h-full flex flex-col justify-between min-h-[260px]">

                  <img
                    src={course.image}
                    className="w-12 mb-4 transition-transform duration-300 hover:scale-125"
                  />

                  <h3 className="text-xl font-semibold mb-2">
                    {course.title}
                  </h3>

                  <p className="text-gray-400 text-sm line-clamp-3">
                    {course.description}
                  </p>

                </div>

              </motion.div>

            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}