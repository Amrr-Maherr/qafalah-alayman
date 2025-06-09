import LimousineCard from "./LimousineCard";
import Image from "../../assets/Group 19.png"; // افتراض وجود صورة وهمية
import Slider from "../Slider/Slider";
import { SwiperSlide } from "swiper/react";

export default function LimousineSection() {
  const LimousineData = [
    {
      image: Image,
      title: "ليموزين VIP فاخر",
      subTitle: "خدمة نقل فاخرة بسيارات مرسيدس S-Class",
      rating: 4.9,
      vehicleType: "مرسيدس S-Class",
      pricePerHour: "500 ريال",
      amenities: ["واي فاي", "مياه معدنية", "سائق محترف", "تكييف فاخر"],
      description:
        "استمتع بتجربة نقل فاخرة مع سيارة مرسيدس S-Class مجهزة بأحدث وسائل الراحة والترفيه، مع سائق محترف يضمن راحتك.",
      galleryImages: [
        Image,
        "https://example.com/limousine1-interior.jpg",
        "https://example.com/limousine1-exterior.jpg",
        "https://example.com/limousine1-back.jpg",
      ],
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      image: Image,
      title: "ليموزين عائلي",
      subTitle: "سيارة فان فاخرة للعائلات والمجموعات",
      rating: 4.7,
      vehicleType: "تويوتا هايس",
      pricePerHour: "350 ريال",
      amenities: ["واي فاي", "مقاعد واسعة", "شاشات ترفيه", "شاحن USB"],
      description:
        "مناسب للعائلات والمجموعات، تويوتا هايس توفر مساحة واسعة ومريحة مع خدمات ترفيهية لرحلة ممتعة.",
      galleryImages: [
        Image,
        "https://example.com/limousine2-interior.jpg",
        "https://example.com/limousine2-seats.jpg",
        "https://example.com/limousine2-exterior.jpg",
      ],
      videoUrl: "https://www.youtube.com/embed/3JZ_D3ELwOQ",
    },
    {
      image: Image,
      title: "ليموزين رياضي",
      subTitle: "سيارة رياضية فاخرة لعشاق الأناقة",
      rating: 4.8,
      vehicleType: "بورش باناميرا",
      pricePerHour: "600 ريال",
      amenities: ["واي فاي", "نظام صوتي ممتاز", "سائق محترف", "إضاءة داخلية"],
      description:
        "تجربة قيادة رياضية مع بورش باناميرا، مزودة بأنظمة صوتية متطورة وتصميم داخلي فاخر.",
      galleryImages: [
        Image,
        "https://example.com/limousine3-interior.jpg",
        "https://example.com/limousine3-exterior.jpg",
        "https://example.com/limousine3-lights.jpg",
      ],
      videoUrl: "https://www.youtube.com/embed/eY52Zsg-KVI",
    },
    {
      image: Image,
      title: "ليموزين كلاسيكي",
      subTitle: "سيارة كلاسيكية للإحتفالات والمناسبات",
      rating: 4.6,
      vehicleType: "رولز رويس فانتوم",
      pricePerHour: "800 ريال",
      amenities: ["واي فاي", "مشروبات فاخرة", "سائق محترف", "ديكور كلاسيكي"],
      description:
        "سيارة رولز رويس فانتوم توفر تجربة كلاسيكية فاخرة للمناسبات الخاصة مثل الأعراس والاحتفالات.",
      galleryImages: [
        Image,
        "https://example.com/limousine4-interior.jpg",
        "https://example.com/limousine4-exterior.jpg",
        "https://example.com/limousine4-details.jpg",
      ],
      videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY",
    },
    {
      image: Image,
      title: "ليموزين اقتصادي",
      subTitle: "خدمة نقل مريحة بأسعار مناسبة",
      rating: 4.4,
      vehicleType: "تويوتا كامري",
      pricePerHour: "250 ريال",
      amenities: ["واي فاي", "تكييف", "سائق محترف"],
      description:
        "ليموزين اقتصادي بسيارة تويوتا كامري يوفر راحة وكفاءة بأسعار تنافسية للتنقل اليومي.",
      galleryImages: [
        Image,
        "https://example.com/limousine5-interior.jpg",
        "https://example.com/limousine5-exterior.jpg",
        "https://example.com/limousine5-seats.jpg",
      ],
      videoUrl: "https://www.youtube.com/embed/ZZ5LpwO-An4",
    },
  ];

  return (
    <section className="py-12 bg-[#FBF5EA] my-5" dir="rtl">
      <div className="w-full px-4">
        <Slider>
          {LimousineData.map((limousine, index) => (
            <SwiperSlide key={index}>
              <LimousineCard limousine={limousine} />
            </SwiperSlide>
          ))}
        </Slider>
      </div>
    </section>
  );
}
