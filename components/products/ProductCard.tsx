import * as React from 'react'

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import { Button, CardActionArea, CardActions } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

import { Box as FlexBox } from '../styled/flex-box'

export type ProductCardType = {
  id: number
  name: string
  price: number
  description: string
  stockLevel: number
  model: string
  category: string
  image: string
}

type Props = {
  product: ProductCardType
}

export const ProductCard = (props: Props) => {
  return (
    <Card sx={{ maxWidth: 345, margin: 3 }}>
      <CardActionArea>
        <FlexBox alignItems={'center'} width={'345px'} height={'300px'}>
          <CardMedia
            component='img'
            width='40%'
            sx={{ objectFit: 'contain', overflow: 'hidden', maxHeight: '100%', maxWidth: '100%' }}
            image={props.product.image}
            alt={props.product.name}
          />
        </FlexBox>
        <CardContent style={{ paddingTop: 8, paddingBottom: 8 }}>
          <Typography gutterBottom variant='h6' component='div'>
            {props.product.name}
          </Typography>
          <Typography
            variant='body2'
            color='text.secondary'
            sx={{ display: '-webkit-box', overflow: 'hidden', WebkitBoxOrient: 'vertical', WebkitLineClamp: 3 }}
          >
            {props.product.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Typography
          component='div'
          variant='h6'
          color='primary.dark'
          sx={{ margin: '0 auto 0 0px', userSelect: 'none' }}
        >
          €{props.product.price}
        </Typography>
        <Button variant='contained' endIcon={<AddShoppingCartIcon />}>
          Voeg toe
        </Button>
      </CardActions>
    </Card>
  )
}
