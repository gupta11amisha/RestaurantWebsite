// eslint-disable-next-line no-unused-vars
import React from 'react';
import { data } from '../restApi.json'; // Ensure the correct path and data structure

// eslint-disable-next-line no-unused-vars
const Menu = () => {
    return (
        <section className='menu' id='menu'>
            <div className="container"> {/* Corrected class name */}
                <div className="heading_section">
                    <h1 className='heading'>Popular Dishes</h1>
                    <p>At our restaurant, we take pride in our diverse menu that showcases a variety of popular dishes, each bursting with unique and delightful flavors. Our vegan chickpea dish is a crowd favorite, featuring tender chickpeas simmered in a rich and aromatic blend of spices, creating a hearty and satisfying meal that even non-vegans rave about. Another beloved dish is our Bhelpuri, a traditional Indian snack that combines puffed rice, fresh vegetables, tangy tamarind sauce, and crunchy sev. This dish offers a perfect balance of sweet, sour, and spicy flavors, making it an irresistible treat for your taste buds.</p>
                </div>
                <div className="dishes_container">
                    {
                        data[0].dishes.map(element => {
                            return (
                                <div className="card" key={element.id}>
                                    <img src={element.image} alt={element.title} />
                                    <h3>{element.title}</h3>
                                    <button>{element.category}</button>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default Menu;