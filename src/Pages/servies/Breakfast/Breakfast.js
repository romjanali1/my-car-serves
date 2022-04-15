import React, { useEffect, useState } from 'react';

const Breakfast = () => {
    const [ breakfastData, SetbreakfastData ] = useState([]);
    useEffect (()=>{
        fetch('breakfastData.json')
        .then(res =>res.json())
        .then( data =>SetbreakfastData(data));
    },[])
    return (
        <div>
            <h1>Breakfast:{breakfastData.length} </h1>
        </div>
    );
};

export default Breakfast;