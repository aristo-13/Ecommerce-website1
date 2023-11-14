import {FaX,FaCartShopping} from 'react-icons/fa6'
import Increment from './Increment'
import { Context } from '../Context/DataContext'
import { useContext } from 'react'
import Loading from './Loading'

function Cart( {setShowCart,showCart} ) {
    const {Cart} = useContext(Context)
    
   

console.log(Cart, "carrrt")
  return (
    <div style={{position: "fixed" , top: "0" , right: showCart? "0" : "-100%" }} className=" h-screen w-[min(100%,400px)] bg-white px-2 border overflow-auto rounded-l-md shadow-2xl duration-300 z-30">
        <div className='w-full flex justify-between p-4 items-center sticky top-0 bg-white border-b z-10'>
            <span className='flex items-center text-2xl text-DarkBlue gap-3'>
                <FaCartShopping />
                 <span>Cart</span>
            </span>
            <FaX onClick={() => setShowCart(false)} className='cursor-pointer'/>
        </div>
        <div className='p-2 flex flex-col gap-3'>
           
            {!(Cart.length > 0) && (
                  <Loading styles="bg-black/30 rounded border shadow-sm p-2 h-[150px]" Instances={5}/>
                )}
            
            { Cart.length > 0 &&
                Cart.map((cart) => (
                    <div className='bg-white rounded border shadow-sm p-2' key={cart.id}>
                        <div className='w-full flex justify-end p-2 border-b cursor-pointer'><FaX size={10}/></div>
                        <div className='flex justify-between p-1'>
                            <div className='flex gap-1'>
                                <div className="w-[100px] h-[100px] border flex justify-center items-center overflow-hidden">
                                    {console.log(cart, "thus")}
                                    { <img src={cart.product.images[0]} className='w-full h-full'/>}
                                </div>
                                <div className='uppercase text-[1rem] text-black/60'>{cart.product.title}</div>
                            </div>
                            <div className='flex flex-col items-center'>
                                <span className='text-[10px]'>Price</span>
                                <span className='font-medium text-DarkBlue'>${cart.product.price}</span>
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
