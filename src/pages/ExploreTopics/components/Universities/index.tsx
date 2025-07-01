import { useEffect, useState } from "react";
import { Star } from "@/components/icons";
import style from "./style.module.scss";
import { Button } from "@/components/UI";
import { Swiper, SwiperSlide } from "swiper/react";

type TagType = {
  label: string;
  active: boolean;
};

const tags: TagType[] = [
  {
    label: "Design",
    active: false,
  },
  {
    label: "Computer science",
    active: true,
  },
  {
    label: "Buisness",
    active: false,
  },
  {
    label: "Marketing",
    active: false,
  },
];

type TypeCard = {
  img: string;
  logo: string;
  title: string;
  rate: string;
  reviews: string;
  country: string;
  price: string;
  programs: {
    label: string;
    active: boolean;
  }[];
};

const cards: TypeCard[] = [
  {
    img: "/assets/img/explore-topics/universities/img-1.png",
    logo: "/assets/img/explore-topics/universities/logo.png",
    title: "Kyiv University",
    rate: "4,5",
    reviews: "1k",
    country: "Ukrain",
    price: "10k -80K",
    programs: [
      {
        label: "Design",
        active: false,
      },
      {
        label: "Computer science",
        active: true,
      },
      {
        label: "Buisness",
        active: false,
      },
      {
        label: "Marketing",
        active: false,
      },
    ],
  },
  {
    img: "/assets/img/explore-topics/universities/img-2.png",
    logo: "/assets/img/explore-topics/universities/logo.png",
    title: "Lviv University",
    rate: "4,5",
    reviews: "1k",
    country: "Ukrain",
    price: "10k -80K",
    programs: [
      {
        label: "Design",
        active: false,
      },
      {
        label: "Computer science",
        active: true,
      },
      {
        label: "Marketing",
        active: false,
      },
    ],
  },
  {
    img: "/assets/img/explore-topics/universities/img-3.png",
    logo: "/assets/img/explore-topics/universities/logo.png",
    title: "Kharkiv University",
    rate: "4,5",
    reviews: "1k",
    country: "Ukrain",
    price: "10k -80K",
    programs: [
      {
        label: "Computer science",
        active: true,
      },
      {
        label: "Buisness",
        active: false,
      },
    ],
  },
  {
    img: "/assets/img/explore-topics/universities/img-3.png",
    logo: "/assets/img/explore-topics/universities/logo.png",
    title: "Kharkiv University",
    rate: "4,5",
    reviews: "1k",
    country: "Ukrain",
    price: "10k -80K",
    programs: [
      {
        label: "Computer science",
        active: true,
      },
      {
        label: "Buisness",
        active: false,
      },
    ],
  },
  {
    img: "/assets/img/explore-topics/universities/img-1.png",
    logo: "/assets/img/explore-topics/universities/logo.png",
    title: "Kyiv University",
    rate: "4,5",
    reviews: "1k",
    country: "Ukrain",
    price: "10k -80K",
    programs: [
      {
        label: "Design",
        active: false,
      },
      {
        label: "Computer science",
        active: true,
      },
      {
        label: "Buisness",
        active: false,
      },
      {
        label: "Marketing",
        active: false,
      },
    ],
  },
  {
    img: "/assets/img/explore-topics/universities/img-2.png",
    logo: "/assets/img/explore-topics/universities/logo.png",
    title: "Lviv University",
    rate: "4,5",
    reviews: "1k",
    country: "Ukrain",
    price: "10k -80K",
    programs: [
      {
        label: "Design",
        active: false,
      },
      {
        label: "Computer science",
        active: true,
      },
      {
        label: "Marketing",
        active: false,
      },
    ],
  },
];

const University = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className={style.universities}>
      <div className="container">
        <div className={style.body}>
          <div className={style.head}>
            <div className={style.title}>
              <img
                width={32}
                height={32}
                src="/assets/img/explore-topics/decor.svg"
                alt="Decor"
              />
              <h2 className="h5-bold-responsive">
                Choose your university by program
              </h2>
            </div>

            <button className={`p-bold-responsive ${style.seeAll}`}>
              See all
            </button>
          </div>

          <div className={style.filters}>
            <div className={style.tags}>
              {tags.map((tag) => {
                return (
                  <div className={`${style.tag} ${tag.active && style.active}`}>
                    {tag.label}
                  </div>
                );
              })}
            </div>

            <div className={style.sort}>
              Sort by:
              <span>price</span>
            </div>
          </div>

          {isMobile ? (
            <Swiper
              className={style.slider}
              spaceBetween={16}
              slidesPerView={1.23}
            >
              {cards.map((data, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Card {...data} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          ) : (
            <div className={style.grid}>
              {cards.map((data, index) => (
                <Card key={index} {...data} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Card = ({ ...props }: TypeCard) => {
  return (
    <div className={style.card}>
      <img className={style.cardImg} src={props.img} alt="Img" />
      <img className={style.cardLogo} src={props.logo} alt="Logo" />

      <div className={style.cardInfo}>
        <div className={style.cardInfoMain}>
          <div className={style.cardHead}>
            <h4 className="h5-bold-responsive">{props.title}</h4>
            <div className={style.cardRate}>
              <div className={style.cardStars}>
                <Star className={style.cardStar} />
                <span className="p-reponsive">{props.rate}</span>
              </div>

              <div className={`p-responsive ${style.cardReviews}`}>
                ({props.reviews} reviews)
              </div>
            </div>
          </div>

          <div className={style.cardCountryPrice}>
            <span className="p-bold-responsive">{props.country}</span>
            <span className="p-bold-responsive">{props.price}</span>
          </div>

          <div className={style.cardPrograms}>
            <p className={`p-responsive ${style.cardProgramsTitle}`}>
              Highlighted programs:
            </p>
            <div className={style.cardProgramsList}>
              {props.programs.map((program) => (
                <span
                  className={`p-responsive ${style.cardProgram} ${
                    program.active ? style.active : ""
                  }`}
                >
                  {program.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        <Button type="white" decor={true} className={style.cardButton}>
          View universitie
        </Button>
      </div>
    </div>
  );
};

export default University;
