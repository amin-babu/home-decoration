import React from 'react';
import { Link, NavLink } from 'react-router';

const Navber = () => {
  return (
    <div className="bg-base-100 shadow-sm">
      <div className='flex w-11/12 max-w-screen mx-auto items-center justify-between'>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li>
                <NavLink to='/'>Home</NavLink>
              </li>
              <li>
                <NavLink to='products'>Products</NavLink>
              </li>
              <li>
                <NavLink to='wishlist'>Wishlist</NavLink>
              </li>
              <NavLink to='products' className="btn">Visit Shop</NavLink>
            </ul>
          </div>
          <Link to='/' className="cursor-pointer font-bold text-[#4d4339] text-2xl">HomeDecor</Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex">
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='products'>Products</NavLink>
            </li>
            <li>
              <NavLink to='wishlist'>Wishlist</NavLink>
            </li>
          </ul>
          <NavLink to='products' className="btn">Visit Shop</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navber;