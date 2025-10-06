import React, { useState } from 'react';
import useProducts from '../hooks/useProducts';
import { Link } from 'react-router';
import ProductCard from '../components/ProductCard';

const Products = () => {
  const { products } = useProducts();
  const [search, setSearch] = useState('');
  console.log(search);
  return (
    <>
      <div className='flex justify-between items-center mb-4'>
        <h1 className='text-2xl font-semibold'>All Products <span className='text-sm text text-gray-500'>({products.length}) products found</span></h1>
        <label className="input">
          <input onChange={(e)=>setSearch(e.target.value)} type="search" placeholder="Search Products" />
        </label>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {
          products.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
        }
      </div>
    </>
  );
};

export default Products;