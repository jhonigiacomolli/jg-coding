import { ReactElement } from 'react'
import { Header } from 'components/header'
import { Profile } from 'components/profile'

export function App (): ReactElement {
  return (
    <>
      <Header />
      <Profile />
    </>
  )
}
