import { FaArrowRight } from 'react-icons/fa6'
import Fashionsta from '../../public/fashionsta.jpg'

function CategoryCard( {category} ) {
  return (
    <div className="p-4 min-h-[300px] w-[min(100%,250px)] rounded-2xl bg-cover bg-center relative flex flex-col justify-end items-center shadow-sm border-4 overflow-hidden border-white cursor-pointer hover:scale-[1.05] hover:z-[1] duration-500"  style={{backgroundImage: `url()`}}>
         <span className='overlay absolute w-full h-full left-0 top-0 z-10 bg-black/60'></span>
         <button className='w-[90%] bg-white rounded-xl flex justify-center items-center p-2 gap-2 z-10'>{category} <span><FaArrowRight /></span></button>
    </div>
  )
}

export default CategoryCard
