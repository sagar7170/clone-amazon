import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { useNavigate } from 'react-router-dom';
import { getBasketTotal } from './reducer';
import { useStateValue } from './Stateprovider';
import "./Subtotal.css" 


function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  const history = useNavigate();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift 
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      <button onClick={e=>history('/payment')} >Proceed to Checkout</button>
    </div>
  )
}
export default Subtotal 