import React from 'react'
import arrow from "../Assets/arrow.png"
import visa from "../Assets/visa.png"
import electron from "../Assets/electron.png"
import paypal from "../Assets/paypal.png"
import master from "../Assets/master card.png"

const Footer = () => {
  return (
    <div >
      <div className=" flex justify-between pl-14 pr-14 mt-[120px] bg-lightGrey h-[300px] pt-[30px] ">
        <div className="flex flex-col gap-[20px] text-grey">
          <div>
            <h1 className="font-display font-bold text-[14px] ">
              COMPANY INFO
            </h1>
          </div>
          <div>
            <p>About Us</p>
            <p>Latest Post</p>
            <p>Contact Us</p>
            <p>Shop</p>
          </div>
        </div>
        <div className="flex flex-col gap-[20px]  text-grey">
          <div>
            <h1 className="font-display font-bold text-[14px] ">HELP LINK</h1>
          </div>
          <div>
            <p>Tracking</p>
            <p>Order Status</p>
            <p>Delivery</p>
            <p>Shipping Info</p>
            <p>FAQ</p>
          </div>
        </div>
        <div className="flex flex-col gap-[20px]  text-grey">
          <div>
            <h1 className="font-display font-bold text-[14px] ">
              USEFUL LINKS
            </h1>
          </div>
          <div>
            <p>Special Offers</p>
            <p>Gift Cards</p>
            <p>Advetising</p>
            <p>Terms of Use</p>
          </div>
        </div>
        <div className="flex flex-col gap-[20px]  text-grey">
          <div>
            <h1 className="font-display font-bold text-[14px] ">
              GET IN THE KNOW
            </h1>
          </div>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Email"
              className="border-b-[1px] border-black outline-none bg-lightGrey font-thin"
            />
            <img src={arrow} alt="" />
          </div>
        </div>
      </div>
      <div className="ml-14 mr-14 border-t-[1px] border-divider h-[100px] flex justify-between pt-[25px]">
        <div className='text-grey'>
          <p>© 2020 NorthStar eCommerce</p>
          <p>Privacy Policy Terms & Conditions</p>
        </div>
        <div className='flex gap-[10px]'>
            <img src={visa}  className="w-[50px] h-[40px]"/>
            <img src={master} className="w-[50px] h-[40px]"/>
            <img src={paypal} className="w-[50px] h-[40px]"/>
            <img src={electron} className="w-[50px] h-[40px]"/>
        </div>
      </div>
    </div>
  );
};

export default Footer