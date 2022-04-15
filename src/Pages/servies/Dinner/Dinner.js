import React, { useEffect, useState } from 'react';

const Dinner = () => {
    const [ dinnerData, SetdinnerData ] = useState([]);
    useEffect (()=>{
        fetch('dinnerData.json')
        .then(res =>res.json())
        .then( data =>SetdinnerData(data));
    },[])
    return (
        <div>
            <h1>Dinner :{dinnerData.length}</h1>
        </div>
    );
};

export default Dinner;<h1>Dinner</h1>