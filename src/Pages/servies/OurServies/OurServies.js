import React, { useEffect, useState } from 'react';

const OurServies = () => {
    const [ serviesData, SetserviesData ] = useState([]);
    useEffect (()=>{
        fetch('serviesData.json')
        .then(res =>res.json())
        .then( data =>SetserviesData(data));
    },[])
    return (
        <div>
            <h1>OurServies : {serviesData.length} </h1>
        </div>
    );
};

export default OurServies;