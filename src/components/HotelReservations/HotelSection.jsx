import HotelCard from "./HotelCard";
import Image from "../../assets/Group 19.png";
import Slider from "../Slider/Slider";
import { SwiperSlide } from "swiper/react";

export default function HotelSection() {
    const HotelData = [
      {
        image: Image,
        title: "فندق برج الساعة الملكي",
        subTitle: "فندق خمس نجوم مطل مباشرة على الحرم، خدمات فاخرة",
        rating: 4.8,
        location: "مكة المكرمة، السعودية",
        rooms: 250,
        pricePerNight: "1200 ريال",
        amenities: ["واي فاي مجاني", "مسبح", "مطعم", "خدمة غرف 24/7"],
        description:
          "فندق برج الساعة الملكي يقع في قلب مكة المكرمة، ويتميز بإطلالة مباشرة على الحرم الشريف، ويقدم غرف فاخرة ومرافق عالمية المستوى لتجربة إقامة لا تُنسى.",
        galleryImages: [
          Image,
          "https://example.com/hotel1-room1.jpg",
          "https://example.com/hotel1-pool.jpg",
          "https://example.com/hotel1-lobby.jpg",
        ],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      },
      {
        image: Image,
        title: "فندق المدينة النبوية",
        subTitle: "فندق راقي بالقرب من المسجد النبوي، إقامة مريحة ومميزة",
        rating: 4.5,
        location: "المدينة المنورة، السعودية",
        rooms: 180,
        pricePerNight: "900 ريال",
        amenities: ["واي فاي مجاني", "موقف سيارات", "مركز للياقة البدنية"],
        description:
          "يتميز فندق المدينة النبوية بموقعه القريب جداً من المسجد النبوي، ويقدم خدمات متميزة تناسب الزوار من مختلف أنحاء العالم.",
        galleryImages: [
          Image,
          "https://example.com/hotel2-room1.jpg",
          "https://example.com/hotel2-gym.jpg",
          "https://example.com/hotel2-restaurant.jpg",
        ],
        videoUrl: "https://www.youtube.com/embed/3JZ_D3ELwOQ",
      },
      {
        image: Image,
        title: "فندق الراشد",
        subTitle: "خدمات ممتازة وموقع استراتيجي في وسط المدينة",
        rating: 4.3,
        location: "جدة، السعودية",
        rooms: 150,
        pricePerNight: "800 ريال",
        amenities: ["واي فاي مجاني", "موقف سيارات", "مطعم"],
        description:
          "فندق الراشد يوفر إقامة مريحة مع خدمات ممتازة في موقع مركزي يتيح سهولة الوصول لجميع معالم المدينة.",
        galleryImages: [
          Image,
          "https://example.com/hotel3-room1.jpg",
          "https://example.com/hotel3-lobby.jpg",
          "https://example.com/hotel3-dining.jpg",
        ],
        videoUrl: "https://www.youtube.com/embed/eY52Zsg-KVI",
      },
      {
        image: Image,
        title: "فندق السلام",
        subTitle: "إطلالة ساحرة وتصميم حديث مع مرافق فاخرة",
        rating: 4.7,
        location: "الدمام، السعودية",
        rooms: 200,
        pricePerNight: "1100 ريال",
        amenities: ["واي فاي مجاني", "مسبح", "سبا", "خدمة غرف"],
        description:
          "يقدم فندق السلام إقامة فاخرة مع إطلالات رائعة على المدينة، ومرافق عصرية تلبي كل احتياجات الزوار.",
        galleryImages: [
          Image,
          "https://example.com/hotel4-pool.jpg",
          "https://example.com/hotel4-spa.jpg",
          "https://example.com/hotel4-room.jpg",
        ],
        videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY",
      },
      {
        image: Image,
        title: "فندق الأميرة",
        subTitle: "خدمة متميزة وأجواء هادئة تناسب العائلات",
        rating: 4.2,
        location: "الخبر، السعودية",
        rooms: 130,
        pricePerNight: "950 ريال",
        amenities: ["واي فاي مجاني", "موقف سيارات", "مطعم"],
        description:
          "فندق الأميرة يوفر أجواء هادئة وخدمة راقية تناسب العائلات والمسافرين الباحثين عن الراحة.",
        galleryImages: [
          Image,
          "https://example.com/hotel5-room1.jpg",
          "https://example.com/hotel5-restaurant.jpg",
          "https://example.com/hotel5-lounge.jpg",
        ],
        videoUrl: "https://www.youtube.com/embed/ZZ5LpwO-An4",
      },
      {
        image: Image,
        title: "فندق المدينة الفندقي",
        subTitle: "موقع قريب من الأسواق الرئيسية وخدمات ممتازة",
        rating: 4.1,
        location: "مكة المكرمة، السعودية",
        rooms: 180,
        pricePerNight: "850 ريال",
        amenities: ["واي فاي مجاني", "موقف سيارات", "خدمة غرف 24/7"],
        description:
          "يقع فندق المدينة الفندقي في موقع استراتيجي قريب من الأسواق والوجهات السياحية، ويقدم خدمات متميزة للنزلاء.",
        galleryImages: [
          Image,
          "https://example.com/hotel6-room1.jpg",
          "https://example.com/hotel6-lobby.jpg",
          "https://example.com/hotel6-pool.jpg",
        ],
        videoUrl: "https://www.youtube.com/embed/ub82Xb1C8os",
      },
      {
        image: Image,
        title: "فندق الريان",
        subTitle: "فندق فاخر بخدمات سبا وحمامات سباحة خاصة",
        rating: 4.9,
        location: "الرياض، السعودية",
        rooms: 220,
        pricePerNight: "1300 ريال",
        amenities: ["واي فاي مجاني", "مسبح خاص", "سبا", "مطعم"],
        description:
          "يقدم فندق الريان تجربة فاخرة مع خدمات سبا راقية وحمامات سباحة خاصة، بالإضافة إلى مرافق حديثة وعصرية.",
        galleryImages: [
          Image,
          "https://example.com/hotel7-spa.jpg",
          "https://example.com/hotel7-pool.jpg",
          "https://example.com/hotel7-room.jpg",
        ],
        videoUrl: "https://www.youtube.com/embed/9bZkp7q19f0",
      },
      {
        image: Image,
        title: "فندق الفهد",
        subTitle: "راحة وخصوصية مع خدمة عالية الجودة",
        rating: 4.6,
        location: "جدة، السعودية",
        rooms: 160,
        pricePerNight: "1000 ريال",
        amenities: ["واي فاي مجاني", "موقف سيارات", "خدمة غرف"],
        description:
          "فندق الفهد يوفر خصوصية وراحة مع خدمات عالية الجودة تناسب رجال الأعمال والمسافرين.",
        galleryImages: [
          Image,
          "https://example.com/hotel8-room1.jpg",
          "https://example.com/hotel8-lobby.jpg",
          "https://example.com/hotel8-restaurant.jpg",
        ],
        videoUrl: "https://www.youtube.com/embed/fLexgOxsZu0",
      },
      {
        image: Image,
        title: "فندق الروضة",
        subTitle: "موقع مركزي مع خدمات ممتازة وأسعار منافسة",
        rating: 4.4,
        location: "الرياض، السعودية",
        rooms: 140,
        pricePerNight: "870 ريال",
        amenities: ["واي فاي مجاني", "موقف سيارات", "مطعم"],
        description:
          "يتميز فندق الروضة بموقعه المركزي وخدماته الممتازة، مما يجعله خياراً مناسباً للمسافرين الباحثين عن الراحة والجودة.",
        galleryImages: [
          Image,
          "https://example.com/hotel9-room1.jpg",
          "https://example.com/hotel9-dining.jpg",
          "https://example.com/hotel9-lobby.jpg",
        ],
        videoUrl: "https://www.youtube.com/embed/kJQP7kiw5Fk",
      },
      {
        image: Image,
        title: "فندق النسيم",
        subTitle: "إقامة مريحة مع خدمات متكاملة ومرافق حديثة",
        rating: 4.3,
        location: "الدمام، السعودية",
        rooms: 170,
        pricePerNight: "920 ريال",
        amenities: ["واي فاي مجاني", "مسبح", "مركز للياقة البدنية"],
        description:
          "فندق النسيم يقدم إقامة مريحة مع مرافق حديثة وخدمات متكاملة تناسب العائلات والمسافرين.",
        galleryImages: [
          Image,
          "https://example.com/hotel10-pool.jpg",
          "https://example.com/hotel10-gym.jpg",
          "https://example.com/hotel10-room.jpg",
        ],
        videoUrl: "https://www.youtube.com/embed/60ItHLz5WEA",
      },
    ];
      
      
  return (
    <section className="py-12 bg-[#FBF5EA] my-5">
      <div className="w-full px-4">
        <Slider>
          {HotelData.map((ele, index) => (
            <SwiperSlide key={index}>
              <HotelCard
                hotel={ele}
              />
            </SwiperSlide>
          ))}
        </Slider>
      </div>
    </section>
  );
}
