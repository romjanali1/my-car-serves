import React from 'react';

const OurServ = ({ourServ}) => {
    const{Image, name, rev, icon, detal} = ourServ;
    return (
        <div className='border-0'>
        <img className='w-75 pb-4' src={Image} alt="" />
       <div className='d-flex pb-4'>
       <img className='px-2 ' src={icon} alt="" />
        <h4>{name}</h4>
       </div>
        <p className='align-baseline'>{rev}</p>
       <div className='d-flex'>
       <p className='text-primary px-2'>{detal}</p>
        
       </div>
    </div>
    );
};

export default OurServ;<h1>OurServ</h1>