import React, { useState } from 'react';

export default function TestimonialCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Michael Carter",
      location: "New York, USA",
      avatar: "MC",
      text: "InventoCube has been one of the best web development agencies I've worked with. We hired them to design and develop an e-commerce platform for our skincare brand. Their team was incredibly responsive, understood our brand identity perfectly, and delivered the project well before our deadline. The UI/UX design was clean, modern, and user-friendly. Looking forward to future collaborations!"
    },
    {
      id: 2,
      name: "Rachel Thompson",
      location: "Toronto, Canada",
      avatar: "RT",
      text: "From the very first call, the InventoCube team made me feel confident in their skills. I needed a brand identity package and website for my consulting business. The designers were creative, open to feedback, and always on time with deliverables. What stood out the most was their communication—every change I requested was implemented swiftly and with a great attitude."
    },
    {
      id: 3,
      name: "Sophie Reynolds",
      location: "London",
      avatar: "SR",
      text: "We approached InventoCube for a complete rebranding and website overhaul. They delivered exactly what we envisioned. The designers are creative, and their developers are technically skilled. Most important of all, the team was patient with our many revisions and always maintained a positive attitude. We've already seen a spike in web traffic since the relaunch!"
    },
    {
      id: 4,
      name: "James Smith",
      location: "United Kingdom",
      avatar: "JS",
      text: "InventoCube took our project from idea to execution brilliantly. From logo design to full web app development, their team handled it all professionally. Highly recommended!"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / getVisibleCards()));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(testimonials.length / getVisibleCards())) % Math.ceil(testimonials.length / getVisibleCards()));
  };

  const getVisibleCards = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 768) return 2;
      return 1;
    }
    return 3;
  };

  const [visibleCards, setVisibleCards] = useState(getVisibleCards());

  React.useEffect(() => {
    const handleResize = () => {
      setVisibleCards(getVisibleCards());
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(testimonials.length / visibleCards);

  return (
    <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            Reviews
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Hear <span className="text-cyan-400">The Praise</span>
          </h2>
          <p className="text-blue-200 max-w-4xl mx-auto text-lg leading-relaxed">
            InventoCube Is A Custom Web Design And Business Website Development Company That Allows 
            Businesses To Increase Their Visibility And Credibility. We're An Accessible Ecommerce Service 
            Provider Enabling You To Leverage Digital Marketing.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ 
              transform: `translateX(-${currentSlide * (100 / Math.ceil(testimonials.length / visibleCards))}%)`,
              width: `${Math.ceil(testimonials.length / visibleCards) * 100}%`
            }}
          >
            {Array.from({ length: Math.ceil(testimonials.length / visibleCards) }, (_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2">
                  {testimonials
                    .slice(slideIndex * visibleCards, (slideIndex + 1) * visibleCards)
                    .map((testimonial) => (
                      <div key={testimonial.id} className="group">
                        <div className="bg-transparent border-2 border-dashed border-blue-400 rounded-2xl p-8 h-full flex flex-col transition-all duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/20">
                          <div className="flex-grow">
                            <p className="text-blue-100 leading-relaxed mb-8 text-base">
                              {testimonial.text}
                            </p>
                          </div>
                          
                          <div className="flex items-center gap-4 mt-auto">
                            <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                              {testimonial.avatar}
                            </div>
                            <div>
                              <h4 className="text-cyan-400 font-semibold text-lg">
                                {testimonial.name}
                              </h4>
                              <p className="text-blue-300 text-sm">
                                {testimonial.location}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-3 mt-12">
          {Array.from({ length: totalSlides }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-cyan-400 shadow-lg shadow-cyan-400/50' 
                  : 'bg-blue-600 hover:bg-blue-500'
              }`}
            />
          ))}
        </div>

        {/* Navigation Arrows (Hidden on mobile, shown on larger screens) */}
        <div className="hidden md:flex justify-between items-center mt-8">
          <button
            onClick={prevSlide}
            className="w-12 h-12 bg-blue-700 hover:bg-blue-600 rounded-full flex items-center justify-center text-white transition-colors duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="w-12 h-12 bg-blue-700 hover:bg-blue-600 rounded-full flex items-center justify-center text-white transition-colors duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}