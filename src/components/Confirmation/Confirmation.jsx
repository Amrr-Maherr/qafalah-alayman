import { useState } from "react";
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
    hotelName: Yup.string(),
    roomType: Yup.string(),
    rooms: Yup.number().min(1, "يجب حجز غرفة واحدة على الأقل"),
    beds: Yup.number().min(1, "يجب اختيار سرير واحد على الأقل"),
  }),
  limousine: Yup.object({
    title: Yup.string(),
    vehicleType: Yup.string(),
    bookingDate: Yup.date().required("تاريخ حجز الليموزين مطلوب"),
  }),
  user: Yup.object({
    fullName: Yup.string().required("الاسم الكامل مطلوب"),
    idNumber: Yup.string().required("رقم الهوية مطلوب"),
    nationality: Yup.string().required("الجنسية مطلوبة"),
    phoneNumber: Yup.string().required("رقم الهاتف مطلوب"),
    email: Yup.string()
      .email("البريد الإلكتروني غير صالح")
      .required("البريد الإلكتروني مطلوب"),
  }),
});

export default function Confirmation() {
  const travelData = JSON.parse(localStorage.getItem("travelBooking")) || {};
  const [isEditing, setIsEditing] = useState(false);

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
    limousine: {
      title: travelData.limousine?.title || "",
      vehicleType: travelData.limousine?.vehicleType || "",
      pricePerHour: travelData.limousine?.pricePerHour || "",
      amenities: travelData.limousine?.amenities || [],
      bookingDate: travelData.limousine?.bookingDate || "",
    },
    user: {
      fullName: travelData.user?.fullName || "",
      idNumber: travelData.user?.idNumber || "",
      nationality: travelData.user?.nationality || "",
      phoneNumber: travelData.user?.phoneNumber || "",
      email: travelData.user?.email || "",
    },
  };

  return (
    <>
      <NewsTicker />
      <section className="container mx-auto px-6 py-12 bg-gradient-to-br bg-[#F2F2F2] to-white min-h-screen">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
          <h2 className="text-4xl font-bold text-center text-amber-600 py-8 bg-[#F2F2F2]/50">
            📋 تأكيد الحجز
          </h2>

          <Formik
            initialValues={initialFormValues}
            validationSchema={validationSchema}
            enableReinitialize
            onSubmit={(values) => {
              const finalValues = {
                ...values,
                limousine: {
                  ...values.limousine,
                  amenities: Array.isArray(values.limousine.amenities)
                    ? values.limousine.amenities
                    : values.limousine.amenities
                        .split(",")
                        .map((item) => item.trim()),
                },
              };
              localStorage.setItem(
                "travelBooking",
                JSON.stringify(finalValues)
              );
              toast.success("تم حفظ وتأكيد البيانات بنجاح!");
              setIsEditing(false);
            }}
          >
            {({ values, resetForm }) => (
              <Form>
                <div className="p-8">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-semibold text-right text-amber-600 flex items-center">
                      <FaHotel className="ml-2" /> تفاصيل الحجز
                    </h3>
                    {!isEditing && (
                      <button
                        type="button"
                        onClick={() => setIsEditing(true)}
                        className="flex items-center bg-[#B38124] text-white px-4 py-2 rounded-[40px] hover:bg-[#a06f1a] transition"
                      >
                        <FaPencilAlt className="ml-2" /> تعديل
                      </button>
                    )}
                  </div>

                  {travelData.flight ||
                  travelData.hotel ||
                  travelData.limousine ? (
                    <div className="grid md:grid-cols-2 gap-6 mb-10">
                      {travelData.flight && (
                        <div className="bg-[#F2F2F2] p-6 rounded-2xl shadow-md">
                          <h4 className="text-xl font-semibold text-right text-amber-600 mb-4 flex items-center">
                            <FaPlane className="ml-2" /> تفاصيل الرحلة
                          </h4>
                          <div className="space-y-4 text-right text-gray-700">
                            <div>
                              <h5 className="font-semibold text-amber-600">
                                الوجهات
                              </h5>
                              <p>
                                من:{" "}
                                {isEditing ? (
                                  <Field
                                    type="text"
                                    name="flight.departureCity"
                                    className="w-full mt-1 p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-600"
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
                                    className="w-full mt-1 p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-600"
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
                              <h5 className="font-semibold text-amber-600 flex items-center justify-end">
                                <FaCalendarAlt className="ml-2" /> التواريخ
                              </h5>
                              <p>
                                المغادرة:{" "}
                                {isEditing ? (
                                  <Field
                                    type="date"
                                    name="flight.departureDate"
                                    className="w-full mt-1 p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-600"
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
                                    className="w-full mt-1 p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-600"
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
                              <h5 className="font-semibold text-amber-600 flex items-center justify-end">
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
                                      className="w-full p-2 border border-gray-300 rounded-xl text-center focus:outline-none focus:ring-2 focus:ring-amber-600"
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
                                      className="w-full p-2 border border-gray-300 rounded-xl text-center focus:outline-none focus:ring-2 focus:ring-amber-600"
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
                                      className="w-full p-2 border border-gray-300 rounded-xl text-center focus:outline-none focus:ring-2 focus:ring-amber-600"
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

                      {travelData.hotel && (
                        <div className="bg-[#F2F2F2] p-6 rounded-2xl shadow-md">
                          <h4 className="text-xl font-semibold text-right text-amber-600 mb-4 flex items-center">
                            <FaHotel className="ml-2" /> تفاصيل الفندق
                          </h4>
                          <div className="space-y-4 text-right text-gray-700">
                            <div>
                              <h5 className="font-semibold text-amber-600">
                                اسم الفندق
                              </h5>
                              <p>
                                {isEditing ? (
                                  <Field
                                    as="select"
                                    name="hotel.hotelName"
                                    className="w-full mt-1 p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-600"
                                  >
                                    <option value="">اختر الفندق</option>
                                    <option value="هيلتون">هيلتون</option>
                                    <option value="المروة">المروة</option>
                                    <option value="الريتز">الريتز</option>
                                  </Field>
                                ) : (
                                  values.hotel.hotelName
                                )}
                              </p>
                              <ErrorMessage
                                name="hotel.hotelName"
                                component="div"
                                className="text-red-500 text-sm"
                              />
                            </div>
                            <div>
                              <h5 className="font-semibold text-amber-600">
                                نوع الغرفة
                              </h5>
                              <p>
                                {isEditing ? (
                                  <Field
                                    as="select"
                                    name="hotel.roomType"
                                    className="w-full mt-1 p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-600"
                                  >
                                    <option value="">اختر نوع الغرفة</option>
                                    <option value="مفردة">غرفة مفردة</option>
                                    <option value="مزدوجة">غرفة مزدوجة</option>
                                    <option value="عائلية">غرفة عائلية</option>
                                  </Field>
                                ) : (
                                  values.hotel.roomType
                                )}
                              </p>
                              <ErrorMessage
                                name="hotel.roomType"
                                component="div"
                                className="text-red-500 text-sm"
                              />
                            </div>
                            <div>
                              <h5 className="font-semibold text-amber-600">
                                عدد الغرف
                              </h5>
                              <p>
                                {isEditing ? (
                                  <Field
                                    type="number"
                                    name="hotel.rooms"
                                    min="1"
                                    className="w-full mt-1 p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-600"
                                  />
                                ) : (
                                  values.hotel.rooms
                                )}
                              </p>
                              <ErrorMessage
                                name="hotel.rooms"
                                component="div"
                                className="text-red-500 text-sm"
                              />
                            </div>
                            <div>
                              <h5 className="font-semibold text-amber-600">
                                عدد الأسرّة
                              </h5>
                              <p>
                                {isEditing ? (
                                  <Field
                                    type="number"
                                    name="hotel.beds"
                                    min="1"
                                    className="w-full mt-1 p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-600"
                                  />
                                ) : (
                                  values.hotel.beds
                                )}
                              </p>
                              <ErrorMessage
                                name="hotel.beds"
                                component="div"
                                className="text-red-500 text-sm"
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      {travelData.limousine && (
                        <div className="bg-[#F2F2F2] p-6 rounded-2xl shadow-md md:col-span-2">
                          <h4 className="text-xl font-semibold text-right text-amber-600 mb-4 flex items-center">
                            <FaCar className="ml-2" /> تفاصيل الليموزين
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 text-right text-gray-700">
                            <div>
                              <h5 className="font-semibold text-amber-600 mb-1">
                                نوع الخدمة
                              </h5>
                              {isEditing ? (
                                <Field
                                  type="text"
                                  name="limousine.title"
                                  className="w-full p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-600"
                                />
                              ) : (
                                <p className="text-gray-800">
                                  {values.limousine.title}
                                </p>
                              )}
                            </div>
                            <div>
                              <h5 className="font-semibold text-amber-600 mb-1">
                                نوع المركبة
                              </h5>
                              {isEditing ? (
                                <Field
                                  as="select"
                                  name="limousine.vehicleType"
                                  className="w-full p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-600"
                                >
                                  <option value="">اختر نوع المركبة</option>
                                  <option value="مرسيدس S-Class">
                                    مرسيدس S-Class
                                  </option>
                                  <option value="BMW 7 Series">
                                    BMW 7 Series
                                  </option>
                                  <option value="Cadillac Escalade">
                                    Cadillac Escalade
                                  </option>
                                </Field>
                              ) : (
                                <p className="text-gray-800">
                                  {values.limousine.vehicleType}
                                </p>
                              )}
                            </div>
                            <div>
                              <h5 className="font-semibold text-amber-600 mb-1 flex items-center justify-end">
                                <FaCalendarAlt className="ml-2" /> تاريخ الحجز
                              </h5>
                              {isEditing ? (
                                <Field
                                  type="date"
                                  name="limousine.bookingDate"
                                  className="w-full p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-600"
                                />
                              ) : (
                                <p className="text-gray-800">
                                  {values.limousine.bookingDate}
                                </p>
                              )}
                              <ErrorMessage
                                name="limousine.bookingDate"
                                component="div"
                                className="text-red-500 text-sm"
                              />
                            </div>
                            <div className="md:col-span-2">
                              <h5 className="font-semibold text-amber-600 mb-1">
                                المميزات
                              </h5>
                              {isEditing ? (
                                <Field
                                  as="textarea"
                                  name="limousine.amenities"
                                  rows="3"
                                  placeholder="اكتب المميزات مفصولة بفاصلة (,)"
                                  className="w-full p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-600"
                                  value={
                                    Array.isArray(values.limousine.amenities)
                                      ? values.limousine.amenities.join(", ")
                                      : values.limousine.amenities
                                  }
                                />
                              ) : (
                                <div className="flex flex-wrap gap-2 justify-end mt-2">
                                  {Array.isArray(values.limousine.amenities) &&
                                    values.limousine.amenities.map(
                                      (item, index) => (
                                        <span
                                          key={index}
                                          className="bg-amber-100 text-amber-800 text-sm font-medium px-3 py-1 rounded-full"
                                        >
                                          {item}
                                        </span>
                                      )
                                    )}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <p className="text-center text-gray-500 text-lg py-8">
                      لا توجد بيانات حجز لعرضها
                    </p>
                  )}

                  <hr className="border-gray-300 my-8" />

                  <div>
                    <h3 className="text-2xl font-semibold text-right text-amber-600 mb-6 flex items-center">
                      <FaUser className="ml-2" /> أدخل بياناتك الشخصية
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-right font-semibold text-gray-700 mb-2">
                          الاسم الكامل
                        </label>
                        <Field
                          type="text"
                          name="user.fullName"
                          placeholder="أدخل اسمك الكامل"
                          className="w-full p-4 pr-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-600"
                        />
                        <ErrorMessage
                          name="user.fullName"
                          component="div"
                          className="text-red-500 text-sm text-right mt-1"
                        />
                      </div>
                      <div>
                        <label className="block text-right font-semibold text-gray-700 mb-2">
                          رقم الهوية
                        </label>
                        <Field
                          type="text"
                          name="user.idNumber"
                          placeholder="أدخل رقم هويتك"
                          className="w-full p-4 pr-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-600"
                        />
                        <ErrorMessage
                          name="user.idNumber"
                          component="div"
                          className="text-red-500 text-sm text-right mt-1"
                        />
                      </div>
                      <div>
                        <label className="block text-right font-semibold text-gray-700 mb-2">
                          الجنسية
                        </label>
                        <Field
                          type="text"
                          name="user.nationality"
                          placeholder="أدخل جنسيتك"
                          className="w-full p-4 pr-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-600"
                        />
                        <ErrorMessage
                          name="user.nationality"
                          component="div"
                          className="text-red-500 text-sm text-right mt-1"
                        />
                      </div>
                      <div>
                        <label className="block text-right font-semibold text-gray-700 mb-2">
                          رقم الهاتف
                        </label>
                        <Field
                          type="text"
                          name="user.phoneNumber"
                          placeholder="أدخل رقم هاتفك"
                          className="w-full p-4 pr-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-600"
                        />
                        <ErrorMessage
                          name="user.phoneNumber"
                          component="div"
                          className="text-red-500 text-sm text-right mt-1"
                        />
                      </div>
                      <div>
                        <label className="block text-right font-semibold text-gray-700 mb-2">
                          البريد الإلكتروني
                        </label>
                        <Field
                          type="email"
                          name="user.email"
                          placeholder="أدخل بريدك الإلكتروني"
                          className="w-full p-4 pr-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-600"
                        />
                        <ErrorMessage
                          name="user.email"
                          component="div"
                          className="text-red-500 text-sm text-right mt-1"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="text-center mt-12">
                    {isEditing ? (
                      <div className="flex justify-center gap-4">
                        <button
                          type="submit"
                          className="bg-[#B38124] text-white px-8 py-3 rounded-xl text-lg font-semibold hover:bg-[#a06f1a] transition flex items-center"
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
                        className="bg-[#B38124] text-white px-10 py-4 rounded-[40px] text-lg font-semibold hover:bg-[#a06f1a] transition"
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
        <Toaster />
      </section>
    </>
  );
}
