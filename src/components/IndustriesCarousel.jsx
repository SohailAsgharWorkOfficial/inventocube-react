import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Code,
  Heart,
  Users,
  Home,
  GraduationCap,
  DollarSign,
  ShoppingCart,
  Music,
  Car,
  Wheat,
} from 'lucide-react';

const IndustriesCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const industries = [
    { name: 'BlockChain', icon: <Code className="w-12 h-12 text-blue-600" />, bgColor: 'bg-purple-100' },
    { name: 'Health & Medical', icon: <Heart className="w-12 h-12 text-red-500" />, bgColor: 'bg-red-100' },
    { name: 'Social Networking', icon: <Users className="w-12 h-12 text-blue-500" />, bgColor: 'bg-blue-100' },
    { name: 'Real Estate', icon: <Home className="w-12 h-12 text-orange-500" />, bgColor: 'bg-orange-100' },
    { name: 'Education', icon: <GraduationCap className="w-12 h-12 text-blue-600" />, bgColor: 'bg-blue-100' },
    { name: 'Finance', icon: <DollarSign className="w-12 h-12 text-green-500" />, bgColor: 'bg-green-100' },
    { name: 'E-commerce', icon: <ShoppingCart className="w-12 h-12 text-purple-500" />, bgColor: 'bg-purple-100' },
    { name: 'Entertainment', icon: <Music className="w-12 h-12 text-pink-500" />, bgColor: 'bg-pink-100' },
    { name: 'Transportation', icon: <Car className="w-12 h-12 text-blue-600" />, bgColor: 'bg-blue-100' },
    { name: 'Agriculture', icon: <Wheat className="w-12 h-12 text-green-600" />, bgColor: 'bg-green-100' },
  ];

  const itemsPerSlide =
    typeof window !== 'undefined' && window.innerWidth < 640
      ? 1
      : typeof window !== 'undefined' && window.innerWidth < 768
      ? 2
      : typeof window !== 'undefined' && window.innerWidth < 1024
      ? 3
      : typeof window !== 'undefined' && window.innerWidth < 1280
      ? 4
      : 5;

  const totalSlides = Math.ceil(industries.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentItems = () => {
    const startIndex = currentSlide * itemsPerSlide;
    return industries.slice(startIndex, startIndex + itemsPerSlide);
  };

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 overflow-hidden py-16 px-4 md:px-20">

      {/* Toggle Bar & Heading */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
        {/* Toggle */}
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <img
            src="https://inventocube.com/wp-content/uploads/2025/05/image10.png"
            alt="Toggle"
            className="w-12 h-6 object-contain cursor-pointer"
          />
          <span className="text-white text-base md:text-lg font-medium">All Industries</span>
        </div>

        {/* Arrows */}
        <div className="flex space-x-4">
          <button
            onClick={prevSlide}
            className="w-12 h-12 border-2 border-white border-opacity-50 rounded-full flex items-center justify-center text-white hover:bg-white hover:bg-opacity-20 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 border-2 border-white border-opacity-50 rounded-full flex items-center justify-center text-white hover:bg-white hover:bg-opacity-20 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Section Title */}
      <h1 className="text-3xl md:text-5xl font-bold text-white mb-10">
        Industries We Serve
      </h1>

      {/* Cards */}
      <div className="relative w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 transition-all duration-500 ease-in-out">
          {getCurrentItems().map((industry, index) => (
            <div
              key={`${currentSlide}-${index}`}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-xl transform hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer group"
            >
              <div className="text-center">
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-6 md:mb-8 group-hover:text-purple-600 transition-colors duration-300">
                  {industry.name}
                </h3>
                <div
                  className={`w-16 h-16 md:w-20 md:h-20 ${industry.bgColor} rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  {industry.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slide Dots */}
        <div className="flex justify-center mt-6 md:mt-8 space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white scale-125'
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustriesCarousel;
