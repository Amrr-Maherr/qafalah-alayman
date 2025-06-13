import HeroSection from "../Herocomponents/HeroSection";
import Image from "../../assets/lemo.png";
import AboutUsSection from "../AboutUsSection/AboutUsSection";
import { FaCar, FaClock, FaUserTie, FaShieldAlt } from "react-icons/fa";
import LimousineSection from "./limousineSection";

export default function Booklimousine() {
  const aboutUsData = [
    {
      icon: <FaCar />,
      title: "أسعار تنافسية",
      text: "خدمة ليموزين فاخرة بأسعار مناسبة وواضحة.",
    },
    {
      icon: <FaClock />,
      title: "تغطية جميع المدن",
      text: "نخدم كل مناطق المملكة بسيارات حديثة.",
    },
    {
      icon: <FaUserTie />,
      title: "حجز سريع",
      text: "احجز خلال دقائق وسنلبي طلبك فورًا.",
    },
    {
      icon: <FaShieldAlt />,
      title: "دعم 24/7",
      text: "فريقنا جاهز لمساعدتك في أي وقت.",
    },
  ];

  return (
    <>
      <HeroSection
        backgroundType="image"
        backgroundSrc={Image}
        title="ليموزين فاخر بخدمة راقية في جميع المدن السعودية"
        description="تنقل فخم مع أسطول سيارات حديث وسائقين محترفين – احجز بسهولة."
        buttonText="اكتشف الآن"
      />
      <LimousineSection/>
      <AboutUsSection
        data={aboutUsData}
        title="باقة من أفضل الخدمات"
        description="خدمات ليموزين توفر الراحة والرفاهية في تنقلاتك"
      />
    </>
  );
}
