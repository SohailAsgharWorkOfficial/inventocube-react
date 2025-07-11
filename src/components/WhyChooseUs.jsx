import React from 'react';

const uspData = [
  {
    title: 'Website And Development',
    description:
      'Outsmart and outpace the average websites with custom web development solutions from a dedicated website development agency, Inventocube. Creating stunning websites with reliable, low-maintenance tools and a professional website development company.',
    icon: '/images/image20.png',
    bg: '/images/image19.png',
  },
  {
    title: 'Digital Marketing',
    description:
      'Communicate with your audience effectively with dedicated digital marketing services from Inventocube. Regardless of your selected type of digital marketing strategy, we can help you win customers at first engagement!',
    icon: '/images/image21.png',
    bg: '/images/image18.png',
  },
  {
    title: 'SEO',
    description:
      'Is the traffic to your website low? It’s time to improve your search engine rankings with internet marketing services from Inventocube. With a positive customer-centric SEO comes a positive ROI.',
    icon: '/images/image22.png',
    bg: '/images/image17.png',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-white text-center">
      <div className="mb-2">
        <span className="bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
          USP’s
        </span>
      </div>

      <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-3">
        Why <span className="text-sky-500">Choose</span> Us
      </h2>

      <p className="max-w-3xl text-sm text-gray-700 mx-auto mb-12 px-4">
        Inventocube is a custom web design and business website development company that allows
        businesses to increase their visibility and credibility. We’re accessible eCommerce service
        enabling you to leverage digital marketing.
      </p>

      <div className="flex justify-center items-center gap-6 flex-wrap px-4 max-w-6xl mx-auto">
        {uspData.map((usp, index) => (
          <div
            key={index}
            className="rounded-[2rem] p-5 bg-cover bg-no-repeat bg-center text-left text-white w-[90%] md:w-[300px] min-h-[300px] flex flex-col justify-start"
            style={{ backgroundImage: `url(${usp.bg})` }}
          >
            <img
              src={usp.icon}
              alt={usp.title}
              className={`w-8 h-8 mb-3 ${usp.title === 'Website And Development' ? 'mt-3' : ''}`}
            />
            <h3 className="text-sm font-bold mb-2">{usp.title}</h3>
            <p className="text-xs leading-relaxed">{usp.description}</p>
          </div>
        ))}
      </div>

      {/* Pagination Dots (Static for now) */}
      <div className="flex justify-center mt-8 space-x-2">
        <span className="w-4 h-1 bg-black rounded-full"></span>
        <span className="w-4 h-1 bg-gray-400 rounded-full"></span>
        <span className="w-4 h-1 bg-gray-400 rounded-full"></span>
      </div>
    </section>
  );
};

export default WhyChooseUs;
