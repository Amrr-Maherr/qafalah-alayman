import React from 'react'
import Logo from '../Logo';
import Image from "../../assets/293621.jpg"
import imgOne from "../../assets/Group.png"
import imgTwo from "../../assets/bus 1.png"
import imgThree from "../../assets/fa_plane.png"
import imgFour from "../../assets/fluent-emoji-high-contrast_hotel.png"
import imgFive from "../../assets/wpf_shopping-cart.png"
import { Link } from 'react-router-dom';
import HomeBox from './HomeBox';
function Home() {
  // home data
  const Data = [
    {
      title: "حجز ليموزين للمطار ",
      icon: imgOne,
      link: "",
    },
    {
      title: "عمره بالحافله",
      icon: imgTwo,
      link: "",
    },
    {
      title: "حجز  طيران و فنادق مكة و المدينة",
      icon: imgThree,
      link: "",
    },
    {
      title: "حجز فنادق مكة و المدينة",
      icon: imgFour,
      link: "",
    },
    {
      title: "سله المتجر الالكتروني",
      icon: imgFive,
      link: "",
    },
  ];
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
      <nav className="flex items-center justify-end p-10 gap-[14px] z-20 relative hidden md:flex">
        <h3 className="text-[28px] font-bold text-white">الرئيسيه</h3>
        <Logo />
      </nav>
      {/* home links */}

      <div className="over-lay absolute inset-0 w-full h-full bg-black/70 flex items-center justify-center flex-wrap">
        <div className="flex items-center justify-around w-full flex-wrap">
          {Data.map((item,index) => (
            <>
              <HomeBox item={item} />
            </>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home