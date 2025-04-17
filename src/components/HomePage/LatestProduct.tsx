import { Eye, Heart, Save } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
export default function LatestProduct() {
  const [like, setLike] = useState<boolean>(false);
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const handleLikeToggle = () => {
    setLike(!like);
  };

  const allButtons = [
    { id: 1, title: "All" },
    { id: 2, title: "Wedding Dresses" },
    { id: 3, title: "Venues" },
    { id: 4, title: "Catering" },
    { id: 5, title: "Photography" },
    { id: 6, title: "Entertainment" },
    { id: 7, title: "Decorations" },
  ];

  const allFlowers = [
    {
      id: 1,
      title: "Rose Bouquet",
      img: "/flower.jpg",
      price: 1485,
      oldPrice: 1222,
      category: "Decorations",
    },
    {
      id: 2,
      title: "Tulip Collection",
      img: "/flower2.jpg",
      price: 1599,
      oldPrice: 1350,
      category: "Decorations",
    },
    {
      id: 3,
      title: "Lily Arrangement",
      img: "/flower3.jpg",
      price: 1750,
      oldPrice: 1600,
      category: "Decorations",
    },
    {
      id: 4,
      title: "Sunflower Mix",
      img: "/flower.jpg",
      price: 1399,
      oldPrice: 1200,
      category: "Decorations",
    },
    {
      id: 5,
      title: "Orchid Elegance",
      img: "/flower3.jpg",
      price: 2100,
      oldPrice: 1950,
      category: "Decorations",
    },
    {
      id: 6,
      title: "Daisy Delight",
      img: "/flower2.jpg",
      price: 1250,
      oldPrice: 1100,
      category: "Decorations",
    },
  ];

  const filteredFlowers =
    activeFilter === "All"
      ? allFlowers
      : allFlowers.filter((flower) => flower.category === activeFilter);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.7 }}
      className="my-8 sm:my-12 md:my-16 px-2 sm:px-4"
    >
      <h1 className="text-center font-bold text-2xl sm:text-3xl md:text-4xl">
        Latest Products
      </h1>
      <p className="text-sm sm:text-md font-light text-center w-3/4 sm:w-1/2 mx-auto my-2 sm:my-4 text-orange-500">
        Cupidatat ad in qui est aliqua consectetur incididunt irure.
      </p>

      <div className="flex items-center gap-x-2 sm:gap-x-3 mx-auto justify-center my-4 sm:my-6 text-gray-500 flex-wrap">
        {allButtons.map((item) => (
          <motion.button
            layout
            key={item.id}
            onClick={() => setActiveFilter(item.title)}
            className={`btn btn-ghost text-xs sm:text-sm md:text-base px-2 sm:px-3 py-1 rounded-md transition-all ${
              activeFilter === item.title
                ? "text-orange-800"
                : "hover:bg-orange-100"
            }`}
            whileTap={{ scale: 0.9 }}
          >
            {item.title}
          </motion.button>
        ))}
      </div>

      {filteredFlowers.length === 0 && (
        <div className="flex items-center justify-center text-center w-full my-10">
          No products found in this category.
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        {filteredFlowers.map((item) => (
          <div
            key={item.id}
            className="border border-gray-800 h-[500px] rounded-xs relative group overflow-hidden"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-[400px] object-cover rounded-xs"
            />
            <div className="absolute top-4 right-4 flex-col gap-y-2 hidden group-hover:flex">
              <span className="badge badge-success px-2 sm:px-3 rounded-none text-white text-xs sm:text-sm">
                Sale
              </span>
              <span className="badge badge-error rounded-none text-white text-xs sm:text-sm">
                15%
              </span>
            </div>
            <div className="absolute top-0 right-0 w-full h-full bg-white/50 hidden group-hover:block">
              <div className="flex items-center gap-y-4 sm:gap-y-6 flex-col justify-center h-full">
                <Eye className="size-6 sm:size-7 rounded-sm cursor-pointer" />
                <Save className="size-6 sm:size-7 bg-error text-white p-1 rounded-sm cursor-pointer" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 bg-white/50 w-full h-1/4 sm:h-1/5 p-2 sm:p-3  transition-all duration-200">
              <div className="flex items-center justify-between">
                <p className="text-sm sm:text-base md:text-lg font-bold text-gray-600">
                  {item.title}
                </p>
                <button
                  className="btn btn-ghost p-1 sm:p-2"
                  onClick={handleLikeToggle}
                >
                  <Heart
                    fill={like ? "red" : "white"}
                    className="size-5 sm:size-6"
                  />
                </button>
              </div>
              <div className="flex items-center gap-x-2">
                <p className="font-bold text-sm sm:text-base">
                  {item.price} AED
                </p>
                <p className="line-through text-xs sm:text-sm">
                  {item.oldPrice} AED
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
