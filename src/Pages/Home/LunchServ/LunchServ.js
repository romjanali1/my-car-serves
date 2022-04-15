import React from 'react';

const LunchServ = ({lunchServ}) => {
    const{Image, name, rev, price} = lunchServ;
    return (
        <div>
            <div className='border-0 text-center'>
            <img className='w-50' src={Image} alt="" />
            <h4>{name}</h4>
            <p>{rev}</p>
            <h3>$ {price}</h3>
        </div>
        </div>
    );
};

export default LunchServ;