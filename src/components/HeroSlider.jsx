import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    id: 1,
    title: "Summer Flash Sell",
    subtitle: "Up to 50% Off",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  },
  {
    id: 2,
    title: "World Cup Jersey Hub",
    subtitle: "New Arrivals",
    image:
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97",
  },
  {
    id: 3,
    title: "Rainy Days Deal",
    subtitle: "Level Up Your Setup",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e",
  },
];

const HeroSlider = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-6">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        className="rounded-2xl overflow-hidden"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-[250px] md:h-[450px]">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/40 flex items-center">
                <div className="px-8 md:px-16 text-white">
                  <h2 className="text-3xl md:text-5xl font-bold mb-3">
                    {slide.title}
                  </h2>

                  <p className="text-lg md:text-2xl mb-6">
                    {slide.subtitle}
                  </p>

                  <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold transition">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;