import React from 'react'
import { ProductCart } from '../component/ProductCart'
import { useAppContext } from '../context/AppContext'

const Bestseller = () => {
    const { Products } = useAppContext();
    return (
        <div className='mt-8 md:mt-16'>
            <p className='text-2xl md:text-3xl font-medium'>Best Sellers</p>
            <div className='gap-3 md:gap-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6'>
                {Products.filter((filpro) => filpro.inStock).slice(0, 5).map((product, index) => (
                    <ProductCart key={index} product={product} />
                ))}


            </div>
        </div>
    )
}

export default Bestseller
