import { Building2, BedDouble, BedSingle, LayoutGrid } from "lucide-react";

export default function HotelForm() {
  return (
    <>
      <div className="max-w-[1248px] mx-auto bg-white bg-opacity-25 py-4 px-4 rounded-3xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-2xl font-semibold text-white">عدد الغرف</p>
            <BedDouble className="text-white" />
          </div>
          <input
            type="number"
            placeholder="مثلاً: 2"
            className="w-full border-0 border-b border-white bg-transparent focus:outline-none focus:ring-0 text-white placeholder:text-white/60 py-2"
          />
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-2xl font-semibold text-white">عدد الاسره</p>
            <BedSingle className="text-white" />
          </div>
          <input
            type="number"
            placeholder="مثلاً: 3"
            className="w-full border-0 border-b border-white bg-transparent focus:outline-none focus:ring-0 text-white placeholder:text-white/60 py-2"
          />
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-2xl font-semibold text-white">نوع الغرف</p>
            <LayoutGrid className="text-white" />
          </div>
          <div className="relative">
            <select
              className="w-full appearance-none border-0 border-b border-white bg-transparent focus:outline-none focus:ring-0 py-2 pr-8 text-white placeholder:text-white/60"
              defaultValue=""
            >
              <option value="" disabled hidden>
                اختر نوع الغرفة
              </option>
              <option value="double" className="text-black">
                مزدوجة
              </option>
              <option value="single" className="text-black">
                مفردة
              </option>
              <option value="suite" className="text-black">
                جناح
              </option>
            </select>
            <svg
              className="w-4 h-4 absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-2xl font-semibold text-white">اختر الفندق</p>
            <Building2 className="text-white" />
          </div>
          <div className="relative">
            <select
              className="w-full appearance-none border-0 border-b border-white bg-transparent focus:outline-none focus:ring-0 py-2 pr-8 text-white placeholder:text-white/60"
              defaultValue=""
            >
              <option value="" disabled hidden>
                اختر فندقًا
              </option>
              <option value="test1" className="text-black">
                فندق النيل
              </option>
              <option value="test2" className="text-black">
                فندق السلام
              </option>
              <option value="test3" className="text-black">
                فندق القاهرة
              </option>
              <option value="test4" className="text-black">
                فندق الشاطئ
              </option>
            </select>
            <svg
              className="w-4 h-4 absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
        {/* زر تأكيد الحجز */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-4 flex justify-center pt-6">
          <button className="px-8 py-3 bg-white/20 backdrop-blur-md text-white text-lg font-semibold rounded-xl border border-white/30 hover:bg-white/30 transition duration-200">
            تأكيد الحجز
          </button>
        </div>
      </div>
    </>
  );
}
