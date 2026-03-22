"use client";

export default function TopBar() {
  return (
    <div className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm py-2 px-6 flex flex-col md:flex-row justify-between items-center mt-[70px] z-40 relative">
      <p className="font-medium">
        Exciting discounts for students. Hurry up!
      </p>

      <div className="flex gap-6 mt-2 md:mt-0 text-xs md:text-sm">
        <span>📞 +91 75600 56003</span>
        <span>✉ systems@altalya.com</span>
      </div>

    </div>
  );
}