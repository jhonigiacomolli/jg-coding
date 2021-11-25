import { useLanguageContext } from 'hooks/language'
import { ReactElement } from 'react'
import styled, { css } from 'styled-components/macro'
import { Link } from './link'
import { Button } from './styled-button'
import BackgroundImage from 'assets/slide.jpg'

export const Profile = (): ReactElement => {
  const { data } = useLanguageContext()
  return (
    <Container image={BackgroundImage}>
      <Content>
        <Subtitle>
          {data.profilePhrase1}
        </Subtitle>
        <Title>
          {data.profilePhrase2}
        </Title>
        <Description>
          {data.profilePhrase3}
        </Description>
        <Link
          icon='github'
          text='jhonigiacomolli'
          href='https://github.com/jhonigiacomolli'
          target='_blank'
          rel='noopener noreferrer'
        />
        <Link
          icon='linkedin'
          text='jhoni-giacomolli'
          href='https://www.linkedin.com/in/jhoni-giacomolli'
          target='_blank'
          rel='noopener noreferrer'
        />
        <Button>
          {data.profileButton}
        </Button>
      </Content>
    </Container>
  )
}

const Container = styled.section<{ image: string }>`${({ theme, image }) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 0;
  width: 100vw;
  height: 1200px;
  margin: -390px 0 0 0;
  background-size: cover !important;
  background-position: top;
  background: linear-gradient(0deg, ${theme.colors.primary90alpha}, ${theme.colors.primary70alpha}), url(${image});

  @media(max-width: 991px) {
    height: 1100px;
    margin: -340px 0 0 0;
  }
`}`
const Content = styled.div`
  max-width: 600px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 100px;

  @media(max-width: 767px) {
    padding: 0 15px;
  }
`
const Title = styled.h1`${({ theme }) => css`
  width: 100%;
  text-align: left;
  margin: 0;
  font-size: 3.5rem;
  font-weight: 600;
  font-family: ${theme.fonts.secondary};
  color: ${theme.colors.detach100};
`}`
const Subtitle = styled.h2`${({ theme }) => css`
  width: 100%;
  text-align: left;
  margin: 30px 0 10px 0;
  font-size: 2rem;
  font-weight: 100;
  font-family: ${theme.fonts.secondary};
  color: ${theme.colors.text100};
`}`
const Description = styled.p`${({ theme }) => css`
  font-size: 1.6rem;
  font-family: ${theme.fonts.secondary};
  color: ${theme.colors.text80};
`}`
