import {
  Cake,
  Cannabis,
  ChevronLeft,
  ChevronRight,
  Omega,
  PartyPopper,
} from "lucide-react";
import { useRef } from "react";
import { motion } from "framer-motion";

export default function Categories() {
  const categories = [
    { id: 1, title: "Wedding", icon: <Cannabis className="size-10" /> },
    { id: 2, title: "Birthday", icon: <Cake className="size-10" /> },
    { id: 3, title: "Engagements", icon: <Omega className="size-10" /> },
    { id: 4, title: "Conference", icon: <PartyPopper className="size-10" /> },
    { id: 5, title: "Birthday", icon: <Cake className="size-10" /> },
    { id: 6, title: "Wedding", icon: <Cannabis className="size-10" /> },
  ];

  const categoryRef = useRef<HTMLDivElement>(null);

  const handleLeft = () => {
    if (categoryRef.current) {
      categoryRef.current.scrollBy({
        left: -categoryRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const handleRight = () => {
    if (categoryRef.current) {
      categoryRef.current.scrollBy({
        left: categoryRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="my-10 relative">
      <div className="absolute top-0 left-3/9 rotate-90 hidden xl:block">
        <img src="/hero-absolute.png" className="w-10" alt="" />
      </div>
      <div className="absolute -top-10 right-1/9 rotate-90 hidden xl:block">
        <img src="/hero-absolute.png" className="w-10 blur-xs" alt="" />
      </div>
      <div className="absolute top-10 -right-10 rotate-90 hidden xl:block">
        <img src="/hero-absolute.png" className="w-34 blur-xs" alt="" />
      </div>
      <h1 className="text-3xl font-bold tracking-wide text-center mb-6">
        Events Categories
      </h1>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="relative flex items-center justify-center"
      >
        <div
          className="flex flex-row overflow-x-auto scrollbar-hidden scrollbar-hidden space-x-4 px-4 whitespace-nowrap"
          ref={categoryRef}
        >
          {categories.map((item) => (
            <div
              className="flex flex-col min-w-[250px] relative group items-center p-4 rounded-lg transition shrink-0"
              key={item.id}
            >
              <div className="text-orange-600 text-4xl">{item.icon}</div>
              <p className="mt-2 text-lg font-medium text-center">
                {item.title}
              </p>
            </div>
          ))}
        </div>
        <div className="absolute top-1/2 flex items-center justify-between w-full -translate-y-1/2">
          <button
            className="rounded-full text-orange-500 cursor-pointer"
            onClick={handleLeft}
          >
            <ChevronLeft size={40} />
          </button>
          <button
            className="rounded-full text-orange-500 cursor-pointer"
            onClick={handleRight}
          >
            <ChevronRight size={40} />
          </button>
        </div>
      </motion.div>
    </div>
  );
}
