import React from 'react';
import useProducts from '../hooks/useProducts';
import { Link } from 'react-router';
import ProductCard from '../components/ProductCard';

const Products = () => {
  const { products } = useProducts();
  return (
    <>
      <div className='flex justify-between items-center mb-4'>
        <h1 className='text-2xl font-semibold'>All Products</h1>
        <Link className='btn' to='/products'>Search</Link>
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