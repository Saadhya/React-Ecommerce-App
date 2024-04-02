import { Star, StarHalf, StarIcon, StarOff } from "lucide-react";
import React from "react";

const Ratings = ({ star }) => {
  console.log("Ratings.jsx", star);
  return (
    <div>
      
      <Star color="orange" />
      <Star color="orange" fill="orange" />
      <StarHalf color="orange" fill="orange" />
    </div>
  );
};

export default Ratings;
