import * as React from 'react'

import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { Alert } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Dialog from '@mui/material/Dialog'
import FormControlLabel from '@mui/material/FormControlLabel'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import { axiosInstance } from '../_app'

type Props = {
  registrationOpen: boolean
  closeRegistration: () => void
  openLoadingBackdrop: () => void
}

export const RegistrationDialog = (props: Props) => {
  const [emailAddress, setEmailAddress] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')

  const [registerError, setRegisterError] = React.useState(false)
  const [registerErrorMessage, setRegisterErrorMessage] = React.useState('')
  const [emailAddressError, setEmailAddressError] = React.useState(false)
  const [emailAddressErrorMessage, setEmailAddressErrorMessage] = React.useState('')
  const [passwordError, setPasswordError] = React.useState(false)
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('')
  const [firstNameError, setFirstNameError] = React.useState(false)
  const [firstNameErrorMessage, setFirstNameErrorMessage] = React.useState('')
  const [lastNameError, setLastNameError] = React.useState(false)
  const [lastNameErrorMessage, setLastNameErrorMessage] = React.useState('')

  const handleEmailAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailAddress(event.target.value)
  }
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }
  const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value)
  }
  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value)
  }

  const clearVariables = () => {
    setEmailAddress('')
    setPassword('')
    setFirstName('')
    setLastName('')
    setRegisterError(false)
    setRegisterErrorMessage('')
    setEmailAddressError(false)
    setEmailAddressErrorMessage('')
    setPasswordError(false)
    setPasswordErrorMessage('')
    setFirstNameError(false)
    setFirstNameErrorMessage('')
    setLastNameError(false)
    setLastNameErrorMessage('')
  }

  const handleCloseRegister = () => {
    clearVariables()
    props.closeRegistration()
  }

  const validateEmailAddress = () => {
    if (emailAddress === '') {
      setEmailAddressError(true)
      setEmailAddressErrorMessage('Email address is required')
      return false
    }
    if (!emailAddress.includes('@')) {
      setEmailAddressError(true)
      setEmailAddressErrorMessage('Email address must contain a @ character')
      return false
    }
    if (!emailAddress.includes('student')) {
      setEmailAddressError(true)
      setEmailAddressErrorMessage('Email address must be a valid school email address')
      return false
    }

    setEmailAddressError(false)
    setEmailAddressErrorMessage('')
    return true
  }

  const validatePassword = () => {
    if (password === '') {
      setPasswordError(true)
      setPasswordErrorMessage('Password is required')
      return false
    }
    if (password.length < 6) {
      setPasswordError(true)
      setPasswordErrorMessage('Password must be at least 6 characters')
      return false
    }

    setPasswordError(false)
    setPasswordErrorMessage('')
    return true
  }

  const validateFirstName = () => {
    if (firstName === '') {
      setFirstNameError(true)
      setFirstNameErrorMessage('First name is required')
      return false
    }

    setFirstNameError(false)
    setFirstNameErrorMessage('')
    return true
  }

  const validateLastName = () => {
    if (lastName === '') {
      setLastNameError(true)
      setLastNameErrorMessage('Last name is required')
      return false
    }

    setLastNameError(false)
    setLastNameErrorMessage('')
    return true
  }

  const handleSubmit = () => {
    setRegisterError(false)
    setRegisterErrorMessage('')
    if (!validateFirstName() || !validateLastName() || !validateEmailAddress() || !validatePassword()) {
      return false
    }
    const registerUser = {
      username: emailAddress,
      password: password,
      email: emailAddress,
      role: 'customer',
    }
    axiosInstance
      .post('register', registerUser)
      .then(response => {
        console.log(response)
        handleCloseRegister()
      })
      .catch(error => {
        console.log(error)
        setRegisterError(true)
        setRegisterErrorMessage('Registration failed: ' + error.response.data)
      })
  }

  function Copyright(props: any) {
    return (
      <Typography variant='body2' color='text.secondary' align='center' {...props}>
        {'Copyright © '}
        <Link color='inherit' href=''>
          Tech-Cycle
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    )
  }

  const defaultTheme = createTheme()

  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <Dialog onClose={handleCloseRegister} aria-labelledby='customized-dialog-title' open={props.registrationOpen}>
          <Container component='main' maxWidth='xs'>
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component='h1' variant='h5'>
                Sign up
              </Typography>
              <Box sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      onChange={handleFirstNameChange}
                      autoComplete='given-name'
                      name='firstName'
                      fullWidth
                      id='firstName'
                      label='First Name'
                      autoFocus
                      error={firstNameError}
                      helperText={firstNameErrorMessage}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      onChange={handleLastNameChange}
                      fullWidth
                      id='lastName'
                      label='Last Name'
                      name='lastName'
                      autoComplete='family-name'
                      error={lastNameError}
                      helperText={lastNameErrorMessage}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      onChange={handleEmailAddressChange}
                      fullWidth
                      id='email'
                      label='Email Address'
                      name='email'
                      autoComplete='email'
                      error={emailAddressError}
                      helperText={emailAddressErrorMessage}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      onChange={handlePasswordChange}
                      fullWidth
                      name='password'
                      label='Password'
                      type='password'
                      id='password'
                      autoComplete='new-password'
                      error={passwordError}
                      helperText={passwordErrorMessage}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={<Checkbox value='allowExtraEmails' color='primary' />}
                      label='I want to receive inspiration, marketing promotions and updates via email.'
                    />
                  </Grid>
                </Grid>
                <Button onClick={handleSubmit} fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
                  Sign Up
                </Button>
                {registerError && (
                  <Alert variant={'filled'} severity='error' sx={{ mt: 3, mb: 2 }}>
                    {registerErrorMessage}
                  </Alert>
                )}
                <Grid container justifyContent='flex-end'>
                  <Grid item>
                    <Link href='#' variant='body2' onClick={handleCloseRegister}>
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Copyright sx={{ mt: 5 }} />
          </Container>
        </Dialog>
      </ThemeProvider>
    </div>
  )
}

export default RegistrationDialog
