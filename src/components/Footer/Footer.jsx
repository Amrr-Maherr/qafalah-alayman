import React from "react";
import footerLogo from "../../assets/footerLogo.png";
import { FaFacebook, FaInstagramSquare, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { PiPhoneCall } from "react-icons/pi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Footer() {
  // قائمة بأرقام الواتساب
  const whatsappNumbers = [
    { number: "+0509861516", label: "واتس اب" },
    { number: "+0509861516", label: "واتس اب" },
    { number: "+0549484927", label: "واتس اب" },
  ];

  return (
    <motion.div
      className="footer py-4 md:py-6 bg-[#FBF5EA]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="footerWrapper container">
        {/* القسم العلوي */}
        <motion.div
          dir="rtl"
          className="topFooter flex md:flex-row flex-col items-center justify-between"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="footerInfo">
            <h2 className="text-[24px] leading-[150%] font-bold text-[#B38124]">
              سجل دخولك الي موقعنا...
            </h2>
            <p className="text-[#4D4D4D] text-[18px] font-normal text-end">
              لتبقي علي اطلاع علي جميع عروضنا باستمرار!
            </p>
          </div>

          <div className="footerContact flex md:flex-row flex-col items-center gap-[14px]">
            <input
              dir="rtl"
              className="userEmail py-[12px] md:mt-0 mt-3 md:w-[451px] w-[250px] focus:outline-none px-[18px] rounded-[40px]"
              type="email"
              placeholder="أدخل ايميلك"
            />
            <button className="footerSubscribeBtn py-[10px] px-[24px] rounded-[60px] bg-[#B38124] text-white">
              <a href="#">أشترك الان</a>
            </button>
          </div>
        </motion.div>

        {/* القسم الرئيسي */}
        <motion.div
          dir="rtl"
          className="mainInfo mt-[40px] flex-wrap flex items-start justify-between"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="rightMain md:flex-row flex-col w-full md:w-1/3">
            <div className="flex md:flex-row md:items-end flex-col items-center gap-3">
              <img
                className="w-[92px] h-[140px]"
                src={footerLogo}
                alt="footer logo"
              />
              <p className="text-[16px] text-center md:text-start text-[#4D4D4D]">
                اختر من بين حلولنا التمويلية المرنة، واستمتع بتجربة امتلاك سيارة
                تناسب ميزانيتك وأسلوب حياتك
              </p>
            </div>
            <div className="footerSocialMedia text-[#B38124] my-3 flex justify-center md:justify-start items-center gap-1">
              <a href="#" target="_blank">
                <FaFacebook size={24} />
              </a>
              <a href="#" target="_blank">
                <FaXTwitter size={24} />
              </a>
              <a href="#" target="_blank">
                <FaInstagramSquare size={24} />
              </a>
              <a href="#" target="_blank">
                <FaYoutube size={24} />
              </a>
            </div>
            <div
              dir="rtl"
              className="flex justify-center items-center mb-5 md:justify-start md:mb-0"
            ></div>
          </div>

          {/* روابط */}
          <div className="footerLinks w-full md:w-2/3 flex md:flex-row flex-col gap-5 md:gap-0 items-start justify-between">
            <div className="companyLinks text-center md:w-1/3 w-full">
              <h2 className="text-[18px] font-bold text-[#B38124]">الشركه</h2>
              <ul className="list-none">
                <li>
                  <Link className="text-[#4D4D4D] text-[16px]" to={"/Flight"}>
                    رحلات الطيران
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-[#4D4D4D] text-[16px]"
                    to={"/limousine"}
                  >
                    رحلات ليموزين
                  </Link>
                </li>
                <li>
                  <Link className="text-[#4D4D4D] text-[16px]" to={"/Hotel"}>
                    حجز الفنادق
                  </Link>
                </li>
                <li>
                  <Link className="text-[#4D4D4D] text-[16px]" to={"/aboutUs"}>
                    عن قافلة الايمان
                  </Link>
                </li>
                <li>
                  <Link className="text-[#4D4D4D] text-[16px]" to={"/contact"}>
                    تواصل معنا
                  </Link>
                </li>
              </ul>
            </div>

            <div className="policies text-center md:w-1/3 w-full">
              <h2 className="text-[18px] font-bold text-[#B38124]">السياسات</h2>
              <ul className="list-none">
                <li>
                  <Link
                    className="no-underline text-[16px] text-[#4D4D4D]"
                    to="/PrivacyPolicy"
                  >
                    سياسات الخصوصيه
                  </Link>
                </li>
                <li>
                  <Link
                    className="no-underline text-[16px] text-[#4D4D4D]"
                    to="/Licenses"
                  >
                    التراخيص
                  </Link>
                </li>
              </ul>
            </div>

            <div className="support text-center md:w-1/3 w-full">
              <h2 className="text-[18px] font-bold text-[#B38124]">
                المساعدة والدعم
              </h2>
              <ul className="list-none">
                <li>
                  <Link
                    className="no-underline text-[16px] text-[#4D4D4D]"
                    to="/contact"
                  >
                    طلب أو شكوي
                  </Link>
                </li>
                <li>
                  <Link
                    className="no-underline text-[16px] text-[#4D4D4D]"
                    to="/CustomerProtection"
                  >
                    مبادئ حماية العملاء
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="whatsappContact flex items-center justify-center gap-2 mt-[32px] flex-wrap">
        {whatsappNumbers.map((contact, index) => (
          <a
            key={index}
            href={`https://wa.me/${contact.number.replace("+", "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="footerContactBtn rounded-[60px] py-[10px] px-[24px] bg-[#B38124] text-white flex items-center gap-1"
          >
            {contact.label}{" "}
            <PiPhoneCall size={24} style={{ transform: "rotate(270deg)" }} />
          </a>
        ))}
      </div>
      <div className="w-full border-t border-[#E0E0E0] mt-10 pt-4">
        <p className="text-center text-[#4D4D4D] text-sm md:text-base">
          جميع الحقوق محفوظة © {new Date().getFullYear()} —
          <a
            href="https://neon-code-nest.vercel.app/"
            className="text-[#B38124] font-semibold"
          >
            {" "}
            DevNest{" "}
          </a>
        </p>
      </div>
    </motion.div>
  );
}

export default Footer;
