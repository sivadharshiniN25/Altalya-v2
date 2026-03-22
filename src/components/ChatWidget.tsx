"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">

      {/* Chat Box */}
      {open && (
        <div className="mb-4 w-72 bg-black/90 backdrop-blur-md border border-gray-800 rounded-xl p-4 text-white shadow-xl">
          <p className="text-sm text-gray-300">
            👋 Hi! How can we help you?
          </p>
        </div>
      )}

      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center shadow-lg hover:scale-110 transition"
      >
        {open ? <X /> : <MessageCircle />}
      </button>
    </div>
  );
}