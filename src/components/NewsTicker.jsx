import React from "react";

export default function NewsTicker() {
  return (
    <div className="bg-gray-900 text-white py-2 overflow-hidden whitespace-nowrap">
      <div className="animate-ticker inline-block px-4">
        {/* نص الأخبار */}
        <span className="mx-8">
          باقة من أفضل خدمات حجز الرحلات والباص والطيران مع إقامة مميزة في أفضل
          فنادق المملكة
        </span>
        <span className="mx-8">
          اعتمر وأنت راضِ عن رحلتك، نوفر لك أفضل الخيارات بأسعار مناسبة وجودة
          عالية
        </span>
        <span className="mx-8">
          تواصل معنا لخدمات حجز الطيران والليموزين بأفضل العروض والخصومات
        </span>
        <span className="mx-8">
          احجز رحلتك مع خدماتنا المتميزة وتمتع بخدمة عملاء 24 ساعة على مدار
          الأسبوع
        </span>
        <span className="mx-8">
          عروض خاصة للمجموعات والعائلات مع تخفيضات حصرية على أسعار الرحلات
        </span>
        <span className="mx-8">
          استمتع بتجربة سفر مريحة مع أفضل شركات الطيران والباصات السياحية في
          المنطقة
        </span>
        <span className="mx-8">
          نقدم لك باقات متكاملة تشمل النقل والإقامة والأنشطة السياحية بأفضل
          الأسعار
        </span>
        <span className="mx-8">
          احجز الآن واستفد من العروض الموسمية الخاصة بموسم الحج والعمرة
        </span>
      </div>

      {/* نسخ ثانية للنص للتكرار المستمر */}
      <div
        aria-hidden="true"
        className="animate-ticker inline-block px-4 ml-4"
        style={{ marginLeft: "100%" }}
      >
        <span className="mx-8">
          باقة من أفضل خدمات حجز الرحلات والباص والطيران مع إقامة مميزة في أفضل
          فنادق المملكة
        </span>
        <span className="mx-8">
          اعتمر وأنت راضِ عن رحلتك، نوفر لك أفضل الخيارات بأسعار مناسبة وجودة
          عالية
        </span>
        <span className="mx-8">
          تواصل معنا لخدمات حجز الطيران والليموزين بأفضل العروض والخصومات
        </span>
      </div>

      <style>{`
        @keyframes ticker {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-ticker {
          animation: ticker 40s linear infinite;
        }
      `}</style>
    </div>
  );
}
