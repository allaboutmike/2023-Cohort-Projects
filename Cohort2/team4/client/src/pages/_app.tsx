import '@/styles/globals.css'
import Layout from '../components/layout'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
			<Layout>
				<NavBar />
				<Component {...pageProps} />
				<Footer />
			</Layout>
	)
}
