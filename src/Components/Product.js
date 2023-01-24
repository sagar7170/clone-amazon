import React from 'react'
import './Product.css'
import { useStateValue } from './Stateprovider'

function Product({title,image,price,rating,id }) {
    const [{basket},dispatch] = useStateValue();
     
   
    const addToBasket = () => {
        // console.log("this is the basket", basket )
        // dispatch the item into the data layer
        dispatch({
          type: "ADD_TO_BASKET",
          item: {
            id: id,
            title: title,
            image: image,
            price: price,
            rating: rating,
          },
        });
      };
       
  return (
    <div className='product'>
        <div className="product__info ">
            <p className='info'>{title}</p>
            <p className='product__price info'>
                <small>₹</small>
                <strong>{price}</strong>
            </p>
            <div className='product__rating '>
                {Array(rating).fill().map((_,i)=>(
                    <p className='info'>⭐</p>
                ))}
            </div>
        </div>
        <img src={image} alt="" />
        {/* <button className='product__button'>Add to basket</button> */}
        <button className='product__button' onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product