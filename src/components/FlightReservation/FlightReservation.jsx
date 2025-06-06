import Image from "../../assets/home-image.png";
import HeroSection from "../Herocomponents/HeroSection";
export default function FlightReservation() {
    return (
      <>
        <HeroSection
          BackGroundImage={Image}
          title="طيران داخلي إلى مكة والمدينة… احجز رحلتك الروحية بأقل الأسعار"
          description="اختر من أفضل شركات الطيران السعودية، وسافر بأمان وراحة إلى وجهتك المقدسة."
          buttonText="اكتشف الان"
        />
      </>
    );
}
