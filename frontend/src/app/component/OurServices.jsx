'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const services = [
  {
    title: 'Edgebander & CNC Woodworking',
    description:
      'Feature an operator carefully calibrating the trimming unit, emphasizing the technical expertise involved in machine setup and maintenance.',
    image: '/image 4.jpg',
  },
  {
    title: 'Edgebander & CNC Woodworking',
    description:
      'Feature an operator carefully calibrating the trimming unit, emphasizing the technical expertise involved in machine setup and maintenance.',
    image: '/image 3.jpg',
  },
  {
    title: 'Edgebander & CNC Woodworking',
    description:
      'Feature an operator carefully calibrating the trimming unit, emphasizing the technical expertise involved in machine setup and maintenance.',
    image: '/image 5.jpg',
  },
   {
    title: 'Edgebander & CNC Woodworking',
    description:
      'Feature an operator carefully calibrating the trimming unit, emphasizing the technical expertise involved in machine setup and maintenance.',
    image: '/image 4.jpg',
  },
  {
    title: 'Edgebander & CNC Woodworking',
    description:
      'Feature an operator carefully calibrating the trimming unit, emphasizing the technical expertise involved in machine setup and maintenance.',
    image: '/image 3.jpg',
  },
  {
    title: 'Edgebander & CNC Woodworking',
    description:
      'Feature an operator carefully calibrating the trimming unit, emphasizing the technical expertise involved in machine setup and maintenance.',
    image: '/image 5.jpg',
  }, {
    title: 'Edgebander & CNC Woodworking',
    description:
      'Feature an operator carefully calibrating the trimming unit, emphasizing the technical expertise involved in machine setup and maintenance.',
    image: '/image 4.jpg',
  },
  {
    title: 'Edgebander & CNC Woodworking',
    description:
      'Feature an operator carefully calibrating the trimming unit, emphasizing the technical expertise involved in machine setup and maintenance.',
    image: '/image 3.jpg',
  },
  {
    title: 'Edgebander & CNC Woodworking',
    description:
      'Feature an operator carefully calibrating the trimming unit, emphasizing the technical expertise involved in machine setup and maintenance.',
    image: '/image 5.jpg',
  },
  
];
const testimonials = [
  {
    image: '/testimonial1.jpg', // Place this image in the public folder
    name: 'Anette Black',
    role: 'Director, Producer',
    text: 'Had an excellent call with Austin. He gave me a lot of ideas to test to improve my content. As a res',
  },
  {
    image: '/testimonial2.jpg',
    name: 'Anette Black',
    role: 'Director, Producer',
    text: 'Had an excellent call with Austin. He gave me a lot of ideas to test to improve my content. As a res',
  },
];

export default function OurServices() {
  return (
    <section className="bg-[#fdebd2] py-16 px-4">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#4b2e0c] mb-12">Our Services</h2>

      {/* <div className="max-w-8xl mx-auto"> */}
          <div className="relative px-4 py-10">
     {/* Left Blur */}
<div className="absolute left-0 top-0 bottom-0 w-50 bg-gradient-to-r from-white/90 to-white/0 z-10 pointer-events-none" />

{/* Right Blur */}
<div className="absolute right-0 top-0 bottom-0 w-50 bg-gradient-to-l from-white/90 to-white/0 z-10 pointer-events-none" />


        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
          navigation
          pagination={{ clickable: true }}
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
                  alt={service.title}
                  width={600}
                  height={400}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0  bg-opacity-50 text-white flex flex-col justify-end p-4">
                  <h3 className="text-lg font-semibold mb-1">{service.title}</h3>
                  <p className="text-sm leading-snug">{service.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
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
