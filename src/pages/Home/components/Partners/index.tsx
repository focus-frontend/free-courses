import { useState } from "react";
import style from "./style.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import classNames from "classnames";

type Slide = {
  img: string;
  logo: string;
  city: string;
};

const slides: Slide[] = [
  {
    img: "/assets/img/home/partners/slide-1.png",
    logo: "/assets/img/home/partners/slide-1-logo.png",
    city: "Kyiv",
  },
  {
    img: "/assets/img/home/partners/slide-2.png",
    logo: "/assets/img/home/partners/slide-2-logo.png",
    city: "Kharkiv",
  },
  {
    img: "/assets/img/home/partners/slide-3.png",
    logo: "/assets/img/home/partners/slide-3-logo.png",
    city: "Lviv",
  },
];

const Partners = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(1);

  return (
    <div className={style.partners}>
      <div className="container">
        <div className={style.body}>
          <img
            src="/assets/img/home/partners/graphics.svg"
            width={42}
            height={43}
            alt="Decor"
            className={style.decor}
          />

          <h2 className={`h2-bold-responsive ${style.title}`}>Our partners</h2>

          <p className={`p-responsive ${style.text}`}>
            Access special courses and discounts
          </p>

          <Swiper
            onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
            slidesPerView={"auto"}
            initialSlide={1}
            centeredSlides={true}
            className={style.slider}
            breakpoints={{
              320: {
                spaceBetween: 79,
                centeredSlides: false,
              },
              640: {
                spaceBetween: 24,
                centeredSlides: true,
              },
            }}
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.city} className={style.slide}>
                <img
                  src={slide.img}
                  alt="Univer"
                  className={style.slideImg}
                  width={325}
                  height={263}
                />

                <div className={style.slideInfo}>
                  <img
                    src={slide.logo}
                    alt="Logo"
                    className={style.slideLogo}
                    width={"auto"}
                    height={40}
                  />

                  <div className={style.slideTexts}>
                    <h4 className="h4-responsive">University of</h4>
                    <h5 className="h3-bold-responsive">{slide.city}</h5>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className={style.pagination}>
            {slides.map((i, index) => {
              return (
                <div
                  key={i.city}
                  className={classNames(
                    style.paginationMark,
                    currentSlide === index && style.active
                  )}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
