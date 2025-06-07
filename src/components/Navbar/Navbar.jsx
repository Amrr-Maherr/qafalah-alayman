import React, { useState } from "react";
import { X, Menu, Plane, Car, Phone, Info } from "lucide-react";
import Logo from "../Logo";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between p-4 text-white">
        {/* زرار فتح السايد بار يظهر في الشاشات الصغيرة */}
        <button
          className="md:hidden order-1"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open sidebar"
        >
          <Menu size={24} />
        </button>

        {/* اللينكات في الوسط */}
        <ul className="hidden md:flex gap-8 flex-row-reverse order-2 mx-auto">
          <li className="flex items-center gap-2">
            <Plane size={20} />
            <Link to="/" className="hover:underline">
              حجز الطيران والفنادق
            </Link>
          </li>
          <li className="flex items-center gap-2">
            <Car size={20} />
            <Link to="/" className="hover:underline">
              حجز ليموزين
            </Link>
          </li>
          <li className="flex items-center gap-2">
            <Phone size={20} />
            <Link to="/" className="hover:underline">
              تواصل معنا
            </Link>
          </li>
          <li className="flex items-center gap-2">
            <Info size={20} />
            <Link to="/" className="hover:underline">
              عننا
            </Link>
          </li>
        </ul>

        {/* اللوجو على اليمين */}
        <div className="order-3 cursor-pointer">
          <Logo />
        </div>
      </nav>

      {/* السايد بار */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white text-black shadow-lg transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* زرار غلق */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setSidebarOpen(false)}
            aria-label="Close sidebar"
          >
            <X size={24} />
          </button>
        </div>

        {/* اللينكات */}
        <ul className="flex flex-col gap-6 p-4 text-lg">
          <li className="flex items-center gap-2">
            <Plane size={20} />
            <a
              href="#home"
              onClick={() => setSidebarOpen(false)}
              className="hover:underline"
            >
              حجز الطيران والفنادق
            </a>
          </li>
          <li className="flex items-center gap-2">
            <Car size={20} />
            <a
              href="#about"
              onClick={() => setSidebarOpen(false)}
              className="hover:underline"
            >
              حجز ليموزين
            </a>
          </li>
          <li className="flex items-center gap-2">
            <Phone size={20} />
            <a
              href="#services"
              onClick={() => setSidebarOpen(false)}
              className="hover:underline"
            >
              تواصل معنا
            </a>
          </li>
          <li className="flex items-center gap-2">
            <Info size={20} />
            <a
              href="#about"
              onClick={() => setSidebarOpen(false)}
              className="hover:underline"
            >
              عننا
            </a>
          </li>
        </ul>
      </div>

      {/* خلفية مظللة تظهر مع السايد بار */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-30"
        ></div>
      )}
    </>
  );
}
