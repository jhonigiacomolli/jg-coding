import { ReactElement } from 'react'
import { Header } from 'components/header'
import { Profile } from 'components/profile'
import { Divisor } from 'components/divisors/divisor'
import { TitleDecorated } from 'components/title/title-decorated'

export function App (): ReactElement {
  return (
    <>
      <Header />
      <Profile />
      <Divisor />
      <TitleDecorated text='My works' />
    </>
  )
}
