
import Image from 'next/image'
import Link from 'next/link'

import hero from '../images/landinghero.jpg'
import { type } from 'os'
import { useUser } from '@auth0/nextjs-auth0/client';



export default function Home() {
  
  //User information.
  const { user, error, isLoading } = useUser();

  return (
    <main style={{height:'100dvh'}}>
      <div className='grid grid-cols-2 gap-12 my-0 mx-auto w-3/5 h-2/3' >
        <div className='col-span-1 flex flex-col justify-center items-start'>
          <h1 className='mb-8 font-bold text-3xl'>Your VIP Pass to Event Awesomeness!</h1>
          <h2 className='mb-8 text-lg'>Seamlessly create, promote, and track events of any scale, while delighting guests with easy RSVPS and real-time updates. Unleash the potential of memorable events with Convi - where events come to life!</h2>
          {user ? 
          <a href="/events" className="inline-block m-0 text-md px-4 py-2 w-38 flex justify-center flexleading-none border rounded text-white border-white bg-blue-500 hover:bg-blue-400 hover: mt-4 lg:mt-0">View your Dashboard</a>
          :
          <a href="/api/auth/login" className="inline-block m-0 text-md px-4 py-2 w-32 flex justify-center flexleading-none border rounded text-white border-white bg-blue-500 hover:bg-blue-400 hover: mt-4 lg:mt-0">Join Convi</a>
          }
        </div>
        <div  className='col-span-1 flex flex-col justify-center items-center'>
          <img src={hero.src} alt='friendly people being friendly' className='h-2/3 w-full'></img>
        </div>
      </div>
    </main>
  );
};
