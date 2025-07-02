import React from "react";

const Close: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg {...props} width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 5L11 11M5 11L11 5" stroke="currentColor" />
    </svg>

  );
};

export default Close;
