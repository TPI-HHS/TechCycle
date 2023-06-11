import Link from 'next/link'

import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'

export interface MenuCardProps {
  header: string
  description: string
  linkDescription: string
  link: string
}

export const MenuCard = (props: MenuCardProps) => {
  return (
    <Grid item xs={3}>
      <Card className='CardHorizontal'>
        <CardContent>
          <Box>
            <Typography variant='h4'>{props.header}</Typography>
            <Typography variant='body2'>{props.description}</Typography>
          </Box>
          <CardActions>
            <Link href={{ pathname: props.link }}>
              <Button variant='text'>{props.linkDescription}</Button>
            </Link>
          </CardActions>
        </CardContent>
        <CardMedia component='img' image='https://picsum.photos/id/106/760/760' />
      </Card>
    </Grid>
  )
}