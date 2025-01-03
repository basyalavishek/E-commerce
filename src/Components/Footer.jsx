import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    {
      id: 1,
      title: "Home",
      to: "/",
    },
    {
      id: 2,
      title: "Shop",
      to: "/shop",
    },
    {
      id: 3,
      title: "About Us ",
      to: "/about",
    },
    {
      id: 4,
      title: "Contact Us",
      to: "/contact",
    },
  ];

  const icons = [
    {
      id: 1,
      icon: FaFacebook,
    },
    {
      id: 2,
      icon: FaInstagram,
    },
    {
      id: 3,
      icon: FaTwitter,
    },
    {
      id: 4,
      icon: FaLinkedin,
    },
  ];
  return (
    <footer className="bg-gray-800 text-white py-8 px-4 md:px-16 lg:px-24 w-fit">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="font-bold pb-4 text-md sm:text-lg md:text-xl">
            e-Shop
          </h2>
          <p className="text-sm sm:text-md md:text-lg">
            Your one-stop shop for all your needs. Shop with us and experience
            the best online shopping experience.
          </p>
        </div>
        <div className=" flex flex-col md:items-center">
          <h2 className="font-bold pb-4 text-md sm:text-lg md:text-xl">
            Quick Links
          </h2>
          <ul className=" space-y-2">
            {quickLinks.map((link) => (
              <li key={link.id} className="text-md hover:underline ">
                <Link to={link.to}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold pb-4 text-md sm:text-lg md:text-xl">
            Follow Us
          </h3>

          <div className="flex space-x-2 md:space-x-4 pb-4">
            {icons.map((icon) => (
              <a href="/" key={icon.id} className="hover:text-gray-400">
                <icon.icon size={18} />
              </a>
            ))}
          </div>

          <form className="flex items-center justify-center">
            <input
              type="email"
              placeholder="your email"
              className="bg-transparent border border-gray-600 p-2 rounded-l-lg w-full"
            />
            <button className="bg-red-600 text-white p-2 rounded-r-lg border border-gray-600">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2024 e-shop All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="" className="hover:underline">
              Privacy Policy
            </a>
            <a href="" className="hover:underline">
              Terms and Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
