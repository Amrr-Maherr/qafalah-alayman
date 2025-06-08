import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import {
  FaUser,
  FaPhone,
  FaEnvelope,
  FaPlane,
  FaHotel,
  FaCalendarAlt,
  FaUsers,
  FaIdCard,
  FaFlag,
  FaPencilAlt,
  FaSave,
  FaTimes,
  FaCar,
} from "react-icons/fa";
import NewsTicker from "../NewsTicker";

// مخطط التحقق الكامل باستخدام Yup
const validationSchema = Yup.object({
  flight: Yup.object({
    departureCity: Yup.string().required("مدينة المغادرة مطلوبة"),
    returnCity: Yup.string().required("مدينة العودة مطلوبة"),
    departureDate: Yup.date().required("تاريخ المغادرة مطلوب"),
    returnDate: Yup.date()
      .required("تاريخ العودة مطلوب")
      .min(
        Yup.ref("departureDate"),
        "تاريخ العودة يجب أن يكون بعد تاريخ المغادرة"
      ),
    adults: Yup.number()
      .min(1, "يجب وجود مسافر بالغ واحد على الأقل")
      .required("مطلوب"),
    children: Yup.number()
      .min(0, "العدد لا يمكن أن يكون سالبًا")
      .required("مطلوب"),
    seniors: Yup.number()
      .min(0, "العدد لا يمكن أن يكون سالبًا")
      .required("مطلوب"),
  }),
  hotel: Yup.object({
    hotelName: Yup.string(), // اجعلها اختيارية إذا كان الفندق ليس إجباريًا
    roomType: Yup.string(),
  }),
  user: Yup.object({
    fullName: Yup.string().required("الاسم الكامل مطلوب"),
    idNumber: Yup.string().required("رقم الهوية مطلوب"),
    nationality: Yup.string().required("الجنسية مطلوبة"),
    phoneNumber: Yup.string()
      .matches(/^[0-9]{10,15}$/, "رقم الهاتف غير صالح")
      .required("رقم الهاتف مطلوب"),
    email: Yup.string()
      .email("البريد الإلكتروني غير صالح")
      .required("البريد الإلكتروني مطلوب"),
  }),
});

export default function Confirmation() {
  const travelData = JSON.parse(localStorage.getItem("travelBooking")) || {};
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  const initialFormValues = {
    flight: {
      departureCity: travelData.flight?.departureCity || "",
      returnCity: travelData.flight?.returnCity || "",
      departureDate: travelData.flight?.departureDate || "",
      returnDate: travelData.flight?.returnDate || "",
      adults: travelData.flight?.adults || 1,
      children: travelData.flight?.children || 0,
      seniors: travelData.flight?.seniors || 0,
    },
    hotel: {
      hotelName: travelData.hotel?.hotelName || "",
      roomType: travelData.hotel?.roomType || "",
      rooms: travelData.hotel?.rooms || 0,
      beds: travelData.hotel?.beds || 0,
    },
    user: {
      fullName: travelData.user?.fullName || "",
      idNumber: travelData.user?.idNumber || "",
      nationality: travelData.user?.nationality || "",
      phoneNumber: travelData.user?.phoneNumber || "",
      email: travelData.user?.email || "",
    },
  };

  // دالة لعرض تنبيه الليموزين التفاعلي
  const showLimoToast = () => {
    toast(
      (t) => (
        <div className="text-right">
          <div className="flex items-start gap-4">
            <FaCar className="text-3xl text-yellow-500 mt-1" />
            <div>
              <h4 className="font-bold text-lg text-gray-800">هل أنت مهتم؟</h4>
              <p className="text-gray-600 mt-1">
                يمكننا ترتيب سيارة ليموزين لتوصيلك. هل ترغب في حجز واحدة؟
              </p>
            </div>
          </div>
          <div className="flex justify-end gap-3 mt-5">
            <button
              onClick={() => {
                toast.dismiss(t.id);
                navigate("/limousine");
              }}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-md transition-colors"
            >
              نعم، بالتأكيد
            </button>
            <button
              onClick={() => toast.dismiss(t.id)}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold px-4 py-2 rounded-md transition-colors"
            >
              لا، شكرًا
            </button>
          </div>
        </div>
      ),
      {
        duration: 60000,
        position: "top-center",
      }
    );
  };

  return (
    <>
    <NewsTicker/>
      <section className="container mx-auto px-6 py-12 bg-gradient-to-br from-blue-50 via-white to-blue-50 min-h-screen">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
          <h2 className="text-4xl font-bold text-center text-blue-900 py-8 bg-blue-100/50">
            📋 تأكيد الحجز
          </h2>

          <Formik
            initialValues={initialFormValues}
            validationSchema={validationSchema}
            enableReinitialize
            onSubmit={(values) => {
              localStorage.setItem("travelBooking", JSON.stringify(values));
              toast.success("تم تأكيد الحجز بنجاح!");
              setIsEditing(false);

              setTimeout(() => {
                showLimoToast();
              }, 1500);
            }}
          >
            {({ values, resetForm }) => (
              <Form>
                <div className="p-8">
                  {/* قسم تفاصيل الحجز */}
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-semibold text-right text-blue-800 flex items-center">
                      <FaHotel className="ml-2" /> تفاصيل الحجز
                    </h3>
                    {!isEditing && (
                      <button
                        type="button"
                        onClick={() => setIsEditing(true)}
                        className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                      >
                        <FaPencilAlt className="ml-2" /> تعديل
                      </button>
                    )}
                  </div>

                  {travelData.flight || travelData.hotel ? (
                    <div className="grid md:grid-cols-2 gap-6 mb-10">
                      {/* بيانات الرحلة */}
                      {travelData.flight && (
                        <div className="bg-blue-50 p-6 rounded-2xl shadow-md">
                          <h4 className="text-xl font-semibold text-right text-blue-700 mb-4 flex items-center">
                            <FaPlane className="ml-2" /> تفاصيل الرحلة
                          </h4>
                          <div className="space-y-4 text-right text-gray-700">
                            <div>
                              <h5 className="font-semibold text-blue-600">
                                الوجهات
                              </h5>
                              <p>
                                من:{" "}
                                {isEditing ? (
                                  <Field
                                    type="text"
                                    name="flight.departureCity"
                                    className="w-full mt-1 p-2 border rounded-md"
                                  />
                                ) : (
                                  values.flight.departureCity
                                )}
                              </p>
                              <ErrorMessage
                                name="flight.departureCity"
                                component="div"
                                className="text-red-500 text-sm"
                              />
                              <p className="mt-2">
                                إلى:{" "}
                                {isEditing ? (
                                  <Field
                                    type="text"
                                    name="flight.returnCity"
                                    className="w-full mt-1 p-2 border rounded-md"
                                  />
                                ) : (
                                  values.flight.returnCity
                                )}
                              </p>
                              <ErrorMessage
                                name="flight.returnCity"
                                component="div"
                                className="text-red-500 text-sm"
                              />
                            </div>
                            <div>
                              <h5 className="font-semibold text-blue-600 flex items-center justify-end">
                                <FaCalendarAlt className="ml-2" /> التواريخ
                              </h5>
                              <p>
                                المغادرة:{" "}
                                {isEditing ? (
                                  <Field
                                    type="date"
                                    name="flight.departureDate"
                                    className="w-full mt-1 p-2 border rounded-md"
                                  />
                                ) : (
                                  values.flight.departureDate
                                )}
                              </p>
                              <ErrorMessage
                                name="flight.departureDate"
                                component="div"
                                className="text-red-500 text-sm"
                              />
                              <p className="mt-2">
                                العودة:{" "}
                                {isEditing ? (
                                  <Field
                                    type="date"
                                    name="flight.returnDate"
                                    className="w-full mt-1 p-2 border rounded-md"
                                  />
                                ) : (
                                  values.flight.returnDate
                                )}
                              </p>
                              <ErrorMessage
                                name="flight.returnDate"
                                component="div"
                                className="text-red-500 text-sm"
                              />
                            </div>
                            <div>
                              <h5 className="font-semibold text-blue-600 flex items-center justify-end">
                                <FaUsers className="ml-2" /> المسافرون
                              </h5>
                              <div
                                className={`grid grid-cols-3 gap-2 ${
                                  isEditing ? "mt-2" : ""
                                }`}
                              >
                                <div className="text-center">
                                  <label>البالغين</label>
                                  {isEditing ? (
                                    <Field
                                      type="number"
                                      name="flight.adults"
                                      className="w-full p-2 border rounded-md text-center"
                                    />
                                  ) : (
                                    <p className="font-bold text-lg">
                                      {values.flight.adults}
                                    </p>
                                  )}
                                  <ErrorMessage
                                    name="flight.adults"
                                    component="div"
                                    className="text-red-500 text-xs"
                                  />
                                </div>
                                <div className="text-center">
                                  <label>الأطفال</label>
                                  {isEditing ? (
                                    <Field
                                      type="number"
                                      name="flight.children"
                                      className="w-full p-2 border rounded-md text-center"
                                    />
                                  ) : (
                                    <p className="font-bold text-lg">
                                      {values.flight.children}
                                    </p>
                                  )}
                                  <ErrorMessage
                                    name="flight.children"
                                    component="div"
                                    className="text-red-500 text-xs"
                                  />
                                </div>
                                <div className="text-center">
                                  <label>المسنين</label>
                                  {isEditing ? (
                                    <Field
                                      type="number"
                                      name="flight.seniors"
                                      className="w-full p-2 border rounded-md text-center"
                                    />
                                  ) : (
                                    <p className="font-bold text-lg">
                                      {values.flight.seniors}
                                    </p>
                                  )}
                                  <ErrorMessage
                                    name="flight.seniors"
                                    component="div"
                                    className="text-red-500 text-xs"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {/* بيانات الفندق */}
                      {travelData.hotel && (
                        <div className="bg-blue-50 p-6 rounded-2xl shadow-md">
                          <h4 className="text-xl font-semibold text-right text-blue-700 mb-4">
                            تفاصيل الفندق
                          </h4>
                          <p>
                            الاسم:{" "}
                            {isEditing ? (
                              <Field
                                type="text"
                                name="hotel.hotelName"
                                className="w-full mt-1 p-2 border rounded-md"
                              />
                            ) : (
                              values.hotel.hotelName
                            )}
                          </p>
                        </div>
                      )}
                    </div>
                  ) : (
                    <p className="text-center text-gray-500 text-lg py-8">
                      لا توجد بيانات حجز لعرضها
                    </p>
                  )}

                  <hr className="border-blue-200 my-8" />

                  {/* قسم البيانات الشخصية */}
                  <div>
                    <h3 className="text-2xl font-semibold text-right text-blue-800 mb-6 flex items-center">
                      <FaUser className="ml-2" /> أدخل بياناتك الشخصية
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="relative">
                        <label className="block text-right font-semibold text-gray-700 mb-2">
                          الاسم الكامل
                        </label>
                        <FaUser className="absolute top-12 right-4 transform -translate-y-1/2 text-gray-400" />
                        <Field
                          type="text"
                          name="user.fullName"
                          placeholder="أدخل اسمك الكامل"
                          className="w-full p-4 pr-12 border border-gray-300 rounded-xl"
                        />
                        <ErrorMessage
                          name="user.fullName"
                          component="div"
                          className="text-red-500 text-sm text-right mt-1"
                        />
                      </div>
                      <div className="relative">
                        <label className="block text-right font-semibold text-gray-700 mb-2">
                          رقم الهوية
                        </label>
                        <FaIdCard className="absolute top-12 right-4 transform -translate-y-1/2 text-gray-400" />
                        <Field
                          type="text"
                          name="user.idNumber"
                          placeholder="أدخل رقم هويتك"
                          className="w-full p-4 pr-12 border border-gray-300 rounded-xl"
                        />
                        <ErrorMessage
                          name="user.idNumber"
                          component="div"
                          className="text-red-500 text-sm text-right mt-1"
                        />
                      </div>
                      <div className="relative">
                        <label className="block text-right font-semibold text-gray-700 mb-2">
                          الجنسية
                        </label>
                        <FaFlag className="absolute top-12 right-4 transform -translate-y-1/2 text-gray-400" />
                        <Field
                          type="text"
                          name="user.nationality"
                          placeholder="أدخل جنسيتك"
                          className="w-full p-4 pr-12 border border-gray-300 rounded-xl"
                        />
                        <ErrorMessage
                          name="user.nationality"
                          component="div"
                          className="text-red-500 text-sm text-right mt-1"
                        />
                      </div>
                      <div className="relative">
                        <label className="block text-right font-semibold text-gray-700 mb-2">
                          رقم الهاتف
                        </label>
                        <FaPhone className="absolute top-12 right-4 transform -translate-y-1/2 text-gray-400" />
                        <Field
                          type="text"
                          name="user.phoneNumber"
                          placeholder="أدخل رقم هاتفك"
                          className="w-full p-4 pr-12 border border-gray-300 rounded-xl"
                        />
                        <ErrorMessage
                          name="user.phoneNumber"
                          component="div"
                          className="text-red-500 text-sm text-right mt-1"
                        />
                      </div>
                      <div className="md:col-span-2 relative">
                        <label className="block text-right font-semibold text-gray-700 mb-2">
                          البريد الإلكتروني
                        </label>
                        <FaEnvelope className="absolute top-12 right-4 transform -translate-y-1/2 text-gray-400" />
                        <Field
                          type="email"
                          name="user.email"
                          placeholder="أدخل بريدك الإلكتروني"
                          className="w-full p-4 pr-12 border border-gray-300 rounded-xl"
                        />
                        <ErrorMessage
                          name="user.email"
                          component="div"
                          className="text-red-500 text-sm text-right mt-1"
                        />
                      </div>
                    </div>
                  </div>

                  {/* أزرار الإرسال النهائية */}
                  <div className="text-center mt-12">
                    {isEditing ? (
                      <div className="flex justify-center gap-4">
                        <button
                          type="submit"
                          className="bg-green-600 text-white px-8 py-3 rounded-xl text-lg font-semibold hover:bg-green-700 transition flex items-center"
                        >
                          <FaSave className="ml-2" /> حفظ التعديلات
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            resetForm();
                            setIsEditing(false);
                          }}
                          className="bg-gray-500 text-white px-8 py-3 rounded-xl text-lg font-semibold hover:bg-gray-600 transition flex items-center"
                        >
                          <FaTimes className="ml-2" /> إلغاء
                        </button>
                      </div>
                    ) : (
                      <button
                        type="submit"
                        className="bg-[#B38124] text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-[#9f6e1e] transition"
                      >
                        تأكيد البيانات والحجز
                      </button>
                    )}
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        {/* تأكد من وجود هذا المكون لعرض التنبيهات */}
        <Toaster />
      </section>
    </>
  );
}
