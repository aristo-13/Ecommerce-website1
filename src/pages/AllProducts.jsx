import AppsIcon from '@mui/icons-material/Apps';
import AllProSideNav from "../components/AllProSideNav"
import ViewListIcon from '@mui/icons-material/ViewList';
import ProductCard from '../components/ProductCard';
import { useState } from 'react';
import UseScreenWidth from '../hooks/useScreenWidth';


function NewArrivals() {
 const [productDetails,setProductDetails] = useState(false)
 const screenWidth = UseScreenWidth()


 const products = [
   {
     product: "👕",
     price: 12,
     name: "Shirt"
   },
   {
     product: "🥼",
     price: 202,
     name: "Shirt"
   },
   {
     product: "🩳",
     price: 340,
     name: "Shirt"
   },
   {
     product: "👘",
     price: 552,
     name: "Shirt"
   },
   {
     product: "👔",
     price: 79,
     name: "Shirt"
   },
   {
     product: "👗",
     price: 82,
     name: "Shirt"
   },
   {
     product: "👚",
     price: 142,
     name: "Shirt"
   },
   {
     product: "👖",
     price: 220,
     name: "Shirt"
   },
   {
     product: "⌚",
     price: 120,
     name: "Shirt"
   },
   {
     product: "☎️",
     price: 100,
     name: "Shirt"
   },
   {
     product: "🩳",
     price: 120,
     name: "Shirt"
   },
   {
     product: "👗",
     price: 112,
     name: "Shirt"
   },
   {
     product: "👕",
     price: 212,
     name: "Shirt"
   },
 ]



  return (
    <div className="flex w-full">
       <div className='w-full duration-300' style={{marginRight: productDetails && !(screenWidth < 800)? "300px" : "0"}}>

         <div className="w-full flex justify-between items-center p-3 border-b">
            <span className="h-full border p-2"> All Products</span>
            <div className='flex items-center gap-2'>
               <input type="search"  className='hidden md:block border p-1 rounded-full' placeholder='search' />
                 <div className='hidden md:flex gap-1'>
                    <button className='p-1 border'><ViewListIcon /></button>
                    <button className='p-1 border'><AppsIcon /></button>
                 </div>
            </div>
         </div>
          
          <div className='w-full flex flex-wrap gap-2 justify-center pt-3 cursor-pointer'>
              {
                products.map((product) => (
                   <ProductCard product={product} setProductDetails={setProductDetails}/>
                ))
              }
          </div>
       </div>
         <AllProSideNav setProductDetails={setProductDetails} productDetails={productDetails}/>
    </div>
  )
}

export default NewArrivals
