import { ReactElement } from 'react'
import SkillsData from 'data/skills.json'
import { Skill } from './skill'
import styled, { css } from 'styled-components'
import { useLanguageContext } from 'hooks/language'

export const SkillsDetach = ():ReactElement => {
  const { lang } = useLanguageContext()
  return (
    <Container>
      <Content>
        {
                    SkillsData[lang].map(skill => (
                      <Skill key={skill.title} data={skill} />
                    ))
                }
      </Content>
    </Container>
  )
}

const Container = styled.section`${({ theme }) => css`
    background: ${theme.colors.primary80};
    padding: 50px 0 400px 0;
`}`

const Content = styled.div`${({ theme }) => css`
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(100px, 250px));
    max-width: ${theme.sizes.boxed};    
    margin: 0 auto;
    gap: 20px;
    padding: 50px 30px 170px 30px;
    box-sizing: border-box;
`}`
