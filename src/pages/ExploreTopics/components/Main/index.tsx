import { Button } from "@/components/UI";
import style from "./style.module.scss";
import Breadcrumbs, { type ItemType } from "@/components/UI/Breadcrumbs";
import { Search } from "@/components/icons";

const links: ItemType[] = [
  {
    href: "/",
    label: "Homepage",
  },
  {
    href: "/explore-topics",
    label: "Explore topics",
  },
];

const Main = () => {
  return (
    <div className={style.main}>
      <div className="container">
        <div className={style.body}>
          <Breadcrumbs className={style.breadcrumbs} items={links} />

          <img
            className={style.decor}
            src="/assets/img/explore-topics/decor.svg"
            alt=""
          />

          <h1 className={`h4-bold-responsive ${style.title}`}>
            Explore Universities
          </h1>
          <p className={`h6-responsive ${style.text}`}>
            Search 15 000+ no-cost learning opportunities worldwide.
          </p>

          <div className={style.search}>
            <input
              className={`p-responsive ${style.searchInput}`}
              placeholder="Search 15 000+ no‑cost learning..."
              type="text"
            />

            <Button decor={true} className={style.searchButton}>
              <Search className={style.searchIcon} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
