import { Search, ShoppingCart, User } from "lucide-react";
import { NavLink } from "react-router-dom";
import Logo from "../../public/assets/logo.png"

const navLinks = [
  { label: "HOME", path: "/" },
  { label: "ABOUT US", path: "/about" },
  // { label: "INVENTORY", path: "/inventory" },
  // { label: "BLOG", path: "/blog" },
  { label: "SHOP", path: "/shop" },
  { label: "PRODUCT", path: "/product" },
  // { label: "PAGES", path: "/pages" },
  { label: "CONTACT", path: "/contact-us" },
];
 
const Header = () => {
  return (
    <header
      className="
        sticky top-0 z-50
        bg-white
        border-b border-neutral-200
        text-neutral-700
      "
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center">
          <img
            src={Logo}
            alt="Onowa"
            className="w-12 h-12 object-contain"
          />
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-[13px] font-semibold tracking-wide">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `
                relative
                transition-colors duration-200
                ${
                  isActive
                    ? "text-black after:w-full"
                    : "text-neutral-500 hover:text-black"
                }
                after:absolute after:left-0 after:-bottom-1
                after:h-[2px]
                after:bg-red-600
                after:transition-all after:duration-300
                after:w-0
              `
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-6 text-neutral-600">
          <Search className="cursor-pointer hover:text-black transition" />

          <div className="relative cursor-pointer">
            <ShoppingCart className="hover:text-black transition" />
            <span className="absolute -top-2 -right-2 bg-red-600 text-xs w-5 h-5 flex items-center justify-center rounded-full text-white">
              0
            </span>
          </div>

          <User className="cursor-pointer hover:text-black transition" />
        </div>
      </div>
    </header>
  );
};


export default Header;