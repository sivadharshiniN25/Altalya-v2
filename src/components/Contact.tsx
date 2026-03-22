"use client";

import { useState } from "react";
import { motion } from "framer-motion";

/* ✅ ADD THIS TYPE */
type ContactProps = {
  data: {
    phone: string;
    email: string;
    address: string;
  };
};

export default function Contact({ data }: ContactProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setTimeout(() => {
      setForm({
        name: "",
        email: "",
        subject: "",
        phone: "",
        message: "",
      });
      setSent(true);

      setTimeout(() => setSent(false), 3000);
    }, 500);
  };

  const handleReset = () => {
    setForm({
      name: "",
      email: "",
      subject: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-24 relative">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] bg-purple-500/10 blur-3xl rounded-full top-0 left-0" />
        <div className="absolute w-[400px] h-[400px] bg-blue-500/10 blur-3xl rounded-full bottom-0 right-0" />
      </div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

        {/* LEFT FORM */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Feel free to write
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            <div className="grid md:grid-cols-2 gap-4">
              <input name="name" value={form.name} onChange={handleChange}
                placeholder="Enter Name"
                className="p-3 rounded-lg bg-gray-800 text-white" />

              <input name="email" value={form.email} onChange={handleChange}
                placeholder="Enter Email"
                className="p-3 rounded-lg bg-gray-800 text-white" />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <input name="subject" value={form.subject} onChange={handleChange}
                placeholder="Enter Subject"
                className="p-3 rounded-lg bg-gray-800 text-white" />

              <input name="phone" value={form.phone} onChange={handleChange}
                placeholder="Enter Phone"
                className="p-3 rounded-lg bg-gray-800 text-white" />
            </div>

            <textarea name="message" value={form.message} onChange={handleChange}
              placeholder="Enter Message"
              className="w-full p-3 rounded-lg bg-gray-800 text-white h-40" />

            <div className="flex gap-4">
              <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg hover:shadow-purple-500/50 hover:scale-105 transition">
                Send Message
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg hover:shadow-purple-500/50 hover:scale-105 transition"
              >
                Reset
              </button>
            </div>

          </form>

          {sent && (
            <p className="text-green-400 mt-4">
              ✅ Message Sent Successfully!
            </p>
          )}
        </motion.div>

        {/* RIGHT INFO */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get in touch with us
          </h2>

          <p className="text-gray-400 mb-6">
            We offer a free consultation, so there's no risk in getting in touch. Simply fill out the form and we'll be in touch shortly.
          </p>

          <div className="space-y-6 text-gray-300">

            <div>
              <p className="font-semibold">📞 Have any question?</p>
              <p>{data.phone}</p>
            </div>

            <div>
              <p className="font-semibold">✉ Write email</p>
              <p>{data.email}</p>
            </div>

            <div>
              <p className="font-semibold">📍 Visit anytime</p>
              <p>{data.address}</p>
            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}