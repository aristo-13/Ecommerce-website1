
import {BiX,BiCart} from 'react-icons/bi'
import { useParams } from 'react-router-dom'
import { Context } from '../Context/DataContext'
import { useContext, useEffect, useState } from 'react'


function AllProSideNav( {setProductDetails,productDetails} ) {
 const {Products,setCart} = useContext(Context)
 const [Details,setDetails] = useState([])
 const {id} = useParams()


 
   const Detail = Products.find((product) => (product.id).toString() === id)
   
   
   useEffect(() =>{
    if(Detail){
      setDetails(Detail)
     }
   },[Detail])
 

   const addCart = () =>{
    const NewCart = {Details}

    setCart((prevCart) => {
      return [...prevCart, NewCart]
    })
  
}

console.log(Details, "deeeeeeee")
  return (
    <div className="fixed right-[-100%] w-[min(100%,400px)] min-h-[600px] border z-10 bg-white duration-300" style={{right: productDetails? "0": "-100%"}}>
       <span onClick={() => setProductDetails(false)} className="w-full flex justify-end text-2xl p-2 cursor-pointer">{<BiX />}</span>
       <div>
        <div className='w-full h-[250px] px-5 pb-5 pt-3 overflow-hidden rounded-lg'>
          {Details.images && <img src={Details.images[0]} alt="Product" className='w-full h-full rounded-lg' />}
        </div>
         <div>

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
