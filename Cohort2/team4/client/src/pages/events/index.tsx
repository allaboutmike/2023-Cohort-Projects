import EventModal from "@/components/EventModal";
import EventList from "../../components/EventList";
import { WithPageAuthRequired, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useUser } from '@auth0/nextjs-auth0/client';

export default function EventDashboard() {

  const {user} = useUser()
  const events = ["event1"];

  console.log(user)

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

          </div>
          <div className="flex">
            <a href="#"className="bg-[#f8fafc]"><EventList events={events} /></a>
          </div>
            <button className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-400 mt-10">
              Add New Event
            </button>
          <EventList events={events} />
          <EventModal />

        </div>
    </main>
  );
}

export const getServerSideProps = withPageAuthRequired();
