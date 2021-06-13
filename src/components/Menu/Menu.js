import React, { useState, useEffect } from 'react';
import Item from './Item';
import './Menu.css'

function Menu() {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            await fetch('https://run.mocky.io/v3/9d71cb03-a9f9-4d70-bae2-9d3adaa1cfe7')
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    setItems(data);
                    setIsLoading(false);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
        fetchData();
    }, []);

    const displayItems = items.map((item) => (
        <Item id={item.id} name={item.item_name} price={item.price} />
    ))

    return (
        <div className="menu">
            <h2 className="header">Pick Delicious Items from Menu</h2>
            {isLoading && <p>Loading...</p>}
            {displayItems}
        </div>
    )
}

export default Menu
