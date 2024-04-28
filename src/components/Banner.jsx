import banner from "../assets/banner.png";
import Button from "./Button";

const Banner = () => {
  return (
    <div className="relative h-screen text-white overflow-hidden rounded rounded-xl">
    <div className="absolute inset-0">
      <img src={banner} alt="Background Image" className="object-cover object-center w-full h-full" />
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>
    
    <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
      <h1 className="text-5xl font-weight-600 leading-tight mb-4">Gateway Porto Al Zorah</h1>
        <Button text="Discover More"/>
    </div>
  </div>
  )
}

export default Banner