import Image from "../../assets/hotel.png";
import HeroSection from "../Herocomponents/HeroSection";
export default function HotelReservations() {
  return (
    <>
      <HeroSection
        BackGroundImage={Image}
        title="أقرب لك من الحرم… احجز فندقك في مكة أو المدينة بكل سهولة"
        description="خيارات متعددة قريبة من الحرم المكي والنبوي، تناسب كل الميزانيات وتوفر لك راحة البال."
        buttonText="اكتشف الان"
      />
    </>
  );
}
