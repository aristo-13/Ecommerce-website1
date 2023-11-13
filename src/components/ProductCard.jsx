import {BiCart} from 'react-icons/bi'

function ProductCard( {product}) {
  return (
    <div className='min-w-[200px] border p-2'>
        <div className='w-full flex justify-center items-center text-[3rem] p-2'>
           {product.product}
        </div>
        <div className='flex flex-col p-2'>
           <p className='text-[1.1rem] font font-medium'>${product.price}</p> 
           <p className='uppercase text-DarkBlue/60 text-[0.8rem]'>{product.name}</p>
        </div>

        <button className=' w-full flex border items-center p-2 rounded-md text-[0.8rem] gap-2 bg-blue-800 text-white'>
           <BiCart size={20}/>
           ADD TO BASKET      
        </button>
    </div>
  )
}

export default ProductCard
