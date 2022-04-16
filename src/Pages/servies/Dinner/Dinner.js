import React, { useEffect, useState } from 'react';
import DinnerServ from '../../Home/DinnerServ/DinnerServ';

const Dinner = () => {
    const [ dinnerData, SetdinnerData ] = useState([]);
    useEffect (()=>{
        fetch('dinnerData.json')
        .then(res =>res.json())
        .then( data =>SetdinnerData(data));
    },[])
    return (
        <div>
            <div className='row row-cols-1 row-cols-sm-3 g-2'>
            {
              dinnerData.map(dinnerServ => <DinnerServ
              key={dinnerServ.id}
              dinnerServ = {dinnerServ}
              ></DinnerServ>)
            }
            </div>
        </div>
    );
};

export default Dinner;<h1>Dinner</h1>