import React from "react";

const ArrowLeft: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      {...props}
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.0002 21.0002C15.7443 21.0002 15.4882 20.9023 15.2933 20.7073L7.29325 12.7072C6.90225 12.3162 6.90225 11.6842 7.29325 11.2933L15.2933 3.29325C15.6842 2.90225 16.3162 2.90225 16.7072 3.29325C17.0982 3.68425 17.0982 4.31625 16.7072 4.70725L9.41425 12.0002L16.7072 19.2932C17.0982 19.6842 17.0982 20.3162 16.7072 20.7073C16.5122 20.9023 16.2562 21.0002 16.0002 21.0002Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ArrowLeft;
