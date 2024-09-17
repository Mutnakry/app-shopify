import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Show_Detail_Category({ isAuthenticated }) {
    const [category, setCategory] = useState(null); // Use null initially for an empty state
    const [loading, setLoading] = useState(true);   // Loading state
    const { id } = useParams();

    useEffect(() => {
        DetailCategory();
    }, [id]);

    // Fetch category details by ID
    const DetailCategory = () => {
        axios
            .get(`http://localhost:6700/api/categories/${id}`)
            .then(res => {
                setCategory(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            });
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!category) {
        return <p>No category found.</p>;
    }

    return (
        <div className='mt-14'>
            <div className='max-w-screen-xl mx-auto p-8'>
                <p className=' text-md font-serif text-pink-700'>{category.names}</p>
                <img src={`http://localhost:6700/image/${category.image}`} alt="Character" class="md:w-96 md:h-96 w-64 h-64 py-6" />
                <p className='md:w-1/2 w-2/2'>{category.description}</p>
                <div className='flex items-center justify-center min-x-screen py-8'>
                    <Link to={`/by_category_product/${category.id}`} className='py-3 w-1/2 bg-pink-600 hover:bg-pink-500 rounded-md font-serif text-sm text-white text-center'>
                        មើលបន្ថែម
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Show_Detail_Category;
