import Image from "../../assets/home-image.png"
import HeroSection from "../Herocomponents/HeroSection";
import NewsTicker from "../NewsTicker";
import HomeNav from './HomeNav';
import HomeOverLay from "./HomeOverLay"
function Home() {
  return (
    <>
      <section
        className="min-h-screen relative"
        style={{
          backgroundImage: `url(${Image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* home title */}
        <HomeNav />
        {/* home links */}

        <HomeOverLay />
      </section>
    </>
  );
}

export default Home