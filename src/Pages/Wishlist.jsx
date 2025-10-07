import React, { useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { loadWishlist } from '../utils/localStorage';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState(()=> loadWishlist());
  const [sortOrder, setSortOrder] = useState('none');


  // useEffect(() => {
  //   const savedList = JSON.parse(localStorage.getItem('wishlist'));
  //   if (savedList) setWishlist(savedList);
  // }, []);

  if(!wishlist.length){
    return(
      <div className='flex justify-center h-full items-center'>
        <h2 className='text-5xl font-bold'>No Data Available!</h2>
      </div>
    )
  }

  const sortedItems = (() => {
    if (sortOrder === 'price-asc') {
      return [...wishlist].sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'price-dsc') {
      return [...wishlist].sort((a, b) => b.price - a.price);
    } else {
      return wishlist;
    }
  })();

  const handleRemove = (id) => {
    const existingList = JSON.parse(localStorage.getItem('wishlist'));
    let updatedList = existingList.filter(p => p.id !== id)

    // for UI instant update
    setWishlist(prev => prev.filter(p => p.id !== id));
    localStorage.setItem('wishlist', JSON.stringify(updatedList));
    // console.log(existingList);
  };

  // generate chart data
  const totalsByCategory = {};
  wishlist.forEach(product => {
    const category = product.category;
    totalsByCategory[category] = (totalsByCategory[category] || 0) + product.price;
  });
  const chartData = Object.keys(totalsByCategory).map(category => ({
    category,
    total: totalsByCategory[category],
  }))
  console.log(chartData);

  return (
    <div>
      <div className='flex justify-between items-center'>
        <h2 className='text-2xl font-semibold'>Wishlist Products: <span className='text-sm text text-gray-500'>({sortedItems.length}) products found</span></h2>
        <label className='form-control w-full max-w-xs'>
          <select className='select select-bordered' value={sortOrder} onChange={e => setSortOrder(e.target.value)}>
            <option value="none">Sort by Price</option>
            <option value="price-asc">Low &gt; High</option>
            <option value="price-dsc">High &gt; Low</option>
          </select>
        </label>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 my-4 gap-4'>
        {
          sortedItems.map(p => <div className="card bg-base-100 shadow-sm">
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
                <button onClick={() => handleRemove(p.id)} className="btn btn-outline">Remove</button>
              </div>
            </div>
          </div>)
        }
      </div>

      {/* Chart Data */}
      <div className='space-y-4'>
        <h3 className='text-2xl font-semibold'>Wishlist Summery</h3>
        <div className='bg-base-300 rounded-xl h-80'>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="total" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;

