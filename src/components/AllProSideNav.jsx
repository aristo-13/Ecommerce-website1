
import {BiX} from 'react-icons/bi'

function AllProSideNav( {setProductDetails,productDetails} ) {
  return (
    <div className="fixed right-[-100%] w-[min(100%,400px)] min-h-[600px] border z-10 bg-white duration-300" style={{right: productDetails? "0": "-100%"}}>
     <span onClick={() => setProductDetails(false)} className="w-full flex justify-end text-2xl p-2 cursor-pointer">{<BiX />}</span>
    
</div>
  )
}

export default AllProSideNav
