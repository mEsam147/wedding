import { MoveLeft, MoveRight } from "lucide-react";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const sliderItems = [
    {
      id: 1,
      item: [
        {
          src: "mainHero.jpg",
          alt: "Hero Banner 1",
          title: "we work hard for your happy moment...",
          description:
            "Cupidatat ad in qui est aliqua consectetur incididunt irure. Nostrud magna anim officia ad labore.",
        },
        {
          src: "subHero.jpg",
          alt: "Sub Hero Image 1",
          title: "",
          description: "",
        },
        {
          src: "subHero2.jpg",
          alt: "Sub Hero Image 2",
          title: "",
          description: "",
        },
      ],
    },
    {
      id: 2,
      item: [
        {
          src: "mainHero.jpg",
          alt: "Hero Banner 2",
          title: "celebrate your special occasions with us...",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.",
        },
        {
          src: "subHero.jpg",
          alt: "Sub Hero Image 3",
          title: "",
          description: "",
        },
        {
          src: "subHero2.jpg",
          alt: "Sub Hero Image 4",
          title: "",
          description: "",
        },
      ],
    },
    {
      id: 3,
      item: [
        {
          src: "mainHero.jpg",
          alt: "Hero Banner 3",
          title: "make every moment unforgettable...",
          description:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
        },
        {
          src: "subHero.jpg",
          alt: "Sub Hero Image 5",
          title: "",
          description: "",
        },
        {
          src: "subHero2.jpg",
          alt: "Sub Hero Image 6",
          title: "",
          description: "",
        },
      ],
    },
  ];

  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const scrollToSlide = (index: number) => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.offsetWidth;
      sliderRef.current.scrollTo({
        left: index * slideWidth,
        behavior: "smooth",
      });
      setActiveSlide(index);
    }
  };

  const handleLeft = () => {
    const newIndex =
      activeSlide === 0 ? sliderItems.length - 1 : activeSlide - 1;
    scrollToSlide(newIndex);
  };

  const handleRight = () => {
    const newIndex =
      activeSlide === sliderItems.length - 1 ? 0 : activeSlide + 1;
    scrollToSlide(newIndex);
  };

  return (
    <motion.div>
      <div className="relative mt-16">
        <div className="absolute top-1/2 -right-24 -translate-y-1/2 -translate-x-1/2 -z-10 hidden xl:block">
          <img src="/hero-absolute.png" alt="Decorative" />
        </div>
        <div className="absolute top-1/9 -left-32 -translate-y-1/2 -translate-x-1/2 -z-10 rotate-90 hidden xl:block">
          <img src="/hero-absolute.png" alt="Decorative" />
        </div>
        <div className="absolute -bottom-20 -left-32 -translate-y-1/2 -translate-x-1/2 -z-10 rotate-180 hidden xl:block">
          <img src="/hero-absolute.png" className="blur-xs" alt="Decorative" />
        </div>

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.7 }}
          className="flex flex-row overflow-x-auto scrollbar-hidden space-x-4 px-4 whitespace-nowrap snap-x snap-mandatory"
          ref={sliderRef}
        >
          {sliderItems.map((slide) => (
            <div
              key={slide.id}
              className="flex flex-col md:flex-row gap-4 md:h-[400px] w-full shrink-0 snap-center"
            >
              {/* Main Image */}
              <div className="md:flex-[4] relative">
                <img
                  src={slide.item[0].src}
                  alt={slide.item[0].alt}
                  className="rounded-l-4xl object-cover w-full  md:h-full bg-top relative"
                />
                {slide.item[0].title && slide.item[0].description && (
                  <>
                    <div className="absolute bottom-3 left-7 text-white z-20 md:max-w-1/2 text-center">
                      <h1 className="text-white font-bold text-lg md:text-2xl uppercase">
                        {slide.item[0].title}
                      </h1>
                      <p className="text-md font-light">
                        {slide.item[0].description}
                      </p>
                    </div>
                    <span className="absolute top-0 left-0 w-full h-full bg-black/15 rounded-l-4xl" />
                  </>
                )}
              </div>
              {/* Sub Images */}
              <div className="md:flex-[1] h-[400px]  w-full flex flex-col gap-y-2">
                <img
                  src={slide.item[1].src}
                  alt={slide.item[1].alt}
                  className="h-1/2 w-full object-cover rounded-r-xl"
                />
                <img
                  src={slide.item[2].src}
                  alt={slide.item[2].alt}
                  className="h-1/2 w-full object-cover rounded-r-xl"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Navigation */}
      <div className="flex flex-col md:flex-row gap-y-2.5  items-center justify-between mt-3">
        <div className="flex justify-between w-full md:w-0  items-center gap-x-8 text-lg">
          <button
            className="flex items-center gap-x-3 text-orange-500 cursor-pointer"
            onClick={handleLeft}
          >
            <MoveLeft />
            <p className="text-xl">Prev</p>
          </button>
          <button
            className="flex items-center gap-x-3 text-orange-500 cursor-pointer"
            onClick={handleRight}
          >
            <p className="text-xl">Next</p>
            <MoveRight />
          </button>
        </div>
        <div>
          <div className="flex items-center gap-x-4 md:mr-16">
            {sliderItems.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToSlide(i)}
                className={`rounded-full  transition-all cursor-pointer ${
                  activeSlide === i
                    ? "bg-orange-600 border-white size-5 scale-105"
                    : "bg-orange-500/20 size-4"
                }`}
              ></button>
            ))}
          </div>
        </div>
        <div></div>
      </div>
    </motion.div>
  );
}
