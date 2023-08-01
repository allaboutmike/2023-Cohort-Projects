import EventList from "../../components/EventList";
import { WithPageAuthRequired, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useUser } from '@auth0/nextjs-auth0/client';

export default function EventDashboard() {

  const { user } = useUser()
  console.log(user)

  const events = ["event1"];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <header className="flex items-center gap-[70vw]">
          Convi
          <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">
            Sign in
          </button>
        </header>
      </div>
      <div>
        <div className="space-y-10">
          <h1 className="font-bold text-2xl">Hello there, {user?.nickname}</h1>
          <p>See your upcoming events</p>
          <EventList events={events} />
          <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec] m-10">
            Add New Event
          </button>
        </div>
      </div>
    </main>
  );
}

export const getServerSideProps = withPageAuthRequired();
