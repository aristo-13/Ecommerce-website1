import AppsIcon from '@mui/icons-material/Apps';
import AllProSideNav from "../components/AllProSideNav"
import ViewListIcon from '@mui/icons-material/ViewList';
import ProductCard from '../components/ProductCard';
import { useState } from 'react';
import UseScreenWidth from '../hooks/useScreenWidth';
import { useContext } from 'react';
import { Context } from '../Context/DataContext';
import Loading from '../components/Loading';


function NewArrivals() {
 const [productDetails,setProductDetails] = useState(false)
 const screenWidth = UseScreenWidth()
 const {Products,setProducts} = useContext(Context)
 const [grid,setGrid] = useState(true)

 

  return (
    <div className="flex w-full ">
       <div className='w-full duration-300' style={{marginRight: productDetails && !(screenWidth < 800)? "400px" : "0"}}>

         <div className="w-full flex justify-between items-center p-3 border-b">
            <span className="h-full border p-2"> All Products</span>
            <div className='flex items-center gap-2'>
               <input type="search"  className='hidden md:block border p-1 rounded-full' placeholder='search' />
                 <div className='flex gap-1'>
                    <button style={{backgroundColor: grid? "white" : "#0B2447" , color: grid? "#0B2447" : "white"}} className='p-1 border' onClick={()=> setGrid(false)}><ViewListIcon /></button>
                    <button style={{backgroundColor: grid? "#0B2447" : "white" , color: grid? "white" : "#0B2447"}} className='p-1 border' onClick={()=> setGrid(true)}><AppsIcon /></button>
                 </div>
            </div>
         </div>
          
          <div className='w-full flex flex-wrap gap-2 justify-center pt-3 cursor-pointer items-center' /* style={{flexDirection: grid? "row": "column"}} */>
             {!(Products.length > 0) && <Loading  styles={`${grid? "w-[min(100%,250px)] h-[260px]" : "w-[70%] h-[100px]"} border p-2 shadow bg-black/60 rounded-xl`} Instances={12}/> }
              { (Products.length > 0) &&
                Products.map((product) => (
                   <ProductCard product={product} setProductDetails={setProductDetails} key={product.id} grid={grid}/>
                ))
              }
          </div>
       </div>
         <AllProSideNav setProductDetails={setProductDetails} productDetails={productDetails}/>
    </div>
  )
}

export default NewArrivals
