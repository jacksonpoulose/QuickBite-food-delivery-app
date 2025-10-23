import React from "react";
import {IMG_URL} from "../constants";

const Card = ({
  imageUrl,
  title = "Card Title",
  description = "This is a sample description for the card component. It provides brief details about the content.",
  altText = "Card image"
}) => {
  return (
    <div className="max-w-xs bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 m-4">
      <div className="h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={altText}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2 truncate">{title}</h2>
        <p className="text-gray-600 text-sm line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
