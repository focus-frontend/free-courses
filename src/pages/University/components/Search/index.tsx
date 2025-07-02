import { Button, Tabs } from "@/components/UI";
import style from "./style.module.scss";
import { Search as IconSearch } from "@/components/icons";
import ArrowDown from "@/components/icons/ArrowDown";
import Sidebar from "../Catalog/components/Sidebar";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import usePrograms from "@/stores/programs";

const tabs = [{
  label: 'About',
  value: 'about'
}]

const tagsList: {
  label: string;
  value: string;
}[] = [
    {
      label: "Marketing",
      value: "marketing",
    },
    {
      label: "Computer science",
      value: "computer-science"
    },
    {
      label: "Design",
      value: "design"
    },
    {
      label: "Buisness",
      value: "buisness"
    },
  ];

const Search = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const [selectTab, setSelectTab] = useState('about')
  const { tags, setTags, search, setSearch } = usePrograms()
  // const timeoutSearch = useRef<NodeJS.Timeout | null>(null)

  function searchInput(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch((e.target as HTMLInputElement).value)
  }

  const toggleActiveTag = (value: string) => {
    if (tags.includes(value)) {
      setTags(tags.filter(v => v !== value))
    } else {
      setTags([...tags, value])
    }
  }


  return (
    <div className={style.searchBlock}>


      <Sidebar
        show={showSidebar}
        close={() => setShowSidebar(false)}
        className={style.sidebar}
      />

      <div className="container">
        <div className={style.body}>
          <Tabs className={style.tabs} value={selectTab} onChange={setSelectTab} items={tabs} />


          <img
            className={style.decor}
            src="/assets/img/university/decor.svg"
            alt=""
          />

          <h2 className={`h2-bold-responsive ${style.title}`}>
            Search for a program
          </h2>
          <p className={`h6-responsive ${style.text}`}>
            Choose between multiple domain
          </p>

          <div className={style.search}>
            <input
              className={`p-responsive ${style.searchInput}`}
              placeholder="Search a course"
              type="text"
              value={search}
              onInput={searchInput}
            />

            <Button decor={true} className={style.searchButton}>
              <IconSearch className={style.searchIcon} />
            </Button>
          </div>

          <div className={style.filters}>
            <div className={style.dropdown}>
              <span className="p-bold-responsive">Most popular</span>
              <ArrowDown className={style.dropdownArrow} />
            </div>

            <Button
              type="white"
              className={style.filterButton}
              onClick={() => setShowSidebar(true)}
            >
              <span className={`p-bold ${style.filterCounter}`}>1</span>
              <span className={`p-bold ${style.filterText}`}>Filter</span>
            </Button>
          </div>

          <div className={style.tags}>
            <h3 className={`h4-bold ${style.tagsTitle}`}>Topics</h3>
            <Swiper
              slidesPerView={"auto"}
              freeMode={true}
              className={style.coursesList}
              spaceBetween={8}
              modules={[FreeMode]}
            >
              {tagsList.map((tag) => {
                return (
                  <SwiperSlide key={tag.label}>
                    <button
                      onClick={() => toggleActiveTag(tag.value)}
                      className={`p-body-responsive ${style.tag} ${tags.includes(tag.value) ? style.active : ""
                        }`}
                    >
                      {tag.label}
                    </button>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
