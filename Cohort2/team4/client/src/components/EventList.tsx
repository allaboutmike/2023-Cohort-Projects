export default function EventList(props: { events: Array<string> }) {
	return (
		<div>
			<ul><li>{props.events[0]}</li></ul>
		</div>
	);
}
