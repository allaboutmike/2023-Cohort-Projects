import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div>
        <img src="/src/images/convi-logo-1.png" alt="Convi Logo"/>
				<h1>CONVI</h1>
        <p>Your Gateway to Unforgettable Events!</p>
				<Link href="events">Events Dashboard</Link>
			</div>
    </main>
  )
};
