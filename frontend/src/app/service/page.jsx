'use client';

import Image from 'next/image';
import Link from 'next/link';
import services from '../data/service';

const OurServices = () => {
  return (
    <section className="bg-[#FDEDDC]">
      {/* Banner */}
      <div className="relative w-full h-[585px]">
        <Image
          src="/servicehome.jpg"
          alt="Our Services Banner"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0  bg-black/10 bg-opacity-50 flex flex-col justify-center items-center text-white text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="max-w-2xl">
            Our service portfolio is engineered to support a wide spectrum of
            production environments, from bakery lines to high-precision
            moulding operations.
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="mt-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4">
        {services.map((service) => (
          <Link
            href={`/service/${service.id}`}
            key={service.id}
            className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lg group block"
          >
            <Image
              src={service.image}
              alt={service.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition duration-300"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white z-10">
              <p className="text-sm text-white/80 mb-1">Service:</p>
              <h3 className="text-2xl font-bold mb-1">{service.title}</h3>
              <p className="text-sm text-white/80">{service.description}</p>
            </div>
            <div className="absolute bottom-6 right-6 z-10">
              <div className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center text-xl group-hover:bg-gray-100 transition">
                →
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-center mt-10">
        <Link href="/contact">
          <button className="bg-[#4b2e0c] hover:bg-[#3a210a] text-white px-8 py-3 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-100 mb-10 font-medium tracking-wide cursor-pointer">
            Book a Service
          </button>
        </Link>
      </div>
    </section>
  );
};

export default OurServices;
