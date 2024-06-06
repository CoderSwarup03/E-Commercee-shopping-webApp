import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap';
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';
import delImgUrl from '../assets/images/shop/del.png'
import CheckOutPage from './CheckOutPage';

const CartPage = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        //   fetch cart data from local stroage
        const storedCartItem = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(storedCartItem);
    }, [])

    //Calculate Total Prices
    const calculateTotalPrice = (item) => {
        return item.price * item.quantity;
    }

    //handle quantity increase 
    const handleIncrease = (item) => {
        item.quantity += 1;
        setCartItems([...cartItems]);

        // update local storage with new cart item;
        localStorage.setItem("cart", JSON.stringify(cartItems));

    }
    //handle quantity Decrease
    const handleDecrease = (item) => {
        if (item.quantity > 1) {
            item.quantity -= 1;
            setCartItems([...cartItems]);
            localStorage.setItem("cart", JSON.stringify(cartItems));
        }
    }


    //handle delete/remove from the cart section
    const handleRemoveItem = (item) => {
        const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);

        // Update a new cart
        setCartItems(updatedCart);
        updateLocalStroage(updatedCart);
    }

    const updateLocalStroage = (cart) => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    // cart subtotal
    const cartSubTotal = cartItems.reduce((total, item) => {
        return total + calculateTotalPrice(item);
    }, 0)

    // order total
    const orderTotal = cartSubTotal;
    return (
        <div>
            <PageHeader title={"Shop Cart"} curPage={"Cart Page"} />
            <div className="shop-cart padding-tb">
                <div className="container">
                    <div className="section-wrapper">
                        {/* cart top tabler form */}
                        <div className="cart-top">
                            <table>
                                <thead>
                                    <tr>
                                        <th className='cat-product'>Product</th>
                                        <th className='cat-price'>Price</th>
                                        <th className='cat-quantity'>Quantity</th>
                                        <th className='cat-toprice'>Total</th>
                                        <th className='cat-edit'>Edit</th>
                                    </tr>
                                </thead>

                                {/* table body */}

                                <tbody>
                                    {
                                        cartItems.map((item, indx) => (
                                            <tr key={indx}>
                                                <td className="product-item cat-product">
                                                    <div className="p-thumb">
                                                        <Link to="/shop"><img src={item.img} alt="" /></Link>
                                                    </div>
                                                    <div className="p-content">
                                                        <Link to="/shop">{item.name}</Link>
                                                    </div>
                                                </td>
                                                <td className='cat-price'>{item.price}</td>
                                                <td className='cat-quantity'>
                                                    <div className="cart-plus-minus">
                                                        <div className="dec qtybutton" onClick={() => handleDecrease(item)}>-</div>
                                                        <input type="text" className='cart-plus-minus-box'
                                                            name='qtybutton' value={item.quantity}
                                                        />
                                                        <div className="inc qtybutton" onClick={() => handleIncrease(item)}>+</div>
                                                    </div>
                                                </td>
                                                <td className='cat-toprice'> ${calculateTotalPrice(item)}</td>
                                                <td className='cat-edit'>
                                                    <a href="#" onClick={() => handleRemoveItem(item)}>
                                                        <img src={delImgUrl} alt="" />
                                                    </a>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>

                        {/* -------cart top ends----- */}
                        {/* cart button */}
                        <div className="cart-bottom">
                            {/* checkout-box */}
                            <div className="cart-checkout-box">
                                <form className="coupon">
                                    <input className='cart-page-input-text' type="text" name='coupon' id='coupon'
                                        placeholder='Coupon code...' />
                                    <input type="submit" value="Apply Coupon" />
                                </form>

                                <form className="cart-checkout">
                                    <input type="submit" value="Update Cart" />
                                    <div>
                                        <CheckOutPage/>
                                    </div>
                                </form>
                            </div>

                            {/* <---------checkout box end---------> */}
                            {/* Shoping Details Box */}
                            <div className="shiping-box">
                                <div className="row">
                                    <div className="col-md-6 col-12">
                                        <div className="calculate-shiping">
                                            <h3>Calculate Shiping</h3>
                                            <div className="outline-select">
                                                <select>
                                                    <option value="uk">Kolkata</option>
                                                    <option value="dab">Chennai</option>
                                                    <option value="Aus">Banglore</option>
                                                    <option value="ind">Pune</option>
                                                    <option value="np">Hydrabad</option>
                                                </select>
                                                <span className='select-icon'>
                                                    <i className='icofont-rounded-down'></i>
                                                </span>
                                            </div>
                                            <div className="outline-select shipping-select">
                                                <select>
                                                    <option value="uk">West Bengal</option>
                                                    <option value="dab">Tamil Tadu</option>
                                                    <option value="Aus">Karnataka</option>
                                                    <option value="ind">Maharastra</option>
                                                    <option value="np">Monarchy</option>
                                                </select>
                                                <span className='select-icon'>
                                                    <i className='icofont-rounded-down'></i>
                                                </span>
                                            </div>
                                            <input type="text" name='postalCode' id='postalCode' placeholder='Postcode/ZIP' 
                                                className='cart-page-input-text'
                                            />
                                            <button type='submit'>Update Address</button>
                                        </div>
                                    </div>

                                    <div className='col-md-6 col-12'>
                                        <div className="cart-overview">
                                            <h3>Cart Total</h3>
                                            <ul className="cart-overview">
                                                <li>
                                                    <span className='pull-left'>Cart Subtotal</span>
                                                    <p className='pull-right'>${cartSubTotal}</p>
                                                </li>
                                                <li>
                                                    <span className='pull-left'>Shipping and Handling</span>
                                                    <p className='pull-right'>Free Shipping</p>
                                                </li>
                                                <li>
                                                    <span className='pull-left'>Total Order</span>
                                                    <p className='pull-right'>${orderTotal.toFixed(2)}</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPage

//YT: 1.42.55