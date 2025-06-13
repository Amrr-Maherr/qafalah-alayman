import React from 'react'
import HeroSection from '../Herocomponents/HeroSection'
import Image from "../../assets/a.png";
import OurMessage from './OurMessage';
import About from './About';
import AboutUsSection from '../AboutUsSection/AboutUsSection';
import { FaTag, FaGlobeAmericas, FaRocket, FaHeadset } from "react-icons/fa";
function AboutUs() {
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
         backgroundType="image"
          backgroundSrc={Image}
        title="رحلتك تبدأ من هنا بثقة وراحة"
        description="نقدّم حلول سفر متكاملة تشمل حجز رحلات العمرة، الإقامة الفندقية، وخدمات الليموزين، بأسلوب احترافي يراعي أعلى معايير الراحة، الأمان، والدقة في المواعيد."
        buttonText="اكتشف الآن"
      />
      <OurMessage />
      <About />
      <AboutUsSection
        bgColor="#FCF8F2"
        data={aboutUsData}
        title="كيف تتواصل معنا !"
        description="لا تتردد في التواصل معنا عبر القنوات التالية. فريقنا جاهز للرد على جميع استفساراتك في أسرع وقت ممكن."
      />
    </>
  );
}

export default AboutUs