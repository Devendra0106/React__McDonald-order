import React, { useContext, useState } from 'react';
import './Cart.css';
import CartItem from './CartItem';
import CartContext from '../../store/cart-context';

const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    let totalAmount = cartCtx.totalAmount;
    let discount = 0;
    if (totalAmount <= 100) {
        discount = 0;
    }
    if (totalAmount > 100 && totalAmount <= 500) {
        discount = 10;
    } else if (totalAmount > 500) {
        discount = 20;
    }
    let finalAmount = totalAmount - (totalAmount * (discount / 100));
    const hasItems = cartCtx.items.length === 0;


    const cartItemAddHandler = item => {
        cartCtx.addItem({ ...item, amount: 1 });
    };
    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id);
    };

    const cartItems = (
        <ul>
            {cartCtx.items.map((item) => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)} />
            ))}
        </ul>
    );
    return (
        <div className="container">
            <div className="row">
                <div className="col-8">
                    {hasItems && <h2 className="empty">Cart is Empty</h2>}
                    {cartItems}
                </div>
                <div className="col-4 total">
                    <div className="summary">Bill Summary</div>
                    <div className="section">
                        <div className="title">Total Amount</div>
                        <div className="val">₹ {totalAmount}</div>
                    </div>
                    <div className="section">
                        <div className="title">Discount</div>
                        <div className="val">-{discount}%</div>
                    </div>
                    <br />
                    <div className="section">
                        <div className="title">Final Amount</div>
                        <div className="val">₹ {finalAmount}</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Cart
