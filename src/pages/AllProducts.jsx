import AppsIcon from '@mui/icons-material/Apps';
import AllProSideNav from "../components/AllProSideNav"
import ViewListIcon from '@mui/icons-material/ViewList';
import ProductCard from '../components/ProductCard';

function NewArrivals() {
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
       <AllProSideNav />
       <div className='w-full'>

         <div className="w-full flex justify-between items-center p-3 border-b">
            <span className="h-full border p-2"> All Products</span>
            <div className='flex items-center gap-2'>
               <input type="search"  className='border p-1 rounded-full' placeholder='search' />
                 <div className='flex gap-1'>
                    <button className='p-1 border'><ViewListIcon /></button>
                    <button className='p-1 border'><AppsIcon /></button>
                 </div>
            </div>
         </div>
          
          <div className='w-full flex flex-wrap gap-2 justify-center p-4'>
              {
                products.map((product) => (
                   <ProductCard product={product}/>
                ))
              }
          </div>
       </div>
    </div>
  )
}

export default NewArrivals
