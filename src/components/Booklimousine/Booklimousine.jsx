import HeroSection from "../Herocomponents/HeroSection";
import Image from "../../assets/lemo.png";

export default function Booklimousine() {
  return (
    <HeroSection
      BackGroundImage={Image}
      title="ليموزين فاخر بخدمة راقية في جميع المدن السعودية"
      description="تنقل فخم مع أسطول سيارات حديث وسائقين محترفين – احجز بسهولة."
      buttonText="اكتشف الآن"
    />
  );
}
