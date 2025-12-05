import React from 'react'
import Mainbanner from '../component/Mainbanner'
import Categories from '../component/Categories'
import Bestseller from '../component/BestSeller'
import BottomBanner from '../component/BottomBanner'
import { Newsletter } from '../component/Newsletter'

function Home() {
  return (
    <div className='mt-10 '>
      <Mainbanner/>
      <Categories/>
      <Bestseller/>
      <BottomBanner/>
      <Newsletter/>
    </div>
  )
}

export default Home
