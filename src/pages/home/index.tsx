import Head from 'next/head'

import React, { useRef } from 'react'

import { Box } from '@mui/material'

import { TechCycleAppBar } from '../../../components/layout/TechCycleAppBar'
import Footer from '../../../components/layout/footer'
import LandingPage from '../landing-page'
import Main, { MainRefType } from '../main'

export default function Home() {
  const mainRef = useRef<MainRefType>(null)
  const [loggedIn, setLoggedIn] = React.useState(false)

  const handleCheckLoggedIn = () => {
    if (localStorage.getItem('access_token') !== null) {
      setLoggedIn(true)
    } else {
      setLoggedIn(false)
    }
  }

  const handleCheckLoggedOut = () => {
    localStorage.removeItem('access_token')
    setLoggedIn(false)
  }

  const openLogin = () => {
    console.log('openLogin')
    if (mainRef.current) {
      mainRef.current.openLogin()
    }
  }

  const openLogout = () => {
    console.log('openLogout')
    if (mainRef.current) {
      mainRef.current.openLogout()
    }
  }

  return (
    <>
      <Head>
        <title>TechCycle - Home</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <TechCycleAppBar openLogin={openLogin} openLogout={openLogout} loggedIn={loggedIn} />
        <LandingPage />
        <Footer />
        <Main
          ref={mainRef}
          loggedIn={loggedIn}
          handleCheckLoggedIn={handleCheckLoggedIn}
          handleCheckLoggedOut={handleCheckLoggedOut}
        />
      </Box>
    </>
  )
}
