import { useRouter } from 'next/router'

import * as React from 'react'

import PersonIcon from '@mui/icons-material/Person'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'

export interface account {
  id: string
  name: string
  email: string
  accountImageUrl: string
}

interface dropDownItem {
  link: string
  linkDescription: string
}

export let dropDownItems: dropDownItem[] = []

export interface AppbarAccountProps {
  account: account
}

export const AppbarAccount = (props: AppbarAccountProps) => {
  const router = useRouter()
  dropDownItems = [
    {
      link: '/account',
      linkDescription: 'account',
    },
    {
      link: '/settings',
      linkDescription: 'settings',
    },
    {
      link: '/logout',
      linkDescription: 'logout',
    },
  ]

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title='Open settings'>
        <IconButton sx={{ p: 0 }}>
          <PersonIcon />
        </IconButton>
      </Tooltip>
    </Box>
  )
}
