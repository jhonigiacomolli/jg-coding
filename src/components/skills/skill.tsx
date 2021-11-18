import { SkillsProps } from 'data/types'
import { ReactElement } from 'react'
import styled, { css } from 'styled-components/macro'

type SkillProps = {
    data: SkillsProps
}
export const Skill = ({ data }:SkillProps):ReactElement => {
  const { icon, title, description } = data
  return (
    <Container>
      <Icon src={icon} alt={title} />
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

const Icon = styled.img`
  width: 90px;
  height: 90px;
  margin: 0 auto;
  `
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
