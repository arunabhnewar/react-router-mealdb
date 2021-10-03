import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Meal from '../Meal/Meal';
import './Resturant.css';

const Resturant = () => {
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=fish`)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [])
    return (
        <div className="resturant-container">
            <div className="container fluid">
                <Row sm={1} md={2} lg={4}>
                    {
                        meals.map(meal => <Meal key={meal.idMeal} meal={meal}></Meal>)
                    }
                </Row>

            </div>
        </div>
    );
};

export default Resturant;