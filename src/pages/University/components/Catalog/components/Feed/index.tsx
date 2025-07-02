import { ArrowLeft, ArrowRight, Star } from "@/components/icons";
import style from "./style.module.scss";
import { Button } from "@/components/UI";
import { Swiper as SwiperSlider, SwiperSlide } from "swiper/react";
import { useEffect, useRef, useState } from "react";
import type Swiper from "swiper";
import usePrograms, { type CardType } from "@/stores/programs";

const Feed = () => {
  const { cardsFiltered, fetchCards } = usePrograms()
  const swiperRef = useRef<Swiper>(null);

  const [atStart, setAtStart] = useState<boolean>(false);
  const [atEnd, setAtEnd] = useState<boolean>(false);

  const handleSlideChange = (swiper: Swiper) => {
    setAtStart(swiper.isBeginning);
    setAtEnd(swiper.isEnd);
  };

  useEffect(() => {
    fetchCards()
  }, [fetchCards])

  return (
    <>
      <div className={style.grid}>
        {cardsFiltered().map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>

      <div className={style.sliderBody}>
        <SwiperSlider
          onSlideChange={handleSlideChange}
          spaceBetween={24}
          className={style.slider}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;

            setAtStart(swiper.isBeginning);
            setAtEnd(swiper.isEnd);
          }}
        >
          {cardsFiltered().map((item, index) => (
            <SwiperSlide key={index}>
              <Card {...item} />
            </SwiperSlide>
          ))}
        </SwiperSlider>

        <div className={style.sliderNavigation}>
          <Button
            className={style.slideNav}
            type="yellow"
            disabled={atStart}
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <ArrowLeft />
          </Button>
          <Button
            className={style.slideNav}
            type="yellow"
            disabled={atEnd}
            onClick={() => swiperRef.current?.slideNext()}
          >
            <ArrowRight />
          </Button>
        </div>
      </div>
    </>
  );
};

const Card = ({ img, title, rate, reviews, university, time }: CardType) => {
  return (
    <div className={style.card}>
      <img className={style.cardImg} src={img} alt={title} />

      <div className={style.cardInfo}>
        <div className={style.cardTop}>
          <h6 className="p-bold-responsive">{title}</h6>
          <div className={style.cardRate}>
            <div className={style.cardStars}>
              <Star className={style.cardStar} />
              <span className="p-body-responsive">{rate}</span>
            </div>

            <div className={style.cardReviws}>({reviews} reviews)</div>
          </div>
        </div>

        <div className={style.cardBottom}>
          <div className={style.cardUniversityTime}>
            <span className="p-bold-responsive">{university}</span>
            <span className="p-responsive">{time}</span>
          </div>

          <Button className={style.cardButton} type="white" decor={true}>
            Ask for information
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Feed;
