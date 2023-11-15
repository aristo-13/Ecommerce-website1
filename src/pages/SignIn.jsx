import React, { useState } from 'react'
import { useContext } from 'react'
import { AuthenticationContext } from '../Context/AuthContext'
import { useNavigate } from 'react-router-dom'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LockIcon from '@mui/icons-material/Lock';
import GoogleIcon from '@mui/icons-material/Google';
import { Link } from 'react-router-dom';
import Notification from '../components/Notification';

function SignIn() {
 const [email,setEmail] = useState('')
 const [password,setPassword] = useState('')
 const {signInUser} = useContext(AuthenticationContext)
 const navigate = useNavigate()
 const [showSuccess,setshowSuccess] = useState(false)
 const [showFailure,setshowFailure] = useState(false)
 const [isLoading,setIsloadin] = useState(false)


 const handleSignIn = async(e) => {
    e.preventDefault()
    try{
        setIsloadin(true)
        await signInUser(email,password)
        setshowSuccess(true)
        const int = setInterval(()=>{
        navigate('/main')
        setshowSuccess(false)
    },2000)
    return () => clearInterval(int)
    }catch(err){
        console.log(err.message)
        setshowFailure(true)

        setInterval(()=>{
            setshowFailure(false)
        },3000)
        return () => clearInterval(int)
    }finally{
        setIsloadin(false)
    }
 }

  return (
    <div className='bg-[whitesmoke] w-full  h-screen overflow-hidden flex justify-center items-center'>
        <div className='pt-[10rem] border h-full sm:h-[400px] w-[min(100%,350px)] p-5 flex  sm:p-3 flex-col bg-white rounded-lg shadow-2xl'>
          <h1 className='w-full p-5 text-xl font-medium text-LightBlue'>🛒Sign In</h1>
        <form onSubmit={handleSignIn} className='w-full flex flex-col items-center gap-3 p-3'>
            <div className='w-full h-[40px] border relative rounded-lg overflow-hidden'>
                <AlternateEmailIcon className='absolute top-[50%] left-2 text-blue-600 translate-y-[-50%]'/>
               <input className='w-full h-full px-10 outline-none' type="text" placeholder='email' onChange={(e) =>setEmail(e.target.value)}/>
            </div>
            <div className='w-full h-[40px] border relative rounded-lg overflow-hidden'>
                 <LockIcon className='absolute top-[50%] left-2 text-blue-700 translate-y-[-50%]'/>
                <input className='w-full h-full px-10 outline-none' type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button className='uppercase w-full border rounded-xl p-2 active:scale-[0.98] bg-blue-600 text-white flex justify-center items-center gap-2' type='submit'>{isLoading && <div className='w-[20px] h-[20px] border border-b-4 border-t-4 rounded-full animate-spin'></div>} sign in</button>
           

             <span className='flex flex-wrap whitespace-nowrap text-center items-center justify-center'>Don't have an account yet? 
                <Link to='/signup' className='underline'>Sign Up</Link></span>
        </form>
        </div>
        {showSuccess && <Notification message='login successful' isSuccess={true} show={true}/>}
        {showFailure && <Notification message='Login Not Successful' show={true}/>}
    </div>
  )
}

export default SignIn
