import React, { useContext } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import '../styles/components/Payment.css';

export const Payment = () => {
  const {
    state: { cart, buyer },
    addOrder,
  } = useContext(AppContext);

  const navigate = useNavigate();
  const style = {
    layout: 'vertical',
    shape: 'rect',
  };

  const handleSumTotal = () => {
    const reducer = (acc, current) => acc + current.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  const success = (data) => {
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      };
      addOrder(newOrder);
    }
  };

  const onSuccess = () => {
    const newOrder = {
      buyer,
      product: cart,
    };
    addOrder(newOrder);
    navigate('/checkout/success');
  };
  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map((item) => (
          <div className="Payment-item" key={item.title}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>{item.price}</span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          {/* <PayPalButton
            style={style}
            amount={handleSumTotal()}
            onSuccess={(data) => success(data)}
          /> */}
          <button onClick={onSuccess}>Pagar</button>
        </div>
      </div>
    </div>
  );
};
