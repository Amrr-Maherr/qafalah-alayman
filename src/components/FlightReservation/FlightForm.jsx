import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { PlaneTakeoff, PlaneLanding, CalendarDays, Users } from "lucide-react";

// Validation schema
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
    .min(1, "يجب وجود مسافر بالغ واحد على الأقل")
    .required("عدد البالغين مطلوب"),
  children: Yup.number()
    .min(0, "عدد الأطفال لا يمكن أن يكون سالبًا")
    .required("عدد الأطفال مطلوب"),
  seniors: Yup.number()
    .min(0, "عدد كبار السن لا يمكن أن يكون سالبًا")
    .required("عدد كبار السن مطلوب"),
});

export default function FlightForm() {
  const [minDepartureDate, setMinDepartureDate] = useState("");
  const [minReturnDate, setMinReturnDate] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const today = new Date();
    today.setDate(today.getDate() + 2);
    const formatted = today.toISOString().split("T")[0];
    setMinDepartureDate(formatted);
    setMinReturnDate(formatted);
  }, []);

  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Flight Booking Details:", values);
    localStorage.setItem("flightBooking", JSON.stringify(values));
    toast.success("تم حجز رحلتك بنجاح! جاري توجيهك لحجز الفندق...", {
      duration: 4000,
      position: "top-center",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
        fontSize: "16px",
      },
    });
    setTimeout(() => {
      navigate("/Hotel");
    }, 2000);
    setSubmitting(false);
  };

  return (
    <main className="flex items-center justify-center p-4">
      <Toaster />
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
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, isSubmitting }) => (
          <Form className="max-w-[1248px] mx-auto bg-white bg-opacity-25 py-8 px-4 rounded-3xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-right">
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
                  placeholder="مثال: القاهرة"
                  className="w-full border-0 border-b border-white bg-transparent focus:outline-none focus:ring-0 py-2 pr-8 text-white placeholder:text-white/60"
                />
                <ErrorMessage
                  name="departureCity"
                  component="div"
                  className="text-xs text-red-600 font-semibold mt-1"
                />
              </div>
            </div>

            {/* Return City */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-2xl font-semibold text-white">إلى</p>
                <PlaneLanding className="text-white" />
              </div>
              <div className="relative">
                <Field
                  as="select"
                  name="returnCity"
                  id="returnCity"
                  className="w-full appearance-none border-0 border-b border-white bg-transparent focus:outline-none focus:ring-0 py-2 pr-8 text-white placeholder:text-white/60"
                >
                  <option value="" disabled hidden>
                    اختر وجهة العودة...
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
                  name="returnCity"
                  component="div"
                  className="text-xs text-red-600 font-semibold mt-1"
                />
              </div>
            </div>

            {/* Departure Date */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-2xl font-semibold text-white">
                  تاريخ المغادرة
                </p>
                <CalendarDays className="text-white" />
              </div>
              <div className="relative">
                <Field
                  type="date"
                  name="departureDate"
                  id="departureDate"
                  min={minDepartureDate}
                  onChange={(e) => {
                    setFieldValue("departureDate", e.target.value);
                    setMinReturnDate(e.target.value);
                  }}
                  className="w-full border-0 border-b border-white bg-transparent focus:outline-none focus:ring-0 py-2 pr-8 text-white placeholder:text-white/60"
                />
                <ErrorMessage
                  name="departureDate"
                  component="div"
                  className="text-xs text-red-600 font-semibold mt-1"
                />
              </div>
            </div>

            {/* Return Date */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-2xl font-semibold text-white">
                  تاريخ العودة
                </p>
                <CalendarDays className="text-white" />
              </div>
              <div className="relative">
                <Field
                  type="date"
                  name="returnDate"
                  id="returnDate"
                  min={minReturnDate}
                  className="w-full border-0 border-b border-white bg-transparent focus:outline-none focus:ring-0 py-2 pr-8 text-white placeholder:text-white/60"
                />
                <ErrorMessage
                  name="returnDate"
                  component="div"
                  className="text-xs text-red-600 font-semibold mt-1"
                />
              </div>
            </div>

            {/* Adults */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-2xl font-semibold text-white">البالغون</p>
                <Users className="text-white" />
              </div>
              <div className="relative">
                <Field
                  type="number"
                  name="adults"
                  id="adults"
                  min="1"
                  className="w-full border-0 border-b border-white bg-transparent focus:outline-none focus:ring-0 py-2 pr-8 text-white placeholder:text-white/60"
                />
                <ErrorMessage
                  name="adults"
                  component="div"
                  className="text-xs text-red-600 font-semibold mt-1"
                />
              </div>
            </div>

            {/* Children */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-2xl font-semibold text-white">
                  الأطفال (2-12 سنة)
                </p>
                <Users className="text-white" />
              </div>
              <div className="relative">
                <Field
                  type="number"
                  name="children"
                  id="children"
                  min="0"
                  className="w-full border-0 border-b border-white bg-transparent focus:outline-none focus:ring-0 py-2 pr-8 text-white placeholder:text-white/60"
                />
                <ErrorMessage
                  name="children"
                  component="div"
                  className="text-xs text-red-600 font-semibold mt-1"
                />
              </div>
            </div>

            {/* Seniors */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-2xl font-semibold text-white">
                  كبار السن (+65)
                </p>
                <Users className="text-white" />
              </div>
              <div className="relative">
                <Field
                  type="number"
                  name="seniors"
                  id="seniors"
                  min="0"
                  className="w-full border-0 border-b border-white bg-transparent focus:outline-none focus:ring-0 py-2 pr-8 text-white placeholder:text-white/60"
                />
                <ErrorMessage
                  name="seniors"
                  component="div"
                  className="text-xs text-red-600 font-semibold mt-1"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-4 flex justify-center pt-6">
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
    </main>
  );
}
