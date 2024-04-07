import { Star, StarHalf, StarIcon, StarOff } from "lucide-react";
import React from "react";

const Ratings = ({ star }) => {
  console.log("Ratings.jsx", star);
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {/* {star === null ? (
          <Star color="orange" fill="orange" />: */}
        {star >= index + 1 ? (
          <Star color="orange" fill="orange" />
        ) : star >= number ? (
          <StarHalf color="orange" fill="orange" />
        ) : (
          <Star color="orange" />
        )}
      </span>
    );
  });

  return (
    <div className="flex space-x-2">
      {star===null?"":ratingStar}
      {/* <Star color="orange" />
      <Star color="orange" fill="orange" />
      <StarHalf color="orange" fill="orange" /> */}
    </div>
  );
};

export default Ratings;
