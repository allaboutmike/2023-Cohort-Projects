const events = [
  {
    event_id: 1,
    name: "Tech Conference 2023",
    short_description: "Cutting-edge tech talks",
    long_description:
      "Join us for a tech conference featuring talks on AI, blockchain, and more.",
    city: "New York City",
    state: "New York",
    country: "United States",
    address: "123 Tech Street",
    start_time: "2023-07-20T09:00:00.000Z",
    end_time: "2023-07-21T18:00:00.000Z",
    host: 1,
  },
  {
    event_id: 2,
    name: "Music Festival 2023",
    short_description: "Live performances and fun",
    long_description:
      "A weekend of live music with top bands and exciting activities.",
    city: "Los Angeles",
    state: "California",
    country: "United States",
    address: "456 Music Avenue",
    start_time: "2023-07-28T16:00:00.000Z",
    end_time: "2023-07-30T23:59:00.000Z",
    host: 2,
  },
  {
    event_id: 3,
    name: "Art Exhibition Expressions",
    short_description: "Artworks by local artists",
    long_description:
      "Explore various art pieces that express emotions and creativity.",
    city: "London",
    state: null,
    country: "United Kingdom",
    address: "789 Art Gallery Road",
    start_time: "2023-08-05T10:00:00.000Z",
    end_time: "2023-08-10T19:00:00.000Z",
    host: 3,
  },
  {
    event_id: 4,
    name: "Food Festival 2023",
    short_description: "Cuisine from around the world",
    long_description:
      "Taste the finest dishes from diverse cultures in this food extravaganza.",
    city: "Sydney",
    state: "New South Wales",
    country: "Australia",
    address: "10 Foodie Lane",
    start_time: "2023-08-15T12:00:00.000Z",
    end_time: "2023-08-17T22:00:00.000Z",
    host: 1,
  },
  {
    event_id: 5,
    name: "Gathering 2023",
    short_description: "This is a gathering of people.",
    long_description:
      "This is an even longer description talking about the gathering of people. When you gather a whole bunch of people together, good things should come from it, such as singing, playing, and new ideas. However, it is usually negative things, such as all of the ice cream being eaten. This gathering will make sure there are a ton of ice cream.",
    city: "Dallas",
    state: "Texas",
    country: "United States",
    address: null,
    start_time: "2023-10-01T05:01:30.000Z",
    end_time: "2023-10-02T05:01:30.000Z",
    host: 1,
  },
];


export default function EventList(props: { events: Array<string> }) {
	return (
		<div className="grid ">
		  <ul>
			{events.map((event, index) => (
			  <li key={index} className="p-2 border rounded-md">
				<div className=" ">{event.name}</div>
			  </li>
			))}
		  </ul>
		</div>
	  );
  }
  