import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section className="bg-[#011245] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Text Block */}
        <div className="space-y-6">
          <p className="text-xs tracking-wide uppercase text-white">
            Take The Inventocube Road To
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-sky-400 leading-snug">
            Digitizing Your Business <br /> Growth
          </h2>

          <div className="flex items-center gap-4 mt-6">
            <div className="h-0.5 w-6 bg-sky-400"></div>
            <span className="text-sm font-light">Follow Us</span>
            <div className="flex items-center gap-3 text-white">
              <a href="#" className="w-8 h-8 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition">
                <FaInstagram size={16} />
              </a>
              <a href="#" className="w-8 h-8 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition">
                <FaLinkedin size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-white">Start A Conversation With Us</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border-b border-white bg-transparent text-sm placeholder-white focus:outline-none py-2"
            />
            <input
              type="text"
              placeholder="Company Name"
              className="w-full border-b border-white bg-transparent text-sm placeholder-white focus:outline-none py-2"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border-b border-white bg-transparent text-sm placeholder-white focus:outline-none py-2"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full border-b border-white bg-transparent text-sm placeholder-white focus:outline-none py-2"
            />
            <textarea
              placeholder="Your Message"
              className="w-full border-b border-white bg-transparent text-sm placeholder-white focus:outline-none py-2"
              rows="3"
            ></textarea>
            <button
              type="submit"
              className="bg-sky-500 text-white px-6 py-2 text-sm font-semibold rounded-sm hover:bg-sky-600 transition"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
