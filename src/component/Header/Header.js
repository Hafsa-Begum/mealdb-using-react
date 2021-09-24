import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav>
            <div>
                <h1>MealDb</h1>
            </div>
            <div>
                <a href="/Home">Home</a>
                <a href="/about">Order Offer</a>
                <a href="/manage inventory">Manage Inventory</a>
            </div>
        </nav>
    );
};

export default Header;