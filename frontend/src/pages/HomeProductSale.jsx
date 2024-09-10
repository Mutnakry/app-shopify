import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useCart } from './sale/CartContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function HomeProductSale({ isAuthenticated }) {
    const { addItem } = useCart();
    const [Product, setProduct] = useState([]);
    const navigate = useNavigate();
    // mosion
    useEffect(() => {

        getAllProduct();
    }, []);

    // get category in modal
    const getAllProduct = () => {
        axios
            .get('http://localhost:6700/api/product')
            .then(res => setProduct(res.data))

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
            <div className='max-w-screen-xl mx-auto my-4'>
                <div className='space-x-2'>
                    <div className='flex justify-between whitespace-nowrap'>
                        <p className='text-pink-700 text-lg font-normal'>ពេញនិយម</p>
                        <a href="" className='text-lg underline text-pink-700 font-light'>មើលទាំងអស់</a>
                    </div>
                    <div className='grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4 justify-between py-4'>

                        {Product?.map((products, index) => (
                            <div class="bg-gray-50 rounded-xl relative w-36 duration-300 group">
                                {products.discount > 0 && (
                                    <div className="absolute top-0 right-0 bg-red-500 text-white text-sm px-2 py-1 rounded-tr-xl rounded-bl-xl">
                                        %{products.discount}
                                    </div>
                                )}
                                <img src={`http://localhost:6700/image/${products.image}`} alt="Product Image" class="rounded-lg h-28 w-28 m-4 group-hover:scale-110 duration-500" />
                                <div class="mt-4 px-1">
                                    <h2 class="text-pink-700 text-lg font-bold">{products.names}</h2>
                                    <p class="text-pink-700 text-sm font-bold line-clamp-2">
                                        {products.discription}
                                    </p>
                                    <div onClick={() => handleAddToCart(products)} class="top-3 py-2 flex justify-center items-center">
                                        <span class="py-1 px-2 cursor-pointer bg-pink-500 rounded-sm text-sm text-white font-serif">ដាក់ចូលកន្រ្តក</span>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeProductSale