import React from 'react'

const Offer = () => {

    const Goto = () => {
        window.scrollTo({
          top: 630,
          behavior: "smooth",
        });
      };
      
  return (


    <div>
      <div className="flex gap-[40px] pl-14 pr-14 mt-[80px]">
        <div className="grow-[2] bg-dark text-center h-[380px] py-[120px]">
          <h1 className="text-white font-bold text-[34px]">PEACE OF MIND</h1>
          <p className="text-white text-[18px]">
            A one-stop platform for all your fashion needs,<br></br>{" "}
            hassle-free. Buy with a peace of mind.
          </p>
          <button className="text-blue bg-white h-[40px] w-[150px] mt-[20px]"
          onClick={Goto}>
            BUY NOW
          </button>
        </div>
        <div className="grow-[0.5] bg-dark text-center h-[380px] py-[120px]">
          <h1 className="text-white font-bold text-[34px]">Buy 2 Get 1 Free</h1>
          <p className="text-white text-[18px]">
            End of season sale. Buy any 2 items of your choice<br></br> and get
            1 free.
          </p>
          <button className="text-blue bg-white h-[40px] w-[150px] mt-[20px]" onClick={Goto}>
            BUY NOW
          </button>
        </div>
      </div>

    </div>
  );
};

export default Offer;