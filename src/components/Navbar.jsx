import logo from "../assets/logo.png";


const Navbar = () => {
  return (
    <nav className="h-90 gradientBg">
        <div className="md:px-14 p-4 max-w-screen-2xl mx-auto">
            <a href="/"><img src={logo} alt="" className="inline-block"/></a>
        </div>
    </nav>
  )
}

export default Navbar