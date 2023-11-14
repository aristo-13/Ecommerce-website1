
import {BiX,BiCart} from 'react-icons/bi'
import { useParams } from 'react-router-dom'
import { Context } from '../Context/DataContext'
import { useContext, useEffect, useState } from 'react'


function AllProSideNav( {setProductDetails,productDetails} ) {
 const {Products,setCart,Cart} = useContext(Context)
 const [product,setproduct] = useState({})
 const {id} = useParams()


 
   const Detail = Products.find((product) => (product.id).toString() === id)
   
   
   useEffect(() =>{
    if(Detail){
      setproduct(Detail)
     }
   },[Detail])
 

    const addCart = () =>{
      const NewCart = {product}
      const itExist = Cart.some((pro) => pro.id === NewCart.id )

      if(itExist){
        setCart((prevCart) => {
          return prevCart
        })
      }else{
        setCart((prevCart) => {
          return [...prevCart, NewCart]
        })
      }
    
    
  }


  return (
    <div className="fixed right-[-100%] w-[min(100%,400px)] border-l z-10 bg-white duration-300  p-3 px-4" style={{right: productDetails? "0": "-100%"}}>
       <span onClick={() => setProductDetails(false)} className="w-full flex justify-end text-2xl p-1 cursor-pointer">{<BiX />}</span>
       <div className='w-full h-full'>
        <div className='w-full h-[200px] px-5 pb-3 pt-1 overflow-hidden rounded-lg'>
          {product.images && <img src={product.images[0]} alt="Product" className='w-full h-full rounded-lg' />}
        </div>
         <div className='px-5 '>
             <p className='uppercase font-medium'>{product.title}</p>
             <p className='text-black/40'>{product.category && product.category.name}</p>
             <h1>${product.price}</h1>
             <p className='m-3'>{product.description}</p>
         </div>


         <button onClick={addCart} className=' w-full flex border items-center p-2 rounded-md text-[0.8rem] gap-2 bg-blue-800 text-white shadow-lg'>
           <BiCart size={20}/>
           ADD TO BASKET      
        </button>
       </div>
    </div>
  )
}

export default AllProSideNav
