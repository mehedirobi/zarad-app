import React from "react";
import {
  FaMobileAlt,
  FaLaptop,
  FaHeadphones,
  FaClock,
  FaCamera,
  FaGamepad,
  FaTshirt,
  FaShoppingBag,
} from "react-icons/fa";

import {
  MdComputer,
  MdHome,
  MdOutlineSportsSoccer,
  MdMenuBook,
} from "react-icons/md";

const categories = [
  { id: 1, name: "Smartphones", icon: <FaMobileAlt size={30} /> },
  { id: 2, name: "Laptops", icon: <FaLaptop size={30} /> },
  { id: 3, name: "Audio", icon: <FaHeadphones size={30} /> },
  { id: 4, name: "Watches", icon: <FaClock size={30} /> },
  { id: 5, name: "Cameras", icon: <FaCamera size={30} /> },
  { id: 6, name: "Gaming", icon: <FaGamepad size={30} /> },
  { id: 7, name: "Fashion", icon: <FaTshirt size={30} /> },
  { id: 8, name: "Bags", icon: <FaShoppingBag size={30} /> },
  { id: 9, name: "Computers", icon: <MdComputer size={30} /> },
  { id: 10, name: "Home", icon: <MdHome size={30} /> },
  { id: 11, name: "Sports", icon: <MdOutlineSportsSoccer size={30} /> },
  { id: 12, name: "Books", icon: <MdMenuBook size={30} /> },
];

const Category = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex items-center justify-between mb-6">
        {/* <h2 className="text-2xl  font-bold">Categories</h2> */}
        {/* <button className="text-orange-500 font-medium hover:underline">
          View All
        </button> */}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-white border rounded-xl p-6 flex flex-col items-center justify-center gap-3 cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <div className="text-orange-500">{category.icon}</div>

            <h3 className="text-sm md:text-base font-medium text-center">
              {category.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;