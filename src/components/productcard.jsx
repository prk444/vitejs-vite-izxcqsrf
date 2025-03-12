import React from 'react';
import ViewProductButton from '../components/button';
import './productcard.css';

const Productcard = () => {
  const productImage = 'https://www.w3schools.com/howto/img_avatar.png';
  const productName = 'Sample Product';
  const price = '$99.99';

  return (
    <div className="product-card">
      <img src={productImage} alt={productName} />
      <h2>{productName}</h2>
      <p>{price}</p>
      <ViewProductButton />
    </div>
  );
};

export default Productcard;