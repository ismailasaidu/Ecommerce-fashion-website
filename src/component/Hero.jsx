import React from "react";

const Hero = () => {
   const Goto = () => {
    window.scrollTo({
      top: 630,
      behavior: "smooth",
    });
  };
  
  return (
    <div>
      <div className="bg-[url('./Assets/hero.png')] h-[500px] relative">
        <div className=" font-display flex items-center flex-col gap-10 text-white font-black  absolute left-[750px] top-[190px]">
          <h1 className="font-bold text-center text-[50px]">
            STYLIST PICKS BEAT <br></br> THE HEAT
          </h1>
          <button
            className="border-4 w-[200px] h-[50px] font-bold text-2xl"
            onClick={Goto}>
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
