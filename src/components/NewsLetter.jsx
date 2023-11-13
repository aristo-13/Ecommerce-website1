import {FaEnvelope} from 'react-icons/fa'

function NewsLetter() {
  return (
    <div className='w-full md:w-[70%] flex flex-col p-10 justify-center items-center mx-auto gap-2'>
        <h1 className='text-[1.3rem] md:text-[2rem] text-center font-bold'>Subscribe to our newsletter to get updates to our latest collections</h1>
        <p className='text-black/60 text-center'>Get 20% off on your first order just by subscribing to or newsletter</p>

        <div className='flex flex-col md:flex-row gap-3'>
           <div className='w-full md:w-[70%] h-[40px] border relative rounded-lg overflow-hidden'>
                <FaEnvelope className='absolute top-[50%] left-2 text-blue-600 translate-y-[-50%]'/>
               <input className='w-full h-full px-10 outline-none' type="text" placeholder='email' onChange={(e) =>setEmail(e.target.value)}/>
            </div>
            <button className='w-full md:w-[200px] border rounded-lg px-3 py-2 md:py-1 text-xl font-bold text-white bg-DarkBlue'>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter
