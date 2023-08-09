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
        <div className="space-y-10">
          <h1 className="font-bold text-2xl">Hello there, {user?.nickname}</h1>
          <p>See your upcoming events:</p>

          </div>
          <div className="flex p-2">
            <a href="#"className=""><EventList events={events} /></a>
          </div>
          <EventModal />

        </div>
    </main>
  );
}

export const getServerSideProps = withPageAuthRequired();
