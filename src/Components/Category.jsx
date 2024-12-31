import React from "react";
import man from "../assets/Images/man.png";
import woman from "../assets/Images/woman.png";
import kid from "../assets/Images/kid.png";

const Category = () => {
  const categorySection = [
    {
      title: "Men",
      imageUrl: man,
    },
    {
      title: "Women",
      imageUrl: woman,
    },
    {
      title: "Kid",
      imageUrl: kid,
    },
  ];
  return (
    <div className="container mt-10 mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
      {categorySection.map((category, index) => (
        <div key={index} className="relative h-64">
          <img
            src={category.imageUrl}
            alt=""
            className="w-full h-full object-cover rounded-md cursor-pointer hover:scale-105 duration-200 transform transition-transformf"
          />

          <div className="absolute top-20 left-6">
            <h3 className="font-bold text-xl">{category.title}</h3>
            <p className="text-gray-600 cursor-pointer">view all</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
