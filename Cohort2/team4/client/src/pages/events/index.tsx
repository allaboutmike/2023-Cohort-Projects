import EventList from '../../components/EventList';

export default function EventDashboard() {
	const events = ['event1'];
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div>
				<div>TODO -- Replace with event dashboard</div>
				<EventList events={events}/>
			</div>
		</main>
	);
}
