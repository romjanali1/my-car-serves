import React from 'react';
import Banner from '../servies/Banner/Banner';
import Breakfast from '../servies/Breakfast/Breakfast';
import Dinner from '../servies/Dinner/Dinner';
import Lunch from '../servies/Lunch/Lunch';
import OurServies from '../servies/OurServies/OurServies';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Lunch></Lunch> 
          <Dinner></Dinner> 
          <Breakfast></Breakfast>
          <OurServies></OurServies>
        </div>
    );
};

export default Home;<h1>its Home</h1>