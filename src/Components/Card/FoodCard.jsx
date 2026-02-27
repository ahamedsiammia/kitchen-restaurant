import Link from "next/link";
import React from "react";
import CartButton from "../Buttons/CartButton";
import Image from "next/image";

const FoodCard = ({ food}) => {
    
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
      
      {/* Image */}
      <div className="relative overflow-hidden">
        {/* <img
          src={food.foodImg}
          alt={food.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        /> */}
        <Image width={320} height={300} src={food.foodImg}
          alt={food.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"  />

        <span className="absolute top-3 left-3 bg-white text-sm px-3 py-1 rounded-full shadow">
          {food.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
          {food.title}
        </h3>

        <p className="text-orange-500 font-bold text-xl">
          ${food.price}
        </p>

        {/* Buttons */}
        <div className="flex gap-3 pt-2">
          <CartButton food={food}></CartButton>

          <Link href={`/foods/${food.id}`}
            className="flex-1 border border-gray-300 hover:bg-gray-100 text-gray-700 py-2 rounded-xl transition duration-200 text-center"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
