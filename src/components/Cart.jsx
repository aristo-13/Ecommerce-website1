import {FaX,FaCartShopping} from 'react-icons/fa6'
import Increment from './Increment'

function Cart( {setShowCart,showCart} ) {

 const carts = [
    {
        img: "👕",
        price: 76,
        shipping: 2,
        description: "Short Knickers"
    },
    {
        img: "🥼",
        price: 56,
        shipping: 1,
        description: "Coat"
    },
    {
        img: "🩳",
        price: 46,
        shipping: 1,
        description: "Short Knickers"
    },
    {
        img: "👕",
        price: 46,
        shipping: 1,
        description: "shirt"
    },
    {
        img: "👔",
        price: 96,
        shipping: 3,
        description: "long sleeves"
    },
 ]





  return (
    <div style={{position: "fixed" , top: "0" , right: showCart? "0" : "-100%" }} className=" h-screen w-[min(100%,400px)] bg-white px-2 border overflow-auto rounded-l-md shadow-2xl duration-300 z-30">
        <div className='w-full flex justify-between p-4 items-center sticky top-0 bg-white border-b'>
            <span className='flex items-center text-2xl text-DarkBlue gap-3'>
                <FaCartShopping />
                 <span>Cart</span>
            </span>
            <FaX onClick={() => setShowCart(false)} className='cursor-pointer'/>
        </div>
        <div className='p-2 flex flex-col gap-3'>
            {
                carts.map((cart) => (
                    <div className='bg-white rounded border shadow-sm p-2'>
                        <div className='w-full flex justify-end p-2 border-b cursor-pointer'><FaX size={10}/></div>
                        <div className='flex justify-between p-1'>
                            <div className='flex gap-1'>
                                <div className="w-[50px] h-[50px] border flex justify-center items-center">{cart.img}</div>
                                <div className='uppercase text-[0.9rem]'>{cart.description}</div>
                            </div>
                            <div className='flex flex-col items-center'>
                                <span className='text-[10px]'>Price</span>
                                <span className='font-medium text-DarkBlue'>${cart.price}</span>
                            </div>
                        </div>
                        <div className='w-full flex justify-end border-t p-2'>
                           <Increment />
                        </div>
                    </div>
                ))
            }
        </div>
        <div className='sticky bottom-0 w-full flex flex-col bg-white p-4 border-t'>
            <span className='text-2xl font-bold text-center p-3'>Total Cost: $700 </span>
            <button className='bg-DarkBlue text-white p-3 rounded-xl'>Pay Now</button>
        </div>
    </div>
  )
}

export default Cart
