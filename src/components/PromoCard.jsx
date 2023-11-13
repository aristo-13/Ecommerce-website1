import { FaArrowRight } from 'react-icons/fa6'
import store2 from '../../public/store2.jpg'

function PromoCard() {
  return (
    <div className="w-full flex justify-center items-center p-1 md:p-5">
      <div className='w-full flex flex-col md:flex-row justify-center items-center rounded border overflow-hidden'>
         <img src={store2} className='w-full md:w-[40%] h-[200px] object-cover md:h-[full] hover:scale-[1.1] duration-300'/>
         <div className="bg-DarkBlue text-white p-5 min-h-[200px]  w-full md:w-[60%] flex flex-col items-center justify-around">
             <span className='text-[0.7rem] text-white/70'>LIMITED OFFER</span>
             <h1 className='font-bold text-[1.5rem] text-center'>
                35% off only this friday and get special gift
             </h1>
             <button className='text-DarkBlue bg-white rounded-md flex justify-center items-center p-2 gap-2 z-10'>Grab it now <span><FaArrowRight /></span></button>
         </div>
      </div>
    </div>
  )
}

export default PromoCard
