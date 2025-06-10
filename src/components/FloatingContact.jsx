import React from "react";
import { Phone, MessageCircle } from "lucide-react";

export default function FloatingContact() {
  return (
    <>
      <div className="fixed bottom-8 right-6 flex flex-col gap-4 z-50">
        {/* أيقونة الواتساب */}
        <a
          href="https://wa.me/966543051342"
          target="_blank"
          rel="noopener noreferrer"
          className="backdrop-blur-md bg-white/10 border border-white/20 text-white p-4 rounded-full shadow-xl flex items-center justify-center transition-all hover:scale-110 hover:bg-white/20"
          aria-label="WhatsApp"
        >
          <MessageCircle size={28} />
        </a>

        {/* أيقونة الاتصال */}
        <a
          href="tel:+966543051342"
          className="backdrop-blur-md bg-white/10 border border-white/20 text-white p-4 rounded-full shadow-xl flex items-center justify-center transition-all hover:scale-110 hover:bg-white/20"
          aria-label="Call Phone"
        >
          <Phone size={28} />
        </a>
      </div>
    </>
  );
}
