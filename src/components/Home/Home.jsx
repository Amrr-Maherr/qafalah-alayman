import React from 'react'
import Logo from '../Logo';
import Image from "../../assets/293621.jpg"
import imgOne from "../../assets/Group.png"
import imgTwo from "../../assets/bus 1.png"
import imgThree from "../../assets/fa_plane.png"
import imgFour from "../../assets/fluent-emoji-high-contrast_hotel.png"
import imgFive from "../../assets/wpf_shopping-cart.png"
import { Link } from 'react-router-dom';
function Home() {
  // home data
  const Data = [
    {
      title: "حجز ليموزين للمطار ",
      icon: imgOne,
    },
    {
      title: "عمره بالحافله",
      icon: imgTwo,
    },
    {
      title: "حجز  طيران و فنادق مكة و المدينة",
      icon: imgThree,
    },
    {
      title: "حجز فنادق مكة و المدينة",
      icon: imgFour,
    },
    {
      title: "سله المتجر الالكتروني",
      icon: imgFive,
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
      <Link to="/">
        <div className="over-lay absolute inset-0 w-full h-full bg-black/70 flex items-center justify-center flex-wrap">
          {Data.map((item, index) => (
            <div
              key={index}
              className="w-full max-w-[247px] h-auto mx-auto text-center flex items-center justify-center flex-col gap-4 relative z-50 
               hover:bg-[#FBF5EA5C] rounded-[20px] transition duration-300 p-4 md:p-6"
            >
              <img
                src={item.icon}
                className="w-16 md:w-20 h-16 md:h-20 object-contain"
                alt={item.title}
              />
              <h3 className="text-xl md:text-2xl font-[700] text-[#FBF5EA]">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </Link>
    </section>
  );
}

export default Home