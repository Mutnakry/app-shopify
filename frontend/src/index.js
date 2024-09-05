// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import { CartProvider } from './pages/sale/CartContext';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <CartProvider>
//          <App />
//       </CartProvider>
// </React.StrictMode>
// );
// reportWebVitals();


import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CartProvider } from './pages/sale/CartContext'; // Adjust the import path as necessary

ReactDOM.render(
    <CartProvider>
        <App />
    </CartProvider>,
    document.getElementById('root')
);
