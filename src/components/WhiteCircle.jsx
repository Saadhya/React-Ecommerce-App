import React from "react";

const WhiteCircle = ({ children }) => {
  // console.log(children);
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 ">
      {children}
      {/* <svg
        width="8"
        height="14"
        viewBox="0 0 8 14"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.55736 5.2L5.55736 3.88C5.55736 3.308 5.69631 3 6.66894 3H7.87315V0.800003L6.02052 0.800003C3.70473 0.800003 2.77841 2.252 2.77841 3.88V5.2H0.925781L0.925781 7.4H2.77841L2.77841 14H5.55736L5.55736 7.4H7.59526L7.87315 5.2H5.55736Z"
          fill="#27272A"
        ></path>
      </svg> */}
    </div>
  );
};

export default WhiteCircle;
