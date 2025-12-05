import React from 'react'
import { Navbar } from './component/Navbar'
import Home from './pages/Home'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Toaster } from "react-hot-toast"
import { Footer } from './component/Footer'
import { useAppContext } from './context/AppContext'
import { Login } from './component/Login'
import Allproduct from './pages/Allproduct'
import Productcategory from './pages/Productcategory'
import { Productdetail } from './pages/Productdetail'
import { Cart } from './pages/Cart'
import AddAddress from './pages/AddAddress'
import Myorders from './pages/Myorders'
import SellerLayout from '/src/pages/seller/SellerLayout.jsx';


const App = () => {
  const { showUserLogin, isSeller } = useAppContext()
  const isSellerPath = useLocation().pathname.includes("seller")

  return (
    <div className='text-default min-h-screen text-gray-700 bg:white'>
      {!isSellerPath && <Navbar />}
      {showUserLogin ? <Login /> : null}
      <Toaster />
      <div className='px-6 md:px-16 lg:px-24 xl:px-32'>
        <Routes>
          {/* Customer routes */}
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Allproduct />} />
          <Route path='/products/:category' element={<Productcategory />} />
          <Route path='/products/:category/:id' element={<Productdetail />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/add-address' element={<AddAddress />} />
          <Route path='/my-orders' element={<Myorders />} />
          <Route path='/seller' element={isSeller? null:<SellerLayout/>}></Route>

        </Routes>
      </div>
      {!isSellerPath && <Footer />}
    </div>
  )
}

export default App
