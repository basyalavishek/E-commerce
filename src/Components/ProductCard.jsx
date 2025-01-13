import React from "react";
import { FaStar } from "react-icons/fa";
import { addToCart } from "../Redux/CartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToCart(product));
    // alert("product Added to Cart Successfully!");
  };

  return (
    <Link to={`/product/${product.id}`}>
      <div className="container pb-4 border hover:scale-105 duration-200 transition-transform rounded-md shadow relative cursor-pointer">
        <img
          src={product.image}
          alt="Image
      "
          className="w-full h-48 object-contain"
        />
        <h3 className="px-2 text-sm font-bold md:text-xl">{product.name}</h3>
        <p className="px-2 md:xl text-gray-500">${product.price}</p>
        <div className="flex px-2 mt-2">
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <FaStar className="text-gray-300" />
        </div>
        <div
          className=" absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-red-600 group text-white text-sm rounded-full hover:w-32 hover:bg-red-700 transition-all cursor-pointer sm:hover:w-24 "
          onClick={(e) => handleAddToCart(e, product)}
        >
          <span className="group-hover:hidden">+</span>
          <span className="hidden group-hover:block text-center">
            Add to cart
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
