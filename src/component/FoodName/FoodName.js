import React from 'react';

const FoodName = (props) => {
    console.log(props)
    const { foodName } = props
    return (
        <div>
            <h3>Add food to cart</h3>
            <ul style={{ textAlign: "start" }}>
                {
                    foodName.map(name => <li>{name}</li>)
                }
            </ul>
        </div>
    );
};

export default FoodName;