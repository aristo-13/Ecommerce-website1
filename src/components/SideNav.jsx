import {FaX} from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function SideNav( {showSideNav,setShowSideNav}) {
    const navigate = useNavigate()

    const navigateToBrands = () => {
        
        navigate('/main')
        setShowSideNav(false)
       
    }
 
  return (
    <div style={{position: "fixed" , top: "0" , left: showSideNav? "0" : "-100%" }} className=" h-screen w-[min(100%,300px)] bg-white px-2 border shadow-2xl duration-300 z-30">
       <span className='w-full flex justify-between text-xl p-3'>🛒 <FaX onClick={() => setShowSideNav(false)} className='cursor-pointer'/></span>
             <p className='w-full p-3 bg-DarkBlue text-white text-xl'>ShopRich</p>
            <ul className="flex flex-col text-xl p-2">
                <NavLink onClick={() =>setShowSideNav(false)} className='px-3 py-1 rounded-xl cursor-pointer hover:bg-black/10' to='/main'>Shop</NavLink>
                <NavLink onClick={() =>setShowSideNav(false)} className='px-3 py-1 rounded-xl cursor-pointer hover:bg-black/10' to='/main/products'>All goods</NavLink>
                <li onClick={navigateToBrands} className='px-3 py-1 rounded-xl cursor-pointer hover:bg-black/10' href='#brands'>Brands</li>
            </ul>
    </div>
  )
}

export default SideNav
