import React from "react";
import { Phone, MessageCircle } from "lucide-react";

export default function FloatingContact() {
  return (
    <>
      <div className="fixed bottom-8 right-6 flex flex-col gap-4 z-50">
        {/* أيقونة الواتساب */}
        <a
          href="https://wa.me/966543051342" // غير الرقم هنا لرقم الواتساب الخاص بك
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-transform transform hover:scale-110"
          aria-label="WhatsApp"
        >
          <MessageCircle size={28} />
        </a>

        {/* أيقونة الاتصال */}
        <a
          href="tel:+966543051342" // غير الرقم هنا لرقم الاتصال الخاص بك
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-transform transform hover:scale-110"
          aria-label="Call Phone"
        >
          <Phone size={28} />
        </a>
      </div>
    </>
  );
}
