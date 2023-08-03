import '@/styles/globals.css'
import Layout from '../components/layout'
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { trpc } from '../../utils/trpc';
import type { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => {
	
  return (
		<UserProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</UserProvider>
	)
}

export default trpc.withTRPC(App);
