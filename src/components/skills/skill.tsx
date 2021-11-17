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
    display: flex;
    flex-direction: column;
    align-items: center ;
    justify-content: center;
    padding: 3rem;
    border-radius: 1.5rem;
    background: ${theme.colors.primary90};
`}`

const Icon = styled.img`
    width: 90px;
    height: 90px;
    flex: 1;
`
const Title = styled.h2`${({ theme }) => css`
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
