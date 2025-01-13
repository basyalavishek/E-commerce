import React, { useEffect, useState } from "react";
import { FaCarSide, FaQuestion } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.product.products);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const newProduct = products.find((product) => product.id === parseInt(id));
    setProduct(newProduct);
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container mx-auto py-8 px-4 md:px-16 lg:px-24">
      <div className="flex flex-col md:flex-row gap-16">
        {/* Product Image */}
        <div className="md:w-1/2 flex justify-center items-center">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-96 object-contain shadow-md rounded-md"
          />
        </div>

        {/* Product Information */}
        <div className="md:w-1/2 p-4 shadow-md md:p-16 flex flex-col gap-6 items-center gap-y-2">
          <h2 className="text-4xl font-bold text-gray-800">{product.name}</h2>
          <p className="text-2xl text-red-600 font-semibold">
            ${product.price}
          </p>

          <div className="flex items-center gap-4">
            <label htmlFor="quantity" className="sr-only">
              Quantity
            </label>
            <input
              id="quantity"
              type="number"
              min="1"
              defaultValue="1"
              className="border border-gray-300 p-2 rounded-md w-20"
            />
            <button className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-800">
              Add to Cart
            </button>
          </div>

          <div className="border-t pt-4 flex flex-col gap-y-4 mt-4">
            <p className="flex items-center text-gray-700">
              <FaCarSide className="mr-2 text-xl text-gray-600" />
              Delivery & Return
            </p>
            <p className="flex items-center text-gray-700">
              <FaQuestion className="mr-2 text-xl text-gray-600" />
              Ask a Question
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
