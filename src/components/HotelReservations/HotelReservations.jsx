import Image from "../../assets/hotel.png";
import HeroSection from "../Herocomponents/HeroSection";
import HotelForm from "./HotelForm";

export default function HotelReservations() {
  return (
    <>
      <HeroSection
        BackGroundImage={Image}
        title="احجز فندقك في مكة أو المدينة بسهولة"
        description="خيارات متنوعة قريبة من الحرم تناسب جميع الميزانيات."
        buttonText="اكتشف الآن"
      />
      <HotelForm/>
    </>
  );
}
