import React, { useEffect, useState } from 'react';
import Meal from '../SingleMeal/Meal';
import './Meals.css'

const Meals = () => {
    const [meals, setMeals] = useState([]);
    // console.log(meals);

    useEffect( () => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(res => res.json())
        .then(data => setMeals(data.meals));
    } ,[])

    return (
        <div className='container row'>
            <div className="col-lg-9 col-md-10 card-body">
                {
                    meals.map(meal => <Meal key={meal.idMeal} meal={meal}></Meal>)
                }
            </div>
            <div className="col-lg-2 col-md-3">
                <h2>Order Summery</h2>
            </div>
        </div>
    );
};

export default Meals;