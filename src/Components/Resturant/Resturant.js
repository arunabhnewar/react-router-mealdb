import React from 'react';
import { useState, useEffect } from 'react';
import { FormControl, Row } from 'react-bootstrap';
import Meal from '../Meal/Meal';
import './Resturant.css';

const Resturant = () => {

    const [meals, setMeals] = useState([]);
    const [searchText, setSearchText] = useState('');
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [searchText])

    const searchHandle = element => {
        const searchTextValue = element.target.value;
        setSearchText(searchTextValue);
    }
    return (
        <div>
            <div className="resturant-container">
                <div className="container-fluid">
                    <FormControl className="w-25 mx-auto"
                        type="search"
                        placeholder="Search food"
                        aria-label="Search"
                        id="searched-text"
                        onChange={searchHandle}
                    />
                </div>
                <br /> <br />
                <div className="container fluid">
                    <Row sm={1} md={2} lg={4}>
                        {
                            meals.map(meal => <Meal key={meal.idMeal} meal={meal}></Meal>)
                        }
                    </Row>

                </div>
            </div>
        </div>
    );
};

export default Resturant;