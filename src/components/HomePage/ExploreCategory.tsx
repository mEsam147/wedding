import { motion } from "framer-motion";

export default function ExploreCategory() {
  const cakes = [
    { id: 1, title: "Happy Birthday", img: "/cake.jpg" },
    { id: 2, title: "Chocolate Bliss", img: "/cake2.jpg" },
    { id: 3, title: "Strawberry Swirl", img: "/cake3.jpg" },
    { id: 4, title: "Vanilla Dream", img: "/cake4.jpg" },
    { id: 5, title: "Fruit Fantasy", img: "/cake2.jpg" },
    { id: 6, title: "Caramel Crunch", img: "/cake3.jpg" },
    { id: 7, title: "Berry Delight", img: "/cake4.jpg" },
    { id: 8, title: "Lemon Zing", img: "/cake.jpg" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.7 }}
      id="exploreCategory"
      className="my-10"
    >
      <h1 className="text-center font-bold text-black text-3xl">
        Explore Categories
      </h1>
      <p className="text-center text-orange-400 mb-6">
        Cupidatat ad in qui est aliqua consectetur incididunt irure
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-6">
        {/* Left Side */}
        <div className="flex-[2] flex flex-col gap-4">
          {/* Main Large Image */}
          <div className="relative overflow-hidden rounded-lg shadow-lg group">
            <img
              src="/cake.jpg"
              alt="Cake Category"
              className="w-full h-[400px] object-cover transition-all duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 bg-black/50 text-white font-bold text-lg w-full h-[80px] flex items-center p-4">
              Cakes & Desserts
            </div>
          </div>

          {/* 4 Thumbnails */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {cakes.slice(0, 4).map((item) => (
              <div
                key={item.id}
                className="relative overflow-hidden rounded-md shadow-md group"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[100px] object-cover transition-all duration-300 group-hover:scale-110"
                />
                <div className="absolute bottom-0 bg-black/50 text-white font-bold text-sm w-full h-[32px] flex items-center p-2">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-[1] shadow p-4 rounded-lg bg-gray-100/5">
          <h2 className="text-center font-bold text-lg mb-3">
            More Categories
          </h2>
          <div className="grid grid-cols-2 gap-2">
            {cakes.slice(0, 8).map((item) => (
              <div
                key={item.id}
                className="relative overflow-hidden rounded-md shadow-md group"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[100px] object-cover transition-all duration-300 group-hover:scale-110"
                />
                <div className="absolute bottom-0 bg-black/50 text-white font-bold text-sm w-full h-[32px] flex items-center p-2">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
