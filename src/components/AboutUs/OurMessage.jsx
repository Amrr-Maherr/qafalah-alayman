import { FaPaperPlane, FaBullseye } from "react-icons/fa";
import Image from "../../assets/about.png";

export default function OurMessage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        {/* البوكس على الشمال */}
        <div className="md:w-1/2 p-6 rounded shadow box">
          <img src={Image} alt="حول الشركة" className="w-full h-auto rounded" />
        </div>

        {/* الجهة اليمين فيها بوكسين فوق بعض */}
        <div className="md:w-1/2 flex flex-col gap-6">
          <div className="p-6 rounded shadow box text-end bg-gray-50">
            <h3 className="text-xl font-semibold mb-2 flex items-center justify-end gap-2">
              <span>رسالتنا</span>
              <FaPaperPlane className="text-amber-500" />
            </h3>
            <p className="text-gray-600">
              نحن شركة متخصصة في تقديم خدمات السفر والضيافة، نُسهّل على عملائنا
              أداء العمرة بأعلى درجات الراحة، عبر حجز رحلات الطيران، الفنادق،
              وخدمة الليموزين من الباب إلى الباب.
            </p>
          </div>

          <div className="p-6 rounded shadow box text-end bg-gray-50">
            <h3 className="text-xl font-semibold mb-2 flex items-center justify-end gap-2">
              <span>رؤيتنا</span>
              <FaBullseye className="text-amber-500" />
            </h3>
            <p className="text-gray-600">
              أن نكون الخيار الأول للحجاج والمعتمرين في العالم العربي، من خلال
              خدمات عالية الجودة وتجربة عميل استثنائية.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
