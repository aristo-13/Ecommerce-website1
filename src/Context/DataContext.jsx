import { createContext, useEffect, useState } from "react"
import api from "../../data/api"

export const Context = createContext(null)

function DataContext({children}) {
const [Cart,setCart] = useState([])
const [Products,setProducts] = useState([])
const [Categories,setCategory] = useState([])


useEffect(() =>{
    const FetchData = async () =>{
        try{
            const res = await api.get("/products")
            setProducts(res.data)
        }
        catch(err){
            console.log(err)
        }
    }

    FetchData()
}, [])

useEffect(() =>{
    const FetchCategory = async () =>{
        try{
            const res = await api.get("/categories")
            setCategory(res.data)
        }
        catch(err){
            console.log(err)
        }
    }

    FetchCategory()
}, [])


 


  return (
    <>
      <Context.Provider value={{
         Cart,
         setCart,
         Products,
         Categories
      }}>
         {children}
      </Context.Provider>
    </>
  )
}

export default DataContext
