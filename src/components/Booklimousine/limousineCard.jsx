import { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { SwiperSlide } from "swiper/react";
import Slider from "../Slider/Slider";
import {
  MapPinIcon,
  CurrencyDollarIcon,
  TruckIcon,
  StarIcon,
  XMarkIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function LimousineCard({ limousine }) {
  const nav = useNavigate();
  const [hovered, setHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleBooking = () => {
    // جلب البيانات الحالية من localStorage
    const existingBooking =
      JSON.parse(localStorage.getItem("travelBooking")) || {};

    // إنشاء كائن بيانات الليموزين
    const limousineData = {
      title: limousine.title,
      vehicleType: limousine.vehicleType,
      pricePerHour: limousine.pricePerHour,
      amenities: limousine.amenities,
      bookingDate: new Date().toISOString().split("T")[0], // تاريخ الحجز الحالي (YYYY-MM-DD)
    };

    // تحديث الكائن في localStorage بإضافة/تحديث قسم limousine
    const updatedBooking = {
      ...existingBooking,
      limousine: limousineData,
    };

    // حفظ البيانات في localStorage
    localStorage.setItem("travelBooking", JSON.stringify(updatedBooking));

    // عرض تنبيه نجاح
    toast.success(
      `تم الحجز بنجاح سيتم توجيهك إلى صفحة تأكيد الحجز: ${limousine.title}`
    );

    // إعادة توجيه إلى صفحة التأكيد بعد 1 ثانية
    setTimeout(() => {
      nav("/confirmation");
    }, 1000);
  };

  return (
    <>
      <div
        className="relative w-auto h-[443px] rounded-xl overflow-hidden shadow-lg cursor-pointer transition-transform"
        style={{
          backgroundImage: `url(${limousine.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={openModal}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Rating badge */}
        <div className="absolute top-3 right-3 bg-white bg-opacity-20 text-white font-bold px-3 py-1 rounded-full shadow-md z-20">
          ⭐ {limousine.rating}
        </div>

        {/* Text content at bottom */}
        <div className="absolute bottom-0 w-full text-white text-right z-10 bg-white bg-opacity-20 p-5">
          <h2 className="text-xl font-bold drop-shadow-md">
            {limousine.title}
          </h2>
          <p className="text-sm opacity-90">{limousine.subTitle}</p>
        </div>

        {/* Glass overlay + eye icon */}
        <div
          className={`absolute inset-0 flex items-center justify-center bg-white bg-opacity-20 backdrop-blur-sm rounded-xl transition-opacity duration-300 ${
            hovered ? "opacity-100" : "opacity-0"
          } z-30`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-white drop-shadow-lg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
        </div>
      </div>

      {/* Modal */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-[rgba(255,255,255,0.1)] backdrop-blur-lg border border-[rgba(255,255,255,0.2)] p-6 shadow-2xl transition-all relative"
                  dir="rtl"
                >
                  {/* Close button */}
                  <button
                    type="button"
                    className="absolute top-4 right-4 text-gray-300 hover:text-gray-100"
                    onClick={closeModal}
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>

                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-bold text-gray-100 mb-4 text-right"
                  >
                    {limousine.title}
                  </Dialog.Title>

                  <div className="space-y-6">
                    {/* Main Image */}
                    <img
                      src={limousine.image}
                      alt={limousine.title}
                      className="w-full h-64 object-cover rounded-lg shadow-md"
                    />

                    {/* Description */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-100 text-right">
                        الوصف
                      </h4>
                      <p className="text-gray-300 mt-2 text-right">
                        {limousine.description}
                      </p>
                    </div>

                    {/* Details Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-reverse space-x-2">
                        <TruckIcon className="h-5 w-5 text-blue-400" />
                        <p className="text-sm text-right text-gray-300">
                          <span className="font-semibold">نوع السيارة:</span>{" "}
                          {limousine.vehicleType}
                        </p>
                      </div>
                      <div className="flex items-center space-x-reverse space-x-2">
                        <CurrencyDollarIcon className="h-5 w-5 text-blue-400" />
                        <p className="text-sm text-right text-gray-300">
                          <span className="font-semibold">السعر للساعة:</span>{" "}
                          {limousine.pricePerHour}
                        </p>
                      </div>
                      <div className="flex items-center space-x-reverse space-x-2">
                        <StarIcon className="h-5 w-5 text-blue-400" />
                        <p className="text-sm text-right text-gray-300">
                          <span className="font-semibold">التقييم:</span>{" "}
                          {limousine.rating} ⭐
                        </p>
                      </div>
                    </div>

                    {/* Amenities */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-100 text-right">
                        المرافق
                      </h4>
                      <div className="flex flex-wrap gap-2 mt-2 justify-end">
                        {limousine.amenities.map((amenity, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-3 py-1 bg-[rgba(255,255,255,0.2)] text-gray-100 text-sm font-medium rounded-full"
                          >
                            {amenity}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Image Slider */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-100 text-right">
                        معرض الصور
                      </h4>
                      <div className="mt-2">
                        <Slider>
                          {limousine.galleryImages.map((img, index) => (
                            <SwiperSlide key={index}>
                              <img
                                src={img}
                                alt={`Gallery ${index}`}
                                className="w-full h-48 object-cover rounded-lg shadow-md"
                              />
                            </SwiperSlide>
                          ))}
                        </Slider>
                      </div>
                    </div>

                    {/* Video */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-100 text-right">
                        فيديو تعريفي
                      </h4>
                      <iframe
                        className="w-full h-64 mt-2 rounded-lg shadow-md"
                        src={limousine.videoUrl}
                        title="Limousine Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>

                    {/* Booking Button */}
                    <div className="flex justify-start">
                      <button
                        type="button"
                        className="inline-flex items-center px-4 py-2 bg-[rgba(255,255,255,0.3)] backdrop-blur-sm text-gray-100 font-medium rounded-[40px] hover:bg-[rgba(255,255,255,0.4)] transition-colors duration-200"
                        onClick={handleBooking}
                      >
                        <CalendarIcon className="h-5 w-5 ml-2" />
                        حجز الآن
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
