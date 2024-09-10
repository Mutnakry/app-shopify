
import carticon from '../image/icons8-cart-24.png'
import React, { useState, useEffect } from 'react'
import user from '../image/icons8-user-50.png';
import logout from '../image/icons8-logout-24.png';
import { useCart } from '../pages/sale/CartContext';
import Login from './Login';
import Register from './Register';
import { Link } from 'react-router-dom';

function Header({ isAuthenticated }) {
  const [isLoginForm, setIsInsertModalOpen] = useState(false);
  const [isRegisterForm, setIsRegisterForm] = useState(false);
  const [getphone, setphone] = useState('');
  const [username, setUsername] = useState('');


  // Subtotal calculation: price minus discount, then multiplied by quantity
  const { cart } = useCart();
  const subtotal = cart.reduce((acc, item) =>
    acc + ((item.sale_price - (item.sale_price * (item.discount * 0.01))) * item.quantity),
    0
  ).toFixed(2);

  const totalcount = cart.reduce((acc, item) =>
    acc + 1,
    0
  );

  useEffect(() => {
    const userType = localStorage.getItem('phone');
    const storedUsername = localStorage.getItem('names');
    setphone(userType);
    setUsername(storedUsername);
  }, []);

  const openInsertModal = () => {
    setIsInsertModalOpen(true);
  };

  const closeInsertModal = () => {
    setIsInsertModalOpen(false);
  };


  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('rol');
    localStorage.removeItem('names');
    localStorage.removeItem('phone');
    window.location.href = "/";
  };

  return (
    <nav class="bg-fuchsia-700 dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 whitespace-nowrap" >

        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            className="rounded-full h-10 w-10"
            src="https://cdn-icons-png.freepik.com/512/2504/2504814.png"
            alt="Flowbite Logo"
          />
          <span
            className="self-center text-slate-50 text-2xl font-semibold whitespace-nowrap hidden md:block"
          >
            ហាងលក់ទំនេញ
          </span>
        </a>
        <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-slate-50 rounded-lg md:hidden hover:bg-gray-100 hover:text-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className="flex items-center md:order-2 space-x-2 md:space-x-4 rtl:space-x-reverse">
          <div >
            {!username &&
              <a href="#" onClick={openInsertModal} className="flex items-center p-2 text-slate-50 rounded-lg dark:hover:bg-gray-700 group">
                <img src={user} alt="User" className="h-6 w-6" />
                <span className="flex-1 ms-3 whitespace-nowrap"> ចុះឈ្មោះ</span>
              </a>}
          </div>
          {username && (
            <div className='flex space-x-4'>
              <span className="block uppercase underline text-sm  cursor-wait text-white dark:text-white">{username}</span>
              <button type="button" className="flex text-sm  rounded-full " id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                <span className="sr-only">Open user menu</span>
                <img className="w-6 h-6 rounded-full" src={logout} alt="user photo" />
              </button>
              <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">

                <div className="px-4 py-3">
                  <span className="block text-sm text-gray-900 dark:text-white">ឈ្មោះ {username}</span>
                  <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">លេខទូរស័ព្ទ {getphone}</span>
                </div>
                <ul className="py-2" aria-labelledby="user-menu-button">
                  <li>
                    <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                  </li>
                  <li>
                    {/* <a href="/historyby{username}" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">ប្រវត្តិទិញទំនិញ</a> */}
                    <Link to={`/historyby/${username}/${getphone}`}  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">ប្រវត្តិទិញទំនិញ</Link>
                  </li>
                  <li>
                    <a href="#" onClick={handleLogout} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>

                  </li>
                </ul>
              </div>
            </div>
          )}
          <div className=' relative cursor-pointer hover:scale-125 duration-500'>
            <a href="/cart">
              <img src={carticon} alt="" className='h-8 w-8' />
              <span className={`absolute top-0 right-0 bg-white text-pink-600 text-md w-4 h-4 rounded-full flex justify-center items-center ${subtotal === '0.00' ? 'disabled' : ''}`}>{totalcount}</span>
            </a>
          </div>
          {/*disabled style css */}
          <span className={`text-white ${subtotal === '0.00' ? 'disabled' : ''}`}>$ {subtotal}</span>

        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4  rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

            <li>
              <a href="#" className="block py-2 px-3 text-white font-medium hover:text-blue-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-white font-medium rounded hover:text-blue-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-white font-medium rounded hover:text-blue-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      {/* Modal login and register */}
      {isLoginForm && (
        <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
          <div className="relative w-full max-w-md bg-white rounded-lg shadow dark:bg-gray-700">
            {/* Modal Header */}
            <div className="flex justify-between items-center px-6 pt-6 rounded-t dark:border-gray-600">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  សូមស្វាគមន៍មកកាន់ផ្សាររបស់យើង
                </h3>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  សម្រាប់អតិថិជនថ្មីសូមចុច "ចុះឈ្មោះ"
                </p>
              </div>
              <button onClick={closeInsertModal} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="insert-modal">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </button>
            </div>
            {/* Modal Body */}
            <div className="p-6 space-y-2">
              <div className="flex space-x-4">
                <button
                  onClick={() => setIsRegisterForm(false)}
                  className={` font-semibold ${!isRegisterForm ? 'underline text-pink-600' : ' text-gray-800'}`}
                >
                  ចុះឈ្មោះ
                </button>
                <button
                  onClick={() => setIsRegisterForm(true)}
                  className={`font-semibold ${isRegisterForm ? 'text-pink-600 underline' : ' text-gray-800'}`}
                >
                  ចូល
                </button>
              </div>
              {isRegisterForm ? <Login /> : <Register />}
            </div>
          </div>
        </div>
      )}
    </nav>

  )
}

export default Header