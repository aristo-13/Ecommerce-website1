import cartCar from '/cartCar.jpg'
import store from '/store.jpg'
import store2 from '/store2.jpg'
import cartWheels from '/cartWheels.jpg'
import fashionsta from '/fashionsta.jpg'
import electronics from '/electronics.jpg'
import {FaAngleRight,FaAngleLeft,FaArrowRight,FaRulerHorizontal} from 'react-icons/fa'
import { useState } from 'react'

function Slider() {
 const [currIndex,setCurrIndex] = useState(2)


    const sliderItems = [
        {
          img: store,
          heading: "Discover a World of Style and Convenience",
          subtext: "Explore the Latest Trends, Shop Quality Products, and Experience Seamless Shopping.",
        },
        {
          img: electronics,
          heading: "From Fashion to Electronics",
          subtext: "Home Decor to Gadgets — Find Everything You Need Right Here.",
        },
        {
          img: fashionsta,
          heading: "Elevate Your Lifestyle with ShopRich",
          subtext: "Where Every Purchase is a Step Towards Quality and Innovation. Start Shopping Now!",
        },
        {
          img: store2,
          heading: "Unbeatable Deals Await You",
          subtext: "Discover Exclusive Offers on Your Favorite Brands. Limited-Time Discounts You Can't Afford to Miss!",
        },
        {
          img: cartWheels,
          heading: "Your One-Stop Shop for All Your Needs",
          subtext: "Browse a Wide Range of Products. Fast Shipping, Secure Payments, and Exceptional Customer Service.",
        },
      ];
      
      const handleNext = () =>{
        const LastIndex = currIndex === sliderItems.length - 1
        const newIndex = LastIndex? 0 : currIndex + 1
        setCurrIndex(newIndex)
      }
      
      const handlePrev = () => {
        const firstIndex = currIndex === 0
        const newIndex = firstIndex? sliderItems.length - 1 : currIndex - 1
        setCurrIndex(newIndex)
      }


  return (
    <div className='w-full px-0 py-1 md:px-10 md:py-3'>
        <div style={{backgroundImage: `url(${sliderItems[currIndex].img})`, }} className='w-[100%] h-[300px] md:h-[400px] bg-cover rounded-xl overflow-hidden duration-300 bg-center relative'>
            <div className='w-full h-full  bg-black/50 flex flex-col gap-1 items-center'>
                <div className='w-full flex justify-end p-4'>
                    <span className='w-[70px] border grid grid-cols-2 rounded overflow-hidden'>
                        <button className='flex justify-center items-center p-2 border-r active:scale-[0.97]  bg-white' onClick={handlePrev}><FaAngleLeft /></button>
                        <button className='flex justify-center items-center p-2 border-l active:scale-[0.97]  bg-white' onClick={handleNext}><FaAngleRight /></button>
                    </span>
                </div>
                <div className='flex flex-col text-center text-white md:max-w-[500px] md:gap-5'>
                    <span className='font-bold text-[1.2rem] md:text-[2.5rem]'>{sliderItems[currIndex].heading}</span>
                    <span className='text-white/70 md:text-[1.3rem]'>{sliderItems[currIndex].subtext}</span>
                </div>
                <div className='w-full flex-col flex justify-center items-center'>
                    <button className='whitespace-nowrap border p-2  rounded flex items-center bg-white gap-2 active:scale-[0.98] md:px-5'>Shop Now <FaArrowRight  className='text-[15px]'/></button>
                </div>
                <div className='flex gap-2 absolute bottom-3'>
                    {
                        sliderItems.map((item,index)=> (
                            <div onClick={()=> setCurrIndex(index)} className='w-[20px] h-[4px] bg-white cursor-pointer duration-300' style={{opacity: currIndex === index? "1" : "0.4"}} key={index}></div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Slider
