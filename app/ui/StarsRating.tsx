import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

interface StarRatingProps {
  rating: number;
}

const StarsRating: React.FC<StarRatingProps> = ({ rating }) => {
  const generateStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < Math.floor(rating)) {
        stars.push(<FaStar key={i} className="text-black text-sm" />);
      } else if (i < rating && i >= Math.floor(rating)) {
        stars.push(
          <span key={i} className="relative w-4 h-4 text-sm flex items-center">
            <FaRegStar className="text-gray-400 absolute" />
            <span
              className="absolute top-1/2 left-0 overflow-hidden"
              style={{
                width: `${(rating - Math.floor(rating)) * 100}%`,
                transform: "translateY(-52%)",
              }}
            >
              <FaStar className="text-black" />
            </span>
          </span>
        );
      } else {
        stars.push(<FaRegStar key={i} className="text-gray-400 text-sm" />);
      }
    }
    return stars;
  };

  return <div className="flex items-center">{generateStars()}</div>;
};

export default StarsRating;
