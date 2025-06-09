import Image from "../../assets/hotel.png";
import AboutUsSection from "../AboutUsSection/AboutUsSection";
import HeroSection from "../Herocomponents/HeroSection";
import HotelForm from "./HotelForm";
import { FaBed, FaConciergeBell, FaWifi, FaSwimmer } from "react-icons/fa";
import HotelSection from "./HotelSection";

export default function HotelReservations() {
  const aboutUsData = [
    {
      icon: <FaBed />,
      title: "غرف مريحة",
      text: "نقدم غرف مجهزة بجودة عالية وراحة تامة.",
    },
    {
      icon: <FaConciergeBell />,
      title: "خدمة 24/7",
      text: "فريقنا متوفر لخدمتك في أي وقت تحتاج.",
    },
    {
      icon: <FaWifi />,
      title: "واي فاي مجاني",
      text: "اتصال إنترنت سريع ومجاني في جميع الغرف.",
    },
    {
      icon: <FaSwimmer />,
      title: "مرافق متكاملة",
      text: "مسبح، نادي صحي، ومرافق ترفيهية تلبي احتياجاتك.",
    },
  ];

  return (
    <>
      <HeroSection
        BackGroundImage={Image}
        title="احجز فندقك في مكة أو المدينة بسهولة"
        description="خيارات متنوعة قريبة من الحرم تناسب جميع الميزانيات."
        buttonText="اكتشف الآن"
      />
      <HotelForm />
      <HotelSection/>
      <AboutUsSection
        data={aboutUsData}
        title="مميزات حجز الفنادق لدينا"
        description="نضمن لك إقامة مريحة وخدمة مميزة في كل فندق."
      />
    </>
  );
}
