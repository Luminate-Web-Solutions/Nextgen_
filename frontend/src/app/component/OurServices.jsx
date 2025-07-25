'use client';

import { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const services = [
  {
    id: '1',
    title: 'Edgebander & CNC Woodworking Machinery',
    image: '/s1.jpg',
    alt: 'CNC Machinery',
    fullDescription: '...',
  },
  {
    id: '2',
    title: 'Bakery & Food Processing Equipment',
    image: '/s2.jpg',
    alt: 'Bakery Equipment',
    fullDescription: '...',
  },
  {
    id: '3',
    title: 'Conveyor & Material Handling Systems',
    image: '/s3.jpg',
    alt: 'Conveyor Systems',
    fullDescription: '...',
  },
  {
    id: '4',
    title: 'Injection & Blow Moulding Machinery',
    image: '/s4.jpg',
    alt: 'Moulding Machinery',
    fullDescription: '...',
  },
  {
    id: '5',
    title: 'IML Robot Systems',
    image: '/s5.jpg',
    alt: 'IML Robots',
    fullDescription: '...',
  },
  {
    id: '6',
    title: 'Installation Projects',
    image: '/s6.jpg',
    alt: 'Installation',
    fullDescription: '...',
  },
  {
    id: '7',
    title: 'Preventative & Breakdown Maintenance',
    image: '/s7.jpg',
    alt: 'Maintenance',
    fullDescription: '...',
  },
  {
    id: '8',
    title: 'CMMS Integration & Support',
    image: '/s8.png',
    alt: 'CMMS Support',
    fullDescription: '...',
  },
];

export default function OurServices() {
  const swiperRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (swiperRef.current?.autoplay) {
        swiperRef.current.autoplay.stop();
      }

      if (swiperRef.current) {
        if (swiperRef.current.scrollTimeout) {
          clearTimeout(swiperRef.current.scrollTimeout);
        }

        swiperRef.current.scrollTimeout = setTimeout(() => {
          if (swiperRef.current?.autoplay) {
            swiperRef.current.autoplay.start();
          }
        }, 2000);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="bg-[#fdebd2] py-16 px-4">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#4b2e0c] mb-12">
        Our Services
      </h2>

      <div className="relative px-4 py-10">
        {/* Left Blur */}
        <div className="absolute left-0 top-0 bottom-0 w-50 bg-gradient-to-r from-[#FDEDDC]/90 to-[#FDEDDC]/0 z-10 pointer-events-none" />

        {/* Right Blur */}
        <div className="absolute right-0 top-0 bottom-0 w-50 bg-gradient-to-l from-[#FDEDDC]/90 to-[#FDEDDC]/0 z-10 pointer-events-none" />

        {/* Hover Pause Wrapper */}
        <div
          onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
          onMouseLeave={() => swiperRef.current?.autoplay?.start()}
        >
       <Swiper
  modules={[Navigation, Pagination, Autoplay]}
  spaceBetween={30}
  slidesPerView={1}
  loop={true}
  autoplay={{ delay: 3000 }}
  navigation
  pagination={{ clickable: true }}
  onSwiper={(swiper) => {
    swiperRef.current = swiper;
  }}
  className="custom-swiper-pagination"
  breakpoints={{
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
>
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="relative overflow-hidden rounded-xl shadow-md group">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    width={600}
                    height={400}
                    className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0  bg-opacity-40 text-white flex flex-col justify-end p-4">
                    <h3 className="text-lg font-semibold mb-1">{service.title}</h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <a href="/contact">
          <button className="bg-[#4b2e0c] hover:bg-[#3a210a] text-white px-6 py-2 rounded-lg shadow">
            Book a Service
          </button>
        </a>
      </div>
    </section>
  );
}
