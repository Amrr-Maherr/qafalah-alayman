import { FaPaperPlane, FaBullseye } from "react-icons/fa";
import Image from "../../assets/Group 15.png";

export default function OurMessage() {
  return (
    <div className="mx-auto px-4 py-8 bg-black">
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        {/* البوكس على الشمال */}
        <div className="md:w-1/2 p-6 rounded shadow box">
          <img src={Image} alt="حول الشركة" className="w-full h-auto rounded" />
        </div>

        {/* الجهة اليمين فيها بوكسين فوق بعض */}
        <div className="md:w-1/2 flex flex-col gap-6">
          <div className="p-6 rounded shadow box text-end bg-gray-400">
            <h3 className="text-xl font-semibold mb-2 flex items-center justify-end gap-2 text-white">
              <span>رسالتنا</span>
              <FaPaperPlane className="text-white" />
            </h3>
            <p className="text-white">
              نحن شركة متخصصة في تقديم خدمات السفر والضيافة، نُسهّل على عملائنا
              أداء العمرة بأعلى درجات الراحة، عبر حجز رحلات الطيران، الفنادق،
              وخدمة الليموزين من الباب إلى الباب.
            </p>
          </div>

          <div className="p-6 rounded shadow box text-end bg-gray-400">
            <h3 className="text-xl font-semibold mb-2 flex items-center justify-end gap-2 text-white">
              <span>رؤيتنا</span>
              <FaBullseye className="text-white" />
            </h3>
            <p className="text-white">
              أن نكون الخيار الأول للحجاج والمعتمرين في العالم العربي، من خلال
              خدمات عالية الجودة وتجربة عميل استثنائية.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
