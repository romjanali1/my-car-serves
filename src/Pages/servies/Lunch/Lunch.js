import React, { useEffect, useState } from 'react';
import LunchServ from '../../Home/LunchServ/LunchServ';

const Lunch = () => {
    const [ lunchData, SetLunchData ] = useState([]);
    useEffect (()=>{
        fetch('lunchData.json')
        .then(res =>res.json())
        .then( data =>SetLunchData(data));
    },[])
    return (
        <div>
            <div className='row row-cols-1 row-cols-sm-3 g-2'>
            {
              lunchData.map(lunchServ => <LunchServ
              key={lunchServ.id}
              lunchServ = {lunchServ}
              ></LunchServ>)
            }
            </div>
        </div>
    );
};

export default Lunch;