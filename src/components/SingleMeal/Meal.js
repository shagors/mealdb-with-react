import React from 'react';
import './Meal.css'

const Meal = ({ meal }) => {
    const {strMealThumb, strMeal, strInstructions} = meal;
    console.log(meal);
    return (
        <div className="card c-bd">
            <img src={strMealThumb} className="card-img-top" alt=""/>
            <h5 className="card-title">Meal Name : {strMeal}</h5> <br />
            <p className="card-text">Meal details : {strInstructions.slice(0, 100)}</p>
            <div className="card-footer cf">
            <button className='btn btn-primary'>Cart</button>
            <button className='btn btn-info'>Details</button>
            </div>
        </div>
    );
};

export default Meal;