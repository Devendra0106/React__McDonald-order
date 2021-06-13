import React, { useContext, useState, useEffect } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import CartContext from '../store/cart-context';

function Header() {
    const [active, setActive] = useState('');
    useEffect(() => {
        let currentURL = window.location.href;
        console.log(currentURL);
        if (currentURL.endsWith('/cart')) {
            setActive('Cart');
        } else {
            setActive('Home');
        }
    }, [active]);

    const cartCtx = useContext(CartContext);
    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);
    return (
        <nav className="navbar1">
            <div className="brand_name">McDonald's</div>
            <div className="nav_menu">
                <Link to="/" className="nav_link">Menu</Link>
                <Link to="/cart" className="nav_link"><div className="cart">Cart<span className="badge">{numberOfCartItems}</span></div></Link>
            </div>
        </nav>
    )
}

export default Header
