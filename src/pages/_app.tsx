import { type AppType } from 'next/app'
import { type Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'

import { trpc } from '../utils/trpc'

import '../components/BusinessCard/BusinessCard.css'
import '../styles/globals.css'
import Navbar from '../components/shared/Navbar'

const MyApp: AppType<{ session: Session | null }> = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <SessionProvider session={session}>
      <Navbar />
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default trpc.withTRPC(MyApp)
