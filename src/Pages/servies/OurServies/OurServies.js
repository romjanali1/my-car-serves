import React, { useEffect, useState } from 'react';
import OurServ from '../../Home/OurServ/OurServ';

const OurServies = () => {
    const [ serviesData, SetserviesData ] = useState([]);
    useEffect (()=>{
        fetch('serviesData.json')
        .then(res =>res.json())
        .then( data =>SetserviesData(data));
    },[])
    return (
        <div className='m-5'>
            <h3 className='pb-2'>Why you Choose Us</h3>
            <p className='pb-2'>There are many types of food service styles  in hotels to serve customers <br /> in the catering industry. This may range from full silver service</p>
            <div className='row row-cols-1 row-cols-sm-3'>
            {
              serviesData.map(ourServ => <OurServ
              key={ourServ.id}
              ourServ = {ourServ}
              ></OurServ>)
            }
            </div>
        </div>
    );
};

export default OurServies;