import React from "react";
import Image from "../../assets/293621.jpg";

function AboutUs() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center px-4"
      style={{
        backgroundImage: `url(${Image})`,
      }}
    >
      {/* طبقة سوداء شفافة فوق الصورة */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      {/* المحتوى */}
      <div className="relative z-10 max-w-xl w-full bg-white bg-opacity-90 p-6 shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-black">
          تواصل معنا
        </h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium text-black">
              الاسم
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="اكتب اسمك"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-1 font-medium text-black"
            >
              البريد الإلكتروني
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="example@email.com"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block mb-1 font-medium text-black"
            >
              رسالتك
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="اكتب رسالتك هنا"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-2 px-4 rounded"
          >
            إرسال
          </button>
        </form>
      </div>
    </div>
  );
}

export default AboutUs;
