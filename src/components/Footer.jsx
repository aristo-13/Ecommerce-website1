import { FaPaypal,FaCcMastercard,FaCcVisa } from "react-icons/fa6"

function Footer() {
 const date = new Date()




  return (
    <footer className="p-5 bg-DarkBlue text-white flex flex-col">
      <div className="flex gap-3 flex-col justify-center items-center md:flex-row md:justify-around p-4">
        <div>
          <span className="max-w-[400px] flex justify-center text-[1.5rem] font-semibold">🛒ShopRich</span>
          <p className="w-[min(100%,450px)] text-white/70 text-center">Specialization in providing high-quality stylish produncts for your wardrobe</p>
        </div>
          <div>
             <h1 className="text-[1.3rem]">Payment Methods</h1>
             <span className="flex gap-5 text-[2rem] text-center">
                <FaPaypal />
                <FaCcMastercard />
                <FaCcVisa />
             </span>
          </div>
      </div>
      <div className="w-full flex justify-center items-center text-[1.3rem] text-white/70 p-5 border-t border-white/20">
        <p>&copy;{date.getFullYear()}</p>
      </div>
    </footer>
  )
}

export default Footer
