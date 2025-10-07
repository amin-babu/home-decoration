import React from 'react';
import { Link } from 'react-router';

const ProductCard = ({product}) => {
  const {name, image, price, category, id} = product;
  return (
    <div className="card border hover:shadow-lg transition ease-in-out border-gray-100 bg-base-100 shadow-sm">
      <figure className='h-60 overflow-hidden'>
        <img className='w-full object-cover'
          src={image} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Category: {category}</p>
        <p>Price: ${price}</p>
        <div className="card-actions justify-end">
          <Link to={`/products/${id}`} className="btn btn-soft btn-primary">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;