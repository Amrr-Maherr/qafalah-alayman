import React from 'react'
import HeroSection from '../Herocomponents/HeroSection'
import Image from "../../assets/a.png";
import OurMessage from './OurMessage';
import About from './About';
import AboutUsSection from '../AboutUsSection/AboutUsSection';
function AboutUs() {
  return (
    <>
      <HeroSection
        BackGroundImage={Image}
        title="رحلتك تبدأ من هنا بثقة وراحة"
        description="نقدّم حلول سفر متكاملة تشمل حجز رحلات العمرة، الإقامة الفندقية، وخدمات الليموزين، بأسلوب احترافي يراعي أعلى معايير الراحة، الأمان، والدقة في المواعيد."
        buttonText="اكتشف الآن"
      />
      <OurMessage />
      <About />
      <AboutUsSection/>
    </>
  );
}

export default AboutUs