"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { coursesData } from "@/data/coursesData";

export default function PopularCourses() {

  // 🔥 Take first 3 courses from same data
  const popularCourses = coursesData.slice(3, 6);

  return (
    <section className="py-24">

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">
            Popular Courses
          </h2>
          <p className="text-gray-400 mt-4">
            Start with our most in-demand programs
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {popularCourses.map((course, index) => (

            <Link key={index} href={`/courses/${course.slug}`}>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="cursor-pointer relative p-[1px] rounded-2xl bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition duration-300 hover:-translate-y-2 hover:scale-105"
              >

                <div className="bg-black/60 backdrop-blur-md rounded-2xl p-6 h-full flex flex-col justify-between min-h-[260px]">

                  <img
                    src={course.image}
                    className="w-12 mb-4"
                  />

                  <h3 className="text-xl font-semibold mb-2">
                    {course.title}
                  </h3>

                  <p className="text-gray-400 text-sm line-clamp-3">
                    Explore course details
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