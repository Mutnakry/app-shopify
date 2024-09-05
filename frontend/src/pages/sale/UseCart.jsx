


import React from 'react';
import { useCart } from './CartContext';
import { toast } from 'react-toastify';

function Cart({ isAuthenticated }) {
    const { cart, removeItem, clearCart, updateQuantity } = useCart();

    // Subtotal calculation: price minus discount, then multiplied by quantity
    const subtotal = cart.reduce((acc, item) =>
        acc + ((item.sale_price - (item.sale_price * (item.discount * 0.01))) * item.quantity),
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

    return (
        <div className='max-w-screen-xl mx-auto'>

            <div className=' max-w-screen-xl mx-auto'>

                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Left Section: Product List */}
                    <div className="bg-slate-50 rounded-lg overflow-x-auto p-4 flex-1 shadow-lg">
                        <div className="flex items-center mb-4 justify-between">
                            <div className='flex'>
                                <input type="checkbox" className="form-checkbox rounded-full text-pink-500" />
                                <a href="/">
                                    <h3 className="ml-2 text-lg font-semibold text-pink-500">AEON1 - AEON PHNOM PENH</h3>
                                </a>
                            </div>
                            <div>
                                <button onClick={clearCart} className="ml-6 text-md text-red-500 px-2">លុបចេញពីហាង 🗑</button>
                            </div>
                        </div>

                        {/* Product Item */}
                        {cart.map((item,index) => (
                            <div className="flex items-center border-b border-gray-200 py-4" key={index.id}>
                                <span>{index + 1}</span>
                                <div className="flex items-center ml-4 space-x-4">
                                    <img src={`http://localhost:6700/image/${item.image}`} alt="Product" className="w-20 h-20 object-cover" />
                                    <div>
                                        <p className="font-semibold">{item.names}</p>
                                        <p className="text-gray-500">{item.discription}</p>
                                        <p className="text-gray-400 text-sm">លេខកូដ: 8847107593330</p>
                                    </div>
                                </div>
                                <p className="ml-6 text-red-600">%{item.discount}</p>
                                <div className="text-center">
                                    <p className="ml-6 text-gray-600">${item.sale_price}</p>
                                    <p className="ml-6 text-gray-600">មានទំនិញ {item.qty} ក្នុងស្តុក</p>
                                </div>
                                <div className="ml-6 flex items-center space-x-2">
                                    <button className="text-gray-500" onClick={() => handleQuantityChange(item, -1)}>-</button>
                                    <input type="text" className="w-12 text-center border rounded" value={item.quantity} readOnly />
                                    <button className="text-gray-500" onClick={() => handleQuantityChange(item, 1)}>+</button>
                                </div>
                                <p className="ml-6 text-gray-600">${((item.sale_price * item.quantity) - (item.sale_price * item.quantity * (item.discount * 0.01))).toFixed(2)}</p>
                                <button onClick={() => removeItem(item.id)} className="ml-6 text-sm text-red-500">🗑</button>
                            </div>
                        ))}
                    </div>

                    {/* Right Section: Summary */}
                    <div className="bg-slate-50 rounded-lg p-4 w-full lg:w-1/3 shadow-md">
                        <h3 className="text-lg font-semibold mb-4">សរុប</h3>
                        <div className="border-t border-b border-gray-200 py-2 flex justify-between">
                            <span className="text-gray-500">សរុបរង</span>
                            <span className="font-semibold">${subtotal}</span> {/* Display subtotal */}
                        </div>
                        <div className=" py-2 flex justify-between">
                            <span className="text-gray-500">សរុប</span>
                            <span className="font-semibold">${subtotal}</span> {/* Display subtotal */}
                        </div>
                        <div className=" py-2 flex justify-between">
                            <span className="text-gray-500">សរុបជាប្រាក់រៀល</span>
                            <span className="font-semibold">{subtotalKHR} KHR</span> {/* Display subtotal */}
                        </div>
                        <div className=" py-2 flex justify-between">
                            <span className="text-gray-500">សន្សំ</span>
                            <span className="font-semibold text-red-500">$ 0.00</span> {/* Display subtotal */}
                        </div>
                        <button className="mt-6 bg-pink-500 text-white rounded-lg py-2 w-full">ទឹកប្រាក់រួចរាល់ </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
