import React, { useEffect, useState } from 'react';

const Lunch = () => {
    const [ lunchData, SetLunchData ] = useState([]);
    useEffect (()=>{
        fetch('lunchData.json')
        .then(res =>res.json())
        .then( data =>SetLunchData(data));
    },[])
    return (
        <div>
           <h1>Lunch: {lunchData.length}</h1> 
        </div>
    );
};

export default Lunch;<h1>Lunch</h1>