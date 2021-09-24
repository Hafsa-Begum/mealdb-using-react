import React from 'react';
import './Food.css';

const Food = (props) => {
    const { strMealThumb, strMeal, strCategory, strTags, strInstructions, strYoutube } = props.food
    return (
        <div className='food'>
            <img src={strMealThumb} alt="" />
            <h3>Food-name: {strMeal}</h3>
            <p>Category: {strCategory}</p>
            <p><small>Food-tags: {strTags}</small></p>
            <p>Descriptions: {strInstructions.slice(0, 100)} <br /> <a href={strYoutube}>See Recipe</a> on Youtube </p>
            <button onClick={() => props.handleAddFood(props.food)} className="btn-youtube"> <p style={{ display: "inline-block" }}><i class="fas fa-cart-plus"></i></p>  Add Food</button>
        </div>
    );
};

export default Food;