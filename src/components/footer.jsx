import React from 'react';

const Footer = () => {
  return (
    <footer
      className="text-white text-sm"
      style={{
        backgroundImage: 'url(/images/footer-back.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-5 gap-8 border-b border-gray-600">
        {/* Logo and Tagline */}
        <div className="col-span-1 flex flex-col gap-4">
          <img src="/images/inventocube-logo.png" alt="Inventocube Logo" className="w-32" />
          <p className="text-gray-300 leading-snug">
            We Are Proud Of <br /> The Expertise And Resources
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="font-semibold mb-2">Company</h4>
          <ul className="space-y-1 text-gray-300">
            <li>About Us</li>
            <li>Portfolio</li>
            <li>Blogs</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Services Links */}
        <div>
          <h4 className="font-semibold mb-2">Services</h4>
          <ul className="space-y-1 text-gray-300">
            <li>App Development</li>
            <li>Motion Graphics</li>
            <li>Content Marketing</li>
            <li>Web Design Services</li>
            <li>Agile Development</li>
          </ul>
        </div>

        {/* About Text */}
        <div>
          <h4 className="font-semibold mb-2">About</h4>
          <p className="text-gray-300 leading-snug">
            Inventocube is a digital product development company that aims to help SME’s and
            businesses to achieve their desired goals in today’s technologically advanced era.
          </p>
        </div>

        {/* Contact & Social */}
        <div className="flex flex-col gap-4">
          {/* Find Us */}
          <div>
            <h4 className="font-semibold mb-2">Find Us</h4>
            <div className="text-gray-300 space-y-2">
              <p className="flex items-start gap-2">
                <img src="/images/us.png" alt="US Flag" className="w-5 h-5" />
                5900 Balcones Dr STE 100, Austin, Texas
              </p>
              <p className="flex items-start gap-2">
                <img src="/images/uk.png" alt="UK Flag" className="w-5 h-5" />
                71-75 Shelton Street, Covent Garden, London, WC2H 9JQ
              </p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-2">Contact</h4>
            <ul className="text-gray-300 space-y-1">
              <li className="flex items-center gap-2">
                <img src="/images/email.png" alt="Email" className="w-4 h-4" />
                info@inventocube.com
              </li>
              <li className="flex items-center gap-2">
                <img src="/images/phone.png" alt="Phone" className="w-4 h-4" />
                +1 775 376 9324
              </li>
              <li className="flex items-center gap-2">
                <img src="/images/phone.png" alt="Phone" className="w-4 h-4" />
                +44 20 82644477
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-2">Follow Us</h4>
            <div className="flex gap-3 items-center">
              <img src="/images/facebook.png" alt="Facebook" className="w-6 h-6 hover:opacity-80 transition" />
              <img src="/images/linkedin.png" alt="LinkedIn" className="w-6 h-6 hover:opacity-80 transition" />
              <img src="/images/instagram.png" alt="Instagram" className="w-6 h-6 hover:opacity-80 transition" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between text-gray-400 text-xs">
        <p>© 2025 INVENTOCUBE All Rights Reserved</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
          <a href="#" className="hover:text-white transition">Terms & Condition</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
