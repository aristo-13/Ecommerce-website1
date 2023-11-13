
import AdidasLogo from '../../public/Adidas-Logo.jpg'
import Balenciaga from '../../public/Balenciaga-Logo-tumb.jpg'
import Givenchy from '../../public/0011_Givenchy-Logo-500x281.jpg'
import Jordan from '../../public/Air-Jordan-Logo.jpg'
import CK from '../../public/Calvin-Klein-logo-tumb.jpg'
import Champion from "../../public/Champion-Logo-tm.jpg";
import Chanel from '../../public/Chanel.jpg'
import DC from '../../public/DC-Logo.jpg'
import Dior from '../../public/Dior-Logo-tumb.png'
import DG from '../../public/Dolce-Gabbana-Logo-tumb.jpg'
import Fila from '../../public/Fila-Logo-tm.jpg'
import Gucci from '../../public/Gucci-Logo.jpg'
import Kappa from '../../public/Kappa-logo-tumb.jpg'
import Londsale from '../../public/Lonsdale-Logo-tumb.png'
import Lv from '../../public/Louis-Vuitton-Logo.jpg'
import Nike from '../../public/Nike-Logo-tumb.jpg'
import Pandora from '../../public/Pandora-Logo-tumb.jpg'
import Puma from '../../public/Puma-Logo-tumb.png'
import Reebok from '../../public/Reebok-logo-tumb.jpg'
import Supreme from '../../public/supreme-logo.jpg'
import Moschino from '../../public/tm_0003_Moschino-Logo.jpg'
import Umbro from '../../public/Umbro-Logo-tumb.jpg'


function BrandsMarquee() {
    const logoNames = [
        AdidasLogo,
        Balenciaga,Givenchy,Jordan,CK,Champion,
        Chanel, DC,Dior,
        DG,Fila,Gucci,Kappa,Londsale,Lv,Nike,Pandora,Puma,Reebok,Supreme,Moschino,Umbro,
      ];
      



  return (
    <div id='brands' className="p-2 overflow-hidden">
       <h1 className="text-[1.5rem] font-bold text-DarkBlue p-4">Brands</h1>
       <div className='w-full overflow-hidden p-4 relative'>
       <span className='overlay absolute w-full h-full left-0 z-10 bg-gradient-to-r from-white via-transparent to-white'></span>
            <div className='flex gap-[2rem] p-5 marquee'>
                {
                logoNames.map((logo) => (
                    <div className='w-[15vw] flex-shrink-0 bg-red'>
                        <img src={logo} className='w-[80%] h-[80%]'/>
                    </div>
                ))
            }
            </div>
       </div>
    </div>
  )
}

export default BrandsMarquee
