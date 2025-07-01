import style from "./style.module.scss";
import React, { useState } from "react";

interface CheckboxProps {
  id?: string;
  initialChecked?: boolean;
  onChange?: (checked: boolean) => void;
}

const CheckBox: React.FC<CheckboxProps> = ({
  id,
  initialChecked = false,
  onChange,
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(initialChecked);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCheckedState = event.target.checked;
    setIsChecked(newCheckedState);
    if (onChange) {
      onChange(newCheckedState);
    }
  };

  return (
    <input
      id={id}
      className={style.checkbox}
      checked={isChecked}
      onChange={handleChange}
      type="checkbox"
      name="checkbox"
    />
  );
};

export default CheckBox;
