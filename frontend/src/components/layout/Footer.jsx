import React from "react";
import { FaPhoneAlt } from "react-icons/fa";


export default function Footer({ name, socials, email }) {
  return (
    <footer className="py-10 border-t border-gray-200 dark:border-gray-800">
  <div className="mx-auto max-w-6xl px-5 flex flex-col sm:flex-row gap-3 items-center justify-between text-sm text-gray-600 dark:text-gray-300">
    
    <div>© {new Date().getFullYear()} {name}. All rights reserved.</div>

    <div className="flex gap-4 items-center">
      <a
        href="tel:+16382532592"
        className="flex items-center gap-2 hover:text-red-600 transition"
      >
        <FaPhoneAlt />
        Call Now
      </a>
    </div>

  </div>
</footer>

  );
}
