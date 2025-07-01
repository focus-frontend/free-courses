import { Button, Tabs } from "@/components/UI";
import style from "./style.module.scss";
import { Search as IconSearch } from "@/components/icons";
import ArrowDown from "@/components/icons/ArrowDown";
import Sidebar from "../Catalog/components/Sidebar";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

const tabs = [{
  label: 'About',
  value: 'about'
}]

const courses: {
  label: string;
  active: boolean;
}[] = [
    {
      label: "Marketing",
      active: false,
    },
    {
      label: "Computer science",
      active: true,
    },
    {
      label: "Design",
      active: false,
    },
    {
      label: "Buisness",
      active: false,
    },
  ];

const Search = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const [selectTab, setSelectTab] = useState('about')

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

          <div className={style.courses}>
            <h3 className={`h4-bold ${style.coursesTitle}`}>Topics</h3>

            <Swiper
              slidesPerView={"auto"}
              freeMode={true}
              className={style.coursesList}
              spaceBetween={8}
              modules={[FreeMode]}
            >
              {courses.map((course) => {
                return (
                  <SwiperSlide key={course.label}>
                    <button
                      className={`p-body-responsive ${style.course} ${course.active ? style.active : ""
                        }`}
                    >
                      {course.label}
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
