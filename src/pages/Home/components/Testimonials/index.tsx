import { useEffect, useState } from "react";
import style from "./style.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import classNames from "classnames";

type CardType = {
  id: number;
  avatar: string;
  name: string;
  role: string;
  text: string;
  campany: string;
};

const cards: CardType[] = [
  {
    id: 1,
    avatar: "/assets/img/home/testimonials/avatar.png",
    name: "Nathan Clark",
    role: "Student",
    text: "“Drewl has done so much work with Headless platforms, and we knew the Drewl team was incredibly well-versed in that space.”",
    campany: "/assets/img/home/testimonials/campany.svg",
  },
  {
    id: 2,
    avatar: "/assets/img/home/testimonials/avatar.png",
    name: "Nathan Clark",
    role: "Student",
    text: "“Drewl has done so much work with Headless platforms, and we knew the Drewl team was incredibly well-versed in that space.”",
    campany: "/assets/img/home/testimonials/campany.svg",
  },
  {
    id: 3,
    avatar: "/assets/img/home/testimonials/avatar.png",
    name: "Nathan Clark",
    role: "Student",
    text: "“Drewl has done so much work with Headless platforms, and we knew the Drewl team was incredibly well-versed in that space.”",
    campany: "/assets/img/home/testimonials/campany.svg",
  },
  {
    id: 4,
    avatar: "/assets/img/home/testimonials/avatar.png",
    name: "Nathan Clark",
    role: "Student",
    text: "“Drewl has done so much work with Headless platforms, and we knew the Drewl team was incredibly well-versed in that space.”",
    campany: "/assets/img/home/testimonials/campany.svg",
  },
];

const Testimonials = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState<number>(1);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className={style.testimonials}>
      <div className="container">
        <div className={style.body}>
          <h2 className="h2-bold-responsive">STUDENT STORIES</h2>

          {isMobile ? (
            <>
              <Swiper
                className={style.slider}
                spaceBetween={24}
                slidesPerView={0.7}
                onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
              >
                {cards.map((card, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <Card data={card} />
                    </SwiperSlide>
                  );
                })}
              </Swiper>

              <div className={style.pagination}>
                {cards.map((card, index) => {
                  return (
                    <div
                      key={card.id}
                      className={classNames(
                        style.paginationMark,
                        currentSlide === index && style.active
                      )}
                    ></div>
                  );
                })}
              </div>
            </>
          ) : (
            <div className={style.grid}>
              {cards.map((card, index) => {
                return <Card key={index} data={card} />;
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Card = ({ data }: { data: CardType }) => {
  return (
    <div className={style.card}>
      <div className={style.user}>
        <img src={data.avatar} alt="avatar" className={style.avatar} />
        <div className={style.userInfo}>
          <p className="p-bold">{data.name}</p>
          <p className={`small ${style.role}`}>{data.role}</p>
        </div>
      </div>

      <div className={style.texts}>
        <p className="p-responsive">{data.text}</p>
        <img src={data.campany} height={13} alt="Campany" />
      </div>

      <img
        className={style.decor}
        src="/assets/img/home/testimonials/decor.svg"
        width={107}
        alt="Decor"
      />
    </div>
  );
};

export default Testimonials;
