import { AuthenticationContext } from "../Context/AuthContext"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"

function Main() {
 const {user,Logout} = useContext(AuthenticationContext)
 const navigate = useNavigate()


 const handleSignOut = async() => {
    try {
      await Logout()
       navigate('/')
    } catch (error) {
       console.log(error.message)
    }
 }

  return (
    <div>
       main {user && user.email}

       <button onClick={handleSignOut}>Logout</button>
    </div>
  )
}

export default Main
