import React from 'react';
import './Category.css'

const Category = (props) => {
    const { strCategoryThumb, strCategory, strCategoryDescription } = props.category;
    return (


        <div className="category">
            <img src={strCategoryThumb} alt="" title={strCategoryDescription} />
            <h1>{strCategory}</h1>
        </div>
    );
};


export default Category;