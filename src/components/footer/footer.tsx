import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Refund policy", href: "/refund-policy" },
    { name: "Login As Advertiser", href: "/advertiser-login" },
    { name: "Blog", href: "/blogs-2" },
    { name: "About Us", href: "/about-us" },
    { name: "Contact", href: "/contact-us" },
    { name: "Privacy Policy", href: "/privacy-policy" },
  ];

  const popularServices = [
    { name: "Billboard", href: "/billboard" },
    { name: "Digital Billboard", href: "/digital-billboard" },
    { name: "Transit Media", href: "/transit-media" },
    { name: "Airport Branding", href: "/airport-branding" },
    { name: "Lift Branding", href: "/lift-branding" },
    { name: "Mall Media", href: "/mall-media" },
  ];

  const trendingCities = [
    { name: "Delhi", href: "/cities/delhi" },
    { name: "Mumbai", href: "/cities/mumbai" },
    { name: "Bengaluru", href: "/cities/bengaluru" },
    { name: "Chennai", href: "/cities/chennai" },
    { name: "Hyderabad", href: "/cities/hyderabad" },
    { name: "Pune", href: "/cities/pune" },
  ];

  return (
    <footer className="bg-white text-black">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Top Section - Logo & Description */}
        <div className="mb-8 sm:mb-10 lg:mb-12 pb-6 sm:pb-8 lg:pb-10 border-b border-gray-700">
          <Link href="/" className="inline-block mb-4 sm:mb-6">
            <Image
              src="/sattviklogo.png"
              alt="Gohoardings Logo"
              width={180}
              height={54}
              className=" w-auto"
            />
          </Link>
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">
            India's Largest Outdoor Advertising Company
          </h3>
          <p className="text-xs sm:text-sm lg:text-base text-gray-700 hover:text-black transition-colors duration-200 leading-relaxed max-w-3xl">
            Our advertising network spread across 130 cities with more than 1.2
            lakh OOH advertising and DOOH advertising sites offering hassel-free
            branding experience.
          </p>
        </div>

        {/* Links Grid - 2 columns on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {/* Quick Links */}
          <div>
            <h4 className="text-sm sm:text-base lg:text-lg font-bold mb-3 sm:mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-gray-600 hover:text-black transition-colors duration-200 block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Services */}
          <div>
            <h4 className="text-sm sm:text-base lg:text-lg font-bold mb-3 sm:mb-4">
              Popular Services
            </h4>
            <ul className="space-y-2">
              {popularServices.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-xs sm:text-sm text-gray-600 hover:text-black transition-colors duration-200 block"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trending Cities */}
          <div>
            <h4 className="text-sm sm:text-base lg:text-lg font-bold mb-3 sm:mb-4">
              Trending Cities
            </h4>
            <ul className="space-y-2">
              {trendingCities.map((city) => (
                <li key={city.name}>
                  <Link
                    href={city.href}
                    className="text-xs sm:text-sm text-gray-600 hover:text-black transition-colors duration-200 block"
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Reach Us */}
          <div>
            <h4 className="text-sm sm:text-base lg:text-lg font-bold mb-3 sm:mb-4">
              Reach us
            </h4>
            <ul className="space-y-3">
              {/* Phone */}
              <li>
                <a
                  href="tel:+917777871717"
                  className="flex items-start gap-2 text-xs sm:text-sm text-gray-600 hover:text-black transition-colors duration-200 group"
                >
                  <Phone className="w-4 h-4 flex-shrink-0 mt-0.5 group-hover:text-black" />
                  <span>+91 7777871717</span>
                </a>
              </li>

              {/* Email */}
              <li>
                <a
                  href="mailto:info@gohoardings.com"
                  className="flex items-start gap-2 text-xs sm:text-sm text-gray-600 hover:text-black transition-colors duration-200 group"
                >
                  <Mail className="w-4 h-4 flex-shrink-0 mt-0.5 group-hover:text-black" />
                  <span className="break-all">info@sattvikliving.com</span>
                </a>
              </li>

              {/* Address */}
              <li>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-gray-600 hover:text-black">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>E-82, Sector 06, Noida, 201301</span>
                </div>
              </li>
            </ul>

            {/* Social Media Icons */}
            <div className="mt-4 sm:mt-5">
              <div className="flex items-center gap-2 sm:gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center bg-white hover:bg-blue-600 rounded-full transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center bg-white hover:bg-pink-400 rounded-full transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center bg-white  hover:bg-blue-400 rounded-full transition-colors duration-200"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center bg-white hover:bg-blue-400 rounded-full transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="mailto:info@gohoardings.com"
                  className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center bg-white hover:bg-red-200 rounded-full transition-colors duration-200"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Copyright */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-700 hover:text-black transition-colors duration-300 ">
            <p>
              © {new Date().getFullYear()} Gohoardings. All rights reserved.
            </p>
            <div className="flex items-center gap-4 sm:gap-6">
              <Link
                href="/terms-conditions"
                className="hover:text-black transition-colors duration-200"
              >
                Terms
              </Link>
              <Link
                href="/privacy-policy"
                className="hover:text-black transition-colors duration-200"
              >
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
