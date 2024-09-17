import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useCart } from './sale/CartContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

export  function PageDiscount({ isAuthenticated }) {
    const [categories, setCategories] = useState([])
    const [Productdiscount, setProductdiscount] = useState([]);
    const { id } = useParams();
    const { addItem } = useCart();
    // mosion
    // useEffect(() => {
    //     getAllProduct();
    // }, [id]);
    const getAllProduct = () => {
        axios
            .get(`http://localhost:6700/api/product/discount`)
            .then(res => {
                const sortedData = res.data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
                setProductdiscount(sortedData);
                console.log(Productdiscount.data)
            })
            .catch(err => console.log(err));
    };

    // mosion
    useEffect(() => {
        getAllCat();
        getAllProduct();
    }, [id]);

    // get category in modal
    const getAllCat = () => {
        axios
            .get('http://localhost:6700/api/categories')
            .then(res => setCategories(res.data))

            .catch(err => console.log(err));
    };

    // add to cart and check user
    const handleAddToCart = (products) => {
        if (isAuthenticated) {
            addItem(products);
        } else {
            toast.error(`សូមលោកអ្នកចុះឈ្មោះជាមិនសិន`, {
                position: "top-center",
                autoClose: 3000,
            });
        }
    };
    return (
        <div className='mt-14'>
            {/* produt item */}
            <div className='max-w-screen-xl mx-auto my-4 px-2'>
                {/* Breadcrumb navigation */}
                <nav className="text-sm text-gray-500 mb-4 pt-4 underline underline-offset-8">
                    <a href="/" className="text-gray-600 font-semibold text-sm">ដើម / </a>
                    <a href="/" className="text-gray-600 font-semibold text-sm"> បញ្ចុះតម្លៃរហូតដល់៥០% </a>
                </nav>
                <div className="flex gap-8">
                    <div className="w-2/6 lg:w-2/6 flex flex-col bg-slate-100 rounded-lg p-4 h-screen ">

                        <div className='flex justify-between whitespace-nowrap '>
                            <p className='text-pink-700 text-nd font-normal hidden md:block'>ទិញទំនិញតាមផ្នែក</p>
                            <a href="/discount" className='text-xs underline text-gray-700 font-light'>មើលទាំងអស់</a>

                        </div>
                        <input type="text" className='py-2 rounded-xl my-4 p-4 text-sm bg-gray-200' placeholder='បញ្ចូលឈ្មោះប្រភេទ .....' />
                        <ul className="bg-gray-100 shadow-sm overflow-x-scroll whitespace-nowrap scrollbar-hidden">                            <li className=''>
                            <a href="/discount" className="flex items-center p-3 text-gray-800">
                                <img
                                    className="rounded-full h-8 w-8"
                                    src="https://static.vecteezy.com/system/resources/thumbnails/015/452/522/small_2x/discount-icon-in-trendy-flat-style-isolated-on-background-discount-icon-page-symbol-for-your-web-site-design-discount-icon-logo-app-ui-discount-icon-eps-vector.jpg"
                                    alt="Flowbite Logo"
                                />
                                <span className="flex-1 ms-3 whitespace-nowrap hidden md:block">បញ្ចុះតម្លៃរហូតដល់៥០%</span>
                            </a>
                        </li>
                            {categories.map((category) => (
                                <li>
                                    <Link to={`/by_category_product/${category.id}`} className="flex items-center p-3 text-gray-800 rounded-lg">
                                        <img
                                            className="rounded-full h-8 w-8"
                                            src={`http://localhost:6700/image/${category.image}`}
                                            alt="Flowbite Logo"
                                        />
                                        <span className="flex-1 ms-3 text-sm whitespace-nowrap hidden md:block">{category.names}</span>
                                        <svg className="w-3 h-3 text-pink-600 dark:text-white ml-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
                                        </svg>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right section: Product Details */}
                    <div className="w-4/6 lg:w-4/6">
                        {Productdiscount.length === 0 ? (
                            <div className="flex items-center justify-center py-40 text-lg text-white font-semibold rounded-full">
                                <div className="text-center">
                                    <img src="https://aeoncambodia.sgp1.digitaloceanspaces.com/image/inc/empty-cart.png" alt="empty cart" className='h-16 w-16 mx-auto' />
                                    <p className='text-red-700 py-3 text-xs'> មិនមានផលិតផលនៅក្នុងនេះ!</p>
                                    {/* <a href="/" className='text-white py-3 px-6 font-serif text-sm rounded-lg bg-pink-600 hover:bg-pink-700'>បន្តទិញទំនិញ</a> */}
                                </div>
                            </div>

                        ) : (
                            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-between py-4'>
                                {Productdiscount?.map((products, index) => (

                                    <div class="rounded-sm relative w-36 border duration-300 group">
                                        <Link to={`/productcategoryid/${products.id}/${products.detail}`} >
                                            <div>
                                                <img src={`http://localhost:6700/image/${products.image}`} alt="Product Image" class="rounded-lg h-28 w-28 m-4 group-hover:scale-125 duration-500" />
                                                <div class="mt-4 px-1">
                                                    <h2 class="text-pink-700 text-lg font-bold">{products.names}</h2>
                                                    <p class="text-pink-700 text-xs font-bold line-clamp-1">
                                                        {products.discription}
                                                    </p>
                                                    <div className=' items-center justify-center text-center pt-4'>
                                                        <p className='text-gray-950 uppercase font-serif whitespace-nowrap'>{(((products.sale_price)-(products.sale_price * (products.discount / 100))) * 41).toFixed(2)} khr</p>
                                                        <div className='flex items-center space-x-1 justify-center'>
                                                            <p className='text-gray-950 uppercase text-center font-medium whitespace-nowrap'> {(products.sale_price)-(products.sale_price * (products.discount / 100)).toFixed(2)}usa</p>
                                                            <p className=' text-xs text-red-600 uppercase line-through translate-y-1'> {products.sale_price}usa</p>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                        <div onClick={() => handleAddToCart(products)} class="top-3 py-2 flex justify-center items-center">
                                            <span class="py-1 px-2 cursor-pointer bg-pink-500 hover:bg-pink-400 rounded-sm text-sm text-white font-serif">ដាក់ចូលកន្រ្តក</span>
                                        </div>
                                    </div>

                                ))}
                            </div>
                        )}

                    </div>
                </div>
            </div>

        </div>
    )
}


export default PageDiscount