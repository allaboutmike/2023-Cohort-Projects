export default function EventList(props: { events: Array<string> }) {
	return (
		<div>
			<h2>Event list -- TODO REPLACE WITH EVENT LIST</h2>
			<ul><li>{props.events[0]}</li></ul>
		</div>
	);
}
