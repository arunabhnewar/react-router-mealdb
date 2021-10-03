import React from 'react';
import './Meal.css';
import { Card } from 'react-bootstrap';

const Meal = (props) => {
    const { idMeal, strMeal, strArea, strMealThumb, strCategory, strYoutube } = props.meal;
    return (
        <div className="meal-card">
            <Card style={{ width: '18rem', height: '520px' }}>
                <Card.Img variant="top" src={strMealThumb} />
                <Card.Body>
                    <Card.Title>{strMeal}</Card.Title>
                    <Card.Text>
                        Id: {idMeal}
                    </Card.Text>
                    <Card.Text>
                        Origin: {strArea}
                    </Card.Text>
                    <Card.Text>
                        Category: {strCategory}
                    </Card.Text>
                    <button className="youtube-btn"><a target="_blank" rel="noreferrer" href={strYoutube}>Watch Video</a></button>
                </Card.Body>
            </Card>

        </div>
    );
};

export default Meal;