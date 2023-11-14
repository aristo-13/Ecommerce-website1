import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Cart from "../components/Cart"
import { useState } from "react"
import Footer from "../components/Footer"
import SideNav from "../components/SideNav"
import DataContext from "../Context/DataContext"


function Main() {
 const [showCart,setShowCart] = useState(false)
 const [showSideNav,setShowSideNav] = useState(false)
 

  return (
    <DataContext>
     <div className="relative">
      {showSideNav && <div className="fixed top-0 left-0 w-full h-screen bg-black/70 z-30" onClick={() => setShowSideNav(false)}></div>}
      <SideNav  showSideNav={showSideNav} setShowSideNav={setShowSideNav}/>
        <Header setShowCart={setShowCart} setShowSideNav={setShowSideNav}/>
           <main className="w-full md:w-[95%] md:mx-auto">
             <Outlet />
           </main>
         <Footer />
         {showCart && <div className="fixed top-0 left-0 w-full h-screen bg-black/10 z-30" onClick={() => setShowCart(false)}></div>}
        <Cart setShowCart={setShowCart} showCart={showCart}/>
    </div>
    </DataContext>
    
  )
}

export default Main
