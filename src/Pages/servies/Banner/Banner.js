import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner from '../../../photos/banner.png';

const Banner = () => {
    return (
        <div>
            <Carousel>
    <img
      className="d-block w-100 pb-5"
      src={banner}
      alt=""
    />
    <Carousel.Caption className='position-absolute top-50'>
      <h3 className='text-dark position-static'>Best Food Waiting For Your Belly</h3>
      <input className='pt-1 rounded-pill' type="text" placeholder="Search food items"></input>
      <button type="button" className="btn btn-danger rounded-pill">Danger</button>
    </Carousel.Caption>
</Carousel>
        </div>
    );
};

export default Banner;