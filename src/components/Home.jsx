import Banner from "./Banner"
import Carousel from "./Carousel"
import DownloadBrochure from "./DownloadBrochure"
import GridSection from "./GridSection"
import MoreAbout from "./MoreAbout"

const Home = () => {
  return (
    <div className="md:px-14 max-w-screen-2xl mx-auto mt-8">
        <Banner/>
        <GridSection />
        <DownloadBrochure />
        <MoreAbout />
        <Carousel />
    </div>
  )
}

export default Home