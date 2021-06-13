import React, { useContext } from 'react';
import './Item.css';
import CartContext from '../../store/cart-context';

const Item = (props) => {
    const cartCtx = useContext(CartContext);

    const addToCartHandler = () => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: 1,
            price: props.price
        });
    };

    return (
        <div className="item_container">
            <img className="item_image" src="https://cdn.livekindly.co/wp-content/uploads/2018/02/mcvegan-meal.png" />
            <div className="item_details">
                <h3 className="item_title">{props.name}</h3>
                <h3 className="item_price">₹ {props.price}</h3>
            </div>
            <button className="buy" onClick={addToCartHandler}>Buy</button>
        </div>
    )
}

export default Item
