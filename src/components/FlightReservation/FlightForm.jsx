import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { PlaneTakeoff, PlaneLanding, CalendarDays, X } from "lucide-react";

// Validation schema
const validationSchema = Yup.object({
  departureCity: Yup.string().required("وجهة المغادرة مطلوبة"),
  arrivalCity: Yup.string().required("وجهة الوصول مطلوبة"),
  arrivalDate: Yup.date()
    .required("تاريخ الوصول مطلوب")
    .min(
      new Date(new Date().setDate(new Date().getDate() + 2)),
      "تاريخ الوصول يجب أن يكون بعد يومين على الأقل"
    ),
});

// تحويل المدن العربية إلى إنجليزية لتتناسب مع الـ endpoint
const cityMap = {
  جدة: "Jeddah",
  الطائف: "Taif",
  المدينة: "Medina",
};

export default function FlightForm() {
  const [minArrivalDate, setMinArrivalDate] = useState("");
  const [responseData, setResponseData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const today = new Date();
    today.setDate(today.getDate() + 2);
    const formatted = today.toISOString().split("T")[0];
    setMinArrivalDate(formatted);
  }, []);

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      // تحويل اسم المدينة إلى الإنجليزية
      const departure = values.departureCity;
      const arrival = cityMap[values.arrivalCity] || values.arrivalCity;
      const departure_date = values.arrivalDate;

      // إنشاء URL مع المعاملات
      const url = `https://priceapi.org.in/api/flight_price.php?departure=${encodeURIComponent(
        departure
      )}&arrival=${encodeURIComponent(
        arrival
      )}&departure_date=${encodeURIComponent(departure_date)}`;

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("فشل في جلب البيانات من السيرفر");
      }
      const data = await response.json();

      // تخزين البيانات وعرض الـ Modal
      setResponseData(data);
      setIsModalOpen(true);

      // حفظ البيانات في localStorage
      localStorage.setItem("flightBooking", JSON.stringify(values));
      toast.success("تم جلب بيانات الرحلة بنجاح!", {
        duration: 4000,
        position: "top-center",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
          fontSize: "16px",
        },
      });

      // التنقل إلى صفحة الحجز
      setTimeout(() => navigate("/Hotel"), 2000);
    } catch (error) {
      toast.error(error.message || "حدث خطأ أثناء الاتصال بالسيرفر", {
        duration: 4000,
        position: "top-center",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
          fontSize: "16px",
        },
      });
    } finally {
      setSubmitting(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setResponseData(null);
  };

  return (
    <main className="flex items-center justify-center px-2 py-1">
      <Toaster />
      <Formik
        initialValues={{
          departureCity: "",
          arrivalCity: "",
          arrivalDate: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="max-w-[1248px] mx-auto bg-white bg-opacity-25 py-8 px-4 rounded-3xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-right">
            {/* Departure City */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-2xl font-semibold text-white">من</p>
                <PlaneTakeoff className="text-white" />
              </div>
              <div className="relative">
                <Field
                  type="text"
                  name="departureCity"
                  id="departureCity"
                  placeholder="مثال: الرياض"
                  className="w-full border-0 border-b border-white bg-transparent focus:outline-none focus:ring-0 py-2 pr-8 text-white placeholder:text-white/60"
                />
                <ErrorMessage
                  name="departureCity"
                  component="div"
                  className="text-xs text-red-600 font-semibold mt-1"
                />
              </div>
            </div>

            {/* Arrival City */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-2xl font-semibold text-white">إلى</p>
                <PlaneLanding className="text-white" />
              </div>
              <div className="relative">
                <Field
                  as="select"
                  name="arrivalCity"
                  id="arrivalCity"
                  className="w-full appearance-none border-0 border-b border-white bg-transparent focus:outline-none focus:ring-0 py-2 pr-8 text-white"
                >
                  <option value="" disabled hidden>
                    اختر وجهة الوصول...
                  </option>
                  <option value="جدة" className="text-black">
                    جدة
                  </option>
                  <option value="الطائف" className="text-black">
                    الطائف
                  </option>
                  <option value="المدينة" className="text-black">
                    المدينة
                  </option>
                </Field>
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
                <ErrorMessage
                  name="arrivalCity"
                  component="div"
                  className="text-xs text-red-600 font-semibold mt-1"
                />
              </div>
            </div>

            {/* Arrival Date */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-2xl font-semibold text-white">
                  تاريخ الوصول
                </p>
                <CalendarDays className="text-white" />
              </div>
              <div className="relative">
                <Field
                  type="date"
                  name="arrivalDate"
                  id="arrivalDate"
                  min={minArrivalDate}
                  className="w-full border-0 border-b border-white bg-transparent focus:outline-none focus:ring-0 py-2 pr-8 text-white"
                />
                <ErrorMessage
                  name="arrivalDate"
                  component="div"
                  className="text-xs text-red-600 font-semibold mt-1"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-3 flex justify-center pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-white/20 backdrop-blur-md text-white text-lg font-semibold rounded-xl border border-white/30 hover:bg-white/30 transition duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "جاري البحث..." : "ابحث عن رحلات"}
              </button>
            </div>
          </Form>
        )}
      </Formik>

      {/* Modal for Server Response */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="max-w-[600px] w-full bg-white bg-opacity-25 backdrop-blur-md rounded-3xl p-6 text-right relative">
            <button
              onClick={closeModal}
              className="absolute top-4 left-4 text-white hover:text-gray-300"
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl font-semibold text-white mb-4">
              تفاصيل الرحلة
            </h2>
            {responseData ? (
              <div className="space-y-2 text-white">
                <p>
                  <strong>الوجهة:</strong>{" "}
                  {responseData.departure || "غير متوفر"} إلى{" "}
                  {responseData.arrival || "غير متوفر"}
                </p>
                <p>
                  <strong>تاريخ الوصول:</strong>{" "}
                  {responseData.departure_date || "غير متوفر"}
                </p>
                <p>
                  <strong>السعر:</strong>{" "}
                  {responseData.price
                    ? `${responseData.price} ريال`
                    : "غير متوفر"}
                </p>
                <p>
                  <strong>شركة الطيران:</strong>{" "}
                  {responseData.airline || "غير متوفر"}
                </p>
              </div>
            ) : (
              <p className="text-white">جاري تحميل البيانات...</p>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
