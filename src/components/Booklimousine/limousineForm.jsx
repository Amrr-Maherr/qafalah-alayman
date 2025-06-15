import { Building2, Users, Car, CalendarClock } from "lucide-react";

export default function LimousineForm() {
  return (
    <div className="w-[80%] mx-auto bg-white bg-opacity-25 backdrop-blur-md py-4 px-4 rounded-3xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* الفندق */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-xl font-semibold text-white">الفندق</p>
          <Building2 className="text-white" />
        </div>
        <div className="relative">
          <select
            className="w-full appearance-none border-0 border-b border-white bg-transparent focus:outline-none focus:ring-0 py-2 pr-8 text-white"
            defaultValue=""
          >
            <option value="" disabled hidden>
              اختر الفندق
            </option>
            <option value="mecca" className="text-black">
              فندق مكة
            </option>
            <option value="madinah" className="text-black">
              فندق المدينة
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

      {/* تاريخ ووقت الوصول */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-xl font-semibold text-white">تاريخ ووقت الوصول</p>
          <CalendarClock className="text-white" />
        </div>
        <input
          type="datetime-local"
          className="w-full border-0 border-b border-white bg-transparent focus:outline-none focus:ring-0 text-white py-2"
        />
      </div>

      {/* تاريخ ووقت الإقلاع */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-xl font-semibold text-white">تاريخ ووقت الإقلاع</p>
          <CalendarClock className="text-white" />
        </div>
        <input
          type="datetime-local"
          className="w-full border-0 border-b border-white bg-transparent focus:outline-none focus:ring-0 text-white py-2"
        />
      </div>

      {/* عدد البالغين */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-xl font-semibold text-white">عدد البالغين</p>
          <Users className="text-white" />
        </div>
        <input
          type="number"
          placeholder="مثلاً: 2"
          className="w-full border-0 border-b border-white bg-transparent focus:outline-none focus:ring-0 text-white placeholder:text-white/60 py-2"
        />
      </div>

      {/* عدد الأطفال */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-xl font-semibold text-white">عدد الأطفال</p>
          <Users className="text-white" />
        </div>
        <input
          type="number"
          placeholder="مثلاً: 1"
          className="w-full border-0 border-b border-white bg-transparent focus:outline-none focus:ring-0 text-white placeholder:text-white/60 py-2"
        />
      </div>

      {/* عدد الرضع */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-xl font-semibold text-white">عدد الرضع</p>
          <Users className="text-white" />
        </div>
        <input
          type="number"
          placeholder="مثلاً: 0"
          className="w-full border-0 border-b border-white bg-transparent focus:outline-none focus:ring-0 text-white placeholder:text-white/60 py-2"
        />
      </div>

      {/* نوع السيارة */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-xl font-semibold text-white">نوع السيارة</p>
          <Car className="text-white" />
        </div>
        <div className="relative">
          <select
            className="w-full appearance-none border-0 border-b border-white bg-transparent focus:outline-none focus:ring-0 py-2 pr-8 text-white"
            defaultValue=""
          >
            <option value="" disabled hidden>
              اختر نوع السيارة
            </option>
            <option value="vip" className="text-black">
              VIP
            </option>
            <option value="suv" className="text-black">
              دفع رباعي
            </option>
            <option value="van" className="text-black">
              فان عائلي
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

      {/* زر التأكيد */}
      <div className="col-span-1 sm:col-span-2 lg:col-span-3 flex justify-center pt-6">
        <button className="px-8 py-3 bg-white/20 backdrop-blur-md text-white text-lg font-semibold rounded-xl border border-white/30 hover:bg-white/30 transition duration-200">
          تأكيد الحجز
        </button>
      </div>
    </div>
  );
}
