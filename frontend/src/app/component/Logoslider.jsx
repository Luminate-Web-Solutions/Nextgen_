'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';

const logos = Array(50).fill('/Logo.jpg'); // Repeat logos as needed

export default function LogoSlider() {
  return (
    <div className="bg-[#3b240b] py-6 mt-16 overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        loop={true}
        speed={5000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        allowTouchMove={false}
        grabCursor={false}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 20 },     // Small phones
          480: { slidesPerView: 3, spaceBetween: 20 },     // Phones
          768: { slidesPerView: 5, spaceBetween: 25 },     // Tablets
          1024: { slidesPerView: 7, spaceBetween: 30 },    // Desktops
          1280: { slidesPerView: 10, spaceBetween: 30 },   // Large screens
        }}
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index}>
            <img
              src={logo}
              alt={`Logo ${index + 1}`}
              className="h-12 md:h-16 lg:h-20 w-auto mx-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
