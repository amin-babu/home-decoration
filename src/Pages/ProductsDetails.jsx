import React from 'react';
import { useParams } from 'react-router';
import useProducts from '../hooks/useProducts';

const ProductsDetails = () => {
  const { id } = useParams();
  const { products, loading } = useProducts();
  const product = products.find(p => String(p.id) === id);


  if (loading) return <p>Loading...</p>
  const { name, category, price, image, description } = product || {};

  const handleAddToWishlist = () => {
    const existingList = JSON.parse(localStorage.getItem('wishlist'));
    let updatedList = [];
    if (existingList) {
      const isDuplicate = existingList.some(p => p.id === product.id);
      if(isDuplicate) return alert('Already Added!');
      updatedList = [...existingList, product];
    } else {
      updatedList.push(product);
    }
    localStorage.setItem('wishlist', JSON.stringify(updatedList));
    console.log(existingList);
  }

  return (
    <div className="bg-base-200 rounded-lg">
      <div className="flex items-center p-4 gap-4 flex-col lg:flex-row">
        <img
          src={image}
          className="max-w-1/3 object-cover rounded-lg shadow-2xl"
        />
        <div className='space-y-2 text-center sm:text-left'>
          <h1 className="text-5xl font-bold">{name}</h1>
          <p className="">{description}</p>
          <p>Price: {price}</p>
          <p>Category: {category}</p>
          <button onClick={handleAddToWishlist} className="btn btn-primary">Add to Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;