import CheckBox from "@/components/UI/Checkbox";
import style from "./style.module.scss";
import usePrograms from "@/stores/programs";

type ItemType = {
  id: string;
  label: string;
  count: number;
  value: string;
};

type FilterSection = {
  title: string;
  items?: ItemType[];
};

const filtersList: FilterSection[] = [
  {
    title: "Degree type",
    items: [
      {
        id: "1",
        label: "Non-Degree Programs",
        value: "non-degree",

        count: 17,
      },
      {
        id: "2",
        label: "Undergraduate Degrees",
        value: "undergraduate",

        count: 2,
      },
      {
        id: "3",
        label: "Graduate Degrees",
        value: "graduate",

        count: 2,
      },
      {
        id: "4",
        label: "Doctoral Degrees",
        value: "doctoral",

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
        value: "english",

        count: 17,
      },
      {
        id: "6",
        label: "Ukrainian",
        value: "ukrainian",

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
        value: "online",

        count: 17,
      },
      {
        id: "8",
        label: "On campus",
        value: "on-campus",

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
        value: "free",

        count: 17,
      },
      {
        id: "10",
        label: "10k - 100k",
        value: "10k-100k",

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
        value: "1-3-hours",

        count: 17,
      },
      {
        id: "12",
        label: "3 to 6 hours",
        value: "3-6-hours",

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

      {filtersList.map((filter) => {
        return <Section key={filter.title} {...filter} />;
      })}
    </div>
  );
};

const Section = ({ title, items = [] }: FilterSection) => {
  const { filters, setFilters } = usePrograms()

  function onChange(checkValue: boolean, value: string) {
    if (checkValue) {
      setFilters([...filters, value])
    } else {
      setFilters(filters.filter(item => item !== value))
    }
  }

  return (
    <div className={style.section}>
      <h6 className="p-body-responsive">{title}</h6>

      <ul className={style.sectionList}>
        {items.map((item) => {
          return (
            <li className={style.sectionItem} key={item.id}>
              <CheckBox onChange={(v) => onChange(v, item.value)} value={filters.includes(item.value)} id={item.id} />
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
