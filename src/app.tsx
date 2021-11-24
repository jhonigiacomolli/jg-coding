import { ReactElement } from 'react'
import { Header } from 'components/header'
import { Profile } from 'components/profile'
import { Divisor } from 'components/divisors/divisor'
import { TitleDecorated } from 'components/title/title-decorated'
import { Avatar } from 'components/avatar'
import { WorksDetach } from 'components/works/works-in-detach'
import { SkillsDetach } from 'components/skills/skills-in-detach'
import { DivisorWave } from 'components/divisors/divisor-wave'
import { Foooter } from 'components/footer'
import { Copyright } from 'components/copyright'
import { useLanguageContext } from 'hooks/language'

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
      <SkillsDetach />
      <DivisorWave overlap='both' />
      <Foooter />
      <Copyright />
    </>
  )
}
