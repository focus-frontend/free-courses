import CheckBox from "@/components/UI/Checkbox";
import style from "./style.module.scss";

type ItemType = {
  id: string;
  label: string;
  active: boolean;
  count: number;
};

type FilterSection = {
  title: string;
  items?: ItemType[];
};

const filters: FilterSection[] = [
  {
    title: "Degree type",
    items: [
      {
        id: "1",
        label: "Non-Degree Programs",
        active: true,
        count: 17,
      },
      {
        id: "2",
        label: "Undergraduate Degrees",
        active: false,
        count: 2,
      },
      {
        id: "3",
        label: "Graduate Degrees",
        active: false,
        count: 2,
      },
      {
        id: "4",
        label: "Doctoral Degrees",
        active: false,
        count: 2,
      },
    ],
  },
  {
    title: "Language",
    items: [
      {
        id: "5",
        label: "English",
        active: true,
        count: 17,
      },
      {
        id: "6",
        label: "Ukrainian",
        active: false,
        count: 2,
      },
    ],
  },
  {
    title: "Mode",
    items: [
      {
        id: "7",
        label: "Online",
        active: true,
        count: 17,
      },
      {
        id: "8",
        label: "On campus",
        active: false,
        count: 2,
      },
    ],
  },
  {
    title: "Tuition cost",
    items: [
      {
        id: "9",
        label: "Free",
        active: true,
        count: 17,
      },
      {
        id: "10",
        label: "10k - 100k",
        active: false,
        count: 2,
      },
    ],
  },
  {
    title: "Duration",
    items: [
      {
        id: "11",
        label: "1 to 3 hours",
        active: true,
        count: 17,
      },
      {
        id: "12",
        label: "3 to 6 hours",
        active: false,
        count: 41,
      },
    ],
  },
];

const Sidebar = ({
  className,
  show = false,
  close,
}: {
  className?: string;
  show?: boolean;
  close?: () => void;
}) => {
  return (
    <div
      className={`${style.sidebar} ${show ? style.active : ""} ${className}`}
    >
      <div className={style.head}>
        <h5 className="h5-bold-responsive">Filters</h5>

        <button className={style.cancel} onClick={close}>
          Cancel
        </button>
      </div>

      {filters.map((filter) => {
        return <Section key={filter.title} {...filter} />;
      })}
    </div>
  );
};

const Section = ({ title, items = [] }: FilterSection) => {
  return (
    <div className={style.section}>
      <h6 className="p-body-responsive">{title}</h6>

      <ul className={style.sectionList}>
        {items.map((item) => {
          return (
            <li className={style.sectionItem} key={item.id}>
              <CheckBox initialChecked={item.active} id={item.id} />
              <label
                className={`p-responsive ${style.sectionItemLabel}`}
                htmlFor={item.id}
              >
                {item.label}

                <span className={`small ${style.sectionItemCount}`}>
                  {item.count}
                </span>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
