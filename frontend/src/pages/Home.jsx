import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Popover, Carousel } from "flowbite-react";
function Home({ isAuthenticated }) {
    const [categories, setCategories] = useState([])
    const [categoriesDetail, setCategoriesDetail] = useState([])
    const [cooking, setCategoriescooking] = useState([])
    const [product, setProduct] = useState([]);
    const [Spices, setSpices] = useState([]);
    const [fuit, setFuit] = useState([]);
    const [drink, setDrink] = useState([]);
    const [drinkcooking, setDrinkCooking] = useState([]);


    // mosion
    useEffect(() => {
        AOS.init({
            duration: 1000,
            delay: 100,
            once: true,
        });
        getAllCat();
        geCategoryDetail();
        geCategoryCooking();
        PopularProduct();
        geCategorySpices();
        geCategoryFuit();
        geCategoryDrinkcooking();
        geCategoryDrink();
    }, []);

    // get category in modal
    const getAllCat = () => {
        axios
            .get('http://localhost:6700/api/categories')
            .then(res => setCategories(res.data))

            .catch(err => console.log(err));
    };

    // Fetch product history by username
    const PopularProduct = async () => {
        await axios
            .get(`http://localhost:6700/api/product`)
            .then(res => {
                const sortedData = res.data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
                setProduct(sortedData);
            })
            .catch(err => console.log(err));
    };

    /// menu category 
    const geCategoryDetail = () => {
        axios
            .get('http://localhost:6700/api/categories/detail/2')
            .then(res => setCategoriesDetail(res.data))
            .catch(err => console.log(err));
    };
    const content = (
        <div className="relative p-4 w-96 max-w-2xl text-gray-500 dark:text-gray-400">
            <div className='grid grid-cols-1 gap-4 p-6'>
                {categoriesDetail.map((items) => (
                    <div className=''>
                        <Link className='text-sm py-2' to={`by_category_product/${items.id}`} >{items.names}</Link>
                    </div>
                ))}
            </div>
        </div>
    );

    // produt item
    const geCategorySpices = () => {
        axios
            .get('http://localhost:6700/api/categories/detail/1')
            .then(res => setSpices(res.data))
            .catch(err => console.log(err));
    };
    const CategorySpices = (
        <div className="relative p-4 w-96 max-w-2xl text-gray-500 dark:text-gray-400">
            <div className='grid grid-cols-1 gap-4 p-6'>
                {Spices.map((items) => (
                    <div className=''>
                        <Link className='text-sm py-2' to={`by_category_product/${items.id}`} >{items.names}</Link>
                    </div>
                ))}
            </div>
        </div>
    );

    //category item detail 3
    const geCategoryFuit = () => {
        axios
            .get('http://localhost:6700/api/categories/detail/3')
            .then(res => setFuit(res.data))
            .catch(err => console.log(err));
    };
    const CategoryFuit = (
        <div className="relative p-4 w-96 max-w-2xl text-gray-500 dark:text-gray-400">
            <div className='grid grid-cols-1 gap-4 p-6'>
                {fuit.map((items) => (
                    <div className=''>
                        <Link className='text-sm py-2' to={`by_category_product/${items.id}`} >{items.names}</Link>
                    </div>
                ))}
            </div>
        </div>
    );
    // category item detail 5
    const geCategoryCooking = () => {
        axios
            .get('http://localhost:6700/api/categories/detail/5')
            .then(res => setCategoriescooking(res.data))
            .catch(err => console.log(err));
    };
    const Categorycooking = (
        <div className="relative p-4 w-96 max-w-2xl text-gray-500 dark:text-gray-400">
            <div className='grid grid-cols-1 gap-4 p-6'>
                {cooking.map((items) => (
                    <div className=''>
                        <Link className='text-sm py-2' to={`by_category_product/${items.id}`} >{items.names}</Link>
                    </div>
                ))}
            </div>
        </div>
    );
    // category item detail drink 4
    const geCategoryDrink = () => {
        axios
            .get('http://localhost:6700/api/categories/detail/4')
            .then(res => setDrink(res.data))
            .catch(err => console.log(err));
    };
    const CategoryDrink = (
        <div className="relative p-4 w-96 max-w-2xl text-gray-500 dark:text-gray-400">
            <div className='grid grid-cols-1 gap-4 p-6'>
                {drink.map((items) => (
                    <div className=''>
                        <Link className='text-sm py-2' to={`by_category_product/${items.id}`} >{items.names}</Link>
                    </div>
                ))}
            </div>
        </div>
    );

    // category item detail សាចខ្លែម
    const geCategoryDrinkcooking = () => {
        axios
            .get('http://localhost:6700/api/categories/detail/6')
            .then(res => setDrinkCooking(res.data))
            .catch(err => console.log(err));
    };
    const CategoryDrinkcooking = (
        <div className="relative p-4 w-96 max-w-2xl text-gray-500 dark:text-gray-400">
            <div className='grid grid-cols-1 gap-4 p-6'>
                {drinkcooking.map((items) => (
                    <div className=''>
                        <Link className='text-sm py-2' to={`by_category_product/${items.id}`} >{items.names}</Link>
                    </div>
                ))}
            </div>
        </div>
    );

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
                                        <a href="/discount" className="flex items-center p-3 text-pink-600 rounded-lg dark:text-white hover:bg-white hover:shadow-md dark:hover:bg-gray-700 group">
                                            <img
                                                className="rounded-full h-8 w-8"
                                                src="https://static.vecteezy.com/system/resources/thumbnails/015/452/522/small_2x/discount-icon-in-trendy-flat-style-isolated-on-background-discount-icon-page-symbol-for-your-web-site-design-discount-icon-logo-app-ui-discount-icon-eps-vector.jpg"
                                                alt="Flowbite Logo"
                                            />
                                            <span className="flex-1 ms-3 whitespace-nowrap hidden md:block">បញ្ចុះតម្លៃរហូតដល់៥០%</span>
                                        </a>
                                    </li>
                                    <Popover content={content} trigger="hover" placement="right" aria-labelledby="default-popover" arrow={false}>
                                        <li>
                                            <a href="#" className="flex items-center p-3 text-pink-600 rounded-lg dark:text-white hover:bg-white hover:shadow-md dark:hover:bg-gray-700 group">
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
                                    </Popover>
                                    <Popover content={CategorySpices} trigger="hover" placement="right" aria-labelledby="default-popover" arrow={false}>

                                        <li>
                                            <a href="#" className="flex items-center p-3 text-pink-600 rounded-lg dark:text-white hover:bg-white hover:shadow-md dark:hover:bg-gray-700 group">
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
                                    </Popover>
                                    <Popover content={CategoryFuit} trigger="hover" placement="right" aria-labelledby="default-popover" arrow={false}>

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
                                    </Popover>
                                    <Popover content={CategoryFuit} trigger="hover" placement="right" aria-labelledby="default-popover" arrow={false}>

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
                                    </Popover>
                                    <Popover content={Categorycooking} trigger="hover" placement="right" aria-labelledby="default-popover" arrow={false}>

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
                                    </Popover>
                                    <Popover content={CategoryDrink} trigger="hover" placement="right" aria-labelledby="default-popover" arrow={false}>

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
                                    </Popover>
                                    <Popover content={CategoryDrinkcooking} trigger="hover" placement="right" aria-labelledby="default-popover" arrow={false}>
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
                                    </Popover>
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
                                    <div className='h-40 sm:h-52 xl:h-64 2xl:h-72 w-full duration-500 scrollbar-hidden  px-2'>
                                        <div className="h-40 sm:h-52 xl:h-64 2xl:h-72 opacity-100 duration-500 md:border-x-2 border-x-2 rounded-xl overflow-hidden border-red-600">
                                            <Carousel>
                                                <img className='object-fil h-40 sm:h-52 xl:h-64 2xl:h-72 w-full duration-500 rounded-xl' src="https://cdn.dribbble.com/users/8404817/screenshots/19846116/media/3d23457419f63e5997ab100f482e7416.gif" alt="..." />
                                                <img className='object-fil h-40 sm:h-52 xl:h-64 2xl:h-72 w-full duration-500 rounded-xl' src="https://aeoncambodia.sgp1.digitaloceanspaces.com/image/notification/20240704/1720090404-New-Project-(32).jpg" alt="..." />
                                                <img className='object-fil h-40 sm:h-52 xl:h-64 2xl:h-72 w-full duration-500 rounded-xl' src="https://aeoncambodia.sgp1.digitaloceanspaces.com/image/notification/20240912/1726124943-size-1200x900.webp" alt="..." />
                                                <img className='object-fil h-40 sm:h-52 xl:h-64 2xl:h-72 w-full duration-500 rounded-xl' src="https://aeoncambodia.sgp1.digitaloceanspaces.com/image/notification/20240826/1724643840-1200-x-900.webp" alt="..." />
                                            </Carousel>
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
                            {categoriesDetail.map((items) => (
                                <Link to={`/detailcategory/${items.id}`}>
                                    <div className='w-36 h-36 rounded-lg my-3  hover:scale-110 duration-500 flex-shrink-0 snap-center overflow-hidden  '>
                                        <div class="relative">
                                            <div className='flex font-semibold text-xl absolute justify-between text-gray-900 px-2'>
                                                <p>{items.names}</p>
                                            </div>
                                            <img src={`http://localhost:6700/image/${items.image}`} alt="Character" class="w-full h-36 rounded-lg" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                {/* menu banner */}
                <div className='max-w-screen-xl mx-auto my-2'>
                    <div className='flex space-x-2'>
                        <div className=' h-36 md:h-44 w-full '>
                            <img className='h-36 md:h-44 w-full object-cover rounded-lg' src="https://camo.envatousercontent.com/78c78a7f990f17d6f0eee63d2f58019d0fd91d2c/68747470733a2f2f692e6962622e636f2f747a43625436392f373262616e6e65722e676966" alt="" />
                        </div>
                    </div>
                </div>

                {/* produt item ពេញនិយម */}
                <div className='max-w-screen-xl mx-auto my-4'>
                    <div className='space-x-2'>
                        <div className='flex justify-between whitespace-nowrap'>
                            <p className='text-pink-700 text-lg font-normal'>ពេញនិយម</p>
                            <a href="/homeproductsale" className='text-lg underline text-pink-700 font-light'>មើលទាំងអស់</a>
                        </div>
                        <div className='grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4 justify-between py-4'>
                            {product.slice(0, 18).map((items) => (
                                <Link to={`/productcategoryid/${items.id}/2`}>
                                    <div class=" rounded-md relative w-36 border  border-gray-100 group">
                                        <img src={`http://localhost:6700/image/${items.image}`} alt="Mobile Legends" class="h-28 w-28 m-4 group-hover:scale-125 duration-100" />
                                        <div class="mt-4 px-1 text-center">
                                            <p class="text-gray-600 text-sm font-bold line-clamp-2">
                                                {items.names}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>


                {/* menu category ទិញតាមប្រភេទ */}
                <div className=' max-w-screen-xl mx-auto my-3'>
                    <div className='flex justify-between whitespace-nowrap'>
                        <p className='text-gray-700 text-xl font-normal'>ទិញតាមប្រភេទ</p>
                        <a href="" className='text-sm underline text-pink-700 font-light'>មើលទាំងអស់</a>
                    </div>
                    <div className='flex space-x-2'>
                        <div className='flex overflow-x-auto snap-x  space-x-6 justify-between snap-mandatory mx-2 scrollbar-hidden'>
                            {cooking.map((items) => (
                                <Link to={`/productcategoryid/${items.id}/2`}>

                                    <div className='w-36 h-36 rounded-lg my-3 justify-center bg-slate-500 duration-500 flex-shrink-0 snap-center overflow-hidden relative'>
                                        <img
                                            src={`http://localhost:6700/image/${items.image}`}
                                            alt="Mobile Legends"
                                            className="h-16 absolute w-16 mt-4 left-1/2 transform -translate-x-1/2"
                                        />
                                        <div className="mt-14 px-1 text-center bg-slate-200 rounded-b-xl h-full w-full">
                                            <div class="mt-4 px-1 text-center">
                                                <p class="text-pink-700 text-lg font-bold line-clamp-2 pt-7">
                                                    {items.names}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* produt item 3 */}
                {/* <div className='max-w-screen-xl mx-auto my-4'>
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
                </div> */}

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