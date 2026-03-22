"use client";

import { useEffect, useState } from "react";

const links = [
  { name: "Home", id: "hero" },
  { name: "About", id: "about" },
  { name: "Courses", id: "courses" },
  { name: "Testimonials", id: "testimonials" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = links.map((link) =>
        document.getElementById(link.id)
      );

      const scrollPos = window.scrollY + 200;

      sections.forEach((section, i) => {
        if (
          section &&
          section.offsetTop <= scrollPos &&
          section.offsetTop + section.offsetHeight > scrollPos
        ) {
          setActive(links[i].id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/70 backdrop-blur-md border-b border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* TEXT LOGO */}
        <div className="leading-tight">
          <h1 className="text-lg font-bold text-white tracking-wide">
            ALTALYA
          </h1>
          <p className="text-xs text-gray-400">
            Solutions Pvt Ltd.
          </p>
        </div>

        {/* LINKS */}
        <div className="hidden md:flex gap-8 text-gray-300">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`transition ${
                active === link.id
                  ? "text-white border-b-2 border-purple-500"
                  : "hover:text-white"
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>

      </div>
    </nav>
  );
}