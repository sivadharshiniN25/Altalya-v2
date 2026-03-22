"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-16 border-t border-gray-800 bg-black/60 backdrop-blur-md">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold">Altalya</h2>
          <p className="text-gray-400 mt-2">
            Get trained from the experts
          </p>
        </div>

        {/* Explore */}
        <div>
          <h3 className="font-semibold mb-3">Explore</h3>
          <ul className="text-gray-400 space-y-2">
            <li>
              <Link href="#testimonials" className="hover:text-white">
                Testimonials
              </Link>
            </li>
            <li>
              <Link href="#faq" className="hover:text-white">
                FAQ's
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-white">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-3">Links</h3>
          <ul className="text-gray-400 space-y-2">
            <li>
              <Link href="#about" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#courses" className="hover:text-white">
                Courses
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-white">
                Terms Of Services
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>

          <p className="text-gray-400">
            <a href="tel:+917560056003" className="hover:text-white">
              +91 75600 56003
            </a>
          </p>

          <p className="text-gray-400 mt-2">
            <a href="mailto:systems@altalya.com" className="hover:text-white">
              systems@altalya.com
            </a>
          </p>

          <p className="text-gray-400 mt-2 text-sm leading-relaxed">
            1/1135-H2, Dharapuram Main Rd, opp. to Meenakshi Hospital,
            Chenniyappa colony, Podhikai Nagar, K Chettipalayam,
            Tiruppur, Tamil Nadu 641608
          </p>
        </div>

      </div>

      {/* Bottom */}
      <p className="text-center text-gray-500 mt-10 text-sm">
        © Copyright 2025 by altalya.com
      </p>

    </footer>
  );
}