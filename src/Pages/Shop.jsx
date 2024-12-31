import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../Components/ProductCard";

const Shop = () => {
  const products = useSelector((state) => state.product);

  return (
    <div className="container mx-auto py-12 px-4 md:px-4 lg:px-24 ">
      <h2 className="font-bold text-xl text-center p-4 md:text-3xl">Shop</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {products.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
