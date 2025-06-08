import HeroSection from "../Herocomponents/HeroSection";
import Image from "../../assets/lemo.png";
import AboutUsSection from "../AboutUsSection/AboutUsSection";
import { FaTag, FaGlobeAmericas, FaRocket, FaHeadset } from "react-icons/fa";
export default function Booklimousine() {
  const aboutUsData = [
      {
        icon: <FaTag />,
        title: "عروض لا تقبل المنافسة",
        text: "نقارن آلاف الرحلات والفنادق لنضمن لك الحصول على أفضل سعر ممكن. وفر أكثر مع كل حجز.",
      },
      {
        icon: <FaGlobeAmericas />,
        title: "خيارات واسعة",
        text: "شبكتنا الواسعة من شركات الطيران والفنادق حول العالم تمنحك حرية الاختيار بين آلاف الوجهات.",
      },
      {
        icon: <FaRocket />,
        title: "حجز سهل وسريع",
        text: "منصة مصممة لتكون سهلة الاستخدام، يمكنك إتمام حجزك في خطوات بسيطة وخلال دقائق معدودة.",
      },
      {
        icon: <FaHeadset />,
        title: "دعم فني 24/7",
        text: "فريق الدعم لدينا متاح على مدار الساعة لمساعدتك في كل خطوة، من الاستفسار وحتى ما بعد الحجز.",
      },
    ];
  return (
    <>
      <HeroSection
        BackGroundImage={Image}
        title="ليموزين فاخر بخدمة راقية في جميع المدن السعودية"
        description="تنقل فخم مع أسطول سيارات حديث وسائقين محترفين – احجز بسهولة."
        buttonText="اكتشف الآن"
      />
      <AboutUsSection
        data={aboutUsData}
        title="باقة من أفضل الخدمات"
        description="خدمات حجز رحلات الباص والطيران فتمتع بإقامة مميزة في أفضل فنادق المملكة"
      />
    </>
  );
}
