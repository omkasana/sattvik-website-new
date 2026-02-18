"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, Menu, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Our Work", href: "/our-work" },
    {
      name: "Solution",
      href: "#",
      hasDropdown: true,
      dropdownItems: [
        { name: "OOH Advertising", href: "/ooh-advertising" },
        { name: "OOH Innovation", href: "/ooh-innovation" },
        { name: "LED Video Wall Screen", href: "/led-video-wall-screen" },
        { name: "Inshop Branding", href: "/print-branding" },
        { name: "Transit Media", href: "/transit-media" },
        { name: "Creative Desinging", href: "/creative-desinging" },
        { name: "Social Media Marketing", href: "/social-media-marketing" },
        { name: "Digital Marketing", href: "/digital-marketing" },
        { name: "Video Production & Photography", href: "/video-production" },
        { name: "Public Relation", href: "/public-relation" },
        { name: "Events", href: "/events" },
        { name: "Radio/TVC", href: "/radio-tvc" },
        { name: "Movie Promotion", href: "/movie-promotion" },
      ],
    },
    { name: "Clients", href: "/clients" },
    { name: "Blogs", href: "/blogs" },
    { name: "Careers", href: "/careers" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/sattviklogo.png"
                alt="Saatvik Living Logo"
                width={200}
                height={90}
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.hasDropdown ? (
                  <>
                    <button
                      className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
                      onMouseEnter={() => !isMobile && setIsDropdownOpen(true)}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {/* Desktop Dropdown */}
                    <div
                      className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top"
                      onMouseEnter={() => !isMobile && setIsDropdownOpen(true)}
                      onMouseLeave={() => !isMobile && setIsDropdownOpen(false)}
                    >
                      <div className="py-2">
                        {link.dropdownItems?.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block px-4 py-2 text-sm text-grayz-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-150"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-lg p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-transparent z-40 lg:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-2 border-b border-gray-200">
            <Image
              src="/sattviklogo-1.png"
              alt="Saatvik Living Logo"
              width={160}
              height={80}
              className=""
            />
            <button
              onClick={closeMenu}
              className="text-gray-700 hover:text-gray-900 focus:outline-none rounded-lg p-1"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu Items */}
          <div className="flex-1 overflow-y-auto py-4">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.hasDropdown ? (
                  <>
                    <button
                      onClick={toggleDropdown}
                      className="w-full flex items-center justify-between px-6 py-3 text-gray-700 hover:bg-gray-50 transition-colors duration-150"
                    >
                      <span className="font-medium">{link.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {/* Mobile Dropdown Items */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isDropdownOpen ? "max-h-96" : "max-h-0"
                      }`}
                    >
                      <div className="bg-gray-50">
                        {link.dropdownItems?.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={closeMenu}
                            className="block px-8 py-2.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-150"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className="block px-6 py-3 text-gray-700 hover:bg-gray-50 font-medium transition-colors duration-150"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
