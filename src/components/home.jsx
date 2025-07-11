import React from "react";
import Header from "../components/header";
import CreativeAgencySection from "../components/CreativeAgencySection";
import Portfolio from "./portfolio";
import IndustriesCarousel from "./IndustriesCarousel";
import PricingPackages from "./PricingPackages";

import ContactSection from "./contactsection";
import WhyChooseUs from "./WhyChooseUs";
const Home = () => {
  return (
    <div>''
      {/* Hero Section */}
      <div
        className="relative w-full bg-cover bg-center min-h-screen"
        style={{ backgroundImage: "url('/images/image1.jpg')" }}
      >
        {/* Enquire Now Button */}
   <div className="fixed left-5 top-1/2 transform -translate-y-1/2 z-50">
  <button
    className="bg-[#FEB000] text-black px-4 py-3 rounded-r-md rotate-[-90deg] origin-left text-base font-semibold shadow-md"
  >
    Enquire Now
  </button>
</div>

        {/* Header */}
        <Header />

        {/* Hero Content */}
        <div className="flex flex-col items-center justify-center text-white text-center px-4 pt-44 md:pt-52">
          <h2 className="text-5xl font-light mb-4">
            We Make <span className="text-blue-400 font-semibold">Beautiful</span>
          </h2>
          <h1 className="text-8xl font-bold mb-6">Websites</h1>

          <p className="max-w-2xl mb-6 text-base md:text-lg leading-relaxed">
            Try an award winning design studio, specialized in web design and development,
            brand strategy, content marketing and more, to find and engage customers and
            drive revenue across all your channels.
          </p>

          <img
            src="/images/image2.png"
            alt="Awards"
            className="mt-4 h-14 md:h-16"
          />

          <p className="mt-4 text-sm md:text-base">
            our web designs have been honored with numerous awards in leading competitions
          </p>

          <div className="flex items-center mt-6 space-x-4">
            <button className="bg-purple-800 text-white px-6 py-2 rounded-full">
              Start Project
            </button>
            <img
              src="/images/image3.png"
              alt="Call Icon"
              className="h-10 w-10"
            />
          </div>
        </div>

     

        <div className="h-24"></div>
      </div>

    
<CreativeAgencySection />
<Portfolio />

{/* Section Title Above Process Image */}
<div className="text-center py-12 px-4">
  <p className="text-sm text-gray-500 tracking-widest uppercase mb-2">Our Methods</p>
  <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-snug">
    Our Expert Drive Result Driven Approaches{" "}
    <span className="font-bold text-gray-900">for Brand Success</span>
  </h2>
</div>
{/* Fullscreen Image Section */}
<div className="w-full bg-white py-10 px-4 flex justify-center">
  <img
    src="https://inventocube.com/wp-content/uploads/2025/05/image9.png"
    alt="Design Process"
    className="w-full max-w-[1000px] h-auto object-contain"
  />
</div>


   <IndustriesCarousel />
   <PricingPackages />
   <WhyChooseUs />
{/* Fullscreen Image Section */}
<div className="w-full bg-white py-10 px-4 flex justify-center">
  <img
    src="
https://inventocube.com/wp-content/themes/hello-elementor-child/assets/image27.png"
    alt="Design Process"
    className="w-full max-w-[1000px] h-auto object-contain"
  />
</div>
<ContactSection />
    </div>
  );
};

export default Home;
