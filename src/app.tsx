import { ReactElement } from 'react'
import { Header } from 'components/header'
import { Profile } from 'components/profile'
import { Divisor } from 'components/divisors/divisor'
import { TitleDecorated } from 'components/title/title-decorated'
import { useLanguageContext } from 'languages/context'
import { Avatar } from 'components/avatar'
import { WorksDetach } from 'components/works/works-in-detach'

export function App (): ReactElement {
  const { data } = useLanguageContext()
  return (
    <>
      <Header />
      <Profile />
      <Divisor overlap='top' />
      <TitleDecorated text={data.titleWorks} icon={<Avatar />} width={400} />
      <WorksDetach numberItens={3} />
      <Divisor position='right' kind='secondary' />
      <TitleDecorated text={data.titleSkills} width={350} position='right' />
    </>
  )
}
