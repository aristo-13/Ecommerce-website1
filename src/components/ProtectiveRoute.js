import { useNavigate } from "react-router-dom"
import { AuthenticationContext } from "../Context/AuthContext"
import { useContext } from "react"


function ProtectiveRoute( {children} ) {
const {user} = useContext(AuthenticationContext)
const navigate = useNavigate()


if(!user){
   navigate('/')
}

 return children
}

export default ProtectiveRoute
