import React, { Fragment } from 'react'
import {useQuery} from 'react-query'

import {productImageUrl} from '../constants/globalVariables'
import {cartApi} from '../api'

import './CartScreen.css'

const cartItems = [ 
    {
        name : 'Alloy Wheel 14"/4 Holes/Pcd-100/Et-22 - Machined Black',
        image : `${productImageUrl}alloy.png`,
        stockStatus : 'In stock',
        color : 'Silver',
        quantity : 3,
        price : 899,
    },
    {
        name : 'Alloy Wheel 14"/4 Holes/Pcd-100/Et-22 - Machined Black',
        image : `${productImageUrl}alloy.png`,
        stockStatus : 'Out of stock',
        color : 'Red',
        quantity : 4,
        price : 2000,
    },
    {
        name : 'Alloy Wheel 14"/4 Holes/Pcd-100/Et-22 - Machined Black',
        image : `${productImageUrl}alloy.png`,
        stockStatus : 'In stock',
        color : 'Black',
        quantity : 1,
        price : 1399,
    },
]

function CartScreen() {

// const {data, isLoading} =useQuery('cartData',cartApi.getAllCartItems);

  return (
    <div className='cartSection' > 
        <div className="cartContainer">
            <h2>Shopping Cart</h2>
            <div className="priceDiv">
                <p>Price</p>
            </div>
            <hr />
            {cartItems.length > 0 ? cartItems.map((item,index)=>(
                <Fragment>
                    <div className="cartItems" key={index} >
                        <input type="checkbox" name="item" id="" />
                        <img width={150} height={150} src={item.image} alt={item.name} srcset="" />
                        <div className="itemDiscription">
                            <p className='itemName' >{item.name}</p>
                            <p className='itemInStock' style={{color:item.stockStatus == 'In stock'?"green":"red"}} >{item.stockStatus}</p>
                            <p className='itemColor' >Color Name : {item.color}</p>
                            <div className="itemActions">
                            <div className="dropdown">
                                <select className='itemQuantity' name="quantity" id="" value={item.stockStatus == 'Out of stock'?0:item.quantity} defaultValue={1} disabled={item.stockStatus == 'Out of stock'?true:false}>
                                    <option value={0}>0(delete)</option>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                </select>
                            </div>
                                <p> | </p>
                                <p>Delete</p> <p> | </p> <p>Save for later</p>
                            </div>
                        </div>
                        <p className='price' >&#8377;{parseFloat(item.price).toFixed(2)}</p>
                    </div>
                    <hr />
                </Fragment>
            )):null
                }
            <div className="subtotal">
                <p>Subtotal (2 items) : &#8377;1698.00</p>
            </div>
        </div>
        <div className="totalContainer">
            <div className="totalamount">
                <p>Subtotal (2 items) : &#8377;1698.00</p>
                <button type='button' >Proceed to Buy</button>
            </div>
        </div>
    </div>
  )
}

export default CartScreen