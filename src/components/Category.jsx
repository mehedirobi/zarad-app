import React from "react";
import { Link } from "react-router-dom";

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
  {
    id: 1,
    name: "Smartphones",
    path: "/category/smartphones",
    icon: <FaMobileAlt size={30} />,
  },
  {
    id: 2,
    name: "Laptops",
    path: "/category/laptops",
    icon: <FaLaptop size={30} />,
  },
  {
    id: 3,
    name: "Audio",
    path: "/category/audio",
    icon: <FaHeadphones size={30} />,
  },
  {
    id: 4,
    name: "Watches",
    path: "/category/watches",
    icon: <FaClock size={30} />,
  },
  {
    id: 5,
    name: "Cameras",
    path: "/category/cameras",
    icon: <FaCamera size={30} />,
  },
  {
    id: 6,
    name: "Gaming",
    path: "/category/gaming",
    icon: <FaGamepad size={30} />,
  },
  {
    id: 7,
    name: "Fashion",
    path: "/category/fashion",
    icon: <FaTshirt size={30} />,
  },
  {
    id: 8,
    name: "Bags",
    path: "/category/bags",
    icon: <FaShoppingBag size={30} />,
  },
  {
    id: 9,
    name: "Computers",
    path: "/category/computers",
    icon: <MdComputer size={30} />,
  },
  {
    id: 10,
    name: "Home",
    path: "/category/home",
    icon: <MdHome size={30} />,
  },
  {
    id: 11,
    name: "Sports",
    path: "/category/sports",
    icon: <MdOutlineSportsSoccer size={30} />,
  },
  {
    id: 12,
    name: "Books",
    path: "/category/books",
    icon: <MdMenuBook size={30} />,
  },
];

const Category = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {categories.map((category) => (
          <Link
            to={category.path}
            key={category.id}
            className="bg-white border rounded-xl p-6 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <div className="text-orange-500">{category.icon}</div>

            <h3 className="text-sm md:text-base font-medium text-center">
              {category.name}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Category;