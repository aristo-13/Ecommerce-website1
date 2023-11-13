import { useEffect, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa6'


function CategoryCard( {category,img} ) {
 const [image,setImg] = useState('')


 useEffect(() => {
    setTimeout(() => {
        setImg(img)
    },5000)
    
 },[])


  return (
    <>

         {!image && <div className='p-4 min-h-[300px] w-[min(100%,250px)] rounded-2xl shadow-sm border-4 overflow-hidden border-white cursor-pointer hover:scale-[1.05] hover:z-[1] duration-500 bg-gray-500 animate-pulse'></div>}
         {image && <div className="p-4 min-h-[300px] w-[min(100%,250px)] rounded-2xl bg-cover bg-center relative flex flex-col justify-end items-center shadow-sm border-4 overflow-hidden border-white cursor-pointer hover:scale-[1.05] hover:z-[1] duration-500"  style={{backgroundImage: `url(${image})`}}>
            <span className='overlay absolute w-full h-full left-0 top-0 z-10 bg-black/60'></span>
            <button className='w-[90%] bg-white rounded-xl flex justify-center items-center p-2 gap-2 z-10 hover:bg-DarkBlue hover:text-white duration-200'>{category} <span><FaArrowRight /></span></button>
        </div>}
    </>
   
  )
}

export default CategoryCard
