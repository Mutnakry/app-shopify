import React, { useEffect, useState } from 'react';
import { useCart } from './CartContext';
import recylebin from '../../image/icons8-recycle-bin-50.png'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

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
                                        <p className="ml-6 text-red-600">%{item.discount}</p>
                                        <div className="text-center">
                                            <p className="ml-6 text-gray-600">${item.sale_price}</p>
                                            <p className="ml-6 text-gray-600">មានទំនិញ {item.qty} ក្នុងស្តុក</p>
                                        </div>
                                        <div className="ml-6 flex items-center space-x-2">
                                            <button type='button' className="text-gray-500" onClick={() => handleQuantityChange(item, -1)}>-</button>
                                            <input type="text" className="w-12 text-center border rounded" value={item.quantity} readOnly />
                                            <button type='button' className="text-gray-500" onClick={() => handleQuantityChange(item, 1)}>+</button>
                                        </div>
                                        <p className="ml-6 text-gray-600">${((item.sale_price * item.quantity) - (item.sale_price * item.quantity * (item.discount * 0.01))).toFixed(2)}</p>
                                        <button type='button' onClick={() => removeItem(item.id)} className="ml-6 text-sm text-red-500"><img src={recylebin} alt="" className='h-4 w-4' /></button>
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
                                <button
                                    className="mt-6 bg-pink-500 text-white rounded-lg py-2 w-full"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? "សូមរង់ចាំ..." : "ទឹកប្រាក់រួចរាល់ "}
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            )}
        </div>
    );
}

export default Cart;
