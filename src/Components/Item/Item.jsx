



// kid comp

import React from 'react';
import '../Item/Item.css';
import all_product from '../Assets/all_product.js';
import { Link } from 'react-router-dom';


const Item = (props) => {
    return (
        <div className='item'>
            {/* <Link to={`http://localhost:5173/product/${props.id}`}><img src={props.image} alt="" /></Link> */}
            <Link to={`http://localhost:3000/product/${props.id}`}><img src={props.image} alt="" /></Link>
            {/* <Link to={`https://itemcatalogpjtbe.onrender.com/product/${props.id}`}><img src={props.image} alt="" /></Link> */}


            <p>{props.category}</p>
            <p>{props.name}</p>
            <div className='item-prices'>
                <div className='item-price-new'>
                    ${props.new_price}
                </div>
                <div className='item-price-old'>
                    ${props.old_price}
                </div>
            </div>
        </div>
    );
};

export default Item;
