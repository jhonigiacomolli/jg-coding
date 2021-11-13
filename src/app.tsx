import { ReactElement } from 'react'
import { Header } from 'components/header'
import { Profile } from 'components/profile'
import { Divisor } from 'components/divisors/divisor'
import { TitleDecorated } from 'components/title/title-decorated'
import { useLanguageContext } from 'languages/context'
import { Avatar } from 'components/avatar'

export function App (): ReactElement {
  const { data } = useLanguageContext()
  return (
    <>
      <Header />
      <Profile />
      <Divisor />
      <TitleDecorated text={data.titleWorks} icon={<Avatar />} width={400} />
    </>
  )
}
