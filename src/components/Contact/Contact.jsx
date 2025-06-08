import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import NewsTicker from "../NewsTicker";

const contactValidationSchema = Yup.object({
  fullName: Yup.string().required("الاسم الكامل مطلوب"),
  email: Yup.string()
    .email("البريد الإلكتروني غير صالح")
    .required("البريد الإلكتروني مطلوب"),
  subject: Yup.string().required("الموضوع مطلوب"),
  message: Yup.string()
    .min(10, "يجب أن تكون الرسالة 10 أحرف على الأقل")
    .required("الرسالة مطلوبة"),
});

export default function ContactUsPage() {
  return (
    <>
      <NewsTicker/>
      <section className="bg-slate-50 py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-800">
              تواصل معنا
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              هل لديك سؤال أو استفسار؟ نحن هنا للمساعدة.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="text-right">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                معلومات الاتصال
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                لا تتردد في التواصل معنا عبر القنوات التالية. فريقنا جاهز للرد
                على جميع استفساراتك في أسرع وقت ممكن.
              </p>
              <div className="space-y-6">
                <div className="flex items-center justify-end gap-4">
                  <span className="font-semibold text-gray-700">
                    الرياض، المملكة العربية السعودية
                  </span>
                  <FaMapMarkerAlt className="text-2xl text-amber-500" />
                </div>
                <div className="flex items-center justify-end gap-4">
                  <a
                    href="tel:+966112345678"
                    className="font-semibold text-gray-700 hover:text-amber-600 transition-colors"
                  >
                    +966 11 234 5678
                  </a>
                  <FaPhone className="text-2xl text-amber-500" />
                </div>
                <div className="flex items-center justify-end gap-4">
                  <a
                    href="mailto:support@example.com"
                    className="font-semibold text-gray-700 hover:text-amber-600 transition-colors"
                  >
                    support@example.com
                  </a>
                  <FaEnvelope className="text-2xl text-amber-500" />
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <Formik
                initialValues={{
                  fullName: "",
                  email: "",
                  subject: "",
                  message: "",
                }}
                validationSchema={contactValidationSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                  console.log("بيانات النموذج المرسلة:", values);

                  setTimeout(() => {
                    setSubmitting(false);
                    toast.success("تم إرسال رسالتك بنجاح!");
                    resetForm();
                  }, 1000);
                }}
              >
                {({ isSubmitting }) => (
                  <Form className="space-y-6 text-right">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block mb-2 text-sm font-bold text-gray-700"
                      >
                        الاسم الكامل
                      </label>
                      <Field
                        type="text"
                        name="fullName"
                        id="fullName"
                        className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                      <ErrorMessage
                        name="fullName"
                        component="p"
                        className="text-red-500 text-xs mt-1"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-bold text-gray-700"
                      >
                        البريد الإلكتروني
                      </label>
                      <Field
                        type="email"
                        name="email"
                        id="email"
                        className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                      <ErrorMessage
                        name="email"
                        component="p"
                        className="text-red-500 text-xs mt-1"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block mb-2 text-sm font-bold text-gray-700"
                      >
                        الموضوع
                      </label>
                      <Field
                        type="text"
                        name="subject"
                        id="subject"
                        className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                      <ErrorMessage
                        name="subject"
                        component="p"
                        className="text-red-500 text-xs mt-1"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block mb-2 text-sm font-bold text-gray-700"
                      >
                        رسالتك
                      </label>
                      <Field
                        as="textarea"
                        name="message"
                        id="message"
                        rows="5"
                        className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                      <ErrorMessage
                        name="message"
                        component="p"
                        className="text-red-500 text-xs mt-1"
                      />
                    </div>

                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-amber-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-amber-600 transition-all duration-300 disabled:bg-gray-400"
                      >
                        {isSubmitting ? "جاري الإرسال..." : "إرسال الرسالة"}
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
        <Toaster />
      </section>
    </>
  );
}
