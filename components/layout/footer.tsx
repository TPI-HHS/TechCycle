import * as React from 'react'

import { Facebook, Instagram, Twitter } from '@mui/icons-material'
import { Box } from '@mui/material'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'


export default function Footer() {
  return (
    <Box
      component='footer'
      sx={{
        backgroundColor: theme => (theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800]),
        p: 6,
      }}
    >
      <Container maxWidth='lg'>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant='h6' color='text.primary' gutterBottom>
              TechCycle - Duurzaamheid voorop
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Wij bij TechCycle zetten ons in voor een duurzame toekomst. Voor ons is het belangrijk dat we de wereld
              een stukje beter maken. Dit doen we door het promoten van herbruik van elektronische apparaten. En als het
              stuk is ervoor dat de apparaten op een verantwoorde manier worden gerecycled. Zo zorgen we er samen voor
              dat de wereld een stukje beter wordt. Goed voor het milieu en goed voor de portemonnee.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant='h6' color='text.primary' gutterBottom>
              Contacteer ons
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Address: 1234 AB, Amsterdam, The Netherlands
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Email: info@techcycle.com
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Phone: +31 123 456 789
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant='h6' color='text.primary' gutterBottom>
              Volg ons
            </Typography>
            <Link href='https://www.facebook.com/' color='inherit'>
              <Facebook />
            </Link>
            <Link href='https://www.instagram.com/' color='inherit' sx={{ pl: 1, pr: 1 }}>
              <Instagram />
            </Link>
            <Link href='https://www.twitter.com/' color='inherit'>
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant='body2' color='text.secondary' align='center'>
            {'Copyright © '}
            <Link color='inherit' href='https://localhost:3000/'>
              Tech Cycle
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}