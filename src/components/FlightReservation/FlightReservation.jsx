import Image from "../../assets/fly.png";
import AboutUsSection from "../AboutUsSection/AboutUsSection";
import HeroSection from "../Herocomponents/HeroSection";
import FlightForm from "./FlightForm";

// استيراد الأيقونات المناسبة
import {
  FaHandsHelping,
  FaHotel,
  FaMoneyBillWave,
  FaHeadphonesAlt,
} from "react-icons/fa";

export default function FlightReservation() {
  const aboutUsData = [
    {
      icon: <FaHandsHelping />,
      title: "مميزات خدماتنا",
      text: "نتشرف في قافلة الإيمان بخدمه زروار البيت الحرام، ونرجو أن تلقى خدماتنا إستحسانكم",
    },
    {
      icon: <FaHotel />,
      title: "علاقات مميزة",
      text: "نحتفظ بعلاقات طيبة مع أفضل وأقرب الفنادق مع الحرم، يمكنك إستخدام علاقاتنا",
    },
    {
      icon: <FaMoneyBillWave />,
      title: "تكلفة مناسبة",
      text: "تمتع بخدمات جيدة وبرنامج متكامل بتكلفة جداً مناسبة، أقل من التوقعات",
    },
    {
      icon: <FaHeadphonesAlt />,
      title: "مميزات الحجز",
      text: "نوفر لكل عملائنا الممزين جميع خدمات التواصل مع الدعم الفنى اذا واجهتهم اى مشكلة",
    },
  ];

  return (
    <>
      <HeroSection
        BackGroundImage={Image}
        title="رحلات داخلية لمكة والمدينة بأفضل الأسعار"
        description="سافر بأمان وراحة مع أفضل شركات الطيران السعودية."
        buttonText="اكتشف الآن"
      >
        <FlightForm />
      </HeroSection>
      <AboutUsSection
        data={aboutUsData}
        title="لماذا تختار منصتنا !"
        description="استمتع مع اقوى الخدمات و افضل الباقات من قافلة الايمان"
      />
    </>
  );
}
