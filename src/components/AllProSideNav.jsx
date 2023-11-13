import {FaFilter} from "react-icons/fa"

function AllProSideNav() {
  return (
    <div className="w-[200px] min-h-[400px] border">
    <h1 className="w-full flex items-center gap-3 justify-center bg-blue-800 text-white font-medium text-[1.2rem] text-center p-4"><FaFilter />Sort By</h1>
         <div className="p-3">
           <details>
              <summary className='font-medium text-DarkBlue'>
                 Price
              </summary>

              <ul className='px-3 py-1'>
                <li className="flex items-center gap-2">
                   <p>$0 - $100</p>
                  <input type="radio" name="sort"/>
                </li>
                <li className="flex items-center gap-2">
                   <p>$100 - $1000</p>
                  <input type="radio" name="sort"/>
                </li>
                <li className="flex items-center gap-2">
                   <p>$1500 +</p>
                  <input type="radio" name="sort"/>
                </li>
              </ul>
           </details>
           <details>
              <summary className='font-medium text-DarkBlue'>
                 Date
              </summary>

              <ul className='px-3 py-1' >
                <li className="flex items-center gap-2">
                   <p>Today</p>
                  <input type="radio" name="sort"/>
                </li>
                <li className="flex items-center gap-2">
                   <p>Yesterday</p>
                  <input type="radio" name="sort"/>
                </li>
                <li className="flex items-center gap-2">
                   <p>This Week</p>
                  <input type="radio" name="sort"/>
                </li>
              </ul>
           </details>
           <details>
              <summary className='font-medium text-DarkBlue'>
                 Price
              </summary>

              <ul className='px-3 py-1' >
                <li className="flex items-center gap-2">
                   <p>$0 - $100</p>
                  <input type="radio" name="sort"/>
                </li>
              </ul>
           </details>
     </div>
</div>
  )
}

export default AllProSideNav
