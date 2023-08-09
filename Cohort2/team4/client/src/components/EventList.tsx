import { trpc } from '@/utils/trpc';
import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';
import {useEffect, useState} from 'react';

export default function EventList(props: { events: Array<string> }) {
	// const [events, setEvents] = useState<object[]>([]);
  
  const {user} = useUser();

  console.log(user);
  const userId = '18';

  // const fetchUserEvents = async (userId: number) => {
  //   try {
  //     const response = await trpc.event.byId.useQuery('18');
  //     const data = response.data;
  //     if (data){
  //       console.log(data);
  //     } 
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  
  // fetchUserEvents(userId);
  const allEvents = () => {
    try {
      const response = trpc.event.getAll.useQuery();
      const data = response.data;
      if (data) {
        console.log(data);
        return data;
      } console.log('Query no return')
    } catch(error) {
      console.log(error);
    }
  };

  const events: object[] | undefined = allEvents();

  // const oneEvent = () => {
  //   try {
  //     const response = trpc.event.byId.useQuery("1")
  //     const data = response.data
  //     if(data){
  //       console.log(data)
  //       return
  //     } console.log("Query not returned. :(")
  //   } catch (error) {
  //     console.error(error)
  //   }
  // };

  // oneEvent();

  return (
		<div className="grid">
		  <ul className="space-y-4">
			{events.map((event, index, link) => (
			  <li key={index} className="p-2 border rounded-md">
				<Link href='' className="">{event.name}</Link>
			  </li>
			))}
		  </ul>
		</div>
	  );
  }
  
