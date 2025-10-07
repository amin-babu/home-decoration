import React from 'react';
import { Link } from 'react-router';
import ProductCard from '../components/ProductCard';
import useProducts from '../hooks/useProducts';

const Home = () => {
  const { products } = useProducts();
  // console.log(products);
  const featuredProducts = products.slice(0, 6);
  return (
    <>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-2xl font-semibold'>Fearuted Products</h2>
        <Link to='/products' className='btn' >All Products</Link>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {
          featuredProducts.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
        }
      </div>
      <div className='flex justify-end mt-4'>
        <Link className='btn' to='/products'>All Products</Link>
      </div>
    </>
  );
};

export default Home;