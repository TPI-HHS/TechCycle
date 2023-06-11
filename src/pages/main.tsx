import React, { forwardRef, Ref, useImperativeHandle } from 'react'

import { Backdrop, CircularProgress } from '@mui/material'

import { LoginDialog } from './account/login'
import LogoutDialog from './account/logout'
import { RegistrationDialog } from './account/registration'

export interface PropsType {
  loggedIn: boolean
  handleCheckLoggedIn: () => void
  handleCheckLoggedOut: () => void
}

export interface MainRefType {
  openLogin: () => void
  openLogout: () => void
}

function Main(props: PropsType, ref: Ref<MainRefType>) {
  useImperativeHandle(ref, () => ({
    openLogin: () => {
      setLoginDialogOpen(true)
    },
    openLogout: () => {
      console.log('openLogout2')
      setLogoutDialogOpen(true)
    },
  }))

  const [loginOpen, setLoginDialogOpen] = React.useState(false)
  const [logoutOpen, setLogoutDialogOpen] = React.useState(false)
  const [registrationOpen, setRegistrationDialogOpen] = React.useState(false)
  const [openLoadingBackdrop, setOpenLoadingBackdrop] = React.useState(false)

  return (
    <>
      <Backdrop
        sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
        open={openLoadingBackdrop}
        onClick={() => setOpenLoadingBackdrop(false)}
      >
        <CircularProgress color='inherit' />
      </Backdrop>
      {props.loggedIn ? (
        <LogoutDialog
          logoutOpen={logoutOpen}
          closeLogout={() => setLogoutDialogOpen(false)}
          logoutSuccess={() => props.handleCheckLoggedOut()}
        />
      ) : (
        <LoginDialog
          loginOpen={loginOpen}
          closeLogin={() => setLoginDialogOpen(false)}
          registrationOpen={registrationOpen}
          openRegistration={() => setRegistrationDialogOpen(true)}
          loginSuccess={() => props.handleCheckLoggedIn()}
        />
      )}
      <RegistrationDialog
        registrationOpen={registrationOpen}
        closeRegistration={() => setRegistrationDialogOpen(false)}
        openLoadingBackdrop={() => setOpenLoadingBackdrop(true)}
      ></RegistrationDialog>
    </>
  )
}

export default forwardRef(Main)
