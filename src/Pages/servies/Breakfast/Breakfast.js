import React, { useEffect, useState } from 'react';
import BreakfastServ from '../../Home/BreakfastServ/BreakfastServ';

const Breakfast = () => {
    const [ breakfastData, SetbreakfastData ] = useState([]);
    useEffect (()=>{
        fetch('breakfastData.json')
        .then(res =>res.json())
        .then( data =>SetbreakfastData(data));
    },[])
    return (
        <div className='m-5'>
            <h1>Breakfast:{breakfastData.length} </h1>
            <div className='row row-cols-1 row-cols-sm-3 g-2'>
            {
              breakfastData.map(breakfastServ => <BreakfastServ
              key={breakfastServ.id}
              breakfastServ = {breakfastServ}
              ></BreakfastServ>)
            }
            </div>
        </div>
    );
};

export default Breakfast;