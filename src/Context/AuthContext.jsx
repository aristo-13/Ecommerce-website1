import { createContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut } from "firebase/auth"
import { auth } from "../../firebase/firebaseConfig"


export const AuthenticationContext = createContext('')

 export default function AuthContext( {children} ){
      const [user,setUser] = useState({})
      const [username,setUserName] = useState(null)

      const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
      }
      const signInUser = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
      }

      const Logout = () => {
        return signOut(auth)
      }
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currUser) => {
        setUser(currUser)
      })
      return () => unsubscribe()
    },[])
    
    return (
      <AuthenticationContext.Provider value={{createUser,signInUser,user,Logout,setUserName,username}}>
        {children}
      </AuthenticationContext.Provider>
    )
}


