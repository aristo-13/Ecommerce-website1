import React, { useState } from 'react'
import { useContext } from 'react'
import { AuthenticationContext } from '../Context/AuthContext'
import { useNavigate } from 'react-router-dom'

function SignIn() {
 const [email,setEmail] = useState('')
 const [password,setPassword] = useState('')
 const {signInUser} = useContext(AuthenticationContext)
 const navigate = useNavigate()


 const handleSignIn = async(e) => {
    e.preventDefault()
    try{
       await signInUser(email,password)
       navigate('/main')
    }catch(err){
        console.log(err.message)
    }
 }

  return (
    <div>
        <p>sign In</p>
        <form onSubmit={handleSignIn}>
            <input type="text" placeholder='email' onChange={(e) =>setEmail(e.target.value)}/>
            <input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)}/>

            <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default SignIn
