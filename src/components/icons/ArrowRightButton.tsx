import React from "react";

const ArrowRightButton: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg {...props} width="1em" height="1em" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.245 8.19875C10.5717 7.93367 11.1016 7.93383 11.4284 8.19875L16.7549 12.5199C17.0817 12.7851 17.0817 13.2149 16.7549 13.4801L11.4284 17.8012C11.1016 18.0662 10.5717 18.0663 10.245 17.8012C9.91826 17.5362 9.91843 17.1063 10.245 16.8411L14.9797 13L10.245 9.15887C9.91843 8.8937 9.91826 8.46383 10.245 8.19875Z" fill="currentColor" />
    </svg>
  );
};

export default ArrowRightButton;
