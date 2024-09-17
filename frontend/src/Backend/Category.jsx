
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slidebar from './component/Slidebar';


function Category() {
    const [userLogin, setUseLogin] = useState('');
    const [teacher, setTeacher] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [totalPages, setTotalPages] = useState(0);
    const [page, setPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const [limit, setLimit] = useState(20);



    useEffect(() => {
        fetchCategories();
    }, [page, limit, searchQuery]);

    const fetchCategories = async () => {
        setLoading(true);  // Set loading state to true
        try {
            const response = await axios.get('http://localhost:6700/api/teacher', {
                params: {
                    page,
                    limit,
                    search_query: searchQuery
                }
            });
            setTeacher(response.data.teacher);
            setTotalPages(response.data.totalPages);
            setError(null);  // Reset error state if request is successful
        } catch (error) {
            setError('Error fetching categories data');  // Set error state if request fails
        } finally {
            setLoading(false);  // Set loading state to false
        }
    };


    const handlePageChange = (newPage) => {
        if (newPage > 0 && newPage <= totalPages) {
            setPage(newPage);
        }
    };

    const handleSearch = (event) => {
        if (setPage(0)) {
            alert('not found!')
        } else {
            setSearchQuery(event.target.value);
            setPage(1); // Reset to the first page on search 
        }

    };

    return (
        <div className='h-screen bg-white dark:bg-gray-950'>
            <Slidebar />
            <div className='py-16 px-2 lg:ml-64 bg-white dark:bg-gray-950'>
                <div className='border-2 border-gray-200 rounded-lg dark:border-gray-700'>
                    <div className='flex justify-between py-4 px-4 md:mr-14'>
                        <div className='flex space-x-4'>
                            <button className='bg-blue-600 md:py-2 py-1 px-6  rounded-lg shadow-md dark:bg-slate-300'>
                                Create
                            </button>
                            <input
                                type='text'
                                className='block md:py-2 py-1 text-sm text-gray-900 border border-gray-300 rounded-lg w-40 md:w-80 sm:w-60 bg-gray-50 focus:ring-blue-500 focus:border-blue-500'
                                placeholder='Search for names '
                            />
                        </div>
                        <div className='flex items-center text-center space-x-2 mt-2 md:mt-0'>
                            <p>សរុប</p>
                            <select
                                className="border border-gray-300 rounded-lg px-2 py-2 "
                            >
                                {[5, 10, 20, 50, 100].map(value => (
                                    <option key={value} value={value}>{value}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        Product name
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Color
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Category
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Price
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Action
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Product name
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Color
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Category
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Price
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Action
                                    </th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Apple MacBook Pro 17  Apple MacBook Pro 17 Apple MacBook Pro 17
                                    </th>
                                    <td class="px-6 py-4">
                                        Silveruh
                                    </td>
                                    <td class="px-6 py-4">
                                        Laptop
                                    </td>
                                    <td class="px-6 py-4">
                                        $2999jjjjjjjjj i
                                    </td>
                                    <td class="px-6 py-4">
                                        Silver
                                    </td>
                                    <td class="px-6 py-4">
                                        Laptopnnnnnnnnnnnn
                                    </td>
                                    <td class="px-6 py-4">
                                        $2999
                                    </td>

                                    <td class="px-6 py-4">
                                        Silver
                                    </td>
                                    <td class="px-6 py-4">
                                        Laptop iye eiuhfiu wueifhw
                                    </td>
                                    <td class="px-6 py-4">
                                        $2999
                                    </td>

                                </tr>

                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Category;
