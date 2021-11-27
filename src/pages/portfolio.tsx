import { Work } from 'components/works/work'
import { works } from 'data/works'
import { useLanguageContext } from 'hooks/language'
import { ReactElement } from 'react'
import styled, { css } from 'styled-components/macro'

export const Portfolio = ():ReactElement => {
  const { lang } = useLanguageContext()
  return (
    <Container>
      <Content>

        {
                    works[lang].map((work, index) => (
                      <Work key={work.title} data={work} orientation={index % 2 === 0 ? 'left' : 'right'} />
                    ))
                }
      </Content>
    </Container>
  )
}

const Container = styled.main`
    padding: 0 0 350px 0;
`
const Content = styled.div`${({ theme }) => css`
    max-width: ${theme.sizes.boxed};
    margin: 0 auto;
`}`
