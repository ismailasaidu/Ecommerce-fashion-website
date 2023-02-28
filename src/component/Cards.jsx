import React from "react";
// import pic1 from "../Assets/pic1.png";
import { Store } from "./product";

const Cards = () => {
  return (
    <div className="grid grid-cols-4 gap-10">
      {Store.map(function (item) {
        return (
          <div className="flex items-center flex-col" >
            <img src={item.imgSrc} alt="" />
            <p className="font-display font-bold text-[16px]">
              {item.Description}
            </p>
            <p className="font-display font-bold text-[16px] text-blue-600">
              {item.Price}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
