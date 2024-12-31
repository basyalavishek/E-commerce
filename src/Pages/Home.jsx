import React, { useEffect } from "react";
import { categories } from "../assets/dummy_data";
import { dummy_product_data } from "../assets/dummy_data";
import heroImage from "../assets/Images/hero-page.png";
import Infosection from "../Components/Infosection";
import Category from "../Components/Category";
import { setProducts } from "../Redux/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../Components/ProductCard";
import Shop from "./Shop";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(setProducts(dummy_product_data));
  }, [dispatch]);
  return (
    <div>
    <div className="mt-2 px-4 md:px-16 lg:px-24">
      <div className="container mx-auto py-4 flex flex-col md:flex-row space-x-2  ">
        <div className="w-full md:w-3/12">
          <div className="bg-red-600 text-white text-xs font-bold px-2 py-2.5">
            Shop by categories
          </div>
          <ul className="space-y-4 bg-gray-100 p-3 border">
            {categories.map((category, index) => (
              <li key={index} className="flex items-center text-sm font-medium">
                <div className="w-2 h-2 bg-red-600 rounded-full mr-2 "></div>
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-9/12 h-96 relative ">
          <img src={heroImage} alt="" className="h-full w-full mt-8 md:mt-0" />
          <div className="absolute top-16 left-8">
            <p className="text-gray-600 mb-4">Hello</p>
            <h2 className="text-3xl font-bold mb-2.5">Welcome to E-shop</h2>
            <p className="text-xl font-bold text-gray-800">
              Millions + Product
            </p>
            <button className="bg-red-600 rounded-sm px-8 py-1.5 text-white mt-4 hover:bg-red-700 hover:scale-105 duration-200">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <Infosection />
      <Category />

      <div className="container mx-auto py-12 ">
        <h2 className="font-bold text-xl text-center p-4 md:text-3xl">
          Top Products
        </h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {products.products.slice(0, 5).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
      <Shop/>
      </div>
  );
};

export default Home;
