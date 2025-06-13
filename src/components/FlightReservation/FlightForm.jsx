import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {
  PlaneTakeoff,
  PlaneLanding, // <-- هذا هو التصحيح
  CalendarDays,
  Users,
} from "lucide-react";

// مخطط التحقق من الصحة (بدون تغيير)
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

// كومبونانت الأيقونة القابل لإعادة الاستخدام
const FieldIcon = ({ icon: Icon }) => (
  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/60">
    <Icon className="h-6 w-6 text-slate-700" />
  </div>
);

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
          <Form className="flex w-full max-w-4xl flex-col items-center gap-8 text-right">
            {/* الصف الأول: معلومات الرحلة */}
            <div
              className="
                w-full rounded-2xl border border-white/50 bg-white/40
                shadow-xl backdrop-blur-xl
                flex flex-col md:flex-row
                divide-y divide-white/50 md:divide-y-0 md:divide-x-reverse
              "
            >
              {/* وجهة المغادرة */}
              <div className="flex flex-1 items-center justify-between gap-4 p-4">
                <div className="flex w-full flex-col gap-1.5">
                  <label
                    htmlFor="departureCity"
                    className="font-bold text-sm text-slate-800"
                  >
                    من
                  </label>
                  <Field
                    type="text"
                    name="departureCity"
                    id="departureCity"
                    placeholder="مثال: القاهرة"
                    className="w-full bg-transparent text-slate-600 focus:outline-none placeholder:text-slate-400"
                  />
                  <ErrorMessage
                    name="departureCity"
                    component="div"
                    className="text-xs text-red-600 font-semibold"
                  />
                </div>
                <FieldIcon icon={PlaneTakeoff} />
              </div>

              {/* وجهة العودة */}
              <div className="flex flex-1 items-center justify-between gap-4 p-4">
                <div className="flex w-full flex-col gap-1.5">
                  <label
                    htmlFor="returnCity"
                    className="font-bold text-sm text-slate-800"
                  >
                    إلى
                  </label>
                  <Field
                    as="select"
                    name="returnCity"
                    id="returnCity"
                    className="w-full appearance-none bg-transparent text-slate-600 focus:outline-none"
                  >
                    <option value="">اختر وجهة العودة...</option>
                    <option value="جدة">جدة</option>
                    <option value="الطائف">الطائف</option>
                    <option value="المدينة">المدينة</option>
                  </Field>
                  <ErrorMessage
                    name="returnCity"
                    component="div"
                    className="text-xs text-red-600 font-semibold"
                  />
                </div>
                <FieldIcon icon={PlaneLanding} />{" "}
                {/* <-- هنا أيضًا تم التصحيح */}
              </div>

              {/* تاريخ المغادرة */}
              <div className="flex flex-1 items-center justify-between gap-4 p-4">
                <div className="flex w-full flex-col gap-1.5">
                  <label
                    htmlFor="departureDate"
                    className="font-bold text-sm text-slate-800"
                  >
                    تاريخ المغادرة
                  </label>
                  <Field
                    type="date"
                    name="departureDate"
                    id="departureDate"
                    min={minDepartureDate}
                    onChange={(e) => {
                      setFieldValue("departureDate", e.target.value);
                      setMinReturnDate(e.target.value);
                    }}
                    className="w-full bg-transparent text-slate-600 focus:outline-none"
                  />
                  <ErrorMessage
                    name="departureDate"
                    component="div"
                    className="text-xs text-red-600 font-semibold"
                  />
                </div>
                <FieldIcon icon={CalendarDays} />
              </div>

              {/* تاريخ العودة */}
              <div className="flex flex-1 items-center justify-between gap-4 p-4">
                <div className="flex w-full flex-col gap-1.5">
                  <label
                    htmlFor="returnDate"
                    className="font-bold text-sm text-slate-800"
                  >
                    تاريخ العودة
                  </label>
                  <Field
                    type="date"
                    name="returnDate"
                    id="returnDate"
                    min={minReturnDate}
                    className="w-full bg-transparent text-slate-600 focus:outline-none"
                  />
                  <ErrorMessage
                    name="returnDate"
                    component="div"
                    className="text-xs text-red-600 font-semibold"
                  />
                </div>
                <FieldIcon icon={CalendarDays} />
              </div>
            </div>

            {/* الصف الثاني: المسافرون */}
            <div
              className="
                w-full rounded-2xl border border-white/50 bg-white/40
                shadow-xl backdrop-blur-xl
                flex flex-col md:flex-row
                divide-y divide-white/50 md:divide-y-0 md:divide-x-reverse
              "
            >
              {/* البالغون */}
              <div className="flex flex-1 items-center justify-between gap-4 p-4">
                <div className="flex w-full flex-col gap-1.5">
                  <label
                    htmlFor="adults"
                    className="font-bold text-sm text-slate-800"
                  >
                    البالغون
                  </label>
                  <Field
                    type="number"
                    name="adults"
                    id="adults"
                    min="1"
                    className="w-full bg-transparent text-slate-600 focus:outline-none"
                  />
                  <ErrorMessage
                    name="adults"
                    component="div"
                    className="text-xs text-red-600 font-semibold"
                  />
                </div>
                <FieldIcon icon={Users} />
              </div>

              {/* الأطفال */}
              <div className="flex flex-1 items-center justify-between gap-4 p-4">
                <div className="flex w-full flex-col gap-1.5">
                  <label
                    htmlFor="children"
                    className="font-bold text-sm text-slate-800"
                  >
                    الأطفال (2-12 سنة)
                  </label>
                  <Field
                    type="number"
                    name="children"
                    id="children"
                    min="0"
                    className="w-full bg-transparent text-slate-600 focus:outline-none"
                  />
                  <ErrorMessage
                    name="children"
                    component="div"
                    className="text-xs text-red-600 font-semibold"
                  />
                </div>
                <FieldIcon icon={Users} />
              </div>

              {/* كبار السن */}
              <div className="flex flex-1 items-center justify-between gap-4 p-4">
                <div className="flex w-full flex-col gap-1.5">
                  <label
                    htmlFor="seniors"
                    className="font-bold text-sm text-slate-800"
                  >
                    كبار السن (+65)
                  </label>
                  <Field
                    type="number"
                    name="seniors"
                    id="seniors"
                    min="0"
                    className="w-full bg-transparent text-slate-600 focus:outline-none"
                  />
                  <ErrorMessage
                    name="seniors"
                    component="div"
                    className="text-xs text-red-600 font-semibold"
                  />
                </div>
                <FieldIcon icon={Users} />
              </div>
            </div>

            {/* زر الإرسال */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-white bg-opacity-40 text-white px-10 py-3 rounded-full text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "جاري البحث..." : "ابحث عن رحلات"}
            </button>
          </Form>
        )}
      </Formik>
    </main>
  );
}
