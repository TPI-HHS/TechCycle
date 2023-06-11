import * as React from 'react'

import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { createTheme, ThemeProvider } from '@mui/material/styles'

type Props = {
  logoutOpen: boolean
  logoutSuccess: () => void
  closeLogout: () => void
}

export const LogoutDialog = (props: Props) => {
  const defaultTheme = createTheme()

  const handleCloseLogoutSuccess = () => {
    props.logoutSuccess()
    props.closeLogout()
  }
  const handleCloseLogout = () => {
    props.closeLogout()
  }

  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <Dialog onClose={handleCloseLogout} aria-labelledby='customized-dialog-title' open={props.logoutOpen}>
          <Container component='main' maxWidth='xs'>
            <DialogTitle>{'Logout'}</DialogTitle>
            <DialogContent>
              <DialogContentText>You are about to logout. Are you sure you want to logout?</DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleCloseLogout}>
                No
              </Button>
              <Button onClick={handleCloseLogoutSuccess} autoFocus>
                Yes
              </Button>
            </DialogActions>
          </Container>
        </Dialog>
      </ThemeProvider>
    </div>
  )
}

export default LogoutDialog
