import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {
  PlaneTakeoff,
  PlaneLanding,
  CalendarDays,
  X,
  Plane,
  Clock,
  DollarSign,
} from "lucide-react";

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
      const departure = values.departureCity;
      const arrival = cityMap[values.arrivalCity] || values.arrivalCity;
      const departure_date = values.arrivalDate;
      const api_key = "W65]}f$degbr~7@D";

      const url = `https://priceapi.org.in/api/flight_price.php?departure=${encodeURIComponent(
        departure
      )}&arrival=${encodeURIComponent(
        arrival
      )}&departure_date=${encodeURIComponent(
        departure_date
      )}&api_key=${encodeURIComponent(api_key)}`;

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("فشل في جلب البيانات من السيرفر");
      }
      const data = await response.json();

      setResponseData(data);
      setIsModalOpen(true);
      console.log(data);

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
                  <option value="Jeddah" className="text-black">
                    Jeddah
                  </option>
                  <option value="Taif" className="text-black">
                    Taif
                  </option>
                  <option value="Medina" className="text-black">
                    Medina
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="max-w-[700px] w-full bg-white bg-opacity-25 backdrop-blur-md rounded-3xl p-8 text-right relative max-h-[75vh] overflow-y-auto">
            {/* زر الإغلاق */}
            <button
              onClick={closeModal}
              className="absolute top-4 left-4 text-white hover:text-gray-300 transition-colors duration-200"
              aria-label="إغلاق النافذة"
            >
              <X size={28} />
            </button>

            {/* عنوان المودال */}
            <h2 className="text-3xl font-bold text-white mb-6 border-b border-white/20 pb-2">
              الرحلات المتاحة
            </h2>

            {/* عرض الرحلات أو رسالة عدم وجود بيانات */}
            {responseData?.data?.flights?.length > 0 ? (
              <div className="space-y-6">
                {responseData.data.flights.map((flight, index) => (
                  <div
                    key={flight.id}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:shadow-lg transition-shadow duration-200"
                  >
                    {/* رأس الرحلة */}
                    <div className="flex items-center justify-between border-b border-white/20 pb-2 mb-4">
                      <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                        <Plane size={20} /> الرحلة {index + 1}
                      </h3>
                      <span className="text-sm text-white bg-white/20 px-3 py-1 rounded-full">
                        {flight.airline}
                      </span>
                    </div>

                    {/* تفاصيل الرحلة */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-white flex items-center gap-2">
                          <PlaneTakeoff size={16} />
                          <strong className="text-white/80">من:</strong>{" "}
                          {flight.departure}
                        </p>
                        <p className="text-white flex items-center gap-2">
                          <PlaneLanding size={16} />
                          <strong className="text-white/80">إلى:</strong>{" "}
                          {flight.arrival}
                        </p>
                      </div>
                      <div>
                        <p className="text-white flex items-center justify-end gap-2">
                          <Clock size={16} />
                          <strong className="text-white/80">المدة:</strong>{" "}
                          {flight.duration}
                        </p>
                        <p className="text-white flex items-center justify-end gap-2">
                          <DollarSign size={16} />
                          <strong className="text-white/80">السعر:</strong>{" "}
                          <span className="text-white">{flight.price}</span>
                        </p>
                      </div>
                    </div>

                    {/* تفاصيل المقاطع */}
                    <div className="bg-white/10 rounded-lg p-4">
                      <p className="font-semibold text-white mb-2 flex items-center justify-end gap-2">
                        <Plane size={16} /> تفاصيل المقاطع:
                      </p>
                      <div className="space-y-3">
                        {flight.segments.map((seg, segIndex) => (
                          <div
                            key={segIndex}
                            className="flex items-start justify-between gap-3 text-sm text-white border-b border-white/20 pb-2 last:border-b-0"
                          >
                            <span className="text-white flex items-center gap-2">
                              <Plane size={16} /> {seg.flightNumber}
                            </span>
                            <div>
                              <p>
                                <strong>من:</strong> {seg.from}{" "}
                                <strong>إلى:</strong> {seg.to}
                              </p>
                              <p>
                                <strong>الإقلاع:</strong>{" "}
                                {new Date(seg.departureTime).toLocaleString(
                                  "ar-SA",
                                  {
                                    dateStyle: "medium",
                                    timeStyle: "short",
                                  }
                                )}
                              </p>
                              <p>
                                <strong>الوصول:</strong>{" "}
                                {new Date(seg.arrivalTime).toLocaleString(
                                  "ar-SA",
                                  {
                                    dateStyle: "medium",
                                    timeStyle: "short",
                                  }
                                )}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* زر الحجز */}
                    <div className="mt-4 flex justify-end">
                      <button
                        className="px-4 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 border border-white/30 transition-colors duration-200"
                        onClick={() => alert(`حجز الرحلة ${flight.id}`)} // يمكن استبدال هذا بمنطق الحجز الفعلي
                      >
                        احجز الآن
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-lg text-white mb-4">
                  لا توجد رحلات متاحة حاليًا
                </p>
                <p className="text-sm text-white/80">
                  حاول تغيير التاريخ أو الوجهة للعثور على رحلات أخرى.
                </p>
                <button
                  onClick={closeModal}
                  className="mt-4 px-6 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 border border-white/30 transition-colors duration-200"
                >
                  إغلاق
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
