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
import HistoryByProduct from './pages/HistoryByProduct';
import Show_Detail_Category from './pages/Show_Detail_Category';
import ProductCategory from './pages/ProductCategory';
import By_Category_Product from './pages/By_Category_Product';
import TestUpdate from './pages/TestUpdate'
import PageDiscount from './pages/PageDiscount';
import Service from './pages/Service';
import Slidebar from './Backend/component/Slidebar';
import Category from './Backend/Category';


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
            {/* page */}
            <Route index element={<Home />} />
            <Route path='hover' element={<HoverModal />} />
            <Route path='/detailcategory/:id' element={<Show_Detail_Category />} />
            <Route path='/productcategoryid/:id/:detail' element={<ProductCategory isAuthenticated={isAuthenticated}/>} />
            <Route path='/discount' element={<PageDiscount isAuthenticated={isAuthenticated}/>} />
            <Route path='/service' element={<Service isAuthenticated={isAuthenticated}/>} />
            <Route path='/update/:id/:detail' element={<TestUpdate isAuthenticated={isAuthenticated}/>} />
            <Route path='/by_category_product/:id' element={<By_Category_Product isAuthenticated={isAuthenticated}/>} />
            <Route path='test' element={<Test isAuthenticated={isAuthenticated}/>} />
            <Route path='/historyby/:username/:phone' element={<HistoryByProduct isAuthenticated={isAuthenticated}/>} />
            <Route path='cart' element={<Cart />} />
            <Route path='homeproductsale' element={<HomeProductSale isAuthenticated={isAuthenticated} />} />

            {/* backend */}

            <Route path='/backend' element={<Slidebar />} />
            <Route path='/category' element={<Category isAuthenticated={isAuthenticated} />} />
          </Route>
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
