

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function HistoryByProduct({ isAuthenticated }) {
    const [historyProduct, setHistoryProduct] = useState([]);
    const { username } = useParams();

    useEffect(() => {
        if (username) {
            HistorybProduct();
        }
    }, [username]);

    // Fetch product history by username
    const HistorybProduct = () => {
        axios
            .get(`http://localhost:6700/api/order/${username}`)
            .then(res => {
                const sortedData = res.data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
                setHistoryProduct(sortedData);
            })
            .catch(err => console.log(err));
    };

    return (
        <div className='mt-14'>
            <div className='max-w-screen-xl mx-auto'>
                <div className="p-6">
                    {historyProduct.length === 0 ? (
                        <div className="flex items-center justify-center py-40 text-lg text-white font-semibold rounded-full">
                            <div className="text-center">
                                <img src="https://aeoncambodia.sgp1.digitaloceanspaces.com/image/inc/empty-cart.png" alt="empty cart" className='h-16 w-16 mx-auto' />
                                <p className='text-gray-700 py-3 text-xs'> មិនមានផលិតផលនៅក្នុងកន្ត្រក!</p>
                                <a href="/" className='text-white py-3 px-6 font-serif text-sm rounded-lg bg-pink-600 hover:bg-pink-700'>បន្តទិញទំនិញ</a>
                            </div>
                        </div>


                    ) : (
                        <div>
                            <div className="flex  text-lg text-white py-6 font-semibold rounded-full">
                                <div className="text-center">
                                    <a href="/" className='text-white py-3 px-6 font-serif text-sm rounded-lg bg-pink-600 hover:bg-pink-700'>បន្តទិញទំនិញ</a>
                                </div>
                            </div>
                            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead class="text-md text-gray-700 font-light uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="pl-4 px-6 py-3">
                                            ល.រ
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            ឈ្មោះផលិតផល
                                        </th>
                                        <th scope="col" className="py-3 px-6 ">
                                            ចំនួន
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            តម្លៃ
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            ចញ្ចុះតម្លៃ
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            សរុប
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            ថ្ងៃទិញទំនិញ
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {historyProduct.slice(0,10).map((item, index) => (
                                        <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-100">
                                            <td className='pl-4 px-6 py-3'>{index + 1}</td>
                                            <td className=" font-semibold">
                                                {item.pro_names}
                                            </td>
                                            <td className=" font-semibold whitespace-nowrap">
                                                {item.qty}
                                            </td>
                                            <td className="px-6">
                                                {item.price}
                                            </td>
                                            <td className="px-6 whitespace-nowrap">
                                                {item.discount}
                                            </td>
                                            <td className="px-6">
                                                {item.total}
                                            </td>
                                            <td className="px-6 whitespace-nowrap">
                                                {item.created_at}
                                            </td>

                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default HistoryByProduct;
