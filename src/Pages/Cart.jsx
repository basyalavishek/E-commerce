import React, { useState } from "react";
import { useSelector } from "react-redux";
import emptycart from "../assets/Images/emptycart.png";
import { FaTrashAlt } from "react-icons/fa";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [address, setAddress] = useState("");
  return (
    <div className="conatainer mx-auto py-8 min-h-96 w-full px-4 md:px-16 lg:px-24 ">
      {cart.products.length > 0 ? (
        <div>
          <h3 className="text-2xl font-semibold mb-4">SHOPPING CART</h3>
          <div className="flex flex-col gap-y-8 md:flex-row justify-between space-x-10 mt-8">
            <div className="md:w-2/3">
              <div>
                {cart.products.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center justify-between p-2 border-b"
                  >
                    <div className="md:flex items-center space-x-6">
                      <img
                        src={product.image}
                        alt=""
                        className="w-16 h-16 object-contain rounded"
                      />
                      <div className="flex-1 ml-4">
                        <h3 className="text-lg font-semibold space-x-4 md:space-x-8">
                          {product.name}
                        </h3>
                      </div>
                    </div>
                    <div className="flex space-x-8 md:space-x-12 items-center">
                      <p>${product.price}</p>
                      <div className="flex items-center justify-center border">
                        <button className="text-xl font-bold px-1.5 border-r">
                          -
                        </button>
                        <p className="text-xl px-2">{product.quantity}</p>
                        <button>+</button>
                      </div>
                      <p>${(product.quantity * product.price).toFixed(2)}</p>
                      <button className="text-red-500 hover:text-red-700">
                        <FaTrashAlt />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/3  bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-md md:text-lg font-semibold mb-5">
                CART TOTAL
              </h3>
              <div className="flex justify-between mb-5 border-b pb-1">
                <span className="text-md md:text-lg ">Total Items: </span>
                <span>{cart.totalQuantity}</span>
              </div>
              <div className="mb-4 border-b pb-2">
                <p>Shipping</p>
                <p>Shipping to: </p>
                <span className="text-md font-bold">{address}</span>
                <button className="text-blue-500 hover:underline mt-1 ml-2">
                  Enter Address
                </button>
              </div>
              <div className="flex justify-between mb-4">
                <span>Total Price: </span>
                <span>{cart.totalPrice.toFixed(2)}</span>
              </div>
              <button className="w-full bg-red-600 text-white py-2 hover:bg-red-800">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center">
          <img src={emptycart} alt="Cart is empty" />
        </div>
      )}
    </div>
  );
};

export default Cart;
