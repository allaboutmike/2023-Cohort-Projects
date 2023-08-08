import EventModal from "@/components/EventModal";
import EventList from "../../components/EventList";

export default function EventDashboard() {
  const user = "Sally";
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
          <h1 className="font-bold text-2xl">Hello there, {user}</h1>
          <p>See your upcoming events</p>
          <EventList events={events} />
          <EventModal />
        </div>
      </div>
    </main>
  );
}
