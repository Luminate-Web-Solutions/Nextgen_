import Image from 'next/image';
import Link from 'next/link';
import services from './../../data/service';

export default function ServiceDetail({ params }) {
  const { id } = params;
  const service = services.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="text-center py-20 text-xl font-semibold text-red-600">
        Service not found.
      </div>
    );
  }

  return (
    <div className="bg-[#FDEDDC] min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-[450px]">
        <Image
          src="/servicehome.jpg"
          alt="Service Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/-30 bg-opacity-60 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-extrabold drop-shadow-lg">
            Our Services
          </h1>
        </div>
      </div>

      {/* Card Section */}
      <div className="max-w-6xl mx-auto mt-16 mb-16 px-6 z-10 relative">
        <div className="md:flex rounded-3xl shadow-2xl overflow-hidden bg-[#b87c3e] transition duration-300 hover:shadow-4xl hover:scale-[1.02] transform-gpu">
          
          {/* Image Side */}
          <div className="relative w-full md:w-1/2 h-[280px] md:h-[400px] flex items-center justify-center">
  <div className="relative w-4/5 h-4/5 rounded-3xl overflow-hidden shadow-lg border-4 border-white">
    <Image
      src={service.image}
      alt={service.alt}
      fill
      className="object-cover"
    />
  </div>
</div>

          {/* Text Side */}
          <div className="p-8 md:w-1/2 text-white flex flex-col justify-center space-y-6">
            <h2 className="text-3xl font-extrabold tracking-wide drop-shadow-md">
              {service.title}
            </h2>
            <p className="text-lg leading-relaxed whitespace-pre-line text-shadow-md">
              {service.fullDescription}
            </p>
            <div className="mt-4">
              <Link href="/contact">
    <button className="bg-white text-[#b87c3e] px-6 py-3 cursor-pointer rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg">
      Get in Touch →
    </button>
  </Link>



            </div>
          </div>
        </div>


              <div className='m-10 w-full h-10'>

              </div>      </div>
    </div>
  );
}
