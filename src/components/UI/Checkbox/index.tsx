import style from "./style.module.scss";
import React from "react";

interface CheckboxProps {
  id?: string;
  value?: boolean;
  onChange?: (checked: boolean) => void;
}

const CheckBox: React.FC<CheckboxProps> = ({
  id,
  value = false,
  onChange,
}) => {
  // const [isChecked, setIsChecked] = useState<boolean>(value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCheckedState = event.target.checked;
    // setIsChecked(newCheckedState);
    if (onChange) {
      onChange(newCheckedState);
    }
  };

  return (
    <input
      id={id}
      className={style.checkbox}
      checked={value}
      onChange={handleChange}
      type="checkbox"
      name="checkbox"
    />
  );
};

export default CheckBox;
