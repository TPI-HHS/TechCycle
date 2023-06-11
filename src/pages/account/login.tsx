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
  loginOpen: boolean
  closeLogin: () => void
  registrationOpen: boolean
  openRegistration: () => void
  loginSuccess: () => void
}

export const LoginDialog = (props: Props) => {
  const handleOpenRegistration = () => {
    props.openRegistration()
  }

  const [loginName, setLoginName] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [loginError, setLoginError] = React.useState(false)
  const [loginErrorMessage, setLoginErrorMessage] = React.useState('')
  const [loginNameError, setLoginNameError] = React.useState(false)
  const [loginNameErrorMessage, setLoginNameErrorMessage] = React.useState('')

  const [passwordError, setPasswordError] = React.useState(false)
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('')

  const handleLoginNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginName(event.target.value)
  }
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const validateLoginName = () => {
    if (loginName === '') {
      setLoginNameError(true)
      setLoginNameErrorMessage('Login name is required')
      return false
    }
    if (loginName.length < 3) {
      setLoginNameError(true)
      setLoginNameErrorMessage('Login name must be at least 3 characters')
      return false
    }

    setLoginNameError(false)
    setLoginNameErrorMessage('')
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

  const clearVariables = () => {
    setLoginName('')
    setPassword('')
    setLoginError(false)
    setLoginErrorMessage('')
    setLoginNameError(false)
    setLoginNameErrorMessage('')
    setPasswordError(false)
    setPasswordErrorMessage('')
  }

  const handleCloseLogin = () => {
    clearVariables()
    props.closeLogin()
  }

  const handleLogin = () => {
    setLoginError(false)
    setLoginErrorMessage('')
    if (!validateLoginName() || !validatePassword()) {
      return false
    }
    const loginData = {
      username: loginName,
      password: password,
    }
    axiosInstance
      .post('login', loginData)
      .then(response => {
        console.log(response)
        //get token from response
        const token = response.data.accessToken
        //store token in local storage
        localStorage.setItem('access_token', token)

        props.loginSuccess()
        //close login dialog
        handleCloseLogin()
      })
      .catch(error => {
        console.log(error)
        setLoginError(true)
        setLoginErrorMessage('Login failed: ' + error.response.data ? error.response.data.message : '')
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
        <Dialog onClose={handleCloseLogin} aria-labelledby='customized-dialog-title' open={props.loginOpen}>
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
                Sign in
              </Typography>
              <Box sx={{ mt: 1 }}>
                <TextField
                  onChange={handleLoginNameChange}
                  margin='normal'
                  fullWidth
                  id='email'
                  label='Email Address'
                  name='email'
                  autoComplete='email'
                  autoFocus
                  error={loginNameError}
                  helperText={loginNameErrorMessage}
                />
                <TextField
                  onChange={handlePasswordChange}
                  margin='normal'
                  fullWidth
                  name='password'
                  label='Password'
                  type='password'
                  id='password'
                  autoComplete='current-password'
                  error={passwordError}
                  helperText={passwordErrorMessage}
                />
                <FormControlLabel control={<Checkbox value='remember' color='primary' />} label='Remember me' />
                <Button onClick={handleLogin} fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
                  Sign In
                </Button>
                {loginError && (
                  <Alert variant={'filled'} severity='error' sx={{ mt: 3, mb: 2 }}>
                    {loginErrorMessage}
                  </Alert>
                )}
                <Grid container>
                  <Grid item xs>
                    <Link href='#' variant='body2'>
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href='#' variant='body2' onClick={handleOpenRegistration}>
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
          </Container>
        </Dialog>
      </ThemeProvider>
    </div>
  )
}

export default LoginDialog
