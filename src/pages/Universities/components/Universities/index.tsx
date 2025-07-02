import { useEffect, useState } from "react";
import { Star } from "@/components/icons";
import style from "./style.module.scss";
import { Button } from "@/components/UI";
import { Swiper, SwiperSlide } from "swiper/react";
import useUniversities, { type TypeCard } from "@/stores/universities";

type TagType = {
  value: string;
  label: string;
};

const tagsList: TagType[] = [
  {
    value: "design",
    label: "Design",
  },
  {
    value: "computer-science",
    label: "Computer science",
  },
  {
    value: "buisness",
    label: "Buisness",
  },
  {
    value: "marketing",
    label: "Marketing",
  },
]

const University = () => {
  const { cardsFiltered, fetchCards, setTags, tags } = useUniversities()

  const toggleActiveTag = (value: string) => {
    if (tags.includes(value)) {
      setTags(tags.filter(v => v !== value))
    } else {
      setTags([...tags, value])
    }
  }

  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    fetchCards()
  }, [fetchCards])

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
              {tagsList.map((tag) => (
                <div
                  key={tag.value}
                  className={`${style.tag} ${tags.includes(tag.value) ? style.active : ''}`}
                  onClick={() => toggleActiveTag(tag.value)}
                >
                  {tag.label}
                </div>
              ))}
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
              {cardsFiltered().map((data, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Card {...data} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          ) : (
            <div className={style.grid}>
              {cardsFiltered().map((data, index) => (
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
      <img className={style.cardImg} src={props.image} alt="Img" />
      <img className={style.cardLogo} src={props.logo} alt="Logo" />

      <div className={style.cardInfo}>
        <div className={style.cardInfoMain}>
          <div className={style.cardHead}>
            <h4 className="h5-bold-responsive">{props.name}</h4>
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

          {/* <div className={style.cardPrograms}>
            <p className={`p-responsive ${style.cardProgramsTitle}`}>
              Highlighted programs:
            </p>
            <div className={style.cardProgramsList}>
              {props.programs.map((program) => (
                <span
                  key={program.label}
                  className={`p-responsive ${style.cardProgram} ${program.active ? style.active : ""
                    }`}
                >
                  {program.label}
                </span>
              ))}
            </div>
          </div> */}
        </div>

        <Button type="white" decor={true} className={style.cardButton}>
          View universitie
        </Button>
      </div>
    </div>
  );
};

export default University;
