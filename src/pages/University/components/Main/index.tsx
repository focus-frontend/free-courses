import Breadcrumbs, { type ItemType } from "@/components/UI/Breadcrumbs";
import style from "./style.module.scss";
import { Star, Dot, ArrowRightButton } from "@/components/icons";
import { Button } from "@/components/UI";

const pathBradcrumbs: ItemType[] = [
  {
    href: "/",
    label: "Homepage",
  },
  {
    href: "/university",
    label: "Univesity of kyiv",
  },
];

const Main = () => {
  return (
    <div className={style.main}>
      <div className={style.wrapper}>
        <div className="container">
          <div className={style.body}>
            <img
              className={style.img}
              src="/assets/img/university/main/img.png"
              alt="University"
            />

            <div className={style.texts}>
              <Breadcrumbs items={pathBradcrumbs} />

              <div className={style.head}>
                <img
                  className={style.decor}
                  src="/assets/img/university/decor.svg"
                  alt="Decor"
                />

                <h1 className="h4-responsive">
                  University of <br />
                  <span className="h2-bold-responsive">Kyiv</span>
                </h1>
              </div>

              <div className={style.rates}>
                <div className={style.stars}>
                  <Star className={style.star} />

                  <span className="p-body-responsive">4,5</span>
                </div>

                <div className={`p-body-responsive ${style.reviews}`}>
                  (1k reviews)
                </div>
              </div>

              <div className={`p-body-responsive ${style.languages}`}>
                <span>English</span>
                <Dot className={style.dot} />
                <span className={style.dotMob}>&</span>
                <span>Ukrainian</span>
              </div>

              <Button className={style.button} decor={true} type="yellow">
                <span>Ask for information</span>
                <ArrowRightButton className={style.arrow} />
              </Button>

              <div className={style.offer}>
                <span className="p-body-responsive">Offered by</span>
                <img src="/assets/img/university/main/logo.png" alt="" />
              </div>
            </div>

            <img
              className={style.imgMob}
              src="/assets/img/university/main/img-mob.png"
              alt="University"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
