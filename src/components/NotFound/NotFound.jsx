import React from "react";
import { useNavigate } from "react-router-dom"; // لو بتستخدم react-router

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F2F2F2] p-8">
      <div className="bg-white p-12 rounded-2xl shadow-lg text-center max-w-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
        <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-amber-100 mb-6">
          <span className="text-6xl text-amber-600">⚠️</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-3">
          404 - الصفحة غير موجودة
        </h1>
        <p className="text-gray-500 leading-relaxed mb-6">
          عذرًا، الصفحة التي تبحث عنها غير متوفرة أو قد تم نقلها.
          <br />
          الرجاء التأكد من عنوان الصفحة أو العودة إلى الصفحة الرئيسية.
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-[#B38124] text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors duration-300"
        >
          العودة للصفحة الرئيسية
        </button>
      </div>
    </div>
  );
}

export default NotFound;
