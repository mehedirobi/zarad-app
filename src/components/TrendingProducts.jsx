import React from "react";

const products = [
  {
    id: 1,
    name: "School Backpack",
    price: 1200,
    rating: 4.5,
    badge: "NEW",
    image:
      "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=500",
  },
  {
    id: 2,
    name: "Ceiling Fan",
    price: 3500,
    rating: 4.8,
    badge: "-15%",
    image:
      "https://images.unsplash.com/photo-1616627456605-4fd8d0f2e4f6?w=500",
  },
  {
    id: 3,
    name: "Atomic Habits",
    price: 450,
    rating: 4.9,
    badge: "BEST",
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500",
  },
  {
    id: 4,
    name: "iPhone 15 Pro",
    price: 145000,
    rating: 4.9,
    badge: "HOT",
    image:
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500",
  },
  {
    id: 5,
    name: "Laptop Bag",
    price: 1800,
    rating: 4.6,
    badge: "NEW",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
  },
  {
    id: 6,
    name: "Wireless Mouse",
    price: 950,
    rating: 4.4,
    badge: "-10%",
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500",
  },
  {
    id: 7,
    name: "Smart Watch",
    price: 2800,
    rating: 4.7,
    badge: "HOT",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
  },
  {
    id: 8,
    name: "Bluetooth Speaker",
    price: 2200,
    rating: 4.5,
    badge: "BEST",
    image:
      "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=500",
  },
];

const TrendingProducts = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">🔥 Trending Products</h2>

        <button className="text-orange-500 font-medium hover:underline">
          View All
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="group bg-white rounded-xl border overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-52 object-cover group-hover:scale-105 transition duration-300"
              />

              <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs px-2 py-1 rounded">
                {product.badge}
              </span>
            </div>

            <div className="p-4">
              <h3 className="font-medium line-clamp-2 min-h-[48px]">
                {product.name}
              </h3>

              <p className="text-orange-500 font-bold text-lg mt-2">
                ৳ {product.price}
              </p>

              <p className="text-sm text-gray-500 mt-1">
                ⭐ {product.rating}
              </p>

              <button className="w-full mt-4 bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingProducts;