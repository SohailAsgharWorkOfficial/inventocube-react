import React from "react";

const CreativeAgencySection = () => {
  return (
    <div className="w-full bg-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between">
      {/* Left Text Section */}
      <div className="max-w-2xl text-left">
        <h2 className="text-4xl md:text-5xl font-semibold leading-snug text-gray-900 mb-8">
          Creative Web Agency<br />
          Delivery Custom Solutions
        </h2>

        <ul className="space-y-4 text-gray-800 mb-6">
          <li className="flex items-start">
            <span className="text-blue-500 text-lg mr-2 mt-1">✔️</span>
            <span>
              Custom Web Design Solutions{" "}
              <strong className="text-blue-600">To Drive Conversions</strong>
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 text-lg mr-2 mt-1">✔️</span>
            <span>
              Effective Marketing Campaigns{" "}
              <strong className="text-blue-600">To Generate Growth</strong>
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 text-lg mr-2 mt-1">✔️</span>
            <span>
              Tailored Branding Strategies{" "}
              <strong className="text-blue-600">To Drive Engagement</strong>
            </span>
          </li>
        </ul>

        <p className="text-gray-700 text-sm leading-relaxed">
          Inventocube is a web design company & digital marketing agency focused on growing
          brands online. We create effective brand strategies, custom web design, development,
          and digital marketing solutions to generate greater brand engagement and conversions.
          We work closely with our clients to ensure each project meets their brand guidelines
          and business goals and provide technical and marketing expertise to ensure optimal
          results.
        </p>
      </div>

      {/* Right Image Section */}
      <div className="mt-12 md:mt-0 md:ml-12 max-w-xl">
        <img
          src="https://inventocube.com/wp-content/uploads/2025/05/image5.png"
          alt="Web Design Showcase"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default CreativeAgencySection; // ✅ This line is essential!
