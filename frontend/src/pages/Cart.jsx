import React from 'react'
import UseCart from '../pages/sale/UseCart'

function Cart({isAuthenticated}) {
    return (
        <div className='mt-14'>
            <div className=' max-w-screen-xl mx-auto'>
                <div class=" p-6">
                    {/* <!-- Header --> */}
                    <div class="text-center mb-8">
                        <a href="/"><h2 class="text-2xl font-semibold">ទិញ​ឥវ៉ាន់</h2></a>
                        <p class="text-sm text-gray-500">ទំនិញ អនទ្បាញ</p>
                    </div>
                    <UseCart/>
                </div>

            </div>
        </div>
    )
}

export default Cart