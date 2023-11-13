import { useState } from 'react'
import {FaAngleRight,FaAngleLeft} from 'react-icons/fa'

function Increment() {
 const [productQuantity,setProductQuantity] = useState(1)

const increase = () => {
    setProductQuantity((prev) => prev + 1)
}

const decrement = () => {
    const firstNum = productQuantity === 1
    const num = firstNum? 1 : productQuantity -1

    setProductQuantity(num)
}


  return (
    <div className='w-[100px] border grid grid-cols-3 '>
        <button className='border flex justify-center items-center' onClick={decrement}><FaAngleLeft /></button>
        <span className='flex justify-center items-center'>{productQuantity}</span>
        <button className='border flex justify-center items-center' onClick={increase}><FaAngleRight/></button>
    </div>
  )
}

export default Increment
