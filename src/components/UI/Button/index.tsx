import React from "react";
import style from "./style.module.scss";

type PropsType = {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "yellow" | "white" | "blue";
  decor?: boolean;

  disabled?: boolean;
};

const Button: React.FC<PropsType> = ({
  children,
  className,
  onClick,
  type = "yellow",
  decor = false,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${style["type-" + type]} ${style.button} ${className}`}
      disabled={disabled}
    >
      {children}

      {decor &&
        (type === "yellow" ? (
          <img
            className={style.decor}
            src="/assets/img/UI/graphics-yellow.svg"
            alt="Decor"
          />
        ) : type === "white" ? (
          <img
            className={style.decor}
            src="/assets/img/UI/graphics-white.svg"
            alt="Decor"
          />
        ) : (
          ""
        ))}
    </button>
  );
};

export default Button;
