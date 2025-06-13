import React, { useState } from "react";
import { X, Menu, Plane, Car, Phone, Info } from "lucide-react";
import Logo from "../Logo";
import { Link } from "react-router-dom";
import NewsTicker from "../NewsTicker";
import footerLogo from "../../assets/footerLogo.png";
export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLinkClick = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      {/* <NewsTicker /> */}
      <nav className="flex items-center justify-between  text-black px-[96px] py-2">
        <button
          className="md:hidden order-1 p-2 rounded-md hover:bg-gray-700 transition"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open sidebar"
        >
          <Menu size={24} />
        </button>

        <ul className="hidden md:flex gap-10 flex-row-reverse order-2 mx-auto font-semibold text-lg">
          <li className="flex items-center gap-2  transition cursor-pointer">
            <Plane size={22} />
            <Link to="/Flight" className="hover:underline">
              حجز الطيران والفنادق
            </Link>
          </li>
          <li className="flex items-center gap-2  transition cursor-pointer">
            <Car size={22} />
            <Link to="/limousine" className="hover:underline">
              حجز ليموزين
            </Link>
          </li>
          <li className="flex items-center gap-2  transition cursor-pointer">
            <Phone size={22} />
            <Link to="/contact" className="hover:underline">
              تواصل معنا
            </Link>
          </li>
          <li className="flex items-center gap-2  transition cursor-pointer">
            <Info size={22} />
            <Link to="/aboutUs" className="hover:underline">
              عننا
            </Link>
          </li>
        </ul>

        <div className="order-3 cursor-pointer">
          <Link to={"/"}><Logo /></Link>
        </div>
      </nav>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-black text-white shadow-xl transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
        style={{ zIndex: 1000 }}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <Logo />
          <button
            onClick={() => setSidebarOpen(false)}
            aria-label="Close sidebar"
            className="p-2 rounded-md hover:bg-gray-700 transition"
          >
            <X size={28} color="white" />
          </button>
        </div>

        <ul className="flex flex-col gap-8 p-6 text-lg font-medium">
          <li className="flex items-center gap-3  transition cursor-pointer">
            <Plane size={24} />
            <Link
              to="/Flight"
              onClick={handleLinkClick}
              className="hover:underline"
            >
              حجز الطيران والفنادق
            </Link>
          </li>
          <li className="flex items-center gap-3  transition cursor-pointer">
            <Car size={24} />
            <Link
              to="/limousine"
              onClick={handleLinkClick}
              className="hover:underline"
            >
              حجز ليموزين
            </Link>
          </li>
          <li className="flex items-center gap-3  transition cursor-pointer">
            <Phone size={24} />
            <Link
              to="/contact"
              onClick={handleLinkClick}
              className="hover:underline"
            >
              تواصل معنا
            </Link>
          </li>
          <li className="flex items-center gap-3  transition cursor-pointer">
            <Info size={24} />
            <Link
              to="/aboutUs"
              onClick={handleLinkClick}
              className="hover:underline"
            >
              عننا
            </Link>
          </li>
        </ul>
      </div>

      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-40 z-900"
        ></div>
      )}
    </>
  );
}
