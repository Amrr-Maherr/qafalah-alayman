import Image from "../../assets/Rectangle 440.png";
export default function About() {
  return (
    <>
      <section className="bg-[#FBF5EA9C] py-12 my-5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* الصورة على الشمال */}
            <div className="md:w-1/2">
              <img
                src={Image}
                alt="حول الشركة"
                className="w-full h-auto rounded"
              />
            </div>

            {/* النص والزرار على اليمين */}
            <div className="md:w-1/2 text-end">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                اعتمر وأنت راضِ عن رحلتك ,, لا تحمل هم البحث عن رحلات مريحة
                بأسعار مميزة
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                فنحن نسخر خبراتنا ومواردنا لتوفير أفضل الاختيارات وابتكار أفضل
                الحلول لتيسير أداء المناسك وتحسين ظروف السفر والإقامة للحفاظ على
                ذهن صاف وقلب مطمئن .. نتمنى لكم رحلة سعيدة وطاعة جديدة
              </p>
              <button className="bg-[#B38124] text-white px-6 py-3 rounded-[40px] hover:bg-amber-600 transition">
                احجز رحلتك الان
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
