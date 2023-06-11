import { NextRouter, useRouter } from 'next/router'

import { useEffect } from 'react'

export default function Index() {
  const redirectToPage = async (router: NextRouter) => {
    if (router?.asPath !== '/' || router?.pathname !== '/') {
      try {
        await router.replace(router.asPath)
      } catch (_e) {
        await router.replace('/404')
      }
    } else {
      await router.replace('/home')
    }
  }

  const router = useRouter()

  useEffect(() => {
    redirectToPage(router).then(r => r)
  }, [router])
  return null
}
