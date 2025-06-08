import Image from "../../assets/fly.png";
import AboutUsSection from "../AboutUsSection/AboutUsSection";
import HeroSection from "../Herocomponents/HeroSection";
import FlightForm from "./FlightForm";

export default function FlightReservation() {
  return (
    <>
      <HeroSection
        BackGroundImage={Image}
        title="رحلات داخلية لمكة والمدينة بأفضل الأسعار"
        description="سافر بأمان وراحة مع أفضل شركات الطيران السعودية."
        buttonText="اكتشف الآن"
      />
      <FlightForm />
      <AboutUsSection/>
    </>
  );
}
