import { createContext, useEffect, useState } from "react"
import api from "../../data/api"

export const Context = createContext(null)

function DataContext({children}) {
const [Cart,setCart] = useState([])
const [Products,setProducts] = useState([])



useEffect(() =>{
    const FetchData = async () =>{
       const res = await api.get("/products")
    }

    FetchData()
}, [])


  return (
    <>
      <Context.Provider value={{
         Cart,

      }}>
         {children}
      </Context.Provider>
    </>
  )
}

export default DataContext
