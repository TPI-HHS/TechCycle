import axios from 'axios'
import type { AppProps } from 'next/app'

import React from 'react'

import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'

import { serviceOptions } from '../../services/tech-cycle-client'
import '../styles/globals.css'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#98d077',
    },
    secondary: {
      main: '#5c6871',
    },
  },
})

export const axiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BACKEND_HOST_URL}`,
  timeout: 5000,
})
serviceOptions.axios = axiosInstance

export const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
