import { ArrowRight } from '@mui/icons-material'
import {BiCart,BiArrowToRight} from 'react-icons/bi'
import { useContext } from 'react'
import { Context } from '../Context/DataContext'
import { Link } from 'react-router-dom'

function ProductCard( {product,setProductDetails}) {
   const { setCart} = useContext(Context)

 const showProductDetails = () => {
   setProductDetails(true)
 }


 const addCart = () =>{
     const NewCart = {product}

     setCart((prevCart) => {
       return [...prevCart, NewCart]
     })
   console.log(`cart ${product.id} added`)
 }

  return (
    <div className='w-[min(100%,250px)] border p-2 shadow flex flex-col gap-1'>
        <div className='w-full h-[200px] flex justify-center items-center text-[3rem] p-2 overflow-hidden '>
           <img src={product.images[0] || product.category[image]} className='w-full h-full rounded-xl'/>
        </div>

        <Link to={`/main/newarrivals/${product.id}`} onClick={showProductDetails} className='flex justify-between items-center border hover:bg-black/10 duration-300'>
            <div className='flex flex-col p-2'>
               <p className='text-[1.1rem] font font-medium'>${product.price}</p> 
               <p className='uppercase text-DarkBlue/60 text-[0.8rem]'>{product.name}</p>
            </div>

             <ArrowRight />
        </Link>
        

        <button onClick={addCart} className=' w-full flex border items-center p-2 rounded-md text-[0.8rem] gap-2 bg-blue-800 text-white shadow-lg'>
           <BiCart size={20}/>
           ADD TO BASKET      
        </button>
    </div>
  )
}

export default ProductCard
