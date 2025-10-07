import React, { useEffect, useState } from 'react';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [sortOrder, setSortOrder] = useState('none');
  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem('wishlist'));
    if (savedList) setWishlist(savedList);
  }, []);

  const sortedItems = () => {
    if(sortOrder === 'price-asc'){
      return [...wishlist].sort((a, b)=> a.price - b.price);
    }else if(sortOrder === 'price-dsc'){
      return [...wishlist].sort((a, b)=> b.price - a.price);
    }else {
      return wishlist;
    }
  };


  return (
    <div>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-2xl font-semibold'>Wishlist Products: <span className='text-sm text text-gray-500'>({sortedItems().length}) products found</span></h2>
        <label className='form-control w-full max-w-xs'>
          <select className='select select-bordered' value={sortOrder} onChange={e => setSortOrder(e.target.value)}>
            <option value="none">Sort by Price</option>
            <option value="price-asc">Low &gt; High</option>
            <option value="price-dsc">High &gt; Low</option>
          </select>
        </label>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {
          sortedItems().map(p => <div className="card bg-base-100 shadow-sm">
            <figure className='w-full'>
              <img
                className='h-56 w-full object-cover'
                src={p.image}
                alt={p.name} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{p.name}</h2>
              <p className="text-base-content/70">{p.category}</p>
              <div className="card-actions justify-end">
                <p className="font-semibold">${p.price}</p>
                <button className="btn btn-outline">Remove</button>
              </div>
            </div>
          </div>)
        }
      </div>
    </div>
  );
};

export default Wishlist;