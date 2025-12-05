import React, { useContext, useEffect } from "react"
import { NavLink } from "react-router-dom"
import { assets } from "../assets/assets"
import { AppContext } from "../context/AppContext"
export const Navbar = () => {
    const [open, setOpen] = React.useState(false)
    const { user, setUser, setShowUserLogin, navigate, setsearchQuery, searchQuery, getCartCount } = useContext(AppContext);
    const logout = async () => {
        setUser(null);
        navigate('/')


        
    }
    useEffect(() => {
        if (searchQuery.length > 0) {
            navigate("/products")
        }
    }, [searchQuery])
    return (
        <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">

            <NavLink to='/' onClick={() => setOpen(false)} className={'text-4xl font-medium inline-block border-b-3 border-green-500 w-23'}>
                Freshio
            </NavLink>

            {/* Desktop Menu */}
            <div className="hidden sm:flex items-center gap-8">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/products'>All Product</NavLink>
                <NavLink to='/'>Contact</NavLink>

                <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
                    <input onChange={(e) => setsearchQuery(e.target.value)} className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Search products" />
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.836 10.615 15 14.695" stroke="#7A7B7D" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                        <path clip-rule="evenodd" d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783" stroke="#7A7B7D" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>

                <div onClick={() => navigate('/cart')} className="relative cursor-pointer">
                    <img src={assets.cart_icon} alt="" className="w-6 opacity-80" />
                    <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">{getCartCount()}</button>
                </div>


                {/* {Desktop Login buttton} */}
                {!user ? (
                    <button className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary transition text-white rounded-full" onClick={() => setShowUserLogin(true)}>
                        Login
                    </button>
                ) : (
                    <div className="relative group">
                        <img src={assets.profile_icon} alt="profile_icon" className="w-10 " />
                        <ul className=" hidden  group-hover:block absolute bg-white border border-gray-200 top-10 right-0 w-30 rounded-md p-2.5 text-sm z-40">
                            <li onClick={() => navigate('my-orders')} className="p-1.5 pl-3 hover:bg-primary cursor-pointer text-emerald-950">My Order</li>
                            <li onClick={logout} className="p-1.5 pl-3 hover:bg-primary cursor-pointer text-emerald-950">Logout</li>
                        </ul>
                    </div>
                )}


            </div>


            {/* Mobile Menu Icon SVG */}

            <div className="flex items-center gap-6 sm:hidden"> 
                <div onClick={() => navigate('/cart')} className="relative cursor-pointer">
                    <img src={assets.cart_icon} alt="" className="w-6 opacity-80" />
                    <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">{getCartCount()}</button>
                </div>
                <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" >
                    <img src={assets.menu_icon} alt="" />
                </button>
            </div>


            {/* Mobile Menu */}
            {open && (<div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}>
                <NavLink to='/' onClick={() => setOpen(false)}>Home</NavLink>
                <NavLink to='/products' onClick={() => setOpen(false)}>All products</NavLink>
                {user && //JavaScript short-circuit evaluation:
                    <NavLink to='/myorder' onClick={() => setOpen(false)}>My orders</NavLink>}
                <NavLink to='/' onClick={() => { setOpen(false); setShowUserLogin(true) }}>Contacts</NavLink>
                {!user ? <button onClick={() => { setOpen(false); setShowUserLogin(true); }} className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg- transition text-white rounded-full text-sm">
                    Login
                </button> : <button onClick={logout} className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg- transition text-white rounded-full text-sm">
                    Logout
                </button>}
            </div>)}


        </nav>
    )
}