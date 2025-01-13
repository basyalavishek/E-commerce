import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../Components/ProductCard";
import NoProduct from "../assets/Images/not_found.png";

const FilterData = () => {
  const filterproducts = useSelector((state) => state.product.filteredData);
  return (
    <div className="mx-auto py-12 px-4 md:px-4 lg:px-24 ">
      {filterproducts.length > 0 ? (
        <>
          <h2 className="font-bold text-xl text-center p-4 md:text-3xl">
            Shop
          </h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {filterproducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      ) : (
        <div className="flex justify-center">
          <img src={NoProduct} alt="" />
        </div>
      )}
    </div>
  );
};

export default FilterData;
