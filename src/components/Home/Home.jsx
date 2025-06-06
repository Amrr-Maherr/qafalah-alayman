import Image from "../../assets/293621.jpg"
import HomeNav from './HomeNav';
import HomeOverLay from "./HomeOverLay"
function Home() {
  return (
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
      <HomeNav/>
      {/* home links */}

      <HomeOverLay/>
    </section>
  );
}

export default Home