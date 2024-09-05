
// import React, { createContext, useContext, useState, useEffect } from 'react';

// const CartContext = createContext();

// export const useCart = () => useContext(CartContext);

// export const CartProvider = ({ children }) => {
//     const [cart, setCart] = useState([]);

//     // Load cart from localStorage on initial render
//     useEffect(() => {
//         const savedCart = localStorage.getItem('cart');
//         if (savedCart) {
//             setCart(JSON.parse(savedCart));
//         }
//     }, []);

//     // Save cart to localStorage whenever it changes
//     useEffect(() => {
//         localStorage.setItem('cart', JSON.stringify(cart));
//     }, [cart]);

//     const addItem = (item) => {
//         setCart((prevCart) => {
//             const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
//             if (existingItem) {
//                 return prevCart.map((cartItem) =>
//                     cartItem.id === item.id
//                         ? { ...cartItem, quantity: cartItem.quantity + 1 }
//                         : cartItem
//                 );
//             } else {
//                 return [...prevCart, { ...item, quantity: 1 }];
//             }
//         });
//     };


    
//     const updateQuantity = (id, quantity) => {
//         setCart((prevCart) => 
//             prevCart.map((item) => 
//                 item.id === id ? { ...item, quantity } : item
//             )
//         );
//     };

//     const removeItem = (id) => {
//         setCart((prevCart) => prevCart.filter((item) => item.id !== id));
//     };

//     const clearCart = () => {
//         setCart([]);
//         localStorage.removeItem('cart');
//     };

//     return (
//         <CartContext.Provider value={{ cart, addItem, updateQuantity, removeItem, clearCart }}>
//             {children}
//         </CartContext.Provider>
//     );
// };



import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Load cart from localStorage on initial render
    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    }, []);

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addItem = (item) => {
        setCart((prevCart) => {
            const names = item.names;
            const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
            if (existingItem) {
                const newQuantity = existingItem.quantity + 1;
                if (newQuantity > item.qty) {
                    toast.error('ចំនួនក្នុងស្តុកបានអស់ហើយ​​​ !', {
                        position: "top-right",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    return prevCart;
                } else {
                    toast.success(`${names} បានបញ្ចូលទៅក្នុងកន្រ្តក`, {
                        position: "top-right",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    return prevCart.map((cartItem) =>
                        cartItem.id === item.id
                            ? { ...cartItem, quantity: newQuantity }
                            : cartItem
                    );
                }
            } else {
                if (item.quantity > item.qty) {
                    toast.error('ផលិតផលចំនួនក្នុងស្តុកបានអស់ហើយ !', {
                        position: "top-right",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    return prevCart;
                } else {
                    toast.success(`${names} បានបញ្ចូលទៅក្នុងកន្រ្តក`, {
                        position: "top-right",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    return [...prevCart, { ...item, quantity: 1 }];
                }
            }
        });
    };

    const updateQuantity = (id, quantity) => {
        setCart((prevCart) => {
            const item = prevCart.find((item) => item.id === id);
            if (item) {
                if (quantity > item.qty) {
                    toast.error('ចំនួនក្នុងស្តុកបានអស់ហើយ​​​ !', {
                        position: "top-right",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    return prevCart;
                } else if (quantity <= 0) {
                    return prevCart.filter((item) => item.id !== id);
                } else {
                    return prevCart.map((item) =>
                        item.id === id ? { ...item, quantity } : item
                    );
                }
            }
            return prevCart;
        });
    };

    const removeItem = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    const clearCart = () => {
        setCart([]);
        localStorage.removeItem('cart');
    };

    return (
        <CartContext.Provider value={{ cart, addItem, updateQuantity, removeItem, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};
