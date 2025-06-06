import HeroSection from "../Herocomponents/HeroSection";
import Image from "../../assets/home-image.png"
export default function Booklimousine() {
    return (
      <>
        <HeroSection
          BackGroundImage={Image}
          title="رحلتك تستحق الأفضل… ليموزين راقٍ بخدمة عالية المستوى في كل مدينة سعودية"
          description="استمتع بتجربة تنقل فاخرة مع أسطول من السيارات الحديثة وسائقين مدربين – احجز في دقائق."
          buttonText="اكتشف الان"
        />
      </>
    );
}