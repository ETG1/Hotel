import React from "react";
// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
// import swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
// import required modules
import { EffectFade, Autoplay } from "swiper";
// images
import Img1 from "../assets/img/heroSlider/1.jpg";
import Img2 from "../assets/img/heroSlider/2.jpg";
import Img3 from "../assets/img/heroSlider/3.jpg";
import Img4 from "../assets/img/heroSlider/4.jpg";

const slides = [
  {
    title: "Your Luxury Hotel For Vacation",
    bg: Img1,
    btnText: "Rooms & Suites"
  },
  {
    title: "Your Luxury Hotel For Vacation",
    bg: Img2,
    btnText: "Rooms & Suites"
  },
  {
    title: "Your Luxury Hotel For Vacation",
    bg: Img3,
    btnText: "Rooms & Suites"
  },
  {
    title: "Your Luxury Hotel For Vacation",
    bg: Img4,
    btnText: "Rooms & Suites"
  },
];


const HeroSlider = () => {
  return (
    <Swiper
      className="heroslider h-[600px] lg:h-[710px] "
      modules={[EffectFade, Autoplay]}
      effect="fade"
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
    >
      {slides.map((slide, index) => {
        const { title, bg, btnText } = slide;
        return (
          <SwiperSlide className="h-full relative flex justify-center items-center" key={index}>
            <div className="z-20 text-white text-center">
              <div className="uppercase text-[18px] font-tertiary tracking-[6px] mb-5">
                Just Enjoy and Relax
              </div>
              <h1 className="text-[28px] font-primary uppercase tracking-[2px] max-w-[920px] lg:text-[58px] leading-tight mb-6">
                {title}
              </h1>
              <button className="btn btn-lg btn-primary mx-auto rounded-xl">
                {btnText}
              </button>
            </div>
            <div className="absolute top-0 w-full h-full">
              <img
                className="object-cover w-full h-full"
                src={bg}
                alt=""
              />
            </div>
            {/* overlay */}
            <div className="absolute w-full h-full bg-black/60">

            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HeroSlider;
