import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Hotel, BedDouble, DoorClosed, DoorOpen } from "lucide-react";

const validationSchema = Yup.object({
  hotelName: Yup.string().required("اسم الفندق مطلوب"),
  roomType: Yup.string().required("نوع الغرفة مطلوب"),
  rooms: Yup.number()
    .min(1, "يجب حجز غرفة واحدة على الأقل")
    .required("عدد الغرف مطلوب"),
  beds: Yup.number()
    .min(1, "يجب اختيار سرير واحد على الأقل")
    .required("عدد الأسرّة مطلوب"),
});

const FieldIcon = ({ icon: Icon }) => (
  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/60">
    <Icon className="h-6 w-6 text-slate-700" />
  </div>
);

export default function HotelBookingForm() {
  const navigate = useNavigate();

  const handleBookingSuccess = () => {
    toast(
      (t) => (
        <div className="flex flex-col items-center justify-center gap-4 p-4 text-white">
          <p className="text-lg font-semibold">تم حجز الفندق بنجاح!</p>
          <p>هل ترغب بحجز ليموزين الآن؟</p>
          <div className="flex gap-4">
            <button
              onClick={() => {
                toast.dismiss(t.id);
                navigate("/limousine");
              }}
              className="bg-amber-600 hover:bg-amber-700 px-4 py-2 rounded text-white font-semibold"
            >
              نعم
            </button>
            <button
              onClick={() => {
                toast.dismiss(t.id);
                navigate("/confirmation");
              }}
              className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded text-white font-semibold"
            >
              لا
            </button>
          </div>
        </div>
      ),
      {
        duration: 8000,
        position: "top-center",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
          fontSize: "16px",
        },
      }
    );
  };

  return (
    <main
      className="flex items-center justify-center p-4"
    >
      <Toaster />
      <Formik
        initialValues={{ hotelName: "", roomType: "", rooms: 1, beds: 1 }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log("Booking Details:", values);
          // localStorage.setItem(...)
          handleBookingSuccess();
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="flex w-full max-w-4xl flex-col items-center gap-8">
            <div
              className="
                w-full rounded-2xl border border-white/50 bg-white/40
                shadow-xl backdrop-blur-xl
                flex flex-col md:flex-row
                divide-y divide-white/50 md:divide-y-0 md:divide-x-reverse
              "
            >
              {/* Field 1: Hotel Name */}
              <div className="flex flex-1 items-center justify-between gap-4 p-4">
                <div className="flex w-full flex-col gap-1.5">
                  <label htmlFor="hotelName" className="font-bold text-sm text-slate-800">اختر الفندق</label>
                  <Field as="select" name="hotelName" id="hotelName" className="w-full appearance-none bg-transparent text-slate-600 focus:outline-none">
                    <option value="">اختر من القائمة...</option>
                    <option value="هيلتون">هيلتون</option>
                    <option value="المروة">المروة</option>
                    <option value="الريتز">الريتز</option>
                  </Field>
                  <ErrorMessage name="hotelName" component="div" className="text-xs text-red-600 font-semibold" />
                </div>
                <FieldIcon icon={Hotel} />
              </div>

              {/* Field 2: Room Type */}
              <div className="flex flex-1 items-center justify-between gap-4 p-4">
                <div className="flex w-full flex-col gap-1.5">
                  <label htmlFor="roomType" className="font-bold text-sm text-slate-800">نوع الغرفة</label>
                  <Field as="select" name="roomType" id="roomType" className="w-full appearance-none bg-transparent text-slate-600 focus:outline-none">
                    <option value="">اختر النوع...</option>
                    <option value="مفردة">غرفة مفردة</option>
                    <option value="مزدوجة">غرفة مزدوجة</option>
                    <option value="عائلية">غرفة عائلية</option>
                  </Field>
                  <ErrorMessage name="roomType" component="div" className="text-xs text-red-600 font-semibold" />
                </div>
                <FieldIcon icon={DoorOpen} />
              </div>

              {/* Field 3: Number of Rooms */}
              <div className="flex flex-1 items-center justify-between gap-4 p-4">
                <div className="flex w-full flex-col gap-1.5">
                  <label htmlFor="rooms" className="font-bold text-sm text-slate-800">عدد الغرف</label>
                  <Field type="number" name="rooms" id="rooms" min="1" className="w-full bg-transparent text-slate-600 focus:outline-none" />
                  <ErrorMessage name="rooms" component="div" className="text-xs text-red-600 font-semibold" />
                </div>
                <FieldIcon icon={DoorClosed} />
              </div>

              {/* Field 4: Number of Beds */}
              <div className="flex flex-1 items-center justify-between gap-4 p-4">
                <div className="flex w-full flex-col gap-1.5">
                  <label htmlFor="beds" className="font-bold text-sm text-slate-800">عدد الأسرّة</label>
                  <Field type="number" name="beds" id="beds" min="1" className="w-full bg-transparent text-slate-600 focus:outline-none" />
                  <ErrorMessage name="beds" component="div" className="text-xs text-red-600 font-semibold" />
                </div>
                <FieldIcon icon={BedDouble} />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-white bg-opacity-40 text-white px-10 py-3 rounded-full text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl disabled:bg-gray-400"
            >
              {isSubmitting ? "جاري الحجز..." : "تأكيد الحجز"}
            </button>
          </Form>
        )}
      </Formik>
    </main>
  );
}