import EventList from "../../components/EventList";

export default function EventDashboard() {
  const user = "Sally";
  const events = ["event1"];
  return (
    <main style={{ height: "100dvh" }}>
      <div className="grid grid-row-1 gap-12 my-20 mx-auto w-3/5 h-2/3 ">
        <div className="bg-[#f1f5f9] space-y-10 border-grey border-solid border-2 pl-20 pt-20 rounded-md">
          <h1 className="font-bold text-2xl">Hello there, {user}</h1>
          <div className="grid grid-cols-2">
          <p>See your upcoming events</p>
          </div>
          <div className="flex">
            <a href="#"className="bg-[#f8fafc]"><EventList events={events} /></a>
          </div>
            <button className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-400 mt-10">
              Add New Event
            </button>
        </div>
      </div>
    </main>
  );
}
