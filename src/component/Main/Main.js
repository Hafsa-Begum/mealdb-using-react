import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import FoodName from '../FoodName/FoodName';
import './Main.css'

const Main = () => {
    const [foods, setFoods] = useState([])
    const [foodName, setFoodName] = useState([])
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => setFoods(data.meals))
    }, [])
    const handleAddFood = food => {
        const newNames = [...foodName, food.strMeal]
        setFoodName(newNames);
    }
    return (
        <div className='main-container'>
            <div className='food-container'>
                {
                    foods.map(food => <Food key={food.idMeal} food={food} handleAddFood={handleAddFood}></Food>)
                }
            </div>
            <div className='name-container'>
                <FoodName foodName={foodName}></FoodName>
            </div>
        </div>
    );
};

export default Main;