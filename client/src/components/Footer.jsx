import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Linkedin,
  Twitter,
  ArrowUp,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#f8f8f8] border-t border-neutral-200 text-neutral-700 relative">

      {/* TOP */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-4 gap-14">

        {/* CONTACT */}
        <div>
          <h3 className="text-neutral-900 text-xl font-bold mb-2">
            DO YOU HAVE QUESTIONS?
          </h3>
          <h4 className="text-red-600 text-xl font-bold mb-8">
            LET’S TALK US!
          </h4>

          <ul className="space-y-5 text-base leading-relaxed">
            <li className="flex gap-4">
              <MapPin size={18} className="text-red-600 mt-1" />
              <span>5617 Glassford Street New York, NY 10000, USA</span>
            </li>

            <li className="flex gap-4">
              <Phone size={18} className="text-red-600" />
              <a
                href="tel:+0123355668888"
                className="hover:text-neutral-900 transition"
              >
                (+012) 33 5566 8888
              </a>
            </li>

            <li className="flex gap-4">
              <Mail size={18} className="text-red-600" />
              <a
                href="mailto:info@autobike.com"
                className="hover:text-neutral-900 transition"
              >
                info@autobike.com
              </a>
            </li>
          </ul>
        </div>

        {/* ABOUT */}
        <div>
          <h3 className="text-neutral-900 text-lg font-semibold mb-6 tracking-wide">
            ABOUT US
          </h3>
          <ul className="space-y-4 text-base">
            {[
              { label: "About Us", path: "/about" },
              { label: "Our Services", path: "/services" },
              { label: "Our Products", path: "/shop" },
              { label: "Our Team", path: "/team" },
            ].map((item) => (
              <li key={item.label}>
                <Link
                  to={item.path}
                  className="hover:text-neutral-900 transition"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-neutral-900 text-lg font-semibold mb-6 tracking-wide">
            QUICK LINKS
          </h3>
          <ul className="space-y-4 text-base">
            {[
              { label: "Accessories Shop", path: "/shop" },
              { label: "Privacy Policy", path: "/privacy-policy" },
              { label: "Terms & Conditions", path: "/terms-and-conditions" },
              { label: "Refund & Return Policy", path: "/refund-return-policy" },
            ].map((item) => (
              <li key={item.label}>
                <Link
                  to={item.path}
                  className="hover:text-neutral-900 transition"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* SUBSCRIBE */}
        <div>
          <h3 className="text-neutral-900 text-lg font-semibold mb-6 tracking-wide">
            SUBSCRIBE FOR UPDATED
          </h3>

          <div className="flex overflow-hidden rounded-xl border border-neutral-300 bg-white shadow-sm">
            <input
              type="email"
              placeholder="Your Email..."
              className="w-full px-5 py-4 bg-white text-base text-neutral-700 placeholder:text-neutral-400 outline-none"
            />
            <button className="bg-red-600 px-8 text-base font-semibold text-white hover:bg-red-500 transition">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6 text-sm">

          <p>
            © 2026 AutoBike. Design by{" "}
            <span className="text-red-600 font-medium">TemPlaza</span>
          </p>

          <div className="flex items-center gap-6 text-lg">
            <a href="#" className="hover:text-neutral-900 transition">
              <Facebook />
            </a>
            <a href="#" className="hover:text-neutral-900 transition">
              <Linkedin />
            </a>
            <a href="#" className="hover:text-neutral-900 transition">
              <Twitter />
            </a>
          </div>
        </div>
      </div>

      {/* SCROLL TO TOP */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="
          fixed bottom-6 right-6
          bg-red-600
          p-3
          rounded-xl
          text-white
          hover:bg-red-500
          transition
        "
      >
        <ArrowUp size={18} />
      </button>
    </footer>
  );
};

export default Footer;
