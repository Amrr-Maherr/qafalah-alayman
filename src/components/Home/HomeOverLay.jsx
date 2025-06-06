
import imgOne from "../../assets/Group.png";
import imgTwo from "../../assets/bus 1.png";
import imgThree from "../../assets/fa_plane.png";
import imgFour from "../../assets/fluent-emoji-high-contrast_hotel.png";
import imgFive from "../../assets/wpf_shopping-cart.png";
import HomeBox from "./HomeBox";

export default function HomeOverLay() {
  // home data
  const Data = [
    { title: "حجز ليموزين للمطار", icon: imgOne, link: "" },
    { title: "عمره بالحافله", icon: imgTwo, link: "" },
    { title: "حجز طيران و فنادق مكة و المدينة", icon: imgThree, link: "" },
    { title: "حجز فنادق مكة و المدينة", icon: imgFour, link: "" },
    { title: "سله المتجر الالكتروني", icon: imgFive, link: "" },
  ];

  return (
    <div className="over-lay absolute inset-0 w-full h-full bg-black/70 flex items-center justify-center flex-wrap">
      <div className="flex items-center justify-around w-full flex-wrap">
        {Data.map((item, index) => (
          <HomeBox item={item} index={index} key={index} />
        ))}
      </div>
    </div>
  );
}
