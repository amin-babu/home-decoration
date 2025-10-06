import React from 'react';

const ProductCard = ({product}) => {
  const {name, image, price, category} = product;
  return (
    <div className="card border hover:scale-105 transition ease-in-out border-gray-100 bg-base-100 shadow-sm">
      <figure className='h-60 overflow-hidden'>
        <img className='w-full object-cover'
          src={image} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Category: {category}</p>
        <p>Price: ${price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;