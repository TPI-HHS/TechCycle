import { TechCycleAppBar } from 'client/components/layout/TechCycleAppBar'
import Head from 'next/head'

import React, { useRef } from 'react'

import LaptopIcon from '@mui/icons-material/Laptop'
import MonitorIcon from '@mui/icons-material/Monitor'
import PanoramaVerticalIcon from '@mui/icons-material/PanoramaVertical'
import { Box, Divider, Grid, Tab, Tabs } from '@mui/material'
import Typography from '@mui/material/Typography'

import Footer from '../../../components/layout/footer'
import { ProductCard, ProductCardType } from '../../../components/products/ProductCard'
import { ProductTabPanel } from '../../../components/products/tabPanel'
import { Box as FlexBox } from '../../../components/styled/flex-box'
import { globalStyles } from '../../styles/globalStyles'
import { axiosInstance } from '../_app'
import Main, { MainRefType } from '../main'

export default function Products() {
  const mainRef = useRef<MainRefType>(null)

  const [loggedIn, setLoggedIn] = React.useState(false)
  const [laptops, setLaptops] = React.useState<ProductCardType[]>([])
  const [monitors, setMonitors] = React.useState<ProductCardType[]>([])
  const [computers, setComputers] = React.useState<ProductCardType[]>([])
  const [loading, setLoading] = React.useState(true)
  const [selectedTab, setSelectedTab] = React.useState(0)

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

  const handleChange = (event: React.SyntheticEvent, newSelectedTab: number) => {
    setSelectedTab(newSelectedTab)
  }

  React.useEffect(() => {
    setLoading(true)
    axiosInstance.get('products/laptop').then(response => {
      setLaptops(response.data)
      setLoading(false)
    })
  }, [setLoading, setLaptops])

  React.useEffect(() => {
    setLoading(true)
    axiosInstance.get('products/desktop').then(response => {
      setComputers(response.data)
      setLoading(false)
    })
  }, [setLoading, setLaptops])

  React.useEffect(() => {
    setLoading(true)
    axiosInstance.get('products/monitor').then(response => {
      setMonitors(response.data)
      setLoading(false)
    })
  }, [setLoading, setLaptops])

  function a11yProps(index: number) {
    return {
      id: `product-tab-${index}`,
      'aria-controls': `product-tabpanel-${index}`,
    }
  }

  const openLogin = () => {
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
        <title>TechCycle - Producten</title>
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
        <Box sx={globalStyles.container}>
          <Grid spacing={6} padding={10} alignItems={'center'} flexDirection={'column'}>
            <FlexBox flexDirection={'column'} alignItems={'center'}>
              <Typography
                variant='h4'
                sx={{
                  fontWeight: 'bold',
                  color: '#000000',
                  textAlign: 'center',
                  marginBottom: '20px',
                  marginTop: '20px',
                }}
              >
                Producten
              </Typography>
              <Tabs value={selectedTab} onChange={handleChange} centered>
                <Tab icon={<LaptopIcon />} label='Laptops' {...a11yProps(0)} sx={{}} />
                <Tab icon={<PanoramaVerticalIcon />} label='Desktops' {...a11yProps(1)} />
                <Tab icon={<MonitorIcon />} label='Monitors' {...a11yProps(2)} />
              </Tabs>
              <Divider />
              <Box sx={{ flex: 1 }}>
                <ProductTabPanel value={selectedTab} index={0}>
                  <Grid container justifyContent='center' alignItems='center'>
                    {laptops.map(item => (
                      <Grid item key={item.id}>
                        <ProductCard key={item.id} product={item} />
                      </Grid>
                    ))}
                  </Grid>
                </ProductTabPanel>
                <ProductTabPanel value={selectedTab} index={1}>
                  <Grid container justifyContent='center' alignItems='center'>
                    {computers.map(item => (
                      <Grid item key={item.id}>
                        <ProductCard key={item.id} product={item} />
                      </Grid>
                    ))}
                  </Grid>
                </ProductTabPanel>
                <ProductTabPanel value={selectedTab} index={2}>
                  <Grid container justifyContent='center' alignItems='center'>
                    {monitors.map(item => (
                      <Grid item key={item.id}>
                        <ProductCard key={item.id} product={item} />
                      </Grid>
                    ))}
                  </Grid>
                </ProductTabPanel>
              </Box>
            </FlexBox>
          </Grid>
        </Box>
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
