import { MoveLeft, MoveRight } from "lucide-react";
import { useRef } from "react";
import {motion } from "framer-motion"

export default function LatestWedding() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const weddingHalls = [
    {
      id: 1,
      title: "Intercontinental Hall 1",
      image:
        "/lastWedding.png",
      rating: 4,
    },
    {
      id: 2,
      title: "Grand Palace Hall",
      image:
       "/lastWedding.png",
      rating: 5,
    },
    {
      id: 3,
      title: "Royal Garden Hall",
      image:
        "/lastWedding.png",
      rating: 3,
    },
    {
      id: 4,
      title: "Crystal Banquet Hall",
      image:
        "/lastWedding.png",
      rating: 4,
    },
  ];

  const scrollToItem = (offset: number) => {
    if (sliderRef.current) {
      const currentScroll = sliderRef.current.scrollLeft;
      const itemWidth = sliderRef.current.offsetWidth * 0.8; // Approximate card width
      sliderRef.current.scrollTo({
        left: currentScroll + offset * itemWidth,
        behavior: "smooth",
      });
    }
  };

  const handleLeft = () => {
    scrollToItem(-1);
  };

  const handleRight = () => {
    scrollToItem(1);
  };

  return (
    <motion.div 
    
    initial={{ opacity: 0 , x: 50}}
    whileInView={{ opacity: 1 , x: 0}}
    exit={{ opacity: 0 , x: -50}}
    transition={{ duration: 0.5 }}


    className="my-8 sm:my-12 md:my-16 px-2 sm:px-4">
      <h1 className="text-center font-bold text-2xl sm:text-3xl md:text-4xl text-black uppercase">
        Latest Wedding Halls
      </h1>
      <div className="flex items-center justify-between my-3 sm:my-4">
        <button
          className="flex items-center gap-x-1 sm:gap-x-2 font-bold text-base sm:text-lg text-orange-500 cursor-pointer hover:text-orange-300"
          onClick={handleLeft}
          aria-label="Previous hall"
        >
          <MoveLeft className="size-5 sm:size-6" />
          Prev
        </button>
        <p className="text-orange-500 text-sm sm:text-md font-light w-3/4 sm:w-1/2 text-center">
          Cupidatat ad in qui est aliqua consectetur incididunt irure. Nostrud
          magna anim officia ad labore.
        </p>
        <button
          className="flex items-center gap-x-1 sm:gap-x-2 font-bold text-base sm:text-lg text-orange-500 cursor-pointer hover:text-orange-300"
          onClick={handleRight}
          aria-label="Next hall"
        >
          Next
          <MoveRight className="size-5 sm:size-6" />
        </button>
      </div>
      <div
        className="flex flex-row overflow-x-auto scrollbar-hidden gap-3 sm:gap-4 px-2 sm:px-4 py-2 whitespace-nowrap"
        ref={sliderRef}
      >
        {weddingHalls.map((hall) => (
          <div
            key={hall.id}
            className="card bg-base-100 shadow rounded-none group w-[160px] sm:w-[200px] md:w-[250px] lg:w-[300px] shrink-0 cursor-pointer"
          >
            <figure>
              <img
                src={hall.image}
                alt={hall.title}
                className="w-full h-[120px] sm:h-[150px] md:h-[180px] lg:h-[270px] object-cover"
              />
            </figure>
            <div className="card-body p-3 sm:p-4">
              <h2 className="card-title text-sm sm:text-base md:text-lg">
                {hall.title}
              </h2>
              <div>
                <div className="rating">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <input
                      key={i}
                      type="radio"
                      name={`rating-${hall.id}`}
                      className="mask mask-star-2 bg-orange-400 size-3 sm:size-4"
                      checked={i + 1 === hall.rating}
                      readOnly
                    />
                  ))}
                </div>
              </div>
              <div className="card-actions w-full flex items-center justify-between">
                <button className="btn btn-ghost text-xs sm:text-sm">
                  View Details
                </button>
                <span className="text-orange-500 group-hover:translate-x-2 transition-all duration-100 cursor-pointer hover:text-orange-300">
                  <MoveRight />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
