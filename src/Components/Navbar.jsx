import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  const items = [
    {
      id: 1,
      title: "Home",
      link: "/",
    },
    {
      id: 2,
      title: "Shop",
      link: "/shop",
    },
    {
      id: 3,
      title: "Contact",
      link: "/",
    },
    {
      id: 4,
      title: "About",
      link: "/",
    },
  ];

  return (
    <nav className="bg-whte shadow-lg">
      <div className="container flex justify-between items-center mx-auto py-4 px-4 md:px-16 lg:px-24 ">
        <div className="font-bold text-xl">
          <Link to="/">e-Shop</Link>
        </div>

        <div className="relative flex-1 mx-6">
          <form>
            <input
              type="text"
              placeholder="Search Product"
              className="w-full rounded border px-4 py-2"
            />
            <FaSearch className="absolute top-3 right-3 text-red-500"></FaSearch>
          </form>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/cart">
            <FaCartShopping size={20} />
          </Link>
          <button className="hidden md:block gap-x-4">Login | Register</button>
          <button className="block md:hidden">
            <FaUser />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center py-4 font-bold space-x-10 md:space-x-14">
        {items.map((item) => (
          <Link
            key={item.id}
            to={item.link}
            className="text-xl hover:underline"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
