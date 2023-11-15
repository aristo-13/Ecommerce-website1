import { Link, NavLink } from "react-router-dom"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import { useContext, useState } from "react";
import {FaX,} from 'react-icons/fa6'
import { useNavigate } from "react-router-dom";
import { AuthenticationContext } from "../Context/AuthContext";
import ViewListIcon from '@mui/icons-material/ViewList';
import { Context } from "../Context/DataContext";

function Header( {setShowCart,setShowSideNav} ) {
 const [showProfile,setshowProfile] = useState(false)
 const {user,username,Logout} = useContext(AuthenticationContext)
 const {Cart} = useContext(Context)
 const navigate = useNavigate()
 


 const handleSignOut = async(e) => {
  e.preventDefault()
    try {
      await Logout()
      navigate('/')
    } catch (error) {
       console.log(error.message)
    }
 }

 const navigateToBrands = (e) => { 
  e.preventDefault()  
  navigate('/main')
}

  return (
    <header className="flex flex-col w-full border-b sticky top-0 z-20">
       <div className="w-full flex justify-center p-1  bg-DarkBlue text-white"><span className="flex"><span className="hidden md:block">shop now and </span> GET 20% OFF for your first order <Link className='hidden md:block underline'>Shop Now</Link></span></div>
        <nav className="flex justify-between bg-white p-5 items-center">
            <div className="flex gap-5">
              <button onClick={() => setShowSideNav(true)} className="md:hidden text-DarkBlue"><ViewListIcon /></button>
              <div className="text-2xl cursor-pointer flex">🛒 <span className="hidden md:block">ShopRich</span></div>
            </div>
            <ul className="hidden md:flex gap-5 font-medium text-DarkBlue">
                <Link className='px-3 py-1 rounded-xl' to='/main'>Shop</Link>
                <Link className='px-3 py-1 rounded-xl' to='/main/products'>Products</Link>
                <a onClick={navigateToBrands} className='px-3 py-1 rounded-xl' href='#brands'>Brands</a>
            </ul>

            <div className="flex gap-4  text-DarkBlue">
                <input type="text"  className="hidden border rounded-xl py-2 md:px-3" placeholder="search produnct..."/>
                <div className="flex gap-2 items-center">
                    <div className="relative cursor-pointer animate-bounce" onClick={() => setShowCart(true)}>
                        <ShoppingCartIcon/>
                        <span className="absolute -top-2 -right-2 bg-blue-500 w-[20px] h-[20px] flex items-center justify-center rounded-full  border-3 text-white font-bold">{Cart.length}</span>
                    </div>
                    <div className="relative">
                      <PersonIcon className="cursor-pointer" onClick={() => setshowProfile(true)}/>
                      { showProfile && <div className="absolute right-1 flex flex-col items-center p-5 mt-3 bg-white border-2 rounded-md gap-2 z-10 shadow-2xl">
                          <span className="w-full flex justify-end text-base cursor-pointer" onClick={() => setshowProfile(false)}><FaX size={10}/></span>
                           <span className="w-[50px] h-[50px] bg-gray-500 border-4 rounded-full flex justify-center items-center"><PersonIcon /></span>
                          <span>{username || "user"}</span>
                          <span>{user && user.email}</span>
                          <button onClick={handleSignOut} className="p-2  border w-full bg-LightBlue text-white">Logout</button>
                       </div>}
                    </div>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header
