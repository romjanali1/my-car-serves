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
            <h1>OurServies : {serviesData.length} </h1>
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