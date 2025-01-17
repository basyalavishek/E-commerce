import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./Modal";
import Login from "./Login";
import Register from "./Register";
import { setSearchTerm } from "../Redux/ProductSlice";

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

  const products = useSelector((state) => state.cart.products);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [search, setSearch] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const openSignUp = () => {
    setIsLogin(false);
    setIsModalOpen(true);
  };
  const openLogin = () => {
    setIsLogin(true);
    setIsModalOpen(true);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(search));
    navigate("/filter-data");
  };

  return (
    <nav className="bg-whte shadow-lg">
      <div className="container flex justify-between items-center mx-auto py-4 px-4 md:px-16 lg:px-24 ">
        <div className="font-bold text-xl">
          <Link to="/">e-Shop</Link>
        </div>

        <div className="relative flex-1 mx-6">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search Product"
              className="w-full rounded border px-4 py-2"
              onChange={(e) => setSearch(e.target.value)}
            />
            <FaSearch className="absolute top-3 right-3 text-red-500"></FaSearch>
          </form>
        </div>
        <div className="flex items-center space-x-4 relative">
          <Link to="/cart">
            <FaCartShopping className="text-lg" />
            {products.length > 0 && (
              <span className="absolute top-0 text-xs w-3 left-3 bg-red-600 rounded-full flex justify-center items-center text-white">
                {products.length}
              </span>
            )}
          </Link>
          <button
            className="hidden md:block gap-x-4"
            onClick={() => setIsModalOpen(true)}
          >
            Login | Register
          </button>
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
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        {isLogin ? (
          <Login openSignUp={openSignUp} />
        ) : (
          <Register openLogin={openLogin} />
        )}
      </Modal>
    </nav>
  );
};

export default Navbar;
