import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { FaHotel, FaBed } from "react-icons/fa";

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

export default function HotelForm() {
  const navigate = useNavigate();

  return (
    <section className="container mx-auto p-8 bg-gradient-to-br bg-[#F2F2F2] to-white shadow-xl rounded-2xl my-10 max-w-4xl">
      <h2 className="text-3xl font-bold mb-8 text-center text-amber-600">
        🏨 احجز فندقك الآن
      </h2>
      <Formik
        initialValues={{
          hotelName: "",
          roomType: "",
          rooms: 1,
          beds: 1,
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          const flightData =
            JSON.parse(localStorage.getItem("flightBooking")) || {};

          const travelBooking = {
            flight: flightData,
            hotel: values,
          };

          localStorage.setItem("travelBooking", JSON.stringify(travelBooking));

          toast.success("تم حجز الفندق بنجاح! جاري توجيهك لتأكيد الحجز...", {
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

          navigate("/confirmation");
        }}
      >
        {() => (
          <Form className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-right font-semibold mb-2">
                اختر الفندق
              </label>
              <div className="relative">
                <FaHotel className="absolute top-1/2 right-3 transform -translate-y-1/2 text-amber-600" />
                <Field
                  as="select"
                  name="hotelName"
                  className="w-full p-3 pr-10 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <option value="">اختر الفندق</option>
                  <option value="هيلتون">هيلتون</option>
                  <option value="المروة">المروة</option>
                  <option value="الريتز">الريتز</option>
                </Field>
                <ErrorMessage
                  name="hotelName"
                  component="div"
                  className="text-red-500 text-sm text-right mt-1"
                />
              </div>
            </div>

            <div>
              <label className="block text-right font-semibold mb-2">
                نوع الغرفة
              </label>
              <div className="relative">
                <FaBed className="absolute top-1/2 right-3 transform -translate-y-1/2 text-amber-600" />
                <Field
                  as="select"
                  name="roomType"
                  className="w-full p-3 pr-10 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <option value="">اختر نوع الغرفة</option>
                  <option value="مفردة">غرفة مفردة</option>
                  <option value="مزدوجة">غرفة مزدوجة</option>
                  <option value="عائلية">غرفة عائلية</option>
                </Field>
                <ErrorMessage
                  name="roomType"
                  component="div"
                  className="text-red-500 text-sm text-right mt-1"
                />
              </div>
            </div>

            <div>
              <label className="block text-right font-semibold mb-2">
                عدد الغرف
              </label>
              <div className="relative">
                <FaBed className="absolute top-1/2 right-3 transform -translate-y-1/2 text-amber-600" />
                <Field
                  type="number"
                  name="rooms"
                  min="1"
                  className="w-full p-3 pr-10 border border-gray-300 rounded-xl"
                  placeholder="عدد الغرف"
                />
                <ErrorMessage
                  name="rooms"
                  component="div"
                  className="text-red-500 text-sm text-right mt-1"
                />
              </div>
            </div>

            <div>
              <label className="block text-right font-semibold mb-2">
                عدد الأسرّة
              </label>
              <div className="relative">
                <FaBed className="absolute top-1/2 right-3 transform -translate-y-1/2 text-amber-600" />
                <Field
                  type="number"
                  name="beds"
                  min="1"
                  className="w-full p-3 pr-10 border border-gray-300 rounded-xl"
                  placeholder="عدد الأسرّة"
                />
                <ErrorMessage
                  name="beds"
                  component="div"
                  className="text-red-500 text-sm text-right mt-1"
                />
              </div>
            </div>

            <div className="md:col-span-2 text-center mt-6">
              <button
                type="submit"
                className="bg-[#B38124] hover:bg-[#a06f1a] text-white px-8 py-3 rounded-xl text-lg font-semibold transition duration-200"
              >
                احجز الآن
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <Toaster />
    </section>
  );
}
