import { useEffect, useState } from "react";
import {
  FaPlaneDeparture,
  FaPlaneArrival,
  FaCalendarAlt,
  FaUsers,
} from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

// مخطط التحقق باستخدام Yup
const validationSchema = Yup.object({
  departureCity: Yup.string().required("وجهة المغادرة مطلوبة"),
  returnCity: Yup.string().required("وجهة العودة مطلوبة"),
  departureDate: Yup.date()
    .required("تاريخ المغادرة مطلوب")
    .min(
      new Date(new Date().setDate(new Date().getDate() + 2)),
      "تاريخ المغادرة يجب أن يكون بعد يومين على الأقل"
    ),
  returnDate: Yup.date()
    .required("تاريخ العودة مطلوب")
    .min(
      Yup.ref("departureDate"),
      "تاريخ العودة يجب أن يكون بعد تاريخ المغادرة"
    ),
  adults: Yup.number()
    .min(0, "عدد البالغين لا يمكن أن يكون سالبًا")
    .required("عدد البالغين مطلوب"),
  children: Yup.number()
    .min(0, "عدد الأطفال لا يمكن أن يكون سالبًا")
    .required("عدد الأطفال مطلوب"),
  seniors: Yup.number()
    .min(0, "عدد المسنين لا يمكن أن يكون سالبًا")
    .required("عدد المسنين مطلوب"),
});

export default function FlightForm() {
  const [minDepartureDate, setMinDepartureDate] = useState("");
  const [minReturnDate, setMinReturnDate] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const today = new Date();
    today.setDate(today.getDate() + 2); // بعد يومين
    const formatted = today.toISOString().split("T")[0];
    setMinDepartureDate(formatted);
    setMinReturnDate(formatted);
  }, []);

  return (
    <section className="container mx-auto p-8 bg-gradient-to-br from-blue-50 to-white shadow-xl rounded-2xl my-10 max-w-4xl">
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">
        ✈️ احجز رحلتك الآن
      </h2>
      <Formik
        initialValues={{
          departureCity: "",
          returnCity: "",
          departureDate: "",
          returnDate: "",
          adults: 1,
          children: 0,
          seniors: 0,
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          // تخزين البيانات في localStorage
          localStorage.setItem("flightBooking", JSON.stringify(values));
          console.log("تم إرسال النموذج وتخزينه في localStorage:", values);
          // عرض تنبيه النجاح
          toast.success("تم حجز رحلتك بنجاح! جاري توجيهك لحجز الفندق...", {
            duration: 4000,
            position: "top-center",
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
              fontSize: "16px",
              direction: "rtl",
            },
          });
          // الانتقال فورًا إلى صفحة Hotel
          setTimeout(() => {
            navigate("/Hotel");
          }, 2000);
        }}
      >
        {({ setFieldValue, values }) => (
          <Form className="grid md:grid-cols-2 gap-6">
            {/* وجهة المغادرة */}
            <div>
              <label className="block text-right font-semibold mb-2">
                وجهة المغادرة
              </label>
              <div className="relative">
                <FaPlaneDeparture className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400" />
                <Field
                  type="text"
                  name="departureCity"
                  placeholder="مثال: القاهرة"
                  className="w-full p-3 pr-10 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <ErrorMessage
                  name="departureCity"
                  component="div"
                  className="text-red-500 text-sm text-right mt-1"
                />
              </div>
            </div>

            {/* وجهة العودة */}
            <div>
              <label className="block text-right font-semibold mb-2">
                وجهة العودة
              </label>
              <div className="relative">
                <FaPlaneArrival className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400" />
                <Field
                  as="select"
                  name="returnCity"
                  className="w-full p-3 pr-10 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <option value="">اختر وجهة العودة</option>
                  <option value="جدة">جدة</option>
                  <option value="الطائف">الطائف</option>
                  <option value="المدينة">المدينة</option>
                </Field>
                <ErrorMessage
                  name="returnCity"
                  component="div"
                  className="text-red-500 text-sm text-right mt-1"
                />
              </div>
            </div>

            {/* تاريخ المغادرة */}
            <div>
              <label className="block text-right font-semibold mb-2">
                تاريخ المغادرة
              </label>
              <div className="relative">
                <FaCalendarAlt className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400" />
                <Field
                  type="date"
                  name="departureDate"
                  min={minDepartureDate}
                  onChange={(e) => {
                    setFieldValue("departureDate", e.target.value);
                    setMinReturnDate(e.target.value);
                  }}
                  className="w-full p-3 pr-10 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <ErrorMessage
                  name="departureDate"
                  component="div"
                  className="text-red-500 text-sm text-right mt-1"
                />
              </div>
            </div>

            {/* تاريخ العودة */}
            <div>
              <label className="block text-right font-semibold mb-2">
                تاريخ العودة
              </label>
              <div className="relative">
                <FaCalendarAlt className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400" />
                <Field
                  type="date"
                  name="returnDate"
                  min={minReturnDate}
                  className="w-full p-3 pr-10 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <ErrorMessage
                  name="returnDate"
                  component="div"
                  className="text-red-500 text-sm text-right mt-1"
                />
              </div>
            </div>

            {/* اختيار عدد المسافرين */}
            <div className="md:col-span-2">
              <label className="block text-right font-semibold mb-2">
                عدد المسافرين
              </label>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="relative">
                  <FaUsers className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400" />
                  <Field
                    type="number"
                    name="adults"
                    min="0"
                    className="w-full p-3 pr-10 border border-gray-300 rounded-xl"
                    placeholder="بالغين"
                  />
                  <ErrorMessage
                    name="adults"
                    component="div"
                    className="text-red-500 text-sm text-right mt-1"
                  />
                </div>
                <div className="relative">
                  <FaUsers className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400" />
                  <Field
                    type="number"
                    name="children"
                    min="0"
                    className="w-full p-3 pr-10 border border-gray-300 rounded-xl"
                    placeholder="أطفال"
                  />
                  <ErrorMessage
                    name="children"
                    component="div"
                    className="text-red-500 text-sm text-right mt-1"
                  />
                </div>
                <div className="relative">
                  <FaUsers className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400" />
                  <Field
                    type="number"
                    name="seniors"
                    min="0"
                    className="w-full p-3 pr-10 border border-gray-300 rounded-xl"
                    placeholder="مسنين"
                  />
                  <ErrorMessage
                    name="seniors"
                    component="div"
                    className="text-red-500 text-sm text-right mt-1"
                  />
                </div>
              </div>
            </div>

            {/* زر الإرسال */}
            <div className="md:col-span-2 text-center mt-6">
              <button
                type="submit"
                className="bg-[#B38124] text-white px-8 py-3 rounded-xl text-lg font-semibold transition duration-200"
              >
                احجز الآن
              </button>
            </div>
          </Form>
        )}
      </Formik>
      {/* إضافة Toaster لعرض التنبيهات */}
      <Toaster />
    </section>
  );
}
