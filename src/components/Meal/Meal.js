import React, { useEffect, useState } from 'react';

const Meal = () => {
    const [meals, setMeals] = useState([]);
    console.log(meals);

    useEffect( () => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(res => res.json())
        .then(data => setMeals(data));
    } ,[])
    return (
        <div className='container row'>
            <div className="col-lg-9 col-md-9">
                <h2>Meal details</h2>
            </div>
            <div className="col-lg-3 col-md-3">
                <h2>Order Summery</h2>
            </div>
        </div>
    );
};

export default Meal;