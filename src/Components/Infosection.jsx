import React from "react";
import {
  FaShippingFast,
  FaHeadset,
  FaLock,
  FaTag,
  FaMoneyBillWave,
} from "react-icons/fa";

const Infosection = () => {
  const infos = [
    {
      title: "Free Shipping",
      icon: <FaShippingFast className="text-3xl text-red-600" />,
      description: "Get your orders delivered with no extra cost",
    },
    {
      title: "Support 24/7",
      icon: <FaHeadset className="text-3xl text-red-600" />,
      description: "We are here to assist you anytime",
    },
    {
      title: "100% Money Back",
      icon: <FaMoneyBillWave className="text-3xl text-red-600" />,
      description: "Full refund if you are no satisfied",
    },
    {
      title: "Payment Secure",
      icon: <FaLock className="text-3xl text-red-600" />,
      description: "Your payment information is safe with us",
    },
    {
      title: "Discount",
      icon: <FaTag className="text-3xl text-red-600" />,
      description: "Enjoy the best prices on our product",
    },
  ];

  return (
    <div className="pt-12 container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
      {infos.map((info, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center  border rounded-lg shadow-md cursor-pointer hover:scale-110 duration-200 transition ease-in-out p-2"
        >
          {info.icon}
          <h3 className="mt-4 text-xl font-semibold">{info.title}</h3>
          <p className="mt-2 text-gray-600">{info.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Infosection;
