import Head from 'next/head';
import { Clock, Wrench, Settings, PackageSearch,  } from 'lucide-react';
import OurServices from './component/OurServices';
import Link from 'next/link';


const services = [
  {
    title: '24/7 Emergency Support',
    icon: <Clock className="w-16 h-16" />,
  },
  {
    title: 'Preventative Maintenance Plans',
    icon: <Settings className="w-16 h-16" />,
  },
  {
    title: 'End-to-End Installations',
    icon: <Wrench className="w-16 h-16" />,
  },
  {
    title: 'Spare Parts Supply',
    icon: <PackageSearch className="w-16 h-16" />,
  },
];
const testimonials = [
  {
    image: '/male.avif', // Place this image in the public folder
    name: 'Anette Black',
    role: 'Director, Producer',
    text: 'Had an excellent call with Austin. He gave me a lot of ideas to test to improve my content. As a res',
  },
  {
    image: '/female.jpg',
    name: 'Anette Black',
    role: 'Director, Producer',
    text: 'Had an excellent call with Austin. He gave me a lot of ideas to test to improve my content. As a res',
  },
];



export default function Home() {
  return (
    <>
      <Head>
        <title>NextGen Dynamix</title>
      </Head>

     

      {/* Hero Section */}
      <section
  className="relative bg-cover bg-center h-[80vh] flex items-center filter brightness-100"
  style={{ backgroundImage: "url('/Hero.jpg')" }}
>

        {/* <div className="absolute inset-0 bg-black bg-opacity-100"></div> */}
        <div className="relative z-10 px-6 max-w-3xl text-white m-10 mb-20">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Mechanical Maintenance <br /> For the Next Gen
          </h1>
          <p className="mb-4 text-lg">
            Reliable | Transparent | Performance–Focused
          </p>
          <p className="mb-6 ">Have any issues? 24/7 emergency services</p>
  <div className="flex gap-4">
  {/* Button 1 – Try Our Services */}
<Link
  href="/contact"
  className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition inline-block"
>
  Try Our Services
</Link>
  {/* Button 2 – Get a Quote */}
<Link
  href="/contact"
  className="bg-[#5B3D1B] text-white px-4 py-2 rounded hover:bg-[#3c2a13] transition inline-block"
>
  Get a Quote
</Link>
  
</div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-[#FFF3E0] py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#5B3D1B] mb-4">About NEXTGEN DYNAMIX</h2>
            <p className="text-gray-700">
              At NextGen Dynamix, we go beyond traditional maintenance.
              We're your partners in navigating machinery repair, industrial
              diagnostics, asset management, and ongoing system performance.
            </p>
          </div>
          <div>
            <img src="/abouth.jpg" alt="Gear" className="rounded shadow-md w-full" />
          </div>
        </div>



       
      </section>
         <section className="bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between py-10 px-4">
        {/* Left: Image */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <img
            src="/about.png" // <-- Replace with your image in public folder
            alt="Machinery Graphic"
          
            className=" object-contain"
            priority
          />
        </div>

        {/* Right: Text and Buttons */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-[#3A1E0B] leading-tight">
            Get <span className="text-[#5B3C1C]">Premium Services</span><br />
            From Us
          </h1>

          <div className="mt-6 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <button className="border border-[#3A1E0B] px-6 py-2 rounded-full text-[#3A1E0B] hover:bg-[#3A1E0B] hover:text-white transition">
              Try Our Services
            </button>
            <button className="bg-[#3A1E0B] text-white px-6 py-2 rounded-full hover:bg-[#5B3C1C] transition">
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </section>
     <section className="bg-[#FDEEDC] py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#3A2000] italic mb-12">
          What We Provide
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
         {services.map((item, index) => (
  <div
    key={index}
    className="bg-[#3A2000] rounded-xl shadow-lg text-white p-6 flex flex-col items-center justify-center h-[300px] transition-transform hover:scale-105 duration-300"
  >
    <div className="w-20 h-20 mb-6 flex items-center justify-center">
      {typeof item.icon === 'string' ? (
        <Image
          src={item.icon}
          alt={item.title}
          width={64}
          height={64}
          className="object-contain"
        />
      ) : (
        item.icon
      )}
    </div>
    <p className="text-center text-lg font-medium">{item.title}</p>
  </div>
))}

        </div>
      </div>
    </section>
     <OurServices />

     {/* Testimonials Section */}



     <section className="bg-[#f5f5f5] py-20">
  <h2 className="text-center text-4xl font-bold text-[#3c2a00] mb-16 relative">
    <span className="inline-block relative z-10">Testimonials</span>
    <span className="absolute bottom-1 left-1/2 w-24 h-1 bg-[#3A1E0B] -translate-x-1/2 rounded-full"></span>
  </h2>

  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
    {testimonials.map((t, i) => (
      <div
        key={i}
        className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-10 relative overflow-hidden min-h-[360px]"
      >
        {/* Quotation Icon */}
        <div className="text-[140px] text-yellow-500 absolute -top-10 left-5 opacity-10 leading-none select-none pointer-events-none">
          &#8220;
        </div>

        {/* Profile Image */}
        <div className="flex justify-center mb-6">
          <img
            src={t.image}
            alt={t.name}
            className="w-24 h-24 rounded-full border-4 border-[#3A1E0B] object-cover shadow-lg"
          />
        </div>

        {/* Testimonial Text */}
        <p className="text-center text-gray-700 text-lg mb-6 leading-relaxed italic">
          “{t.text}”
        </p>

        {/* Name + Role */}
        <div className="text-center">
          <p className="font-semibold text-xl text-black">{t.name}</p>
          <p className="text-sm text-gray-500">{t.role}</p>
        </div>
      </div>
    ))}
  </div>
</section>


  
    </>
  );
}
