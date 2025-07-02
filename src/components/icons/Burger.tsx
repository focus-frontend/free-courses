import React from "react";

const Burger: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg {...props} width="1em" height="1em" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0H48V48H0V0Z" fill="currentColor" fillOpacity="0.01" />
      <path d="M38.222 12L38.3134 12.0026C39.2528 12.0501 40 12.8268 40 13.778C40 14.7292 39.2528 15.5058 38.3134 15.5533L38.222 15.556H9.77798C8.79615 15.556 8 14.7598 8 13.778C8 12.7962 8.79615 12 9.77798 12H38.222Z" fill="currentColor" />
      <path d="M38.222 22.667L38.3134 22.6696C39.2528 22.7171 40 23.4937 40 24.445C40 25.3962 39.2528 26.1728 38.3134 26.2203L38.222 26.223H9.77798C8.79615 26.223 8 25.4268 8 24.445C8 23.4631 8.79615 22.667 9.77798 22.667H38.222Z" fill="currentColor" />
      <path d="M38.222 33.333L38.3134 33.3356C39.2528 33.3831 40 34.1598 40 35.111C40 36.0622 39.2528 36.8388 38.3134 36.8863L38.222 36.889H9.77798C8.79615 36.889 8 36.0928 8 35.111C8 34.1292 8.79615 33.333 9.77798 33.333H38.222Z" fill="currentColor" />
    </svg>
  );
};

export default Burger;
