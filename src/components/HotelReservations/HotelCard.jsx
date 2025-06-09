import { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { SwiperSlide } from "swiper/react";
import Slider from "../Slider/Slider";
import { MapPinIcon, CurrencyDollarIcon, HomeIcon, StarIcon, XMarkIcon } from "@heroicons/react/24/outline";

export default function HotelCard({ hotel }) {
  const [hovered, setHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <div
        className="relative w-64 h-[443px] rounded-xl overflow-hidden shadow-lg cursor-pointer transition-transform"
        style={{
          backgroundImage: `url(${hotel.image})`,
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
        <div className="absolute top-3 right-3 bg-yellow-400 text-black font-bold px-3 py-1 rounded-full shadow-md z-20">
          ⭐ {hotel.rating}
        </div>

        {/* Text content at bottom */}
        <div className="absolute bottom-0 w-full p-4 text-white text-right z-10">
          <h2 className="text-xl font-bold drop-shadow-md">{hotel.title}</h2>
          <p className="text-sm opacity-90">{hotel.subTitle}</p>
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
                  className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 shadow-2xl transition-all relative"
                  dir="rtl"
                >
                  {/* Close button */}
                  <button
                    type="button"
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                    onClick={closeModal}
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>

                  <Dialog.Title as="h3" className="text-2xl font-bold text-gray-900 mb-4 text-right">
                    {hotel.title}
                  </Dialog.Title>

                  <div className="space-y-6">
                    {/* Main Image */}
                    <img
                      src={hotel.image}
                      alt={hotel.title}
                      className="w-full h-64 object-cover rounded-lg shadow-md"
                    />

                    {/* Description */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 text-right">الوصف</h4>
                      <p className="text-gray-600 mt-2 text-right">{hotel.description}</p>
                    </div>

                    {/* Details Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-reverse space-x-2">
                        <MapPinIcon className="h-5 w-5 text-blue-600" />
                        <p className="text-sm text-right">
                          <span className="font-semibold">الموقع:</span> {hotel.location}
                        </p>
                      </div>
                      <div className="flex items-center space-x-reverse space-x-2">
                        <CurrencyDollarIcon className="h-5 w-5 text-blue-600" />
                        <p className="text-sm text-right">
                          <span className="font-semibold">السعر لليلة:</span> {hotel.pricePerNight}
                        </p>
                      </div>
                      <div className="flex items-center space-x-reverse space-x-2">
                        <HomeIcon className="h-5 w-5 text-blue-600" />
                        <p className="text-sm text-right">
                          <span className="font-semibold">عدد الغرف:</span> {hotel.rooms}
                        </p>
                      </div>
                      <div className="flex items-center space-x-reverse space-x-2">
                        <StarIcon className="h-5 w-5 text-blue-600" />
                        <p className="text-sm text-right">
                          <span className="font-semibold">التقييم:</span> {hotel.rating} ⭐
                        </p>
                      </div>
                    </div>

                    {/* Amenities */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 text-right">المرافق</h4>
                      <div className="flex flex-wrap gap-2 mt-2 justify-end">
                        {hotel.amenities.map((amenity, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
                          >
                            {amenity}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Image Slider */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 text-right">معرض الصور</h4>
                      <div className="mt-2">
                        <Slider>
                          {hotel.galleryImages.map((img, index) => (
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
                      <h4 className="text-lg font-semibold text-gray-800 text-right">فيديو تعريفي</h4>
                      <iframe
                        className="w-full h-64 mt-2 rounded-lg shadow-md"
                        src={hotel.videoUrl}
                        title="Hotel Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
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