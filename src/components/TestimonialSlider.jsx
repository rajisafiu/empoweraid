import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules"; // Added FreeMode for smoother high-speed
import "swiper/css";
import "swiper/css/free-mode";
import {AiFillStar} from "react-icons/ai"

/**
 * @param {number} speed - Lower is faster (e.g., 2000 is very fast, 10000 is slow)
 * @param {number} slidesPerView - Number of visible cards
 */
function TestimonialSlider({ data, slidesPerView = 3, speed = 4000 }) {
  return (
    <section id="testimonials">
      <div className="w-full py-10">
      {/* ⚡ Crucial CSS for smooth, non-stop linear movement */}
      <style>{`
        .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>

      <Swiper
        modules={[Autoplay, FreeMode]}
        slidesPerView={slidesPerView}
        spaceBetween={30}
        loop={true}
        freeMode={true} // Helps with "very fast" fluid motion
        allowTouchMove={false} // Prevents users from "breaking" the high-speed loop
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={speed} // Now editable via props
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: slidesPerView },
        }}
        className="w-full"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex flex-row gap-4 h-full min-h-[120px]">
              <img
                src={item.image}
                alt={item.name}
                className="w-14 h-14 rounded-full object-cover flex-shrink-0"
              />
              <div className="flex flex-col justify-center">
                <div className="flex mb-1">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <AiFillStar key={i} className="text-yellow-400 text-xl" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm ">"{item.message}"</p>
                <h4 className="font-bold text-sm mt-1">{item.name}</h4>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </section>
  );
}

export default TestimonialSlider;