import React from "react";
import footerLogo from "../../assets/footerLogo.png";
import {
  FaFacebook,
  FaInstagramSquare,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../Footer/Footer";

function CustomerProtection() {
  // قائمة أرقام الواتساب
  const whatsappNumbers = [
    { number: "+966123456789", label: "خدمة العملاء 1" },
    { number: "+966987654321", label: "خدمة العملاء 2" },
    { number: "+966555555555", label: "الدعم الفني" },
  ];

  // قائمة مبادئ حماية العملاء
  const principles = [
    {
      title: "الشفافية",
      description:
        "نلتزم بتقديم معلومات واضحة وصادقة حول خدماتنا وشروطنا، مما يضمن فهم العملاء لجميع التفاصيل قبل اتخاذ أي قرار.",
    },
    {
      title: "الخصوصية",
      description:
        "نحافظ على سرية بيانات عملائنا ونستخدم أحدث تقنيات الحماية لضمان أمان المعلومات الشخصية.",
    },
    {
      title: "العدالة",
      description:
        "نضمن معاملة عادلة لجميع العملاء دون تمييز، مع تقديم حلول تمويلية مرنة تناسب احتياجاتهم.",
    },
    {
      title: "الدعم المستمر",
      description:
        "نقدم دعمًا مستمرًا لعملائنا من خلال فريق خدمة عملاء متاح على مدار الساعة للإجابة على استفساراتهم وحل مشكلاتهم.",
    },
    {
      title: "التزام الجودة",
      description:
        "نحرص على تقديم خدمات عالية الجودة تلبي توقعات العملاء وتعزز تجربتهم معنا.",
    },
  ];

  return (
    <div className="customer-protection bg-[#FBF5EA] min-h-screen py-8">
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
            مبادئ حماية العملاء
          </h1>
          <p className="text-[#4D4D4D] text-[18px] md:text-[20px] mt-4">
            نهدف إلى توفير بيئة آمنة وعادلة لعملائنا من خلال الالتزام بمبادئ
            حماية العملاء التالية:
          </p>
        </motion.div>

        {/* قسم المبادئ */}
        <motion.div
          dir="rtl"
          className="principles-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {principles.map((principle, index) => (
            <div
              key={index}
              className="principle-card bg-white p-6 rounded-[20px] shadow-md"
            >
              <h3 className="text-[20px] font-bold text-[#B38124] mb-3">
                {principle.title}
              </h3>
              <p className="text-[#4D4D4D] text-[16px]">
                {principle.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default CustomerProtection;
