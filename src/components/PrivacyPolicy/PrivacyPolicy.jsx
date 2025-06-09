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

function PrivacyPolicy() {

  // قائمة سياسات الخصوصية
  const privacyPolicies = [
    {
      title: "جمع المعلومات",
      description:
        "نقوم بجمع المعلومات الشخصية التي تقدمها لنا طواعية، مثل الاسم، البريد الإلكتروني، ورقم الهاتف، عند التسجيل في موقعنا أو الاشتراك في خدماتنا. كما نجمع بيانات الاستخدام مثل عنوان IP والمتصفح لتحسين تجربة المستخدم.",
    },
    {
      title: "استخدام المعلومات",
      description:
        "نستخدم المعلومات المجمعة لتقديم خدماتنا، تحسين تجربة المستخدم، وإرسال عروض ترويجية مخصصة. لن نشارك بياناتك مع أطراف ثالثة إلا بموافقتك أو وفقًا للقوانين المعمول بها.",
    },
    {
      title: "حماية البيانات",
      description:
        "نستخدم تقنيات أمان متقدمة مثل التشفير وجدران الحماية لحماية بياناتك الشخصية من الوصول غير المصرح به أو الاستخدام غير القانوني.",
    },
    {
      title: "ملفات تعريف الارتباط (Cookies)",
      description:
        "نستخدم ملفات تعريف الارتباط لتتبع تفضيلات المستخدم وتحسين أداء الموقع. يمكنك إدارة إعدادات ملفات تعريف الارتباط من خلال إعدادات المتصفح الخاص بك.",
    },
    {
      title: "حقوق العملاء",
      description:
        "يمكنك طلب الوصول إلى بياناتك الشخصية، تعديلها، أو حذفها في أي وقت. تواصلوا معنا عبر قنوات الدعم لتقديم طلباتكم.",
    },
  ];

  return (
    <div className="privacy-policy bg-[#FBF5EA] min-h-screen py-8">
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
            سياسات الخصوصية
          </h1>
          <p className="text-[#4D4D4D] text-[18px] md:text-[20px] mt-4">
            نحن ملتزمون بحماية خصوصيتك وضمان أمان بياناتك الشخصية. توضح هذه
            السياسة كيفية جمع معلوماتك، استخدامها، وحمايتها.
          </p>
        </motion.div>

        {/* قسم السياسات */}
        <motion.div
          dir="rtl"
          className="policies-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {privacyPolicies.map((policy, index) => (
            <div
              key={index}
              className="policy-card bg-white p-6 rounded-[20px] shadow-md"
            >
              <h3 className="text-[20px] font-bold text-[#B38124] mb-3">
                {policy.title}
              </h3>
              <p className="text-[#4D4D4D] text-[16px]">{policy.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
