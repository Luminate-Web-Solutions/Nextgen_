"use client";
import Head from "next/head";
import { Database, Blend, ShieldCheck, HandCoins } from "lucide-react";
import LogoSlider from "../component/Logoslider";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | NextGen Dynamix</title>
      </Head>

      {/* Hero Section */}
     <section
  className="relative h-[350px] md:h-[500px] bg-cover bg-center flex items-center justify-end"
  style={{ backgroundImage: "url('/gears.jpg')" }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50 bg-opacity-50" />

  {/* Content */}
  <div className="relative text-right text-white px-4 sm:px-6 max-w-2xl z-10 ml-auto">
    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
      About Us
    </h1>
    <p className="mt-4 text-lg md:text-xl font-medium leading-relaxed text-white/90">
      We pride ourselves on industry-specific <br />
       solutions, transparency, and results- <br />
     driven service models.
    </p>
  </div>
</section>


      {/* Company Intro */}
      <section className="bg-[#fef4e9] py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/image 8.jpg"
              alt="Worker"
              className="rounded-xl object-cover shadow-md w-full max-w-md"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#432701]">
              About <span className="font-black italic">NextGen Dynamix</span>
            </h2>
            <p className="text-gray-800 text-base sm:text-lg mb-6 leading-7">
              At NextGen Dynamix, we specialize in precision mechanical
              maintenance and support services tailored for critical production
              environments. With decades of collective experience, our team
              ensures operational continuity and asset longevity for your
              machinery.
            </p>
            <a
              href="/service"
              className="bg-[#432701] text-white py-2 px-5 rounded hover:bg-gray-800 transition"
            >
              Book a Service
            </a>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-[#fef4e9] py-16 px-4 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold italic text-[#3b240b] mb-4 border-l-4 border-[#3b240b] pl-3">
              Mission
            </h3>
            <p className="text-gray-700 text-base sm:text-lg leading-7">
              To be the leading partner for smart, sustainable, and
              future-ready maintenance services across the industrial landscape —
              enabling our clients to thrive through technology, transparency,
              and total equipment care.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold italic text-[#3b240b] mb-4 border-l-4 border-[#3b240b] pl-3">
              Vision
            </h3>
            <p className="text-gray-700 text-base sm:text-lg leading-7">
              Our mission is to empower industries with reliable,
              precision-driven mechanical maintenance solutions that maximize
              uptime, extend equipment life, and ensure operational excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#fef4e9] py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#3b240b] mb-6">
            Why Choose <br />
            <span className="italic">NextGen Dynamix?</span>
          </h2>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
            {[
              { icon: <HandCoins size={24} />, text: "10+ Years of Sector Expertise" },
              { icon: <Blend size={24} />, text: "Multi-brand Equipment Coverage" },
              { icon: <ShieldCheck size={24} />, text: "Certified Technicians" },
              { icon: <Database size={24} />, text: "Data-backed Maintenance Insights" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-[#6d4c1c] text-white px-6 py-5 rounded-full shadow-lg hover:shadow-xl transition duration-300"
              >
                <div className="bg-white text-[#6d4c1c] p-2 rounded-full">
                  {item.icon}
                </div>
                <p className="font-medium text-base sm:text-lg">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Logo Slider */}
          <div className="mt-16">
            <LogoSlider />
          </div>

          {/* CTA Button */}
          <p className="mt-12 text-base sm:text-lg font-medium text-gray-800">
            Discover how our team can help you build lasting value
          </p>
          <a
            href="/contact"
            className="mt-4 inline-block bg-[#3b240b] text-white py-3 px-8 rounded-full hover:bg-[#291a0e] transition"
          >
            Contact us
          </a>
        </div>
      </section>
    </>
  );
}
