import { Heart, MenuIcon, SearchIcon, ShoppingBag, X } from "lucide-react";
import Navbar from "./Navbar";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function MidHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const countries = [
    { name: "United Kingdom", code: "EN", language: "English", img: "/en.jpg" },
    { name: "Saudi Arabia", code: "AR", language: "Arabic", img: "/ar.png" },
  ];

  return (
    <div className="flex items-center justify-between">
      <div className="hidden md:block">
        <Navbar className="flex items-center gap-x-6" />
      </div>
      {/* Mobile */}

      <div>
        <button className="btn btn-ghost " onClick={() => setIsOpen(!isOpen)}>
          <MenuIcon className="md:hidden cursor-pointer " />
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: [-40, 0] }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed left-0 top-0 z-30 w-64 h-full bg-white shadow-xl rounded-l-md p-4"
            >
              <Navbar className="flex flex-col justify-start space-y-4 items-center gap-x-6 r mt-10" />
              <button
                className="btn btn-ghost absolute top-2 right-2 text-red-600 btn-sm "
                onClick={() => setIsOpen(false)}
              >
                <X />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="flex items-center gap-x-3">
        <SearchIcon className="size-6 text-gray-600" />
        <div className="relative">
          <select className="select w-full max-w-xs border-none">
            {countries.map((c) => (
              <option key={c.code} className="flex items-center gap-x-2">
                <img src={c.img} alt={c.language} />
                <p className="text-black">{c.code}</p>
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center gap-x-1">
          <button className=" btn btn-ghost btn-sm flex items-center gap-x-2">
            <Heart />
            <p className="bg-orange-500 text-white flex items-center justify-center p-3 rounded-full size-6">
              0
            </p>
          </button>
          <button className=" btn btn-ghost btn-sm flex items-center gap-x-2">
            <ShoppingBag />
            <p className="bg-orange-500 text-white flex items-center justify-center p-3 rounded-full size-6">
              0
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
