import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Cart from "../components/Cart"
import { useState } from "react"
import Footer from "../components/Footer"

function Main() {
 const [showCart,setShowCart] = useState(false)
 

  return (
    <div className="relative">
        <Header setShowCart={setShowCart}/>
           <main className="w-full md:w-[95%] md:mx-auto">
             <Outlet />
           </main>
         <Footer />
         {showCart && <div className="fixed top-0 left-0 w-full h-screen bg-black/10 z-30" onClick={() => setShowCart(false)}></div>}
        <Cart setShowCart={setShowCart} showCart={showCart}/>
    </div>
  )
}

export default Main
