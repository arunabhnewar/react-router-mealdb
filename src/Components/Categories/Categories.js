import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';
import './Categories.css'

const Categories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
            .then(res => res.json())
            .then(data => setCategories(data.categories))
    }, [])
    return (
        <div className="container-fluid categories-section">
            <h3 className="text-center categories-header">Our Food Category</h3>
            <div className="categories-container">
                {categories.map(category => <Category category={category} />)}
            </div>
        </div>
    );
};
export default Categories;