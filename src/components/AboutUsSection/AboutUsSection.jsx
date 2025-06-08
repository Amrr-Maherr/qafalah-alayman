// AboutUsSection.js

import AboutUsBox from "./AboutUsBox";
// قم باستيراد الأيقونات التي ستستخدمها
import { FaTag, FaGlobeAmericas, FaRocket, FaHeadset } from "react-icons/fa";

export default function AboutUsSection() {
  return (
    <section className="bg-slate-50 py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800">
            لماذا تختار منصتنا !
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            استمتع مع اقوى الخدمات و افضل الباقات من قافلة الايمان
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* الصندوق الأول */}
          <AboutUsBox
            icon={<FaTag />}
            title="عروض لا تقبل المنافسة"
            text="نقارن آلاف الرحلات والفنادق لنضمن لك الحصول على أفضل سعر ممكن. وفر أكثر مع كل حجز."
          />

          {/* الصندوق الثاني */}
          <AboutUsBox
            icon={<FaGlobeAmericas />}
            title="خيارات واسعة"
            text="شبكتنا الواسعة من شركات الطيران والفنادق حول العالم تمنحك حرية الاختيار بين آلاف الوجهات."
          />

          {/* الصندوق الثالث */}
          <AboutUsBox
            icon={<FaRocket />}
            title="حجز سهل وسريع"
            text="منصة مصممة لتكون سهلة الاستخدام، يمكنك إتمام حجزك في خطوات بسيطة وخلال دقائق معدودة."
          />

          {/* الصندوق الرابع */}
          <AboutUsBox
            icon={<FaHeadset />}
            title="دعم فني 24/7"
            text="فريق الدعم لدينا متاح على مدار الساعة لمساعدتك في كل خطوة، من الاستفسار وحتى ما بعد الحجز."
          />
        </div>
      </div>
    </section>
  );
}
