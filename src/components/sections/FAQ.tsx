"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "What is the duration of Full Stack Developer course?",
    a: "It will take 4 months for you to complete this Full Stack Developer course if you're dedicated and attend classes regularly.",
  },
  {
    q: "Who can take this training?",
    a: "Fresh graduates and active jobseekers who want to start & grow in their IT career.",
  },
  {
    q: "How much is the fee?",
    a: "The course fee is highly affordable and we provide liberty to pay in installments. Affordability is one of the reason why we started in Tier-2 city",
  },
  {
    q: "How can I learn with college or office?",
    a: "You can join the program and learn after your working hours/regular college hours on evening daily. Consistency is the key to success!",
  },
  {
    q: "Do you provide placement assistance?",
    a: "Definitely Yes. Once the placement process begins, we will recommend you to companies in our network. We just expect you to practice more & more to get placed. We keep referring you for job opportunities till you get placed.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24">

      <div className="max-w-4xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-5xl font-bold text-center mb-16">
          FAQs
        </h2>

        <div className="space-y-4">

          {faqs.map((item, i) => (
            <div
              key={i}
              className="border border-gray-800 rounded-xl overflow-hidden"
            >
              {/* Question */}
              <button
                onClick={() => setActive(active === i ? null : i)}
                className="w-full text-left px-6 py-4 bg-black/50 hover:bg-black transition"
              >
                {item.q}
              </button>

              {/* Answer */}
              <AnimatePresence>
                {active === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 80,padding: 20, opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-4 text-white-400 text-sm"
                  >
                    {item.a}
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}