import React from 'react'
import Hero from '../component/Hero';
import Divider from '../component/Divider';
import Card from '../component/Card';
import Services from '../component/Services';
import Offer from '../component/Offer';

const Home = () => {
  return (
    <>
      <Hero />
      <Divider  text1="Discover NEW Arrivals" text2="Recently added shirts!"/>
      <Card/>
      <Services/>
      <Offer/>
      <Divider  text1="Top Sellers" text2="Browse our top-selling products"/>
      <Card/>
      <Divider text3="SHOP NOW"/>
      <div className='text-center'>
      <button className='bg-blue-600 h-[40px] w-[150px] text-white py-[10px]'>SHOP NOW</button>
      </div>
    </>
  );
}

export default Home