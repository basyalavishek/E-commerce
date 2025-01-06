import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

const Checkout = ({ setOrder }) => {
  const [billingToggle, setBillingToggle] = useState(true);
  const [shippingToggle, setShippingToggle] = useState(true);
  const [paymentToggle, setPaymentToggle] = useState(true);
  const [paymentMethod, setpaymentMethod] = useState("cod");
  const [shippingInfo, setShippingInfo] = useState({
    address: " ",
    city: " ",
    zip: " ",
  });

  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const handleOrder = () => {
    const newOrder = {
      products: cart.products,
      orderNumber: "12345",
      shippingInformation: shippingInfo,
      totalPrice: cart.totalPrice,
    };
    setOrder(newOrder);
    navigate("/order-confirmation");
  };
  return (
    <div className="conatainer mx-auto py-8 min-h-96 w-full px-4 md:px-16 lg:px-24 ">
      <h3 className="text-2xl font-semibold mb-4">CHECKOUT</h3>
      <div className="flex flex-col gap-y-8 md:flex-row justify-between space-x-10 mt-8">
        <div className="md:w-2/3">
          {/* Billing */}
          <div className="border p-2 mb-6">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setBillingToggle(!billingToggle)}
            >
              <h3 className="text-lg font-semibold mb-4 ">
                Billing Information
              </h3>
              {billingToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            <div className={`space-y-4  ${billingToggle ? "" : "hidden"}`}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-800 font-semibold"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  className="w-full px-3 py-2 border"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-800 font-semibold"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 border"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-gray-800 font-semibold"
                >
                  Phone
                </label>
                <input
                  type="email"
                  name="phone"
                  placeholder="Enter phone #"
                  className="w-full px-3 py-2 border"
                />
              </div>
            </div>
          </div>

          {/* Shipping */}
          <div className="border p-2 mb-6">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setShippingToggle(!shippingToggle)}
            >
              <h3 className="text-lg font-semibold mb-4 ">
                Shipping Information
              </h3>
              {shippingToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            <div className={`space-y-4  ${shippingToggle ? "" : "hidden"}`}>
              <div>
                <label className="block text-gray-800 font-semibold">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  placeholder="Enter your Address"
                  className="w-full px-3 py-2 border"
                  onChange={(e) =>
                    setShippingInfo({
                      ...shippingInfo,
                      address: e.target.value,
                    })
                  }
                />
              </div>

              <div>
                <label className="block text-gray-800 font-semibold">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  placeholder="Enter your city"
                  className="w-full px-3 py-2 border"
                  onChange={(e) =>
                    setShippingInfo({
                      ...shippingInfo,
                      city: e.target.value,
                    })
                  }
                />
              </div>

              <div>
                <label className="block text-gray-800 font-semibold">
                  Zip Code
                </label>
                <input
                  type="text"
                  name="zip"
                  placeholder="Enter Zip code"
                  className="w-full px-3 py-2 border"
                  onChange={(e) =>
                    setShippingInfo({
                      ...shippingInfo,
                      zip: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          </div>

          {/* Payment */}

          <div className="border p-2 mb-6">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setPaymentToggle(!paymentToggle)}
            >
              <h3 className="text-lg font-semibold mb-4 ">
                Payment Information
              </h3>
              {paymentToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>

            <div className={`space-y-4  ${paymentToggle ? "" : "hidden"}`}>
              <div className="flex item-center mb-2">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "cod"}
                  onChange={() => setpaymentMethod("cod")}
                />
                <label className="block text-gray-800 ml-2 ">
                  Cash on Delivery
                </label>
              </div>

              <div className="flex item-center mb-2">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "dc"}
                  onChange={() => setpaymentMethod("dc")}
                />
                <label className="block text-gray-800 ml-2 ">Debit Card</label>
              </div>

              {paymentMethod === "dc" && (
                <div className="bg-gray-200 p-4 rounded-lg mb-4">
                  <h3 className="text-xl font-semibold mb-4">
                    Debit Card Information
                  </h3>
                  <div className="mb-4">
                    <label
                      htmlFor=""
                      className="block text-gray-700 mb-2 font-semibold"
                    >
                      Card Number
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your card number"
                      className="p-2 w-full border rounded"
                      required
                    />
                  </div>

                  <div className="mb-2">
                    <label
                      htmlFor=""
                      className="block text-gray-700 mb-2 font-semibold"
                    >
                      Card Holder Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your Name"
                      className="p-2 w-full border rounded"
                      required
                    />
                  </div>

                  <div className="flex justify-between mb-4">
                    <div className="w-1/2 mr-2 mt-2">
                      <label
                        htmlFor=""
                        className="block text-gray-700 mb-2 font-semibold"
                      >
                        Expire Date
                      </label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="p-2 w-full border rounded"
                        required
                      />
                    </div>
                    <div className="w-1/2 ml-2 mt-2">
                      <label
                        htmlFor=""
                        className="block text-gray-700 mb-2 font-semibold"
                      >
                        CVV
                      </label>
                      <input
                        type="text"
                        placeholder="Card Verification Value"
                        className="p-2 w-full border rounded"
                        required
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="md:w-1/3  bg-white p-6 rounded-lg shadow-md border">
          <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
          <div className="space-y-4">
            {cart.products.map((product) => (
              <div key={product.id} className="flex justify-between">
                <div className="flex items-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-contain rounded"
                  />
                  <div className="ml-4">
                    <h4 className="text-md font-semibold"> {product.name} </h4>
                    <p className="text-gray-600">
                      ${product.price} X {product.quantity}
                    </p>
                  </div>
                </div>
                <div className="text-gray-800">
                  ${product.price * product.quantity}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 border-t pt-4">
            <div className="flex justify-between">
              <span>Total Price : </span>
              <span className="font-semibold">
                ${cart.totalPrice.toFixed(2)}{" "}
              </span>
            </div>
            <button
              className="w-full bg-red-600 text-white py-2 mt-6 hover:bg-red-800"
              onClick={handleOrder}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
