import { TitleDecorated } from 'components/title/title-decorated'
import { Work } from 'components/works/work'
import { works } from 'data/works'
import { useLanguageContext } from 'hooks/language'
import { ReactElement, useEffect } from 'react'
import styled, { css } from 'styled-components/macro'

export const Portfolio = ():ReactElement => {
  const { lang, data } = useLanguageContext()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Container>
      <Content>
        <Title text={data.portfolioPageTitle} width={350} position='right' />
        <Description>
          {data.portfolioPageDescription}
        </Description>
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

const Title = styled(TitleDecorated)`
  margin: -200px auto 130px auto;
  @media(max-width: 991px) {
    margin: -150px auto 50px auto;
  }
  @media(max-width: 480px) {
    margin: -100px auto 30px auto;
  }
`

const Description = styled.p`${({ theme }) => css`
  max-width: 600px;
  margin: -50px auto  100px auto;
  position: relative;
  z-index: 1;
  font-size: 1.6rem;
  text-align: center;
  color: ${theme.colors.text80};

  @media(max-width: 991px) {
    margin: 25px auto 70px auto;
    padding: 0 30px;
  }
`}`
