import React from 'react';

const DinnerServ = ({dinnerServ}) => {
    const{Image, name, rev, price} = dinnerServ;
    return (
        <div className='border-0 text-center'>
        <img className='w-50' src={Image} alt="" />
        <h4>{name}</h4>
        <p>{rev}</p>
        <h3>$ {price}</h3>
    </div>
    );
};

export default DinnerServ;<h1>DinnerServ</h1>