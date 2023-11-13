import Slider from "../components/Slider"
import BrandsMarquee from "../components/BrandsMarquee"
import CuratedPicks from "../components/CuratedPicks"
import PromoCard from "../components/PromoCard"
import NewsLetter from "../components/NewsLetter"

function Home() {
  return (
    <div className="p-4 w-full">
        <Slider /> 
        <BrandsMarquee />
        <CuratedPicks />
        <PromoCard />
        <NewsLetter />
    </div>
  )
}

export default Home
