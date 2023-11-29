import { ArrowRight } from '@mui/icons-material'
import {BiCart,BiArrowToRight} from 'react-icons/bi'
import { useContext, useState } from 'react'
import { Context } from '../Context/DataContext'
import { Link } from 'react-router-dom'
import Notification from './Notification'

function ProductCard( {product,setProductDetails,grid}) {
   const {setCart,Cart} = useContext(Context)
   const [CartAdded,setCartAdded] = useState(false)

 const showProductDetails = () => {
   setProductDetails(true)
 }


 /* const addCart = () =>{
     const NewCart = {product}

     setCart((prevCart) => {
       return [...prevCart, NewCart]
     })
  
 }
 */

 const addCart = () =>{
   setCartAdded(true)
   const NewCart = {product}
   const q = {...product}
   const itExist = Cart.some((pro) => pro.id === q.id )

   if(!itExist){
      setCart((prevCart) => {
         return [...prevCart, NewCart]
       })
   }

   setTimeout(() => {
      setCartAdded(false)
   }, 2000);
}

  return (
    <div className='border p-2 shadow flex  gap-1 relative' style={{width: grid? "min(100%,250px)": "min(100%,400px)", flexDirection: grid? "column" : "row", height: grid? "300px" : "120px"}}>
        <div className='flex justify-center items-center text-[3rem] p-2 overflow-hidden ' style={{width: grid? "100%": "100px", height: grid? "" : "100px"}}>
           <img src={(product.images.length > 0) && product.images[0]} className='w-full h-full rounded-xl' alt='img'/>
        </div>

        <Link to={`/products/${product?.id}`} onClick={showProductDetails} className='flex justify-between items-center border hover:bg-black/10 duration-300' style={{position: grid? "static": "absolute", top: "5px" , right:"5px", width: grid?"100%" :"50%"}}>
            <div className='flex flex-col p-2'>
               <p className='text-[1.1rem] font font-medium'>${product.price}</p> 
               <p className='uppercase text-DarkBlue/60 text-[0.8rem]'>{product.name}</p>
            </div>

             <ArrowRight />
        </Link>
        

        <button onClick={addCart} className='flex border items-center p-2 rounded-md text-[0.8rem] gap-2 bg-blue-800 text-white shadow-lg' style={{position: grid? "static": "absolute",bottom: "5px" , right:"5px",width: grid?"100%" :"50%"}}>
           <BiCart size={20}/>
           ADD TO BASKET      
        </button>
        {CartAdded && <Notification message='Added to basket' isSuccess={true} show={true}/>}
    </div>
  )
}

export default ProductCard
