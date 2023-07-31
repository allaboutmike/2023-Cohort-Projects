import '@/styles/globals.css'
import Layout from '../components/layout'
import { UserProvider } from '@auth0/nextjs-auth0/client';



import type { AppProps } from 'next/app'




export default function App({ Component, pageProps }: AppProps) {
	
  return (
		<UserProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</UserProvider>
	)
}
