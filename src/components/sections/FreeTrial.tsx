"use client";

import { useState } from "react";

export default function FreeTrial() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Fake submit effect
    setForm({ name: "", email: "", phone: "" });
    alert("Request Sent!");
  };

  return (
    <section className="py-24 relative">

      <div className="max-w-5xl mx-auto px-6">

        <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-[1px] rounded-2xl">

          <div className="bg-black rounded-2xl p-10">

            <h2 className="text-4xl font-bold mb-4">
              Sign up for a free trial class
            </h2>

            <p className="text-gray-400 mb-8">
              Offline hands-on class in Tiruppur
            </p>

            <form onSubmit={handleSubmit} className="grid gap-6">

              <input
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="p-4 rounded-lg bg-black/50 border border-gray-700"
              />

              <input
                type="email"
                placeholder="Email address"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="p-4 rounded-lg bg-black/50 border border-gray-700"
              />

              <input
                type="text"
                placeholder="Phone number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="p-4 rounded-lg bg-black/50 border border-gray-700"
              />

              <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg hover:shadow-purple-500/50 hover:scale-105 transition">
                Request a Callback
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}