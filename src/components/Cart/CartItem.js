import './CartItem.css';

const CartItem = (props) => {
    return (
        <li className="cart-item">
            <img className="img" src="https://cdn.livekindly.co/wp-content/uploads/2018/02/mcvegan-meal.png" />
            <div className="item">
                <h2>{props.name}</h2>
                <div className="">
                    <span className="price">₹ {props.price}</span>
                </div>
            </div>
            <div className="actions">
                <div className="action remove" onClick={props.onRemove}>-</div>
                <span className="action amount">{props.amount}</span>
                <div className="action add" onClick={props.onAdd}>+</div>
            </div>
        </li>
    );
};

export default CartItem;
