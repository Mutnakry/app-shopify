// import logo from './logo.svg';
// import './App.css';
// import Layout from './components/Layout';
// import Login from './components/Login';
// import Home from './pages/Home'
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import HoverModal from './pages/HoverModal';
// import { ToastContainer } from 'react-toastify';
// import Cart from './pages/Cart';
// import { useEffect, useState } from 'react';
// import HomeProductSale from './pages/HomeProductSale';
// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     setIsAuthenticated(!!token);
// }, []);

//   return (
//     <div >
//       <BrowserRouter>
//         <Routes>
//         <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
//           <Route path='/' element={<Layout isAuthenticated={isAuthenticated} />} >
//             <Route index element={<Home isAuthenticated={isAuthenticated}  />} />
//             <Route path='hover' element={<HoverModal />} />
//             <Route path='cart' element={<Cart />} />
//             <Route path='homeproductsale' element={<HomeProductSale />} />
//           </Route>
//         </Routes>
//         <ToastContainer />
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;



import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './components/Login';
import Home from './pages/Home';
import HoverModal from './pages/HoverModal';
import Cart from './pages/Cart';
import HomeProductSale from './pages/HomeProductSale';
import { ToastContainer } from 'react-toastify';
import Test from './pages/Test'
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path='/' element={<Layout isAuthenticated={isAuthenticated} />} >
            <Route index element={<Home />} />
            <Route path='hover' element={<HoverModal />} />
            <Route path='test' element={<Test isAuthenticated={isAuthenticated}/>} />
            <Route path='cart' element={<Cart />} />
            <Route path='homeproductsale' element={<HomeProductSale isAuthenticated={isAuthenticated} />} />
          </Route>
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
