export default function EventList(props: { events: Array<string> }) {
  return (
    <div className="grid space-y-4 bg-[#f1f5f9] rounded-md">
      {/* <form action="" className=" space-y-4"> */}
        <ul>
          <li className="bg-[#f8fafc] w-96 border rounded-md">
            {props.events[0]}
          </li>
        </ul>
        {/* <ul>
          <li className="bg-[#f8fafc] w-96 border rounded-md">
            {props.events[0]}
          </li>
        </ul>
        <ul>
          <li className="bg-[#f8fafc] w-96 border rounded-md">
            {props.events[0]}
          </li>
        </ul>
        <ul>
          <li className="bg-[#f8fafc] w-96 border rounded-md">
            {props.events[0]}
          </li>
        </ul>
        <ul>
          <li className="bg-[#f8fafc] w- border rounded-md">
            {props.events[0]}
          </li>
        </ul> */}
      {/* </form> */}
    </div>
  );
}
