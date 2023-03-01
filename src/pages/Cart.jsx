import React from "react";
import close from "../Assets/close.png";
import Footer from "../component/Footer";

const Cart = () => {
  return (
    <div>
      <div className="pl-14 pr-14 ">
        <div>
          <h1 className="text-grey mt-[50px]">
            HOME/<span className="text-dark">SHOPPING CART</span>
          </h1>
        </div>
        <div>
          <div className="grid grid-cols-4   border-b-[1px] gap-[150px] border-divider pl-[180px] h-[50px] mt-[100px]">
            <h1 className="font-bold text-[18px] pt-[15px]">Product</h1>
            <h1 className="font-bold text-[18px] pt-[15px]">Price</h1>
            <h1 className="font-bold text-[18px] pt-[15px]">Quantity</h1>
            <h1 className="font-bold text-[18px] pt-[15px]">Total</h1>
          </div>
          <div className="grid grid-cols-4 border-b-[1px] gap-[150px]  border-divider pl-[180px] h-[60px] mt-[40px] font-display relative">
            <img src={close} className="absolute left-0 mt-[20px]" />
            <h1 className="font-bold text-[16px]  text-grey pt-[15px]">
              Plain White Shirt
            </h1>
            <h1 className="font-medium text-[18px] text-grey pt-[15px]">
              $59.00
            </h1>
            <input
              className="font-bold text-[18px] pt-[15px] w-[70px] h-[40px] py-[18px] px-[18px] mt-[10px]  text-grey border-[2px] outline-none border-divider"
              type="text"
            />
            <h1 className="font-medium text-[18px] text-grey pt-[15px]">
              $59.00
            </h1>
          </div>
        </div>
        <div className="mt-[100px]">
          <div>
            <h1 className="font-display text-[34px] font-black">Cart Totals</h1>
          </div>
          <div className="flex justify-between font-display w-[440px] mt-[20px] border-b-[2px] border-grey h-[40px]">
            <h1 className=" text-[18px] font-medium text-grey ">
              Subtotal
            </h1>
            <p className="font-medium text-[18px]">$59.00</p>
          </div>
          <div className="flex justify-between font-display w-[440px] mt-[20px] border-b-[2px] border-grey h-[40px]">
            <h1 className=" text-[18px] font-medium text-grey ">
              Shipping Fee
            </h1>
            <p className="font-medium text-grey text-[18px]">FREE!!!</p>
          </div>
          <div className="flex justify-between font-display w-[440px] mt-[20px]  h-[40px]">
            <h1 className="text-grey text-[18px] font-semibold ">Total</h1>
            <p className="font-medium  text-[18px]">$59.00</p>
          </div>
          <div>
            <button className="  w-[280px] bg-secondary text-white h-[50px]">
              PROCEED TO CHECKOUT
            </button>
          </div>
          <div />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
