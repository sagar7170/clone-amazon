import React from 'react'
import CheckoutProduct from './CheckoutProduct'
import './Orders.css'
import { useStateValue } from './Stateprovider'

function Orders() {
    const [{ basket, user }, dispatch] = useStateValue()
    return (
        <div className='order'>
            <h2>Your Orders</h2>
            <div className="order__item">
                {basket.map(item => (
                    <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        hideButton
                    />
                ))}
            </div>
        </div>
    )
}

export default Orders