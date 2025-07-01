import React from "react";

const ArrowRight: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
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
        d="M7.99975 21.0002C8.25575 21.0002 8.51175 20.9023 8.70675 20.7073L16.7068 12.7072C17.0978 12.3162 17.0978 11.6842 16.7068 11.2933L8.70675 3.29325C8.31575 2.90225 7.68375 2.90225 7.29275 3.29325C6.90175 3.68425 6.90175 4.31625 7.29275 4.70725L14.5858 12.0002L7.29275 19.2932C6.90175 19.6842 6.90175 20.3162 7.29275 20.7073C7.48775 20.9023 7.74375 21.0002 7.99975 21.0002Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ArrowRight;
