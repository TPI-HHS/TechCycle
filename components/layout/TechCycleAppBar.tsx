import Image from 'next/image'
import Link from 'next/link'

import * as React from 'react'

import MenuIcon from '@mui/icons-material/Menu'
import { alpha, InputBase } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Badge, { BadgeProps } from '@mui/material/Badge'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

import { Box as FlexBox } from '../styled/flex-box'
import { account, AppbarAccount } from './navmenu/AppbarAccount'

type Props = {
  openLogin: () => void
  openLogout: () => void
  loggedIn: boolean
}

const accountLoggedOut: account = {
  id: '',
  name: '',
  email: '',
  accountImageUrl: '/static/images/avatar/login.png',
}

export interface AppBarItem {
  link: string
  linkDescription: string
}

export let appBarItems: AppBarItem[] = []

export const TechCycleAppBar = (props: Props) => {
  appBarItems = [
    {
      link: '/products',
      linkDescription: `producten`,
    },
  ]

  const [account, setAccount] = React.useState<account>(accountLoggedOut)
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }))

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }))

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }))

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }))

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' color='secondary'>
        <Container maxWidth='xl'>
          <Toolbar disableGutters color='error'>
            <Link href='/home'>
              <FlexBox alignItems={'center'}>
                <Box style={{ width: '60px', marginTop: '5px', marginRight: '16px' }}>
                  <Image src='/static/images/techcycle.svg' alt='Tech Cycle Logo' width={60} height={60} />
                </Box>
                <Typography
                  variant='h6'
                  noWrap
                  component='a'
                  sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  Tech Cycle
                </Typography>
              </FlexBox>
            </Link>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size='large'
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleOpenNavMenu}
                color='inherit'
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {appBarItems.map(item => (
                  <MenuItem key={item.link} onClick={handleCloseNavMenu}>
                    <Link href={{ pathname: item.link }}>{item.linkDescription}</Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {appBarItems.map(item => (
                <Link key={item.link} passHref href={{ pathname: item.link }}>
                  <Button sx={{ my: 2, color: 'white', display: 'block' }}>{item.linkDescription}</Button>
                </Link>
              ))}
            </Box>
            {props.loggedIn ? (
              <Button onClick={props.openLogout}>
                <AppbarAccount account={account} />
              </Button>
            ) : (
              <Button onClick={props.openLogin}>
                <AppbarAccount account={accountLoggedOut} />
              </Button>
            )}
            <Box sx={{ flexGrow: 0 }}></Box>
          </Toolbar>
        </Container>
        <Toolbar sx={{ background: '#98D077' }}>
          <Container maxWidth='xl'></Container>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
