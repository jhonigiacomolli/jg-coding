import { SkillsProps } from 'data/types'
import { ReactElement } from 'react'
import styled, { css } from 'styled-components/macro'

type SkillProps = {
    data: SkillsProps
}
export const Skill = ({ data }:SkillProps):ReactElement => {
  const { icon, title, description } = data
  const Icon = styled(icon)`
    width: 80px;
    height: 80px;
    margin: 0 auto;
  `
  return (
    <Container>
      <Icon />
      <Title>
        {title}
      </Title>
      <Description>
        {description}
      </Description>
    </Container>
  )
}

const Container = styled.div`${({ theme }) => css`
  height: 100%;
  display: grid;
  grid-template-rows: 90px auto 1fr;
  grid-template-columns: 1fr;
  align-items: center ;
  justify-content: center;
  padding: 3rem;
  border-radius: 1.5rem;
  background: ${theme.colors.primary90};
`}`
const Title = styled.h2`${({ theme }) => css`
  text-align: center;
  font-size: 2.2rem;
  font-family: ${theme.fonts.secondary};
  color: ${theme.colors.text100};
`}`
const Description = styled.p`${({ theme }) => css`
  flex: 1;
  text-align: center;
  font-size: 1.2rem;
  font-family: ${theme.fonts.secondary};
  color: ${theme.colors.text90};
`}`
