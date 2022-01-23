import React, { useContext } from 'react';
import { Map } from '../components/Map';
import { AppContext } from '../context/AppContext';
import '../styles/components/Success.css';

export const Success = () => {
  const {
    state: { buyer },
  } = useContext(AppContext);
  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{buyer[0].name}, Gracias por tu compra</h2>
        <span>Tu pedido llegara en 3 dias</span>
        <div className="Success-map">
          <Map />
        </div>
      </div>
    </div>
  );
};
