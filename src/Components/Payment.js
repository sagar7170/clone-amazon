import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CheckoutProduct from './CheckoutProduct'
import './Payment.css'
import { useStateValue } from './Stateprovider'
function Payment() {
    const [{ basket, user }, dispatch] = useStateValue()
    const history = useNavigate();
    return (
        <div className='payment'>
            <div className="payment__container">
            <h1>
                Checkout  (<Link to="/checkout">{basket?.length} items</Link>)
             </h1>

                {/* payment section-delivery address */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p className='loc'>121004, faridabad</p>
                        <p className='loc'>sector 62</p>
                    </div>
                </div>

                {/* payment section-Review Item */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review item and Delivery</h3>
                    </div>
                    <div className="payment__item">
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                    </div>
                </div>

                {/* payment section-payment address*/}
                <div className="payment__section">
                        <div className="payment__title">
                             <h1>Payment Method</h1>
                        </div>
                    <button onClick={e=>history('/orders')}>Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default Payment