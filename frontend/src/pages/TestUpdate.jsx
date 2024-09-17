import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UpdateCategory() {

    const [productcategory, setproductcategory] = useState([]);
 


    const { id } = useParams();
    useEffect(() => {
        fectData();
    }, [id])

    const fectData = async () => {
        try {
            const respone = await axios.get(`http://localhost:6700/api/product/update/${id}`)
            setproductcategory(respone.data);
            console.log(respone.productcategory)
        }
        catch (error) {
            console.error(error)
        }
    }
 



    return (
        <div className='my-36'>
            <form action="">
                <div className="form-group">
                   {productcategory.map((items)=>(
                   <div>
                     <p>{items.names}</p>
                    <p>{items.sale_price}</p>
                   </div>
                   ))}
                </div>
               
            </form>

        </div>

    )
}

export default UpdateCategory