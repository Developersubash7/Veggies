import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { categories } from '../assets/assets';
import { useAppContext } from '../context/AppContext'
import { ProductCart } from '../component/ProductCart';


function Productcategory() {
    const{Products}=useAppContext()
    const{category}=useParams();
    const searchcategory=categories.find((item)=>item.path.toLowerCase()===category)
    const filteredproducts=Products.filter((product)=>product.category.toLowerCase() === category)
  return (
    <div className='mt-16'>
      {searchcategory&&(
        <div className='flex flex-col items-end w-max'>
            <p className='text-2xl font-medium'>{searchcategory.text.toLowerCase()}</p>
            <div className='w-16 h-0.5 bg-primary rounded-full'></div>
        </div>
      )}
      {filteredproducts.length>0 ? (
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6 mt-6'>
            {filteredproducts.map((product)=>(
                <ProductCart key={product.id} product={product}/>
            ))}
        </div>
      ):(
        <div className='flex items-center justify-center h-[60vh]'>
            <p className='text-2xl font-medium text-primary'>No product found in this category.</p>
        </div>
      )}
    </div>
  )
}

export default Productcategory
