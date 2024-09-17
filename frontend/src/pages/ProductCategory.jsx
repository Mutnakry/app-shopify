import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useCart } from './sale/CartContext';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

function ProductCategory({ isAuthenticated }) {
    const { cart, removeItem, clearCart, updateQuantity } = useCart();
    const { addItem } = useCart();
    const [Product, setProduct] = useState([]);
    const [Productsingle, setProductsingle] = useState({});
    const [productcategory, setproductcategory] = useState([]);
    const navigate = useNavigate();
    const { detail, id } = useParams();

    // Fetch single product details by ID
    useEffect(() => {
        getProductSingle();
    }, [id]);

    const getProductSingle = async () => {
        try {
            const respone = await axios.get(`http://localhost:6700/api/product/update/${id}`)
            setproductcategory(respone.data);
            console.log(respone.productcategory)
        }
        catch (error) {
            console.error(error)
        }
    };

    // Fetch all products based on a category or detail
    useEffect(() => {
        getAllProduct();
    }, [detail]);

    const getAllProduct = () => {
        axios
            .get(`http://localhost:6700/api/product/${detail}`)
            .then(res => {
                const sortedData = res.data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
                setProduct(sortedData);  // Set all products to state
                console.log("All products:", sortedData);
            })
            .catch(err => console.log("Error fetching all products:", err));
    };

    // Handle adding a product to the cart and check user authentication
    const handleAddToCart = (products) => {
        if (isAuthenticated) {
            addItem(products);  // Add the product to the cart
        } else {
            toast.error(`សូមលោកអ្នកចុះឈ្មោះជាមិនសិន`, {
                position: "top-center",
                autoClose: 3000,
            });
        }
    };

    const handleAddToCartupdate = (items) => {
        if (isAuthenticated) {
            addItem(items);  // Add the product to the cart
        } else {
            toast.error(`សូមលោកអ្នកចុះឈ្មោះជាមិនសិន`, {
                position: "top-center",
                autoClose: 3000,
            });
        }
    };

    const handleQuantityChange = (items, delta) => {
        const newQuantity = items.quantity + delta;

        if (newQuantity > items.qty) {
            toast.error(`មានតែទំនិញ ${items.quantity} ប៉ុណ្ណោះក្នុងស្តុក។ !`, {
                position: "top-right",
                autoClose: 1000,
            });
        } else if (newQuantity > 0) {
            updateQuantity(items.id, newQuantity);
        } else {
            removeItem(items.id);
        }
    };

    return (
        <div className='mt-14'>
            {/* Product item display */}
            <div className='max-w-screen-xl mx-auto my-4'>
                <nav className="text-sm text-gray-500 mb-4 pt-4 underline underline-offset-8">
                    <a href="/" className="text-gray-600 font-semibold text-sm">ដើម / </a>
                    <a href="/" className="text-gray-600 font-semibold text-sm"> បញ្ចុះតម្លៃរហូតដល់៥០% </a>
                </nav>
                {productcategory.map((items) => (
                    <div className="flex gap-8">
                        <div className="w-full lg:w-1/3 flex flex-col items-center">
                            {/* Product Image */}
                            <img
                                src={`http://localhost:6700/image/${items.image}`}
                                alt="Product"
                                className="w-full h-auto object-contain mb-4"
                            />
                            {/* Thumbnails */}
                            <div className="flex space-x-2">
                                <img
                                    src={`http://localhost:6700/image/${items.image}`}
                                    alt="Thumbnail"
                                    className="w-16 h-16 object-contain border p-1"
                                />
                            </div>
                        </div>
                        <div className="w-full lg:w-2/3 pr-3">
                            <h2 className="text-2xl font-semibold mb-2">{items.names}</h2>
                            <div className="text-purple-500">★★★☆☆</div>
                            <div className='grid grid-cols-2 md:w-96 w-auto'>
                                {/* Product details */}
                                <div>
                                    <p className='text-sm font-serif p-2'>តម្លៃ</p>
                                    <p className='text-sm font-serif py-2'>លេខកូដ</p>
                                    <p className='text-sm font-serif py-2'>មានក្នុងហាង</p>
                                    <p className='text-sm font-serif py-2'>ចំនួន</p>
                                </div>
                                <div>
                                    <div className="text-xl font-bold whitespace-nowrap text-pink-600">: {items.sale_price} KHR</div>
                                    <p className="py-1"><span className="font-semibold">: 01110102 {items.id}</span></p>
                                    <p className="py-1"><span className="font-semibold">: {items.qty}</span></p>
                                    {/* Quantity selector */}
                                    <div className="flex items-center border border-gray-300 px-3 py-2 justify-between">
                                        <button type='button' className="text-gray-500" onClick={() => handleQuantityChange(items, -1)}>-</button>
                                        <input type="text" className="w-12 text-center border rounded" value={items.quantity} defaultValue={1} />

                                        <button type='button' className="text-gray-500" onClick={() => handleQuantityChange(items, 1)}>+</button>
                                    </div>
                                </div>
                            </div>
                            {/* Add to cart button */}
                            <div className="flex items-center justify-center md:w-96 w-auto py-8">
                                <button
                                    onClick={() => handleAddToCartupdate(items)}
                                    className="py-2 w-full bg-pink-600 hover:bg-pink-500 rounded-md font-serif text-sm text-white text-center"
                                >
                                    ដាក់ចូលកន្រ្តក
                                </button>
                            </div>
                            {/* Product description */}
                            <div className="text-sm text-gray-600">
                                <p><strong>Description:</strong> {items.discription}</p>
                            </div>
                        </div>
                    </div>
                ))}
                {/* Recommended products */}
                <div className='space-x-2 py-8'>
                    <div className='flex md:px-12 px-0 items-center'>
                        <p className='text-gray-900  whitespace-nowrap text-xl font-semibold'>ផលិតផលដែលអ្នកអាចនិងចង់បានដែរ</p>
                        <div className="w-full h-px bg-gray-300 ml-4"></div>
                    </div>
                    <div className='grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4 justify-between py-4'>
                        {Product?.map((products, index) => (

                            <div class="rounded-sm relative w-36 border duration-300 group">
                                <Link to={`/productcategoryid/${products.id}/${products.detail}`} >
                                    <div>
                                        {products.discount > 0 && (
                                            <div className="absolute top-0 right-0 bg-red-500 text-white text-sm px-2 py-1 rounded-tr-xl rounded-bl-xl">
                                                %{products.discount}
                                            </div>
                                        )}
                                        <img src={`http://localhost:6700/image/${products.image}`} alt="Product Image" class="rounded-lg h-28 w-28 m-4 group-hover:scale-125 duration-500" />
                                        <div class="mt-4 px-1">
                                            <h2 class="text-pink-700 text-lg font-bold">{products.names}</h2>
                                            <p class="text-pink-700 text-xs font-bold line-clamp-1">
                                                {products.discription}
                                            </p>
                                            <div className=' items-center justify-center text-center pt-4'>
                                                <p className='text-gray-950 uppercase font-serif whitespace-nowrap'>{(((products.sale_price) - (products.sale_price * (products.discount / 100))) * 41).toFixed(2)} khr</p>
                                                <div className='flex items-center space-x-1 justify-center'>
                                                    <p className='text-gray-950 uppercase text-center font-medium whitespace-nowrap'> {(products.sale_price) - (products.sale_price * (products.discount / 100)).toFixed(2)}usa</p>
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
                </div>
            </div>
        </div>
    );
}

export default ProductCategory;

