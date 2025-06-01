import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#000118] text-gray-300 px-6 py-10">
      <div className="max-w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3 tracking-wide">EventNest</h2>
          <p className="text-sm text-gray-400">
            Discover events near you and make every moment count.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            {["Terms & Conditions", "Privacy Policy", "Support"].map((text, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="relative inline-block text-sm text-gray-400 hover:text-pink-400 transition-all duration-300"
                >
                  <span className="hover-underline">{text}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex gap-5 text-xl">
            <a href="#" className="hover:text-blue-500 hover:scale-110 transition-all duration-300"><FaFacebookF /></a>
            <a href="#" className="hover:text-pink-500 hover:scale-110 transition-all duration-300"><FaInstagram /></a>
            <a href="#" className="hover:text-sky-400 hover:scale-110 transition-all duration-300"><FaTwitter /></a>
            <a href="#" className="hover:text-red-600 hover:scale-110 transition-all duration-300"><FaYoutube /></a>
          </div>
        </div>

      </div>

      {/* Bottom note */}
      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-4">
        © 2025 EventNest. All rights reserved.
      </div>

      {/* Custom hover underline */}
      <style>{`
        .hover-underline::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: #ff3c6d;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }
        .hover-underline:hover::after {
          transform: scaleX(1);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
