import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import hero from '../images/landinghero.jpg'



export default function Home() {
  
  //placeholder for auth
  const [isLogged, setLogged] = useState(false)
  

  return (


    <main style={{height:'81.4dvh'}}>
      <div className='grid grid-cols-2 gap-12 my-0 mx-auto w-3/5 h-2/3' >
        <div className='col-span-1 flex flex-col justify-center items-start'>
          <h1 className='mb-8 font-bold text-3xl'>Your VIP Pass to Event Awesomeness!</h1>
          <h2 className='mb-8 text-lg'>Seamlessly create, promote, and track events of any scale, while delighting guests with easy RSVPS and real-time updates. Unleash the potential of memorable events with Convi - where events come to life!</h2>
          <a href="#" className="inline-block m-0 text-md px-4 py-2 w-32 flex justify-center flexleading-none border rounded text-white border-white bg-blue-500 hover:bg-blue-400 hover: mt-4 lg:mt-0 m-4">Join Convi</a>
        </div>
        <div  className='col-span-1 flex flex-col justify-center items-center'>
          <img src={hero.src} alt='friendly people being friendly' className='h-128 w-128'></img>
        </div>
      </div>
    </main>




    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
		// 	<div>
    //   <img src={logo.src} alt="" width={50} height={50} />
		// 		<h1>CONVI</h1>
    //     <p>Your Gateway to Unforgettable Events!</p>
		// 		<Link href="events">Events Dashboard</Link>
		// 	</div>
    // </main>
  )
};
