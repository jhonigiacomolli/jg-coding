import { ReactElement } from 'react'
import { Avatar } from 'components/avatar'
import { useLanguageContext } from 'hooks/language'
import { Divisor } from 'components/divisors/divisor'
import { WorksDetach } from 'components/works/works-in-detach'
import { TitleDecorated } from 'components/title/title-decorated'
import { SkillsDetach } from 'components/skills/skills-in-detach'
import styled from 'styled-components'

export const Home = (): ReactElement => {
  const { data } = useLanguageContext()
  return (
    <Container>
      <TitleDecorated text={data.titleWorks} icon={<Avatar />} width={400} />
      <WorksDetach numberItens={3} />
      <Divisor position='right' kind='secondary' />
      <TitleDecorated text={data.titleSkills} width={350} position='right' />
      <SkillsDetach />
    </Container>
  )
}

const Container = styled.main``
