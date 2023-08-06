
import logo from "../images/ConviLogo.png"
import { useUser } from '@auth0/nextjs-auth0/client';
import Link from "next/link";




const NavBar = () => {
    const {user, isLoading, error} = useUser()

    return(
        <div className="mb-6">
            <nav className="flex items-center justify-between flex-wrap">
                <div className="flex items-center flex-shrink-0 text-white mr-8">
                    <Link href="/" className="flex flex-row items-center">
                    <img src={logo.src} alt="ConviLogo" className="transform scale-150 h-16 "/>
                    <span className="text-xl text-black">Convi</span>
                    </Link>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                        <a href="./about" className="block mt-4 lg:inline-block lg:mt-0  text-black-200 font-medium hover:text-blue-800 mr-4">
                            About Us
                        </a>
                        <a href="./features" className="block mt-4 lg:inline-block lg:mt-0 text-black-200 font-medium hover:text-blue-800 mr-4">
                            Features
                        </a>
                        <a href="./contact" className="block mt-4 lg:inline-block lg:mt-0  text-black-200 font-medium hover:text-blue-800 mr-4">
                            Contact
                        </a>
                        </div>
                    <div className="pt-6">
                        
                        {/* eslint-disable */
                        user ?
                        <>
                        <Link href="/events" className="inline-block text-md px-4 py-2 mr-4 leading-none border rounded text-white bg-blue-500 border-white hover:border-transparent hover:text-white-800 hover:bg-blue-400 mt-4 lg:mt-0">Dashboard</Link>
                        <a href="/api/auth/logout" className="inline-block text-md px-4 py-2 mr-4 leading-none border rounded text-white bg-red-500 border-white hover:border-transparent hover:text-white-800 hover:bg-red-400 mt-4 lg:mt-0">Logout</a>
                        </>
                        :       
                        <>                 
                        <a href="/api/auth/login" className="inline-block text-md px-4 py-2 leading-none border rounded text-white border-white bg-green-500 hover:border-transparent hover:bg-green-400 mt-4 lg:mt-0">Login</a>
                        <a href="/api/auth/login" className="inline-block text-md px-4 py-2 leading-none border rounded text-white border-white bg-blue-500 hover:bg-blue-400 hover: mt-4 lg:mt-0 m-4">Sign Up</a>
                        </>
                        /* eslint-enable */}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;