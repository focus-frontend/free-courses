import React from "react";

const Search: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
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
        d="M11.5 2C16.4706 2 20.5 6.02944 20.5 11C20.5 13.1248 19.7637 15.0776 18.5323 16.6172L22.2071 20.2929C22.5976 20.6834 22.5976 21.3166 22.2071 21.7071C21.8466 22.0676 21.2794 22.0953 20.8871 21.7903L20.7929 21.7071L17.1172 18.0323C15.5776 19.2637 13.6248 20 11.5 20C6.52944 20 2.5 15.9706 2.5 11C2.5 6.02944 6.52944 2 11.5 2ZM11.5 4C7.63401 4 4.5 7.13401 4.5 11C4.5 14.866 7.63401 18 11.5 18C15.366 18 18.5 14.866 18.5 11C18.5 7.13401 15.366 4 11.5 4Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Search;
