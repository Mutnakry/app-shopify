// import React, { useEffect, useState } from 'react';
// import { useCart } from './CartContext';
// import recylebin from '../../image/icons8-recycle-bin-50.png'
// import { Link, useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';

// function Cart({ isAuthenticated }) {
//     const { cart, removeItem, clearCart, updateQuantity } = useCart();
//     const [username, setUsername] = useState('');
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [pay_by, setPay_by] = useState('');
//     const navigate = useNavigate();


//     useEffect(() => {
//         const storedUsername = localStorage.getItem('names');
//         setUsername(storedUsername);
//     }, []);

//     // Subtotal calculation: price minus discount, then multiplied by quantity
//     const subtotal = cart.reduce((acc, item) =>
//         acc + ((item.sale_price - (item.sale_price * (item.discount * 0.01))) * item.quantity),
//         0
//     ).toFixed(2);

//     const amouttotal = cart.reduce((acc, item) =>
//         acc + (item.sale_price * item.quantity),
//         0
//     ).toFixed(2);

//     const amoutdiscount = cart.reduce((acc, item) =>
//         (amouttotal - subtotal),
//         0
//     ).toFixed(2);

//     const subtotalKHR = (subtotal * 41.02).toFixed(2);

//     const handleQuantityChange = (item, delta) => {
//         const newQuantity = item.quantity + delta;

//         if (newQuantity > item.qty) {
//             toast.error(`មានតែទំនិញ ${item.quantity} ប៉ុណ្ណោះក្នុងស្តុក។ !`, {
//                 position: "top-right",
//                 autoClose: 1000,
//             });
//         } else if (newQuantity > 0) {
//             updateQuantity(item.id, newQuantity);
//         } else {
//             removeItem(item.id);
//         }
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         setIsSubmitting(true);
//         if (cart.length === 0) {
//             toast.error('សូមបញ្ជាតិញជាមិនសិន​!', {
//                 position: "top-center",
//                 autoClose: 3000,
//             });
//             return; // Prevent form submission
//         }

//         const orderData = {
//             user_names: username,
//             sub_total: amouttotal,
//             total_dollar: subtotal,
//             total_kh: subtotalKHR,
//             total_dis: amoutdiscount,
//             pay_by: pay_by,
//             status: 1,
//             products: cart.map(item => ({
//                 product_id: item.id,
//                 qty: item.quantity,
//                 price: item.sale_price,
//                 discount: item.discount,
//                 total: (item.sale_price * item.quantity) - (item.sale_price * item.quantity * (item.discount * 0.01))
//             }))
//         };
//         try {
//             const response = await fetch('http://localhost:6700/api/order', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(orderData)
//             });

//             const result = await response.json();
//             if (response.ok) {
//                 toast.success(`បញ្ជាទិញបានជោគជ័យ !`, {
//                     position: "top-right",
//                     autoClose: 3000,
//                 });
//                 clearCart();
//                 // window.location.href = "/";
//                 navigate('/');
//             } else {
//                 toast.error(result.message || 'Failed to place the order!',);
//             }

//         } catch (error) {
//             toast.error(`បញ្ជាទិញមិនបានជោគជ័យ។ !`, {
//                 position: "top-right",
//                 autoClose: 1000,
//             });
//         } finally {
//             setIsSubmitting(false);
//         }
//     };

//     return (
//         <div className='max-w-screen-xl mx-auto'>
//             {cart.length === 0 ? (
//                 <div className="flex items-center justify-center py-40 text-lg text-white font-semibold rounded-full">
//                     <div className="text-center">
//                         <img src="https://aeoncambodia.sgp1.digitaloceanspaces.com/image/inc/empty-cart.png" alt="empty cart" className='h-16 w-16 mx-auto' />
//                         <p className='text-gray-700 py-3 text-xs'> មិនមានផលិតផលនៅក្នុងកន្ត្រក!</p>
//                         <a href="/" className='text-white py-3 px-6 font-serif text-sm rounded-lg bg-pink-600 hover:bg-pink-700'>បន្តទិញទំនិញ</a>
//                     </div>
//                 </div>

//             ) : (
//                 <form onSubmit={handleSubmit}>
//                     <div class="flex items-center mb-4">
//                         <a href="/"> <h3 class="ml-2 text-lg text-white font-semibold bg-fuchsia-700 py-2 px-12 rounded-full">បន្តទិញទំនិញ</h3></a>
//                     </div>
//                     <div className=' max-w-screen-xl mx-auto'>
//                         <div className="flex flex-col lg:flex-row gap-6">
//                             {/* Left Section: Product List */}
//                             <div className="bg-slate-50 rounded-lg overflow-x-auto p-4 flex-1 shadow-lg">
//                                 <div className="flex items-center mb-4 justify-between">
//                                     <div className='flex'>
//                                         <a href="/">
//                                             <h3 className="ml-2 text-lg font-semibold text-pink-500">Shoping - Online PHNOM PENH</h3>
//                                         </a>
//                                     </div>
//                                     <div className='flex' onClick={clearCart}>
//                                         <p className="ml-6 text-md text-red-500 cursor-pointer px-2">លុបចេញពីហាង</p>
//                                         <img src={recylebin} alt="" className='h-6 w-6 cursor-pointer' />
//                                     </div>
//                                 </div>

//                                 {/* Product Item */}
//                                 {cart.map((item, index) => (
//                                     <div className="flex items-center border-b border-gray-200 py-4" key={index.id}>
//                                         <span>{index + 1}</span>
//                                         <div className="flex items-center ml-4 space-x-4">
//                                             <img src={`http://localhost:6700/image/${item.image}`} alt="Product" className="w-20 h-20 object-cover" />
//                                             <div>
//                                                 <p className="font-semibold">{item.names}</p>
//                                                 <p className="text-gray-500">{item.discription}</p>
//                                                 <p className="text-gray-400 text-sm">លេខកូដ: 884710759{item.id}</p>
//                                             </div>
//                                         </div>
//                                         <div>
//                                             <p className="ml-6 text-red-600">%{item.discount}</p>
//                                         </div>
//                                         <div className="text-center">
//                                             <p className="ml-6 text-gray-600 whitespace-nowrap">${item.sale_price}</p>
//                                             <p className="ml-6 text-gray-600 whitespace-nowrap">មានទំនិញ <span className='text-red-600'>{item.qty} </span>ក្នុងស្តុក</p>
//                                         </div>
//                                         <div className="flex items-center ml-6 border border-pink-500 rounded-md  justify-between">
//                                             <button type='button' className="text-gray-500 text-xl hover:text-white rounded-l-md hover:bg-pink-400 px-4" onClick={() => handleQuantityChange(item, -1)}>-</button>
//                                             <input type="text" className="w-12 text-center border-l text-xl border-r border-pink-500" value={item.quantity} readOnly />
//                                             <button type='button' className="text-gray-500 text-xl hover:text-white rounded-r-md hover:bg-pink-400 px-4" onClick={() => handleQuantityChange(item, 1)}>+</button>
//                                         </div>
//                                         <div>
//                                             <p className="ml-6 text-gray-600">${((item.sale_price * item.quantity) - (item.sale_price * item.quantity * (item.discount * 0.01))).toFixed(2)}</p>
//                                         </div>
//                                          <button type='button' onClick={() => removeItem(item.id)} className="ml-6 w-5 text-md text-red-500"><img src={recylebin} alt="" className='h-4 w-4' /></button>
//                                     </div>
//                                 ))}
//                             </div>
//                             {/* Right Section: Summary */}
//                             <div className="bg-slate-50 rounded-lg p-4 w-full lg:w-1/3 shadow-md">
//                                 <h3 className="text-lg font-semibold mb-4">សរុប</h3>
//                                 <div className="border-t border-b border-gray-200 py-2 flex justify-between">
//                                     <span className="text-gray-500">សរុបរង</span>
//                                     <span className="font-semibold">${amouttotal}</span>
//                                 </div>
//                                 <div className=" py-2 flex justify-between">
//                                     <span className="text-gray-500">សរុប</span>
//                                     <span className="font-semibold">${subtotal}</span>
//                                 </div>
//                                 <div className=" py-2 flex justify-between">
//                                     <span className="text-gray-500">សរុបជាប្រាក់រៀល</span>
//                                     <span className="font-semibold">{subtotalKHR} KHR</span>
//                                 </div>
//                                 <div className=" py-2 flex justify-between">
//                                     <span className="text-gray-500">សន្សំ</span>
//                                     <span className="font-semibold text-red-500">$ {amoutdiscount}</span>
//                                 </div>
//                                 <div className=" py-2 flex justify-between">
//                                     <span className="text-gray-500">បញ្ជាទិញដោយ</span>
//                                     <span>
//                                         <select name="" id="" value={pay_by}
//                                             onChange={(e) => setPay_by(e.target.value)}
//                                             className='bg-pink-300 py-1.5 px-6 rounded-lg text-md font-serif'>
//                                             <option value="payment">All payment</option>
//                                             <option value="cash">Cash</option>
//                                             <option value="card">Card</option>
//                                         </select>
//                                     </span>
//                                 </div>
//                                 <button
//                                     className="mt-6 bg-pink-500 text-white rounded-lg py-2 w-full"
//                                     disabled={isSubmitting}
//                                 >
//                                     {isSubmitting ? "សូមរង់ចាំ..." : "ទឹកប្រាក់រួចរាល់ "}
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </form>
//             )}
//         </div>
//     );
// }

// export default Cart;


import React, { useEffect, useState } from 'react';
import { useCart } from './CartContext';
import recylebin from '../../image/icons8-recycle-bin-50.png'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import qr from '../../image/qr.jpg'

function Cart({ isAuthenticated }) {
    const { cart, removeItem, clearCart, updateQuantity } = useCart();
    const [username, setUsername] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [pay_by, setPay_by] = useState('');
    const navigate = useNavigate();


    useEffect(() => {
        const storedUsername = localStorage.getItem('names');
        setUsername(storedUsername);
    }, []);

    // Subtotal calculation: price minus discount, then multiplied by quantity
    const subtotal = cart.reduce((acc, item) =>
        acc + ((item.sale_price - (item.sale_price * (item.discount * 0.01))) * item.quantity),
        0
    ).toFixed(2);

    const amouttotal = cart.reduce((acc, item) =>
        acc + (item.sale_price * item.quantity),
        0
    ).toFixed(2);

    const amoutdiscount = cart.reduce((acc, item) =>
        (amouttotal - subtotal),
        0
    ).toFixed(2);

    const subtotalKHR = (subtotal * 41.02).toFixed(2);

    const handleQuantityChange = (item, delta) => {
        const newQuantity = item.quantity + delta;

        if (newQuantity > item.qty) {
            toast.error(`មានតែទំនិញ ${item.quantity} ប៉ុណ្ណោះក្នុងស្តុក។ !`, {
                position: "top-right",
                autoClose: 1000,
            });
        } else if (newQuantity > 0) {
            updateQuantity(item.id, newQuantity);
        } else {
            removeItem(item.id);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        if (cart.length === 0) {
            toast.error('សូមបញ្ជាតិញជាមិនសិន​!', {
                position: "top-center",
                autoClose: 3000,
            });
            return; // Prevent form submission
        }

        const orderData = {
            user_names: username,
            sub_total: amouttotal,
            total_dollar: subtotal,
            total_kh: subtotalKHR,
            total_dis: amoutdiscount,
            pay_by: pay_by,
            status: 1,
            products: cart.map(item => ({
                product_id: item.id,
                qty: item.quantity,
                price: item.sale_price,
                discount: item.discount,
                total: (item.sale_price * item.quantity) - (item.sale_price * item.quantity * (item.discount * 0.01))
            }))
        };
        try {
            const response = await fetch('http://localhost:6700/api/order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(orderData)
            });

            const result = await response.json();
            if (response.ok) {
                toast.success(`បញ្ជាទិញបានជោគជ័យ !`, {
                    position: "top-right",
                    autoClose: 3000,
                });
                clearCart();
                // window.location.href = "/";
                navigate('/');
            } else {
                toast.error(result.message || 'Failed to place the order!',);
            }

        } catch (error) {
            toast.error(`បញ្ជាទិញមិនបានជោគជ័យ។ !`, {
                position: "top-right",
                autoClose: 1000,
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className='max-w-screen-xl mx-auto'>
            {cart.length === 0 ? (
                <div className="flex items-center justify-center py-40 text-lg text-white font-semibold rounded-full">
                    <div className="text-center">
                        <img src="https://aeoncambodia.sgp1.digitaloceanspaces.com/image/inc/empty-cart.png" alt="empty cart" className='h-16 w-16 mx-auto' />
                        <p className='text-gray-700 py-3 text-xs'> មិនមានផលិតផលនៅក្នុងកន្ត្រក!</p>
                        <a href="/" className='text-white py-3 px-6 font-serif text-sm rounded-lg bg-pink-600 hover:bg-pink-700'>បន្តទិញទំនិញ</a>
                    </div>
                </div>

            ) : (
                <form onSubmit={handleSubmit}>
                    <div class="flex items-center mb-4">
                        <a href="/"> <h3 class="ml-2 text-lg text-white font-semibold bg-fuchsia-700 py-2 px-12 rounded-full">បន្តទិញទំនិញ</h3></a>
                    </div>
                    <div className=' max-w-screen-xl mx-auto'>
                        <div className="flex flex-col lg:flex-row gap-6">
                            {/* Left Section: Product List */}
                            <div className="bg-slate-50 rounded-lg overflow-x-auto p-4 flex-1 shadow-lg">
                                <div className="flex items-center mb-4 justify-between">
                                    <div className='flex'>
                                        <a href="/">
                                            <h3 className="ml-2 text-lg font-semibold text-pink-500">Shoping - Online PHNOM PENH</h3>
                                        </a>
                                    </div>
                                    <div className='flex' onClick={clearCart}>
                                        <p className="ml-6 text-md text-red-500 cursor-pointer px-2">លុបចេញពីហាង</p>
                                        <img src={recylebin} alt="" className='h-6 w-6 cursor-pointer' />
                                    </div>
                                </div>

                                {/* Product Item */}
                                {cart.map((item, index) => (
                                    <div className="flex items-center border-b border-gray-200 py-4" key={index.id}>
                                        <span>{index + 1}</span>
                                        <div className="flex items-center ml-4 space-x-4">
                                            <img src={`http://localhost:6700/image/${item.image}`} alt="Product" className="w-20 h-20 object-cover" />
                                            <div>
                                                <p className="font-semibold">{item.names}</p>
                                                <p className="text-gray-500">{item.discription}</p>
                                                <p className="text-gray-400 text-sm">លេខកូដ: 884710759{item.id}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="ml-6 text-red-600">%{item.discount}</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="ml-6 text-gray-600 whitespace-nowrap">${item.sale_price}</p>
                                            <p className="ml-6 text-gray-600 whitespace-nowrap">មានទំនិញ <span className='text-red-600'>{item.qty} </span>ក្នុងស្តុក</p>
                                        </div>
                                        <div className="flex items-center ml-6 border border-pink-500 rounded-md  justify-between">
                                            <button type='button' className="text-gray-500 text-xl hover:text-white rounded-l-md hover:bg-pink-400 px-4" onClick={() => handleQuantityChange(item, -1)}>-</button>
                                            <input type="text" className="w-12 text-center border-l text-xl border-r border-pink-500" value={item.quantity} readOnly />
                                            <button type='button' className="text-gray-500 text-xl hover:text-white rounded-r-md hover:bg-pink-400 px-4" onClick={() => handleQuantityChange(item, 1)}>+</button>
                                        </div>
                                        <div>
                                            <p className="ml-6 text-gray-600">${((item.sale_price * item.quantity) - (item.sale_price * item.quantity * (item.discount * 0.01))).toFixed(2)}</p>
                                        </div>
                                        <button type='button' onClick={() => removeItem(item.id)} className="ml-6 w-5 text-md text-red-500"><img src={recylebin} alt="" className='h-4 w-4' /></button>
                                    </div>
                                ))}
                            </div>
                            {/* Right Section: Summary */}
                            <div className="bg-slate-50 rounded-lg p-4 w-full lg:w-1/3 shadow-md">
                                <h3 className="text-lg font-semibold mb-4">សរុប</h3>
                                <div className="border-t border-b border-gray-200 py-2 flex justify-between">
                                    <span className="text-gray-500">សរុបរង</span>
                                    <span className="font-semibold">${amouttotal}</span>
                                </div>
                                <div className=" py-2 flex justify-between">
                                    <span className="text-gray-500">សរុប</span>
                                    <span className="font-semibold">${subtotal}</span>
                                </div>
                                <div className=" py-2 flex justify-between">
                                    <span className="text-gray-500">សរុបជាប្រាក់រៀល</span>
                                    <span className="font-semibold">{subtotalKHR} KHR</span>
                                </div>
                                <div className=" py-2 flex justify-between">
                                    <span className="text-gray-500">សន្សំ</span>
                                    <span className="font-semibold text-red-500">$ {amoutdiscount}</span>
                                </div>
                                <div className=" py-2 flex justify-between">
                                    <span className="text-gray-500">បញ្ជាទិញដោយ</span>
                                    <span>
                                        <select name="" id="" value={pay_by}
                                            onChange={(e) => setPay_by(e.target.value)}
                                            className='bg-pink-300 py-1.5 px-6 rounded-lg text-md font-serif'>
                                            <option value="payment">All payment</option>
                                            <option value="cash">Cash</option>
                                            <option value="card">Card</option>
                                        </select>
                                    </span>
                                </div>
                                {(() => {
                                    let buttonText;
                                    switch (pay_by) {
                                        case 'card':
                                            buttonText = isSubmitting ? "សូមរង់ចាំ..." : "ទឹកប្រាក់បងតាម Cart";
                                            <button data-modal-target="static-modal" data-modal-toggle="static-modal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                                                {buttonText}
                                            </button>

                                            break;
                                        case 'cash':
                                            buttonText = isSubmitting ? "សូមរង់ចាំ..." : "ទឹកប្រាក់បងតាម Cash";
                                            break;
                                        default:
                                            buttonText = isSubmitting ? "សូមរង់ចាំ..." : "ទឹកប្រាក់បងតាម All payment";

                                            break;
                                    }
                                    return (
                                        <div>
                                            {/* <button
                                                className="mt-6 bg-pink-500   text-white rounded-lg py-2 w-full"
                                                disabled={isSubmitting}
                                            >
                                                {buttonText}
                                            </button> */}

                                            <button
                                                data-modal-target="static-modal"
                                                data-modal-toggle="static-modal"
                                                className="mt-6 bg-pink-500 text-white rounded-lg py-2 w-full"
                                                type="button">
                                                {buttonText}
                                            </button>
                                        </div>
                                    );
                                })()}
                            </div>

                            {/* <div id="static-modal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 items-center justify-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                                <div class="relative p-4 w-full max-w-sm max-h-full bg-gray-100 rounded-lg shadow-xl dark:bg-gray-700">
                                    <div class="flex items-center justify-between p-4 md:p-5">
                                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                            ជ្រើសរើសគណនីបងប្រាក់
                                        </h3>
                                        <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="static-modal">
                                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                            </svg>
                                            <span class="sr-only">Close modal</span>
                                        </button>
                                    </div>
                                    <div className=" flex space-x-2 pb-2">
                                        <span className="font-semibold text-sm underline underline-offset-4" id='kh'>បងជាប្រាក់រៀល</span>
                                        <span className="font-semibold text-sm underline underline-offset-4" id='en'>បងជាប្រាក់ដុល្លារ</span>
                                    </div>
                                    <div class="flex flex-col items-center justify-center flex-grow space-y-4">
                                        <div className='flex flex-col items-center justify-center text-center ' id='en'>
                                            <div className=" flex space-x-4 pb-2 ">
                                                <span className="text-gray-500">សរុប</span>
                                                <span className="font-semibold">${subtotal}</span>
                                            </div>
                                            <img src={qr} alt="" className="max-w-full max-h-full object-contain" />
                                        </div>
                                        <div className='flex flex-col items-center justify-center text-center ' id='kh'>
                                            <div className=" flex space-x-4 pb-2">
                                                <span className="text-gray-500">សរុប</span>
                                                <span className="font-semibold uppercase">{subtotalKHR} khr</span>
                                            </div>
                                            <img src={qr} alt="" className="max-w-full max-h-full object-contain" />
                                        </div>

                                    </div>
                                    <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                                        <button data-modal-hide="static-modal" type="button" class="text-white py-2 px-12 bg-pink-400 rounded-lg hover:bg-pink-500">បង់ឥឡូវនេះ</button>
                                    </div>
                                </div>
                            </div> */}

                            <div id="static-modal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 items-center justify-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                                <div class="relative p-4 w-full max-w-sm max-h-full bg-gray-100 rounded-lg shadow-xl dark:bg-gray-700">
                                    <div class="flex items-center justify-between p-4 md:p-5">
                                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                            ជ្រើសរើសគណនីបងប្រាក់
                                        </h3>
                                        <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="static-modal">
                                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                            </svg>
                                            <span class="sr-only">Close modal</span>
                                        </button>
                                    </div>
                                    <div className="flex space-x-2 pb-2">
                                        <span className="font-semibold text-sm underline underline-offset-4" id='kh'>បងជាប្រាក់រៀល</span>
                                        <span className="font-semibold text-sm underline underline-offset-4" id='en'>បងជាប្រាក់ដុល្លារ</span>
                                    </div>
                                    <div class="flex flex-col md:flex-row items-center justify-center flex-grow space-y-4 md:space-y-0 md:space-x-4">
                                        {/* <!-- Currency 1 --> */}
                                        <div className='flex flex-col items-center justify-center text-center' id='en'>
                                            <div className="flex space-x-4 pb-2">
                                                <span className="text-gray-500">សរុប</span>
                                                <span className="font-semibold">${subtotal}</span>
                                            </div>
                                            <img src={qr} alt="" className="max-w-full max-h-full object-contain" />
                                        </div>
                                        {/* <!-- Currency 2 --> */}
                                        <div className='flex flex-col items-center justify-center text-center' id='kh'>
                                            <div className="flex space-x-4 pb-2">
                                                <span className="text-gray-500">សរុប</span>
                                                <span className="font-semibold uppercase">{subtotalKHR} khr</span>
                                            </div>
                                            <img src={qr} alt="" className="max-w-full max-h-full object-contain" />
                                        </div>
                                    </div>
                                    <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                                        <button data-modal-hide="static-modal" type="button" class="text-white py-2 px-12 bg-pink-400 rounded-lg hover:bg-pink-500">បង់ឥឡូវនេះ</button>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </form>
            )}
        </div>
    );
}

export default Cart;



















// import React, { useEffect, useState } from 'react';
// import { useCart } from './CartContext';
// import recylebin from '../../image/icons8-recycle-bin-50.png'
// import { Link, useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';

// function Cart({ isAuthenticated }) {
//     const { cart, removeItem, clearCart, updateQuantity } = useCart();
//     const [username, setUsername] = useState('');
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [showModal, setShowModal] = useState(false);

//     const [pay_by, setPay_by] = useState('');
//     const navigate = useNavigate();


//     useEffect(() => {
//         const storedUsername = localStorage.getItem('names');
//         setUsername(storedUsername);
//     }, []);

//     // Subtotal calculation: price minus discount, then multiplied by quantity
//     const subtotal = cart.reduce((acc, item) =>
//         acc + ((item.sale_price - (item.sale_price * (item.discount * 0.01))) * item.quantity),
//         0
//     ).toFixed(2);

//     const amouttotal = cart.reduce((acc, item) =>
//         acc + (item.sale_price * item.quantity),
//         0
//     ).toFixed(2);

//     const amoutdiscount = cart.reduce((acc, item) =>
//         (amouttotal - subtotal),
//         0
//     ).toFixed(2);

//     const subtotalKHR = (subtotal * 41.02).toFixed(2);

//     const handleQuantityChange = (item, delta) => {
//         const newQuantity = item.quantity + delta;

//         if (newQuantity > item.qty) {
//             toast.error(`មានតែទំនិញ ${item.quantity} ប៉ុណ្ណោះក្នុងស្តុក។ !`, {
//                 position: "top-right",
//                 autoClose: 1000,
//             });
//         } else if (newQuantity > 0) {
//             updateQuantity(item.id, newQuantity);
//         } else {
//             removeItem(item.id);
//         }
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         setIsSubmitting(true);

//         if (cart.length === 0) {
//             toast.error('សូមបញ្ជាតិញជាមិនសិន​!', {
//                 position: "top-center",
//                 autoClose: 3000,
//             });
//             setIsSubmitting(false);
//             return;
//         }

//         if (pay_by === 'card') {
//             setShowModal(true);
//             setIsSubmitting(false);
//             return;
//         }

//         const orderData = {
//             user_names: username,
//             sub_total: amouttotal,
//             total_dollar: subtotal,
//             total_kh: subtotalKHR,
//             total_dis: amoutdiscount,
//             pay_by: pay_by,
//             status: 1,
//             products: cart.map(item => ({
//                 product_id: item.id,
//                 qty: item.quantity,
//                 price: item.sale_price,
//                 discount: item.discount,
//                 total: (item.sale_price * item.quantity) - (item.sale_price * item.quantity * (item.discount * 0.01))
//             }))
//         };

//         try {
//             const response = await fetch('http://localhost:6700/api/order1', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(orderData)
//             });

//             const result = await response.json();
//             if (response.ok) {
//                 toast.success(`បញ្ជាទិញបានជោគជ័យ !`, {
//                     position: "top-right",
//                     autoClose: 3000,
//                 });
//                 clearCart();
//                 navigate('/');
//             } else {
//                 toast.error(result.message || 'Failed to place the order!');
//             }

//         } catch (error) {
//             toast.error(`បញ្ជាទិញមិនបានជោគជ័យ។ !`, {
//                 position: "top-right",
//                 autoClose: 1000,
//             });
//         } finally {
//             setIsSubmitting(false);
//         }
//     };

//     const handleModalConfirm = async () => {
//         setShowModal(false);
//         await handleSubmit({ preventDefault: () => {} });
//     };

//     return (
//         <div className='max-w-screen-xl mx-auto'>
//             {cart.length === 0 ? (
//                 <div className="flex items-center justify-center py-40 text-lg text-white font-semibold rounded-full">
//                     <div className="text-center">
//                         <img src="https://aeoncambodia.sgp1.digitaloceanspaces.com/image/inc/empty-cart.png" alt="empty cart" className='h-16 w-16 mx-auto' />
//                         <p className='text-gray-700 py-3 text-xs'> មិនមានផលិតផលនៅក្នុងកន្ត្រក!</p>
//                         <a href="/" className='text-white py-3 px-6 font-serif text-sm rounded-lg bg-pink-600 hover:bg-pink-700'>បន្តទិញទំនិញ</a>
//                     </div>
//                 </div>

//             ) : (
//                 <form onSubmit={handleSubmit}>
//                     <div class="flex items-center mb-4">
//                         <a href="/"> <h3 class="ml-2 text-lg text-white font-semibold bg-fuchsia-700 py-2 px-12 rounded-full">បន្តទិញទំនិញ</h3></a>
//                     </div>
//                     <div className=' max-w-screen-xl mx-auto'>
//                         <div className="flex flex-col lg:flex-row gap-6">
//                             {/* Left Section: Product List */}
//                             <div className="bg-slate-50 rounded-lg overflow-x-auto p-4 flex-1 shadow-lg">
//                                 <div className="flex items-center mb-4 justify-between">
//                                     <div className='flex'>
//                                         <a href="/">
//                                             <h3 className="ml-2 text-lg font-semibold text-pink-500">Shoping - Online PHNOM PENH</h3>
//                                         </a>
//                                     </div>
//                                     <div className='flex' onClick={clearCart}>
//                                         <p className="ml-6 text-md text-red-500 cursor-pointer px-2">លុបចេញពីហាង</p>
//                                         <img src={recylebin} alt="" className='h-6 w-6 cursor-pointer' />
//                                     </div>
//                                 </div>

//                                 {/* Product Item */}
//                                 {cart.map((item, index) => (
//                                     <div className="flex items-center border-b border-gray-200 py-4" key={index.id}>
//                                         <span>{index + 1}</span>
//                                         <div className="flex items-center ml-4 space-x-4">
//                                             <img src={`http://localhost:6700/image/${item.image}`} alt="Product" className="w-20 h-20 object-cover" />
//                                             <div>
//                                                 <p className="font-semibold">{item.names}</p>
//                                                 <p className="text-gray-500">{item.discription}</p>
//                                                 <p className="text-gray-400 text-sm">លេខកូដ: 884710759{item.id}</p>
//                                             </div>
//                                         </div>
//                                         <div>
//                                             <p className="ml-6 text-red-600">%{item.discount}</p>
//                                         </div>
//                                         <div className="text-center">
//                                             <p className="ml-6 text-gray-600 whitespace-nowrap">${item.sale_price}</p>
//                                             <p className="ml-6 text-gray-600 whitespace-nowrap">មានទំនិញ <span className='text-red-600'>{item.qty} </span>ក្នុងស្តុក</p>
//                                         </div>
//                                         <div className="flex items-center ml-6 border border-pink-500 rounded-md  justify-between">
//                                             <button type='button' className="text-gray-500 text-xl hover:text-white rounded-l-md hover:bg-pink-400 px-4" onClick={() => handleQuantityChange(item, -1)}>-</button>
//                                             <input type="text" className="w-12 text-center border-l text-xl border-r border-pink-500" value={item.quantity} readOnly />
//                                             <button type='button' className="text-gray-500 text-xl hover:text-white rounded-r-md hover:bg-pink-400 px-4" onClick={() => handleQuantityChange(item, 1)}>+</button>
//                                         </div>
//                                         <div>
//                                             <p className="ml-6 text-gray-600">${((item.sale_price * item.quantity) - (item.sale_price * item.quantity * (item.discount * 0.01))).toFixed(2)}</p>
//                                         </div>
//                                         <button type='button' onClick={() => removeItem(item.id)} className="ml-6 w-5 text-md text-red-500"><img src={recylebin} alt="" className='h-4 w-4' /></button>
//                                     </div>
//                                 ))}
//                             </div>
//                             {/* Right Section: Summary */}
//                             <div className="bg-slate-50 rounded-lg p-4 w-full lg:w-1/3 shadow-md">
//                                 <h3 className="text-lg font-semibold mb-4">សរុប</h3>
//                                 <div className="border-t border-b border-gray-200 py-2 flex justify-between">
//                                     <span className="text-gray-500">សរុបរង</span>
//                                     <span className="font-semibold">${amouttotal}</span>
//                                 </div>
//                                 <div className=" py-2 flex justify-between">
//                                     <span className="text-gray-500">សរុប</span>
//                                     <span className="font-semibold">${subtotal}</span>
//                                 </div>
//                                 <div className=" py-2 flex justify-between">
//                                     <span className="text-gray-500">សរុបជាប្រាក់រៀល</span>
//                                     <span className="font-semibold">{subtotalKHR} KHR</span>
//                                 </div>
//                                 <div className=" py-2 flex justify-between">
//                                     <span className="text-gray-500">សន្សំ</span>
//                                     <span className="font-semibold text-red-500">$ {amoutdiscount}</span>
//                                 </div>
//                                 <div className=" py-2 flex justify-between">
//                                     <span className="text-gray-500">បញ្ជាទិញដោយ</span>
//                                     <span>
//                                         <select name="" id="" value={pay_by}
//                                             onChange={(e) => setPay_by(e.target.value)}
//                                             className='bg-pink-300 py-1.5 px-6 rounded-lg text-md font-serif'>
//                                             <option value="payment">All payment</option>
//                                             <option value="cash">Cash</option>
//                                             <option value="card">Card</option>
//                                         </select>
//                                     </span>
//                                 </div>
//                                 <button
//                                     type="submit"
//                                     className={`mt-4 w-full py-2 rounded-md text-white ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-pink-600 hover:bg-pink-700'}`}
//                                     disabled={isSubmitting}
//                                 >
//                                     {isSubmitting ? 'Processing...' : 'Place Order'}
//                                 </button>
//                             </div>
//                             {showModal && pay_by === 'card' && (
//                                 <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
//                                     <div className="bg-white p-6 rounded-lg shadow-lg">
//                                         <h2 className="text-lg font-semibold mb-4">Confirm Payment</h2>
//                                         <p className="mb-4">Are you sure you want to pay with a card?</p>
//                                         <div className="flex justify-between">
//                                             <button
//                                                 className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
//                                                 onClick={handleModalConfirm}
//                                                 disabled={isSubmitting}
//                                             >
//                                                 Confirm
//                                             </button>
//                                             <button
//                                                 className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
//                                                 onClick={() => setShowModal(false)}
//                                             >
//                                                 Cancel
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 </form>
//             )}
//         </div>
//     );
// }

// export default Cart;

