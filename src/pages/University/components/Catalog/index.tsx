import style from "./style.module.scss";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";

const Catalog = () => {
  return (
    <div className={style.catalog}>
      <div className="container">
        <div className={style.body}>
          <Sidebar className={style.sidebar} />
          <Feed />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
