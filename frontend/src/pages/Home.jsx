import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import Sale from '../pages/HomeProductSale'

function Home({ isAuthenticated }) {
    const [categories, setCategories] = useState([])

    // mosion
    useEffect(() => {
        AOS.init({
            duration: 1000,
            delay: 100,
            once: true,
        });
        getAllCat();
    }, []);


    // get category in modal
    const getAllCat = () => {
        axios
            .get('http://localhost:6700/api/categories')
            .then(res => setCategories(res.data))

            .catch(err => console.log(err));
    };

    return (
        <div className='mt-16'>
            <div className='h-auto px-2'>
                {/* header category */}
                <div className='bg-white'>
                    <div className=' max-w-screen-xl mx-auto'>
                        <div className='p-4 flex space-x-4'>
                            <a href="" className='flex space-x-3 text-center'>
                                <svg class="w-6 h-6 text-pink-600 dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 3l-9 9h3v9h6v-6h6v6h6v-9h3l-9-9z" />
                                </svg>
                                <span className='text-gray-950 text-md font-normal'>ទិញតាមហាង</span></a>
                            <a href="" className='flex space-x-3 text-center'>
                                <svg class="w-6 h-6 text-green-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2c-1.3 0-2.5.5-3.4 1.4L5.5 6.6c-1.1 1.1-1.6 2.6-1.4 4.1.2 1.5.9 2.9 1.8 3.9l-1.4 5.2 1.5-.4 1.5-5.3c.2-.7.7-1.2 1.4-1.4.7-.2 1.5.1 2.1.7.6.6 1.1 1.3 1.6 2 .5-.7 1-1.4 1.6-2 .6-.6 1.4-.9 2.1-.7.7.2 1.2.7 1.4 1.4l1.5 5.3 1.5.4-1.4-5.2c.9-1.1 1.6-2.4 1.8-3.9.2-1.5-.3-3-1.4-4.1L15.4 3.4C14.5 2.5 13.3 2 12 2z" />
                                </svg>
                                <span className='text-gray-950 text-md font-normal'>ទិញតាម៉ាក</span></a>
                            <a href="" className='flex space-x-3 text-center'>
                                <span className='text-gray-950 text-md font-sans'>ព័ត៌មានផលិតផលម៉ាកថប់វែលយូ</span></a>
                        </div>
                    </div>
                </div>
                {/*  slider category add menu category */}
                <div className=' max-w-screen-xl mx-auto bg-gray-100 rounded-lg'>
                    <div className=' flex space-x-4 shadow-xl'>
                        <div className="flex flex-wrap items-start w-full ">
                            <div className='w-2/6  overflow-x-auto p-4'>
                                <div className='flex justify-between whitespace-nowrap'>
                                    <p className='text-pink-700 text-nd font-normal hidden md:block'>ទិញទំនិញតាមផ្នែក</p>
                                </div>
                                <hr className='my-2 bg-gray-700' />
                                <ul className="text-white">
                                    <li className=''>
                                        <a href="#" className="flex items-center p-3 text-pink-600 rounded-lg dark:text-white hover:bg-white hover:shadow-md dark:hover:bg-gray-700 group">
                                            <img
                                                className="rounded-full h-8 w-8"
                                                src="https://static.vecteezy.com/system/resources/thumbnails/015/452/522/small_2x/discount-icon-in-trendy-flat-style-isolated-on-background-discount-icon-page-symbol-for-your-web-site-design-discount-icon-logo-app-ui-discount-icon-eps-vector.jpg"
                                                alt="Flowbite Logo"
                                            />
                                            <span className="flex-1 ms-3 whitespace-nowrap hidden md:block">បញ្ចុះតម្លៃរហូតដល់៥០%</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/homeproductsale" className="flex items-center p-3 text-pink-600 rounded-lg dark:text-white hover:bg-white hover:shadow-md dark:hover:bg-gray-700 group">
                                            <img
                                                className="rounded-full h-8 w-8"
                                                src="https://cdn-icons-png.freepik.com/512/2504/2504814.png"
                                                alt="Flowbite Logo"
                                            />
                                            <span className="flex-1 ms-3 whitespace-nowrap hidden md:block">ពិព័រណ៏ទំនិញ</span>
                                            <svg className="w-3 h-3 text-pink-600 dark:text-white ml-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/test" className="flex items-center p-3 text-pink-600 rounded-lg dark:text-white hover:bg-white hover:shadow-md dark:hover:bg-gray-700 group">
                                            <img
                                                className="rounded-full h-8 w-8"
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeaiF6rnhJ6-7AWlIr_OpRjX4lzGKNvzcqIIPc2Ic8Too_kWhS4sGc6vUXE97RxPETGn4&usqp=CAU"
                                                alt="Flowbite Logo"
                                            />
                                            <span className="flex-1 ms-3 whitespace-nowrap hidden md:block">គ្រៀងទេស</span>
                                            <svg className="w-3 h-3 text-pink-600 dark:text-white ml-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center p-3 text-pink-600 rounded-lg dark:text-white hover:bg-white hover:shadow-md dark:hover:bg-gray-700 group">
                                            <img
                                                className="rounded-full h-8 w-8"
                                                src="https://s9.kh1.co/__image/w=1200,h=630,q=100/32/32b71e92360ebc672144fed6c916385556458330.jpg"
                                                alt="Flowbite Logo"
                                            />
                                            <span className="flex-1 ms-3 whitespace-nowrap hidden md:block">បន្លែ​ និង ផ្លែឈើ</span>
                                            <svg className="w-3 h-3 text-pink-600 dark:text-white ml-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center p-3 text-pink-600 rounded-lg dark:text-white hover:bg-white hover:shadow-md dark:hover:bg-gray-700 group">
                                            <img
                                                className="rounded-full h-8 w-8"
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtWm78IWMxNlAaN7WNzZSAKc3ZnaJbx7J0tccQJkNxadWnmyFNmvztyqQ0bU_Zb3G_JrA&usqp=CAU"
                                                alt="Flowbite Logo"
                                            />
                                            <span className="flex-1 ms-3 whitespace-nowrap hidden md:block">ទំនិញត្រជាក់ និង អាហាកែច្នៃ</span>
                                            <svg className="w-3 h-3 text-pink-600 dark:text-white ml-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center p-3 text-pink-600 rounded-lg dark:text-white hover:bg-white hover:shadow-md dark:hover:bg-gray-700 group">
                                            <img
                                                className="rounded-full h-8 w-8"
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7gZW42ZLsQXsevvXXoNRmME59YHhw_n1mIw&s"
                                                alt="Flowbite Logo"
                                            />
                                            <span className="flex-1 ms-3 whitespace-nowrap hidden md:block">ម្ហូបសំអ៊ិនស្រាប់</span>
                                            <svg className="w-3 h-3 text-pink-600 dark:text-white ml-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center p-3 text-pink-600 rounded-lg dark:text-white hover:bg-white hover:shadow-md dark:hover:bg-gray-700 group">
                                            <img
                                                className="rounded-full h-8 w-8"
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU2l50NYIixVcczGFzRJPVaU3F-H9rQ0yOuw&s"
                                                alt="Flowbite Logo"
                                            />
                                            <span className="flex-1 ms-3 whitespace-nowrap hidden md:block">ស្រាប៊ែ</span>
                                            <svg className="w-3 h-3 text-pink-600 dark:text-white ml-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center p-3 text-pink-600 rounded-lg dark:text-white hover:bg-white hover:shadow-md dark:hover:bg-gray-700 group">
                                            <img
                                                className="rounded-full h-8 w-8"
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm1-EwQsse-YO2IAzb-Xf8EAlCC4mpLrDIkg&s"
                                                alt="Flowbite Logo"
                                            />
                                            <span className="flex-1 ms-3 whitespace-nowrap hidden md:block">សាច់ខ្លែម</span>
                                            <svg className="w-3 h-3 text-pink-600 dark:text-white ml-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
                                            </svg>
                                        </a>
                                    </li>
                                    <div className='my-2'>
                                        <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" className='text-pink-700 py-3 w-full outline outline-1 text-md font-normal rounded-full hover:bg-pink-700 hover:text-white duration-500'>មើលបន្ថែម</button>
                                    </div>
                                </ul>
                                {/* <!-- Main modal  category--> */}
                                <div id="authentication-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:mt-32 sm:mt-20 mt-14">
                                    <div class="relative p-4 w-full max-w-6xl ">
                                        <div class="relative bg-white rounded-xl shadow-6xl dark:bg-gray-700">
                                            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                                    Sign in to our platform
                                                </h3>
                                                <button type="button" class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                                                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                                    </svg>
                                                    <span class="sr-only">Close modal</span>
                                                </button>
                                            </div>
                                            <div class="p-4 md:p-5">
                                                <div className='grid grid-cols-4 gap-2 mb-6'>
                                                    {categories?.map((items, index) => (
                                                        <div className='border rounded-md'>
                                                            <a href="#" key={index} className="flex items-center p-4 overflow-x-hidden text-pink-600 rounded-lg bg-slate-100  dark:text-white hover:bg-white hover:shadow-md dark:hover:bg-gray-700 group">
                                                                <img
                                                                    className="rounded-lg h-10 w-12"
                                                                    src={`http://localhost:6700/image/${items.image}`}
                                                                    alt="Flowbite Logo"
                                                                />
                                                                <span className="flex-1 ms-3 whitespace-nowrap hidden md:block">{items.names}</span>
                                                            </a>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className='w-4/6 py-4'>
                                <div className=''>
                                    <div className='h-40 sm:h-52 xl:h-64 2xl:h-72 w-full duration-500  px-2'>
                                        <div className="h-40 sm:h-52 xl:h-64 2xl:h-72 opacity-100 duration-500 md:border-x-2 border-x-2 rounded-xl border-red-600">
                                            <img className='object-fil h-40 sm:h-52 xl:h-64 2xl:h-72 w-full duration-500 rounded-xl' src="https://cdn.dribbble.com/users/8404817/screenshots/19846116/media/3d23457419f63e5997ab100f482e7416.gif" alt="..." />
                                        </div>
                                    </div>
                                </div>
                                {/* overfloe scroll */}
                                <div>
                                    <div className='flex overflow-x-auto snap-x space-x-6 justify-between snap-mandatory mx-2 scrollbar-hidden'>
                                        <div className='w-64 rounded-lg my-3 flex-shrink-0 snap-center bg-white overflow-hidden group'>
                                            <div className="relative h-24 md:h-36 sm:h-28 duration-500">
                                                <div className='flex font-semibold text-xl absolute justify-between text-green-400 px-2 w-full'>
                                                    <p>ផ្សារទំនើប</p>
                                                    <p>10%</p>
                                                </div>
                                                <img
                                                    src="https://static.vecteezy.com/system/resources/thumbnails/008/472/909/small/beautiful-young-asian-woman-with-shopping-bags-file-png.png"
                                                    alt="Character"
                                                    className="absolute bottom-0 right-0 h-24 md:h-36 sm:h-28 duration-500 rounded-lg group-hover:scale-150"
                                                />
                                            </div>
                                        </div>
                                        <div className='w-64 rounded-lg my-3 flex-shrink-0 snap-center bg-white overflow-hidden group'>
                                            <div className="relative h-24 md:h-36 sm:h-28 duration-500">
                                                <div className='flex font-semibold text-xl absolute justify-between text-green-400 px-2 w-full'>
                                                    <p>ដឹកជញ្ជូនអាហារ</p>
                                                    <p>50%</p>
                                                </div>
                                                <img
                                                    src="https://png.pngtree.com/png-vector/20230907/ourmid/pngtree-happy-shopper-selling-shopping-png-image_9206556.png"
                                                    alt="Character"
                                                    className="absolute bottom-0 right-0 h-24 md:h-36 sm:h-28 duration-500 rounded-lg group-hover:scale-150"
                                                />
                                            </div>
                                        </div>
                                        <div className='w-64 rounded-lg my-3 flex-shrink-0 snap-center bg-white overflow-hidden group'>
                                            <div className="relative h-24 md:h-36 sm:h-28 duration-500">
                                                <div className='flex font-semibold text-xl absolute justify-between text-green-400 px-2 w-full'>
                                                    <p>ហ្វេសិន និងសម្រស់</p>
                                                    <p>25%</p>
                                                </div>
                                                <img
                                                    src="https://static.vecteezy.com/system/resources/thumbnails/008/476/780/small/asian-woman-with-her-shopping-bags-file-png.png"
                                                    alt="Character"
                                                    className="absolute bottom-0 right-0 h-24 md:h-36 sm:h-28 duration-500 rounded-lg group-hover:scale-150"
                                                />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div>
                                    <h1 className='text-xl font-bold'>សាខា</h1>
                                    <div className='flex overflow-x-auto snap-x space-x-6 justify-between snap-mandatory mx-2 scrollbar-hidden'>
                                        <div className='w-64 rounded-lg text-center bg-white flex'>
                                            <a href="#" className="flex w-64 items-center p-2 text-pink-600 rounded-lg dark:text-white hover:bg-white hover:shadow-md dark:hover:bg-gray-700 group">
                                                <img
                                                    className="rounded-full h-12 w-12"
                                                    src="https://static.vecteezy.com/system/resources/previews/008/321/373/non_2x/shopping-bag-logo-store-icon-online-shop-symbol-template-vector.jpg"
                                                    alt="Flowbite Logo"
                                                />
                                                <span className="flex-1 ms-3 whitespace-nowrap">សាខាទី​១</span>
                                            </a>
                                        </div>
                                        <div className='w-64 rounded-lg text-center bg-white flex'>
                                            <a href="#" className="flex w-64 items-center p-2 text-pink-600 rounded-lg dark:text-white hover:bg-white hover:shadow-md dark:hover:bg-gray-700 group">
                                                <img
                                                    className="rounded-full h-12 w-12"
                                                    src="https://static.vecteezy.com/system/resources/previews/008/321/373/non_2x/shopping-bag-logo-store-icon-online-shop-symbol-template-vector.jpg"
                                                    alt="Flowbite Logo"
                                                />
                                                <span className="flex-1 ms-3 whitespace-nowrap ">សាខាទី​២</span>
                                            </a>
                                        </div>
                                        <div className='w-64 rounded-lg text-center bg-white flex'>
                                            <a href="#" className="flex w-64 items-center p-2 text-pink-600 rounded-lg dark:text-white hover:bg-white hover:shadow-md dark:hover:bg-gray-700 group">
                                                <img
                                                    className="rounded-full h-12 w-12"
                                                    src="https://static.vecteezy.com/system/resources/previews/008/321/373/non_2x/shopping-bag-logo-store-icon-online-shop-symbol-template-vector.jpg"
                                                    alt="Flowbite Logo"
                                                />
                                                <span className="flex-1 ms-3 whitespace-nowrap ">សាខាទី​៣</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* menu category */}
                <div className=' max-w-screen-xl mx-auto my-3'>
                    <div className='flex space-x-2'>
                        <div className='flex overflow-x-auto snap-x  space-x-6 justify-between snap-mandatory mx-2 scrollbar-hidden'>
                            <a href="" className=''>
                                <div className='w-36 h-36 rounded-lg my-3  hover:scale-110 duration-500 flex-shrink-0 snap-center bg-blue-600   overflow-hidden  '>
                                    <div class="relative">
                                        <div className='flex font-semibold text-xl absolute justify-between text-green-400 px-2'>
                                            <p>Royal Sell</p>
                                        </div>
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Celebration_Burger_%2849116811283%29.jpg/640px-Celebration_Burger_%2849116811283%29.jpg" alt="Character" class="w-full h-36 rounded-lg" />
                                    </div>
                                </div>
                            </a>
                            <a href="">
                                <div className='w-36 h-36 rounded-lg my-3  hover:scale-110 duration-500 flex-shrink-0 snap-center bg-blue-600   overflow-hidden  '>
                                    <div class="relative">
                                        <div className='flex font-semibold text-xl absolute justify-between text-green-400 px-2'>
                                            <p>Royal Sell</p>
                                        </div>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-uXcAeQfXPl49GSgqks8-iceG9skZcNKRRg&s" alt="Character" class="w-full h-36 rounded-lg" />
                                    </div>
                                </div>
                            </a>
                            <a href="" className=''>
                                <div className='w-36 h-36 rounded-lg my-3  hover:scale-110 duration-500 flex-shrink-0 snap-center bg-blue-600   overflow-hidden  '>
                                    <div class="relative">
                                        <div className='flex font-semibold text-xl absolute justify-between text-green-400 px-2'>
                                            <p>Royal Sell</p>
                                        </div>
                                        <img src="https://aeoncambodia.sgp1.digitaloceanspaces.com/image/promotion_banners/20240119/1705666095-Super-Deal.png" alt="Character" class="w-full h-36 rounded-lg" />
                                    </div>
                                </div>
                            </a>
                            <a href="" className=''>
                                <div className='w-36 h-36 rounded-lg my-3  hover:scale-110 duration-500 flex-shrink-0 snap-center bg-blue-600   overflow-hidden  '>
                                    <div class="relative">
                                        <div className='flex font-semibold text-xl absolute justify-between text-green-400 px-2'>
                                            <p>Royal Sell</p>
                                        </div>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb1lpruKcy8C9rhAWKCcPOFuvToDRembz-oA&s" alt="Character" class="w-full h-36 rounded-lg" />
                                    </div>
                                </div>
                            </a>
                            <a href="" className=''>
                                <div className='w-36 h-36 rounded-lg my-3  hover:scale-110 duration-500 flex-shrink-0 snap-center bg-blue-600   overflow-hidden  '>
                                    <div class="relative">
                                        <div className='flex font-semibold text-xl absolute justify-between text-green-400 px-2'>
                                            <p>Royal Sell</p>
                                        </div>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiBqC7XSeUxWHkeyKmc1UkRUKosFBOhYkfgg&s" alt="Character" class="w-full h-36 rounded-lg" />
                                    </div>
                                </div>
                            </a>
                            <a href="" className=''>
                                <div className='w-36 h-36 rounded-lg my-3  hover:scale-110 duration-500 flex-shrink-0 snap-center bg-blue-600   overflow-hidden  '>
                                    <div class="relative">
                                        <div className='flex font-semibold text-xl absolute justify-between text-green-400 px-2'>
                                            <p>Royal Sell</p>
                                        </div>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYe0JBhCZgx4P2vRtTCR9qQbIw_gp0Ga3sOg&s" alt="Character" class="w-full h-36 rounded-lg" />
                                    </div>
                                </div>
                            </a>
                            <a href="" className=''>
                                <div className='w-36 h-36 rounded-lg my-3  hover:scale-110 duration-500 flex-shrink-0 snap-center bg-blue-600   overflow-hidden  '>
                                    <div class="relative">
                                        <div className='flex font-semibold text-xl absolute justify-between text-green-400 px-2'>
                                            <p>Royal Sell</p>
                                        </div>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBJMR-iJ3AlpTEtT38l2n78HsOjcc7J0r-WQ&s" alt="Character" class="w-full h-36 rounded-lg" />
                                    </div>
                                </div>
                            </a>
                            <a href="" className=''>
                                <div className='w-36 h-36 rounded-lg my-3  hover:scale-110 duration-500 flex-shrink-0 snap-center bg-blue-600   overflow-hidden  '>
                                    <div class="relative">
                                        <div className='flex font-semibold text-xl absolute justify-between text-green-400 px-2'>
                                            <p>Royal Sell</p>
                                        </div>
                                        <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxEQEBUREhIVFhUVFRUYFhcVGBUYGBUVFRUWFxUVFRYaHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy8mICYtLS0vLy8tLy0vLy8tLS0tLS0rLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAMIBAwMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQQCAwUGB//EAD8QAAEDAgIHBgQCCQMFAAAAAAEAAhEDIQQxBRJBUWFxgQYTIpGhwTJCsdHh8BQVM0NSYnKC8SOSshYkU3Oi/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAECAwQFBv/EADQRAAICAQMCBAQFAwUBAQAAAAABAgMRBCExEkEFEyJRFDJhcYGRobHwFULRI1LB4fGCM//aAAwDAQACEQMRAD8A+4oAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAhASgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAhAEAQBASgCAglAcfF9psNTcW6xcRnqCed1yz1tUHhs6IaWySykUMX2wDYii6CJGuQ2RyErnn4lGPC/M3hoW+WVXds37KTfMlZPxT2RovD/qHdsH2hjSTshwg8LmVD8TfZfuFoF3ZA7UVtoAI+UNPnJUf1Gff9ifgodv3Mf+pq5iPo38hR/ULHwv0J+CguTKp2irt8JN95aI6EWKPX2R2f7BaOt7kN7TV5iWHmI+yLxGx7bB6Kv6lzDdq9lSnz1fxXRDxD/cjGWh/wBrO9gtIU6wlh6Gx8l213QsXpZyWVSg9y0tTMIAgCAIAgCAIAgCAIAgCAIAgCAxQEoSEAQgIClpTSdPDs1nmSbNaPicdwHusrbY1rLNK6pWPCPBaT0zVxDiKh1WZagkAcxtK8W/VTseHsvY9anTxrW27Kb6ol2oARq3tGW1c/V7Gyj7mnXzm8i0k25KG/ctj2LFPEBg1Q7XaR4miQJ42urKeOOCjj1b9zBjuBvZpyEzsJzVc+5ZoMBLtW5MxFzdOrfBPbJvqUS10awBABvIIO6CJn7hG2ngqmmjE1CblyjrLKODJtTjPlmochg3YV8uy2Gbx/lTCTb2/wAFZrCLODxzmWbMk75B4EXnPMR1WtdzjsuSllKluz02iNOh8MqWdlOw89xXq6fWKXplyedfpXH1R4O4u84wgCAIAgCAIAgCAIAgCAIAgIQEIAhIQEoDCvVDGl7jAaCTyCiTUVlkpNvCPm+PdUxVYvJMEmM7NEm0bB6r5+2Urp9R7FajXDBzn0xrGHWvffAXHlZ52OpZxwYAFV6y2C1h6xaXEEtJHygRyvkFeNvS2+Ckq8pLkihQIF3arTAyMEXnnHuoT232EufcsMa4gGRVlrmtbJcWDKdXYtMvGef+CmF9v+TXSw7m+MHVgxJMGdoAz5rNZS6uC7afpe5txTHBxOtIcASTm5TY8PnOSK0muODU1jmQYjoPdUTcdy7SextL3loafhknIC/OEc5dOOxCjHOe5LGyoyGZGlEGfurfUjPY2Upmdu3jK0hJ5KSSxg93onEd5Ra7bEGc5G/0X0mns660zxLodE2i4tjIIAgCAIAgCAIAgCAICEAQBCSEAQBAEBxu1dYDDlk3cW24Az7Lj100qmvc6NLHNiZ40gsgDZfIZkX+q8GUnF7HrRSktzRUAIFspk7SSsJNNI1isG2nhi9oDGXGZkSSclZRc1iK4IclF5kzVUw7mmCCM/Sfss3Fp4ZdSTWURWqPLQ03DcvsrucnFR9gopPPub6dRoJNMuZAERmTtvsCt1RTzFtFOltYksm6k3abmZvcHfKpGXd8ktdlwZ1XkgAwYn/6MlTKxtJMiMEm8GAygieJzVevbBfp3yZV2SbTG6ZgqZyzxx7FY7c8juIgzfcnThZbHUb+4sXSD78Vp0YWcmfXvjBnTYM1pFrOSssnd7NvIc5mwieot7r1vD5NZiefrEnhnfXpnCEAQBAEAQBAEAQEIAgCAIAhJCAIAgCA8D2z02G4sUpGqwAOkkBpqapL3QDMCPVeXqrVKxwfCx+p6Whq64Sa5X8/Ur4KtSrg929r4MGOG8ZiV5s68nU+qHzLBm/DXhc8oPgvGZIoFpkbFTdcFsp8mVVhdY+vmkm5PcRwuDXVwh4KGmWUkb8HQDZJa0yPmExyWlbUc5Sf3KTy+HgkUFl0luodymCeonukwOo202RktI5XBnJpkOpqcZeR1bGVOmSFMYspKRvZhrfnguiFTMpWHV0RRGvO4Gfp7r1dJXiWTivnlYO0vQOQICUAQBAEBCAIAgCAISEAQBAQgCAIAgPi+JaHvqPqGTUe6/GTB/O9fLV2dVzjJ853+p2eG3+Xd9zi18C6m/XpvIOwixC6GpQ2PqPTZHDR06Xbiqx8V6DC3+KkC14O+HOh19llbEJ9sM4p6HC9Evz/AOjvYHtxo+oQH1DTJiz2OEHc50Fo5zChUbnHOuyPY9RTosd8JB2jbIzUfDI5/OZqNITmFzOvc2UzIMCjp9ieoxqMjkocWSpGtjgbC/ITkoUc8EuRvbTjZBy8QBWsI9Pb80ZylnuNUDanR7DqNZI3qVAhyJ74EwLwtFFZK5ZWxem6NN2o57Q7dPnYc/QrpTSKqmcllI9Vo3B92JJJcQJm0cAOq9SmroRwWT6mXlsZBAEAQBAEAQBAEJCAIAgCAhAQgJQBAEB8d7QaLfReaRmGusd7Z8JHRfIyqlTe4vt+3YzWYvKOTiMPVAtDwN9neeR9F0/EriR62n8UlDaaOZiHPFnUn+UjzFldWQfDPTjr6Z/3HKxRpkXbHotIuWdjXzYyXJRo1nUagqUqjmPBBkEidXIGMxbJdUZvG6OSyEGdDD9sMexxJxBdJk6zabhkBYObAy2e6SqhLsUj0LZo6uD7dYrI1hyc1npAC5Z0NdjphHTy/wDTqN7Y40i3cn+11+fjWD6VyarS1Pu/5+B0T2+xIZH6PSDrS5uuMuBn6rR2RawtjJeHwznqKOI7b412TaQ/tcT/AMvZV9PfJqtFWuclGv2o0gf3gHJjfeVPoZpHR1exqp6Sxrheu+/9I+gBChyS4RqtLUnnpNjNI16cf9zVab/O6TaMp3JGcm9jO6OngsySLPZ7Dh7y7VOsDPjueM8VK5w+TxdXrpzXRDaJ9g0BpAVaYBMuaIM5kbCvY016sjzujyzrgrpIMlJAQEoCEAQBAEAQkIAgCAICEIIQklAEAKA8F2+xj3AhjWkUnCXRczmCcwM+q8rWONjw1x3N4UqS37nj24hhycAdocQD+K823Tvsc9lUosa7CY1m/wC4fdcjqmuxnhk1cPOcEcVTLiMvsc7EaApvPwMnoFvDWWR7miusXdlHEdiw74XavUFdMfEpx5WTVamXcpnsO2+viCANsADoTmr/ANWl2h+olbJ9jF3ZCrTAdQNZ+0f6jKY8h7qy8RhZtZhfg2I3zjw8GQ0JpMDWFRn9Bn6xn1VXqdE3hxf3N4669f3fmiq3EY4GHUDIzEHPmDBC1cNNjKmdcPFLVykW21cWR+xjnKxapz8xt/VZ44RZw9PEPzEDgs5OpGVnilslhYR0NF6D8eu5viO10kjlOSznqsLCPPndOfzM9fgKTKQvnv45LnVkpNvujNvJ1sLiwwgtsd6vDUyrknHZhxa3PRaH0g6qS0jITrDnkR+cl72h1c7m1Jcdyp1gvSIMkICAhAEAQBAEAQkIAgCAhAQgCAICCoB5HuWu7xrtr6gI3jWOa8hfNJP3Z3yWyf0R5XTvY8k69IF7b+G0jLLfbqq7rglNZ3PNV9FU76rW2kEHPMm43qisa5L9K7Hc7N6RfgCHFodQJlzTct1ol9PccjGR53SM/Vuik61JfU+q0BRrMD2hj2uALTAIIORC6vLi+UjkeUYnRdA/uad/5G/ZUenqezivyIyYPwFBou1oAvEAALKWnpjs0i6cmcXE6Z0Y0kF9FxGYaO8PI6oKzlXT3ii/lSfY8tprTVDWnDNcbiWuDQ3+3XMjPL6Ljt08JSzDb7kvSSxk479OU58VJzeQB+hKx+Fl2wZ/C2FvD4hlS4gNzkk+ix6Gnh7GLynhm+m9uQAUY9yMjvIMKrWCcGVWg6qNRpzIk7gCD9l1UwbeTeiGXlnotGYAtLacNhoydcR9ZXpVUKyXThbe50TaUcs9hhqTWiwAnOABJXtQhGPyrH2OFlgK5UlCApAQBAEAQBAEJCAIAgCAxQBAEBBUEnidLvNHEv8A4X+Lzz9ZK8PWxdVvUuGenRiyvHdFjC4oWE6w37Rlu2KK7lwVnU+SMboyhU+Jo5wJA4Pz9VeTRRZRwMX2Zqfuaoc2/hfFuTmj6hYOPsaqfuWeymMraPcaGIYRQedZrgZFN5N526hz4HmVvVcobTMra+vePJa7Y9vmYUBmGAq1CAS67qbAd5afE7gDbbsWk7V2ZnXQ382x82xGmMXi3TXqOc0nJx1W8wwW97LnfSkdUVjg3ajQHBj29DFuuSopLuWaZSwDnNZD3gGZjOeM+ytNxb2EE0ty34HCC/iSGk+v5yVFsWNgw1Uu/wBAVHN2ju3kO4xaFRxjPZrcxspjLdlvD4TF/wDhI5mI4QsZUxMfhV7nYwtEv8PzDOcvPasY1Jv1CGmalvwXcGzupvJ+i2jLGyO6NSR19GlznTK9LSuNceqT5Oe/fZHdFZ7R8Wr5E9ZUX66xfK+n9X/P5kxjVF9snXw9TWaHDaF61Visgprucc49MmmYYjFsZmZNvCM75W6FUv1NdKzJ/h3LQqlPg579JuDwSBq7RtgnOd68p+KTVq2XS+3ffudS00XF45OuvdOEIAgCAIAhIQBAEAQGKAIAoBBQk4XaXRJrs1mftG5bNYbWlc+ooVscHRRb0M8TSxLmOIMtc0w5psWniPzK8C2iVcj1oyjNHUwmkhF+n52LNWNbSKyp9jrM0ixw2zM2MA810rURcUnyc7oknsY4oMqNM7chnHApKUJLJEYyTwUcFo5oOQj87FSKiWeTrGiyIdTaR0gneePNb9fSuDLpz3I/RKRzo0wN5DT6J1t8rA6fqVqOBoNPwMif4ZjiJ2ys1ZuXcXgsBtBkGAIyFvIQrO2uO7ZHRN7GqvjWm4ZOywXPPWRlvFGsaMbNnKxOOImWW4j8FzO+fsdCpj7lahhqtYy1hk7TYKseqb23LScK+Tq4TQQF6rujfuuiMFD53g5p35+RHTY9rPDTb1SepS2h+fcy6HLeRqdrG9hzK423J9T/AFNF0rY2sxJa3UDzA3WzvnmumOrnCtVqeEvb6/Xko6k5dTRWFQC425k5rjd2XmPPuauLezN+j2d7UbaWgyTsteCfJdXh9LvvTayk8v22Mr5eXB+56VfYHkhSAgCAIAgCEhAEAQGKAIAoJIQEEIDlaY0FRxI8YIePhe2zm9do4GQs7KozWGa12yg9jyeN7M4qiZZFZv8AKQx/VrjqnmCOS8y3w/vE769ZF/McmpijTOrUDqZ3VAWE8tYDW6SvPs00o8o642RlwzeMWd5C53Bo0WDbSxbt6rhjCN36wdvUer3HRH2MqeJqPIa2VRt4J6YrcsvwWJiQPIq3l2ezM1dVnkphtVr2941zWzcn75LJxfc06ouPpPSYdusPCOuxdFUXNeg4JvpfqN7qTWjxknhs8l0OFda/1JZ+hmpSl8qwa34smzBCxlqpS2rWC6pS3kahE+Iyd2z8Vz5j1ZseWXecelGLqwEAeHpZZuxcL0/gWUG93uaXNm8zw3qkq21lyyXTxtgr1KlSfCw9Y+6y6Jexoujuyu01HGHNjy+ivHpT9SD42OlhMMRcVnA9QvTpnhemWPzRyWfWOTqsrvaP2hPUe67VqbEv/wBP2/wc7ri/7SP1wQYkGcre4Uf1eUZdOzz/ADlbE/BprPBep48fM0j1XpQ18cf6iw/zOZ0P+15MX6UptzJA3wbcSj8S065f6Mlaax8F0LvOclAEJCAIAgMUAQBQCEJCAIBCA11aDXiHNBB2EAjyKholNo4+I7JYJ+VEM/8AUXU/RhAKxlp65co2jqLI9ylU7E0vlrV28Jpu/wCTCfVYS0FTNVrbEaT2Kd8uJP8AdTB+jgs34bX7mnx8vY24TsvUou1++D4HwimWz1Lzx2Lnu8LXTmD3RPxyls0XMPXI9wcwV50LZx/w+xM4Jljv2uEOC2+IhNYmjLy3F+lmt5Zk1xCzlKprEJNF118tZNQobY1uE+21YqlLf5vxNPM7cGFCpqvcXCAY2cFSq3y7W7FhMmceqKUWXG16RtAXYtTppPGxg4Wrcl+Houzg7leVOmnyQrLY8Gv9WUtluSp/T6Hwy3xNnch2jtzlSXh2OJErUe6NNXBlvHksJ6SdffJpG1SGu0C5I52VutRWG8fgR0yb2Mu6Bvn5KenOGR1NbE90N32UqBHUyTOUqzcs4Ko1VmSCCM5vms5xTTTT/c0jLDyXzjCIg6rA0DKbj8hevPWtYcXiOF2OVUp87suYHEd4DlIOzdsMLu0l7ug2/cxtr6GWV1GQQkIAgMUAQBAFBJCAIAgCAIAgCAxqVA0S4gAbSqTlGC6pPCJSbeEeN0rjjUxDjSkxAtaYAknr9F8p4hZG29yr+x6+ng4VpSMhpCpT/aN8lyPUWVvEzTyYz+U2N0jTeMvMQqSvhL5ojyJR4ZYpVAfhd6q1ckvlkZyi/wC5FptV0XAIXcrZtepZRg4xzszW7D03ZSDwWXkUWcbMurJx+pSxOGqMyJcOdwuO3S2V8PKOiuyE+dik/FubmSsOqS7s38pMyZpsj5/NbrU2LiTKPSxfYss0rMS4FafF2PllPhkuEbRj2kRmpWr2wynkMya9hV1ZVLYhxmjYMKSPDUPIraNDa9MijsSfqiY1aten8oeElO+vtlEKNU++CvU040fGxzTy+yfGKXKJ+GfZkUtNUnW1452VlqMrD4IdLRt0dpForFrJJABtMFp2E5f5Wmjs8q3qj/ERdW3Wuo9aDN19Snk8kKQEAQkhAQgCAKAEJCAIAgIQFbE4+nTOq4+KJgXMLlv1tNL6Zvf25ZrXROaylsaH6S/hb1db0XJPxNf2x/PY0Wn93+RTxNR9aBIDQdggc7rgu1Nup22SX5G8IRq37k0MO1ohjc83H6rJRS2rX/0xKbfzfkYvp0hf9o7n4Vk1RB5+eX6FlKx7cL9TVVAdmGgbgPdc9k1P2S9kXjmPuaH0KYyEHhZc041JbcmsZ2MrnFmntkKkLZQ4Zr5Sn23LmHxzKm0e67YaiM+djnnTKBZDhvXQpJ75McM0VsJTf8Q6hUlVXL5l+RpG2ceGcbG9mXOcHNqHU2gASsnpJRWYbr3OqGtWMNYZlhqFCn4NSP6gJK5OqOcTyXl5kt0zZUo0SZgjiLI3U3wyFKxFaqS27XSFWSS4Zot+UZ0dIRY2KmM2uCsqsnQpaQO+V0Q1Nn3OeVETLEYltQasXKvO+Nq6cbkQrlD1Z2OS/s8Z18zew9lHlzSL+dF7FzBYfuptnnv81MJdCeUUn6j1ui57ps9OU29F9XoOryI9X8Xb9Dyb8eY8FtdhiQgCAhCQgCAICEAUEhAEBDjAk5BG8bjk4FWs0ku+Zx68PSF8tqLoTk5r5m//AA9OMJJJdkZUaBNzf6LOqjO73/YrOxLZFttJoEuPTZ5Lu8uCWZv8Oxj1N/KUdKYzJjTnnyGxebrNTlKMO/7HTp6eZSKbsW1ozC41Z2N/KbOdX09SyaS4/wAoJ9clSyMpdsG8dNJcm2jSr1R8Pdt3vu7/AGg26lI6dvkrKdcPq/obDotjR4qjnHyHorTrritnkhXyk9lgq4fRlJx1pcI3OM+azg1Jcms7ZR2LhmkRqukfzKeqVT9LMklYvUi5h8aMqluOzzXZRqk3iw57KH/YWy+LtMj85rrc3B5g9jDpztIjEUqdYQ8Qd/8AhWs8m9YksP3JhKyt5izy+ntHVqA12az27hmPuvPs0jreHx7npUaiNmz2Z5rDdoKhJkCOoKmWmilszp6IstVNK7wsVS2QoI2YPF1Hn/TaT9FDrxyJRiluzpsqVZkggcFGHjYwfSdzA4kkRrSuiuc9kmctla5wXAZsQCt1JvaUcmOO6ZawukO7s8kj1H3C9LTeIur03PK/Vf5MLNP17xOwx4cAQZB3L3YyUllcHC008MlWICAhCQgCAIAgCAKAEJNNfENbY3O5YXaiur5nv7FowcuDlYfBMadYDPLgJsF4MKKlNzSO2d05LDLNV9rEBbWSeNngyiji6U0iKeVzuXmXTfZnZVXnk4lKrVqOu2Z23EDcuSUNss7FJRLB0a6OG8qirm98EK1ZKmjgwFxbGtrGSdgFrfVRJdmbttrfgtnE3u4+yxk+xXoXZEux5iwJVoykQqUUh+kAy0SDsI91ZRWDRut8k4huMcLBrY6qyhFc5Ii6kaKeCxdQBrqno0eyviL4iWc647nYw2Hq0Gx3mtwOzr91ZudfH5HLKVdj4N9LSzRZ8A5K8NV/uRnLTd4nSbXBG8H8yF1q5NfRnL0NP6nH0joag94IptJcbmBJMb+i57k00q3yddN0kn1diaXZ6i34mt5Qo8px+eQerk/lOkyjTYPhAHAQtYquO7Rg5zk+StULQ0l0ALOLbT2L9zfgOztOoO91nguvs+kL2NN4XCValJswu1soy6UjoDQcZVXdQCuh+FR7SMPjH3iYVdE1fle08wQsZ+FWf2yX4ovHVw7ouaHpVWNLakZyI9fzxXoaKqyuDjZ7nPqZwlLMC+u05whJCAIAgCAIAgCAwrOIaSBJAJA3kCypY3GLa5wTFJtJnEoPF3OMuNzOc+y+ZjJbzs3k+T0JxfEeCwcQPlDidzQT+AXRGfV8qbM+jHLK5wGIq/EW0x5u9MlaOhvt+fC/ct59UONyzhez9FlyC873fZdlXhtMN3u/qZT1k5cbE4+i0ECIbFoFuMnyXN4hUupbelFqZtp77lDEU+8OoCGtyc42A3gHevPjBWz3eIrlvg6YvoWeX2RUbo5usQweGbEZEbFx20uy5qLyuz7G6vxFZ5N36rGZgK3wKW8ngp8U+xsbhqTchJ6qfLpjwssq7LJdzNzHkWaG8TCs4WyXpSX3KpxXLyY1MOG/GVWdEYL/AFGSrG/lRTL2g+ELic4RfpR0dMmt2Yv7xxMNOVvsp/1JPKRK6Irdmj9R651qjvL2WkKJcyeCXqktooHRvdfsqjs9qpOHS8xYV3X8yMaLqpdLjHLaqKUs5JajjCOlQqWsF0U2ZzhHPOP1MqmHqPI2LSVFs2tiI2QijZT0S0uDnHWjfkOi7qdK1htmM9Q8YSwdK4trHhFvou/zLFs5P+fY5tucGPeX+IjqVR6hxeepk9P0Jbjy0+KCN4z6rSHiTi/Xhr3HkJ8HRBm69hPKyjlZKkgISEAQBAEAQEIAgCAlQQEAQBCQoIOZpwhrG2HxexXk+L4VMeOf+GdmjTc39jRhy+N3IX9V59LsUdzWzpyZlozInndWagt5LP3K5fYwNU/K2FR3Sx6I4J6V3ZorVTmSueyc2stmsIrsiqwd47Oy4unzrcdjd+iP1L1Ok0ZDLaV6EaYJYS4OWU5Plm9rG5reNcM5M3JlWo4AzkuOySUspYNoptGAp6yzVfXjYt1dJk3Bjb6LWGkTe+5V3M3UQ0+FoJj+EE+a66K4NuMU39jOblyy1SwbznDR5n7L0K9DY+cL9X/gxlbFcbllmDaNp+n0XXDRwj3f8+xk7Wyf0KntYDzE/VXekpfMV+5Hmz9yf0Sn/A3yT4Sj/YvyHmz9zU/R9M7CORP0NljLw2h8LH4/xF1fNG+hS1G6oJMb11U1KqHSnkynLqeTYtSoQkIAgCAIAgIQBAEAQBQAgCAlAc3S2Ge8tLROrNpGdr3Xk+J6a23pdazjsdWmshFNSeMlc1XjOm4dD7Lz3O9L1VtfgbdMHxJEsL3ZU3dRA9VNcb7N1B/jt+5D6I8yRl+rqr/ieGjcLn7LpXh11m85Y+25X4iuHyrJsZoSn85c/g428hC3h4TQvnbl9/8ArBV62z+3CMq2ihI7shgGwNVb/CoyknU1HH0Ihqnj17/iZswDhnUn+38VaPh0l81mfwKu9PiP6mRwAObndICt/TYvZyf6Eee12RoxmjwGjUBJ23JXPq/DUq15SefzNKtQ2/UYYam821Y4mwXNpqb7NunH32LWSgu5cp4IR4jPAWH4r1qtDGK9Tz+hzu59iy1oAgCBwXbGKisJGTbfJkpIIQBSAgCAIAgCEhAEAQBAEAQBAEICAQgCAKAEACAlAEBCAQgCAIAgCAIAgCAlAFICAIAgCAhAEJIQEoAgCAIAgCAIQEAQBAEAQBASgCAKAEAQBAEAQEIAgJUgIAgCAIAgCAICEBCEkoAgCAIAgCAIAEICEhAEICAlAFACkBAEAUAIAgCAKQEAQBAEAQBAEAQBAEB//9k=" alt="Character" class="w-full h-36 rounded-lg" />
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                {/* menu banner */}
                <div className='max-w-screen-xl mx-auto my-2'>
                    <div className='flex space-x-2'>
                        <div className=' h-36 md:h-44 w-full '>
                            <img className='h-36 md:h-44 w-full object-cover rounded-lg' src="https://storage.aeononlinecambodia.com/preview/super-deal.gif" alt="" />
                        </div>
                    </div>
                </div>

                {/* produt item */}
                <div className='max-w-screen-xl mx-auto my-4'>
                    <div className='space-x-2'>
                        <div className='flex justify-between whitespace-nowrap'>
                            <p className='text-pink-700 text-lg font-normal'>ពេញនិយម</p>
                            <a href="" className='text-lg underline text-pink-700 font-light'>មើលទាំងអស់</a>
                        </div>
                        <div className='grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4 justify-between py-4'>
                            <div class="bg-gray-50 rounded-xl relative w-36  duration-300 group">
                                <div class="absolute top-0 right-0 bg-red-500 text-white text-sm px-2 py-1 rounded-tr-xl rounded-bl-xl">
                                    50%
                                </div>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg/220px-Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg" alt="Mobile Legends" class="rounded-lg h-28 w-28 m-4 group-hover:scale-110 duration-500" />
                                <div class="mt-4 px-1">
                                    <h2 class="text-pink-700 text-lg font-bold">Mile</h2>
                                    <p class="text-pink-700 text-lg font-bold line-clamp-2">
                                        អង្គរមៀល ទឹកដោះជូរ គ្រប់រសជាតិ១០០ក្រាម
                                    </p>
                                </div>
                            </div>
                            <div class="bg-gray-50 rounded-xl relative w-36  duration-300 group">
                                <div class="absolute top-0 right-0 bg-red-500 text-white text-sm px-2 py-1 rounded-tr-xl rounded-bl-xl">
                                    50%
                                </div>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg/220px-Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg" alt="Mobile Legends" class="rounded-lg h-28 w-28 m-4 group-hover:scale-110 duration-500" />
                                <div class="mt-4 px-1">
                                    <h2 class="text-pink-700 text-lg font-bold">Mile</h2>
                                    <p class="text-pink-700 text-lg font-bold line-clamp-2">
                                        អង្គរមៀល ទឹកដោះជូរ គ្រប់រសជាតិ១០០ក្រាម
                                    </p>
                                </div>
                            </div>
                            <div class="bg-gray-50 rounded-xl relative w-36  duration-300 group">
                                <div class="absolute top-0 right-0 bg-red-500 text-white text-sm px-2 py-1 rounded-tr-xl rounded-bl-xl">
                                    50%
                                </div>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg/220px-Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg" alt="Mobile Legends" class="rounded-lg h-28 w-28 m-4 group-hover:scale-110 duration-500" />
                                <div class="mt-4 px-1">
                                    <h2 class="text-pink-700 text-lg font-bold">Mile</h2>
                                    <p class="text-pink-700 text-lg font-bold line-clamp-2">
                                        អង្គរមៀល ទឹកដោះជូរ គ្រប់រសជាតិ១០០ក្រាម
                                    </p>
                                </div>
                            </div>
                            <div class="bg-gray-50 rounded-xl relative w-36  duration-300 group">
                                <div class="absolute top-0 right-0 bg-red-500 text-white text-sm px-2 py-1 rounded-tr-xl rounded-bl-xl">
                                    50%
                                </div>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg/220px-Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg" alt="Mobile Legends" class="rounded-lg h-28 w-28 m-4 group-hover:scale-110 duration-500" />
                                <div class="mt-4 px-1">
                                    <h2 class="text-pink-700 text-lg font-bold">Mile</h2>
                                    <p class="text-pink-700 text-lg font-bold line-clamp-2">
                                        អង្គរមៀល ទឹកដោះជូរ គ្រប់រសជាតិ១០០ក្រាម
                                    </p>
                                </div>
                            </div>
                            <div class="bg-gray-50 rounded-xl relative w-36  duration-300 group">
                                <div class="absolute top-0 right-0 bg-red-500 text-white text-sm px-2 py-1 rounded-tr-xl rounded-bl-xl">
                                    50%
                                </div>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg/220px-Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg" alt="Mobile Legends" class="rounded-lg h-28 w-28 m-4 group-hover:scale-110 duration-500" />
                                <div class="mt-4 px-1">
                                    <h2 class="text-pink-700 text-lg font-bold">Mile</h2>
                                    <p class="text-pink-700 text-lg font-bold line-clamp-2">
                                        អង្គរមៀល ទឹកដោះជូរ គ្រប់រសជាតិ១០០ក្រាម
                                    </p>
                                </div>
                            </div>
                            <div class="bg-gray-50 rounded-xl relative w-36  duration-300 group">
                                <div class="absolute top-0 right-0 bg-red-500 text-white text-sm px-2 py-1 rounded-tr-xl rounded-bl-xl">
                                    50%
                                </div>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg/220px-Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg" alt="Mobile Legends" class="rounded-lg h-28 w-28 m-4 group-hover:scale-110 duration-500" />
                                <div class="mt-4 px-1">
                                    <h2 class="text-pink-700 text-lg font-bold">Mile</h2>
                                    <p class="text-pink-700 text-lg font-bold line-clamp-2">
                                        អង្គរមៀល ទឹកដោះជូរ គ្រប់រសជាតិ១០០ក្រាម
                                    </p>
                                </div>
                            </div>
                            <div class="bg-gray-50 rounded-xl relative w-36  duration-300 group">
                                <div class="absolute top-0 right-0 bg-red-500 text-white text-sm px-2 py-1 rounded-tr-xl rounded-bl-xl">
                                    50%
                                </div>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg/220px-Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg" alt="Mobile Legends" class="rounded-lg h-28 w-28 m-4 group-hover:scale-110 duration-500" />
                                <div class="mt-4 px-1">
                                    <h2 class="text-pink-700 text-lg font-bold">Mile</h2>
                                    <p class="text-pink-700 text-lg font-bold line-clamp-2">
                                        អង្គរមៀល ទឹកដោះជូរ គ្រប់រសជាតិ១០០ក្រាម
                                    </p>
                                </div>
                            </div>
                            <div class="bg-gray-50 rounded-xl relative w-36  duration-300 group">
                                <div class="absolute top-0 right-0 bg-red-500 text-white text-sm px-2 py-1 rounded-tr-xl rounded-bl-xl">
                                    50%
                                </div>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg/220px-Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg" alt="Mobile Legends" class="rounded-lg h-28 w-28 m-4 group-hover:scale-110 duration-500" />
                                <div class="mt-4 px-1">
                                    <h2 class="text-pink-700 text-lg font-bold">Mile</h2>
                                    <p class="text-pink-700 text-lg font-bold line-clamp-2">
                                        អង្គរមៀល ទឹកដោះជូរ គ្រប់រសជាតិ១០០ក្រាម
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* produt item 2 */}
                <div className='max-w-screen-xl mx-auto my-4'>
                    <div className='space-x-2'>
                        <div className='flex justify-between whitespace-nowrap'>
                            <p className='text-gray-700 text-2xl font-normal'>ពេញនិយម</p>
                            <a href="" className='text-lg underline text-pink-700 font-light'>មើលទាំងអស់</a>
                        </div>
                        <div className=' max-w-screen-xl mx-auto my-3'>
                            <div className='flex space-x-2'>
                                <div className='flex overflow-x-auto snap-x  space-x-6 justify-between snap-mandatory mx-2 scrollbar-hidden'>                            <div class="bg-gray-500 rounded-xl relative w-36 flex flex-col items-center">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg/220px-Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg" alt="Mobile Legends" class="h-16 absolute w-16 mt-4" />
                                    <div class="mt-14 px-1 text-center bg-slate-200 rounded-b-xl w-full">
                                        <h2 class="text-pink-700 text-lg font-bold">Mile</h2>
                                        <p class="text-pink-700 text-lg font-bold line-clamp-2">
                                            គ្រប់រសជាតិ១០០ក្រាម
                                        </p>
                                    </div>
                                </div>
                                    <div class="bg-gray-500 rounded-xl relative w-36 flex flex-col items-center">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR82SmSapW1jHztpD7cq4yVWF7F04SHT9xu7Y0AIRevq-UOeRTwTu_LecIvcpr1_UqfosA&usqp=CAU" alt="Mobile Legends" class="h-16 absolute w-16 mt-4" />
                                        <div class="mt-14 px-1 text-center bg-slate-200 rounded-b-xl w-full">
                                            <h2 class="text-pink-700 text-lg font-bold">Mile</h2>
                                            <p class="text-pink-700 text-lg font-bold line-clamp-2">
                                                គ្រប់រសជាតិ១០០ក្រាម
                                            </p>
                                        </div>
                                    </div>
                                    <div class="bg-gray-500 rounded-xl relative w-36 flex flex-col items-center">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7ArbaJZFXpj3Xch8iavcvi0LawigrAeuPbsgeGCqLcKlLMpy1TV7wDRYcFth4coKl0sg&usqp=CAU" alt="Mobile Legends" class="h-16 absolute w-16 mt-4" />
                                        <div class="mt-14 px-1 text-center bg-slate-200 rounded-b-xl w-full">
                                            <h2 class="text-pink-700 text-lg font-bold">Mile</h2>
                                            <p class="text-pink-700 text-lg font-bold line-clamp-2">
                                                You've Been Thinking
                                            </p>
                                        </div>
                                    </div>
                                    <div class="bg-gray-500 rounded-xl relative w-36 flex flex-col items-center">
                                        <img src="https://media.post.rvohealth.io/wp-content/uploads/2020/08/10045-whats_the_difference_between_processed_and_ultra-processed_food_732x549-thumbnail-732x549.jpg" alt="Mobile Legends" class="h-16 absolute w-16 mt-4" />
                                        <div class="mt-14 px-1 text-center bg-slate-200 rounded-b-xl w-full">
                                            <h2 class="text-pink-700 text-lg font-bold">Mile</h2>
                                            <p class="text-pink-700 text-lg font-bold line-clamp-2">
                                                Ultra-Processed Foods
                                            </p>
                                        </div>
                                    </div>

                                    <div class="bg-gray-500 rounded-xl relative w-36 flex flex-col items-center">
                                        <img src="https://images.ctfassets.net/awb1we50v0om/2Spf80TME2zIhLqsi3Zxv9/919421a45f3260ee426c99c35235f1c8/Plates03__3__copy3.jpg?w=1920&fm=webp&q=70" alt="Mobile Legends" class="h-16 absolute w-16 mt-4" />
                                        <div class="mt-14 px-1 text-center bg-slate-200 rounded-b-xl w-full">
                                            <h2 class="text-pink-700 text-lg font-bold">Mile</h2>
                                            <p class="text-pink-700 text-lg font-bold line-clamp-2">
                                                Goodfood
                                            </p>
                                        </div>
                                    </div>
                                    <div class="bg-gray-500 rounded-xl relative w-36 flex flex-col items-center">
                                        <img src="https://www.fao.org/images/homepagelibraries/default-album/sdg-2.png" alt="Mobile Legends" class="h-16 absolute w-16 mt-4" />
                                        <div class="mt-14 px-1 text-center bg-slate-200 rounded-b-xl w-full">
                                            <h2 class="text-pink-700 text-lg font-bold">Mile</h2>
                                            <p class="text-pink-700 text-lg font-bold line-clamp-2">
                                                Food and Agriculture Organization of the United Nations
                                            </p>
                                        </div>
                                    </div>
                                    <div class="bg-gray-500 rounded-xl relative w-36 flex flex-col items-center">
                                        <img src="https://loveincorporated.blob.core.windows.net/contentimages/gallery/769d65ac-bb09-415f-bbfb-62234b14186e-cookingmistakes_poachedeggs.jpg" alt="Mobile Legends" class="h-16 absolute w-16 mt-4" />
                                        <div class="mt-14 px-1 text-center bg-slate-200 rounded-b-xl w-full">
                                            <h2 class="text-pink-700 text-lg font-bold">Mile</h2>
                                            <p class="text-pink-700 text-lg font-bold line-clamp-2">
                                                គ្រប់រសជាតិ១០០ក្រាម
                                            </p>
                                        </div>
                                    </div>
                                    <div class="bg-gray-500 rounded-xl relative w-36 flex flex-col items-center">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsgVBw39jpCgTfIkcQcw9FhxL15E_mvPzx66whHMQRuzBOIDXYoY_urItOix4FEfRqG6k&usqp=CAU" alt="Mobile Legends" class="h-16 absolute w-16 mt-4" />
                                        <div class="mt-14 px-1 text-center bg-slate-200 rounded-b-xl w-full">
                                            <h2 class="text-pink-700 text-lg font-bold">Mile</h2>
                                            <p class="text-pink-700 text-lg font-bold line-clamp-2">
                                                គ្រប់រសជាតិ១០០ក្រាម
                                            </p>
                                        </div>
                                    </div>
                                    <div class="bg-gray-500 rounded-xl relative w-36 flex flex-col items-center">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR479FPriDIbX7lpmp7pZ43TNaIBMsnkDBTm1tMnHABIhU-0GVubhCQTqsji-Sy_M0oWNs&usqp=CAU" alt="Mobile Legends" class="h-16 absolute w-16 mt-4" />
                                        <div class="mt-14 px-1 text-center bg-slate-200 rounded-b-xl w-full">
                                            <h2 class="text-pink-700 text-lg font-bold">Mile</h2>
                                            <p class="text-pink-700 text-lg font-bold line-clamp-2">
                                                គ្រប់រសជាតិ១០០ក្រាម
                                            </p>
                                        </div>
                                    </div>
                                    <div class="bg-gray-500 rounded-xl relative w-36 flex flex-col items-center">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh0zj5jWM4qNJ-JJmStkvYLoptwW4cAtxVlQ&s" alt="Mobile Legends" class="h-16 absolute w-16 mt-4" />
                                        <div class="mt-14 px-1 text-center bg-slate-200 rounded-b-xl w-full">
                                            <h2 class="text-pink-700 text-lg font-bold">Mile</h2>
                                            <p class="text-pink-700 text-lg font-bold line-clamp-2">
                                                គ្រប់រសជាតិ១០០ក្រាម
                                            </p>
                                        </div>
                                    </div>
                                    <div class="bg-gray-500 rounded-xl relative w-36 flex flex-col items-center">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShlZSQQLHhRIoluEtg0u8GZ7--xdEx0GX9NA&s" alt="Mobile Legends" class="h-16 absolute w-16 mt-4" />
                                        <div class="mt-14 px-1 text-center bg-slate-200 rounded-b-xl w-full">
                                            <h2 class="text-pink-700 text-lg font-bold">Mile</h2>
                                            <p class="text-pink-700 text-lg font-bold line-clamp-2">
                                                គ្រប់រសជាតិ១០០ក្រាម
                                            </p>
                                        </div>
                                    </div>
                                    <div class="bg-gray-500 rounded-xl relative w-36 flex flex-col items-center">
                                        <img src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/1/19/0/EddieJackson_SausagePinwheels_H.jpg.rend.hgtvcom.1280.1280.suffix/1516370007965.jpeg" alt="Mobile Legends" class="h-16 absolute w-16 mt-4" />
                                        <div class="mt-14 px-1 text-center bg-slate-200 rounded-b-xl w-full">
                                            <h2 class="text-pink-700 text-lg font-bold">Mile</h2>
                                            <p class="text-pink-700 text-lg font-bold line-clamp-2">
                                                គ្រប់រសជាតិ១០០ក្រាម
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* produt item 3 */}
                <div className='max-w-screen-xl mx-auto my-4'>
                    <div className='space-x-2'>
                        <div className='flex justify-between whitespace-nowrap'>
                            <p className='text-gray-700 text-2xl font-normal'>ទិញតាមម៉ាក</p>
                            <a href="" className='text-lg underline text-pink-700 font-light'>មើលទាំងអស់</a>
                        </div>
                        <div className=' max-w-screen-xl mx-auto my-3'>
                            <div className='flex space-x-2'>
                                <div className='flex overflow-x-auto snap-x  space-x-6 justify-between snap-mandatory mx-2 scrollbar-hidden'>
                                    <a href="">
                                        <div class="bg-gray-300 rounded-xl relative w-36 flex flex-col items-center">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg/220px-Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg" alt="Mobile Legends" class="h-16 rounded-full absolute w-16 mt-4" />
                                            <div class="mt-14 px-1 text-center bg-slate-200 rounded-b-xl w-full">
                                                <p class="text-pink-700 text-lg font-bold line-clamp-1 my-8">
                                                    គ្រប់រសជាតិ១០០ក្រាម
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="">
                                        <div class="bg-gray-300 rounded-xl relative w-36 flex flex-col items-center">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR82SmSapW1jHztpD7cq4yVWF7F04SHT9xu7Y0AIRevq-UOeRTwTu_LecIvcpr1_UqfosA&usqp=CAU" alt="Mobile Legends" class="h-16 rounded-full absolute w-16 mt-4" />
                                            <div class="mt-14 px-1 text-center bg-slate-200 rounded-b-xl w-full">
                                                <p class="text-pink-700 text-lg font-bold line-clamp-1 my-8">
                                                    គ្រប់រសជាតិ១០០
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="">
                                        <div class="bg-gray-300 rounded-xl relative w-36 flex flex-col items-center">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg/220px-Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg" alt="Mobile Legends" class="h-16 rounded-full absolute w-16 mt-4" />
                                            <div class="mt-14 px-1 text-center bg-slate-200 rounded-b-xl w-full">
                                                <p class="text-pink-700 text-lg font-bold line-clamp-1 my-8">
                                                    គ្រប់រសជាតិ១០០ក្រាម
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="">
                                        <div class="bg-gray-300 rounded-xl relative w-36 flex flex-col items-center">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR82SmSapW1jHztpD7cq4yVWF7F04SHT9xu7Y0AIRevq-UOeRTwTu_LecIvcpr1_UqfosA&usqp=CAU" alt="Mobile Legends" class="h-16 rounded-full absolute w-16 mt-4" />
                                            <div class="mt-14 px-1 text-center bg-slate-200 rounded-b-xl w-full">
                                                <p class="text-pink-700 text-lg font-bold line-clamp-1 my-8">
                                                    គ្រប់រសជាតិ១០០
                                                </p>
                                            </div>
                                        </div>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* location */}
                <div className='max-w-screen-xl mx-auto my-8'>
                    <div className='space-x-2 grid md:grid-cols-2 grid-cols-1'>
                        <div className='max-w-screen-xl mx-auto my-2' data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
                            <a href="">
                                <div className='flex space-x-2'>
                                    <div className=' h-36 md:h-44 lg:h-56 w-full'>
                                        <img className=' h-36 md:h-44 lg:h-56 w-full object-cover rounded-lg' src="https://aeoncambodia.sgp1.digitaloceanspaces.com/image/banner/20240709/1720492100-Copy-of-AEon-(5).webp" alt="" />
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className='max-w-screen-xl mx-auto my-2' data-aos="fade-left" data-aos-delay="100" data-aos-duration="1000">
                            <a href="">
                                <div className='flex space-x-2'>
                                    <div className=' h-36 md:h-44 lg:h-56 w-full'>
                                        <img className=' h-36 md:h-44 lg:h-56 w-full object-cover rounded-lg' src="https://aeoncambodia.sgp1.digitaloceanspaces.com/image/banner/20240708/1720441058-Copy-of-AEon-(4).png" alt="" />
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className='max-w-screen-xl mx-auto my-2' data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
                            <a href="">
                                <div className='flex space-x-2'>
                                    <div className=' h-36 md:h-44 lg:h-56 w-full'>
                                        <img className=' h-36 md:h-44 lg:h-56 w-full object-cover rounded-lg' src="https://cdn.dribbble.com/users/8404817/screenshots/19846116/media/3d23457419f63e5997ab100f482e7416.gif" alt="" />
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className='max-w-screen-xl mx-auto my-2' data-aos="fade-left" data-aos-delay="100" data-aos-duration="1000">
                            <a href="">
                                <div className='flex space-x-2'>
                                    <div className=' h-36 md:h-44 lg:h-56 w-full'>
                                        <img className=' h-36 md:h-44 lg:h-56 w-full object-cover rounded-lg' src="https://asrahim.wordpress.com/wp-content/uploads/2017/09/sale-festival.gif" alt="" />
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                {/* banner bottom */}
                <div className=''>
                    <div className='max-w-screen-xl mx-auto'>
                        <div className='grid grid-cols-2'>
                            <div className=" h-64 w-full" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
                                <img className='h-64' src="https://dsuown9evwz4y.cloudfront.net/Images/nexus-alpha/blue/desktop/home/download-apk-phone.webp?v=20240813" alt="" />
                            </div>
                            <div className=" h-64 w-full" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
                                <img className='h-64' src="https://aeoncambodia.sgp1.digitaloceanspaces.com/image/store_banner/20240212/1707733789-1707124404-Untitled-design-(6)-(1).webp" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Home