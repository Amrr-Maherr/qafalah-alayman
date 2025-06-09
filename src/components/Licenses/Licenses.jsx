import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

function Licenses() {
  // قائمة التراخيص
  const licenses = [
    {
      title: "السجل التجاري",
      description:
        "نحن مسجلون رسميًا لدى الجهات الحكومية المختصة، ونمتلك سجلاً تجاريًا ساري المفعول يسمح لنا بتقديم خدماتنا بكفاءة وشفافية.",
      licenseNumber: "س.ت: 1010323470",
    },
    {
      title: "ترخيص السياحة",
      description:
        "نمتلك ترخيصًا من وزارة السياحة يؤهلنا لتنظيم رحلات الطيران، حجوزات الفنادق، ورحلات الليموزين بمعايير عالية الجودة.",
      licenseNumber: "رقم الترخيص: 73103307",
    },
    {
      title: "شهادة الأمان الإلكتروني",
      description:
        "حصلنا على شهادة الأمان الإلكتروني التي تضمن حماية بيانات العملاء أثناء التعاملات عبر الإنترنت.",
      licenseNumber: "ES-456789123",
    },
  ];

  return (
    <div className="licenses-page bg-[#FBF5EA] min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* العنوان الرئيسي */}
        <motion.div
          dir="rtl"
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-[32px] md:text-[40px] font-bold text-[#B38124]">
            التراخيص
          </h1>
          <p className="text-[#4D4D4D] text-[18px] md:text-[20px] mt-4">
            نحن نسخر خبراتنا ومواردنا لتوفير أفضل الاختيارات وابتكار أفضل الحلول
            لتيسير أداء المناسك وتحسين ظروف السفر والإقامة للحفاظ على ذهن صاف
            وقلب مطمئن
          </p>
        </motion.div>

        {/* قسم التراخيص */}
        <motion.div
          dir="rtl"
          className="licenses-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {licenses.map((license, index) => (
            <div
              key={index}
              className="license-card bg-white p-6 rounded-[20px] shadow-md"
            >
              <h3 className="text-[20px] font-bold text-[#B38124] mb-3">
                {license.title}
              </h3>
              <p className="text-[#4D4D4D] text-[16px] mb-2">
                {license.description}
              </p>
              <p className="text-[#4D4D4D] text-[16px] font-semibold">
                {license.licenseNumber}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Licenses;
