import HeroSection from "../Herocomponents/HeroSection";
import NewsTicker from "../NewsTicker";
import HomeNav from "./HomeNav";
import HomeOverLay from "./HomeOverLay";

import backgroundVideo from "../../assets/Generated File June 13, 2025 - 8_22PM.mp4";

function Home() {
  return (
    <>
      <section className="min-h-screen relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        >
          <source src={backgroundVideo} type="video/mp4" />
          المتصفح لا يدعم تشغيل الفيديو.
        </video>

        {/* محتوى الصفحة فوق الفيديو */}
        <HomeNav />
        <HomeOverLay />
      </section>
    </>
  );
}

export default Home;
