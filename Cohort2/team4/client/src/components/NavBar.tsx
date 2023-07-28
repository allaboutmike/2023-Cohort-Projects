
import logo from "../images/ConviLogo.png"




const NavBar = () => {
    return(
        <div className="mb-6">
            <nav className="flex items-center justify-between flex-wrap">
                <div className="flex items-center flex-shrink-0 text-white mr-8">
                    <img src={logo.src} alt="ConviLogo" className="transform scale-150 h-16 "/>
                    <span className="text-xl text-black">Convi</span>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0  text-black-200 font-medium hover:text-blue-800 mr-4">
                            About Us
                        </a>
                        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-black-200 font-medium hover:text-blue-800 mr-4">
                            Features
                        </a>
                        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0  text-black-200 font-medium hover:text-blue-800 mr-4">
                            Contact
                        </a>
                        </div>
                    <div className="pt-6">
                        <a href="#" className="inline-block text-md px-4 py-2 leading-none border rounded text-black border-white hover:border-transparent hover:text-blue-800 hover:bg-white mt-4 lg:mt-0">Login</a>
                        <a href="#" className="inline-block text-md px-4 py-2 leading-none border rounded text-white border-white bg-blue-500 hover:bg-blue-400 hover: mt-4 lg:mt-0 m-4">Sign Up</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;