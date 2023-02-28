import React from 'react'
import Hero from '../component/Hero';
import Divider from '../component/Divider';
import Card from '../component/Card';

const Home = () => {
  return (
    <>
      <Hero />
      <Divider  text1="Discover NEW Arrivals" text2="Recently added shirts!"/>
      <Card/>


      {/* <Divider  text1="Top Sellers" text2="Browse our top-selling products"/> */}
    </>
  );
}

export default Home