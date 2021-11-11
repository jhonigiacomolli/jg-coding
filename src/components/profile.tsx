import { useLanguageContext } from 'languages/context'
import { ReactElement } from 'react'
import styled, { css } from 'styled-components/macro'
import { Decorator1 } from './decorators/decorator-1'
import { Decorator2 } from './decorators/decorator-2'
import { Link } from './link'
import { Button } from './styled-button'

export const Profile = (): ReactElement => {
  const { data } = useLanguageContext()
  return (
    <Container>
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
        <DecoratorBackground />
        <DecoratorLine />
      </Content>
    </Container>
  )
}

const Container = styled.section`${({ theme }) => css`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100vw;
  height: 1200px;
  background-size: cover !important;
  background-position: top;
  background: linear-gradient(0deg, ${theme.colors.primary90alpha}, ${theme.colors.primary70alpha}), url('/src/assets/slide.jpg');
`}`
const Content = styled.div`
  position: absolute;
  max-width: 600px;
  height: 600px;
  top: 400px;
  right: 250px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 100px;
`
const Title = styled.h1`${({ theme }) => css`
  margin: 0;
  font-size: 3.5rem;
  font-weight: 600;
  font-family: ${theme.fonts.secondary};
  color: ${theme.colors.detach100};
`}`
const Subtitle = styled.h2`${({ theme }) => css`
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
const DecoratorBackground = styled(Decorator1)`
  width: 600px;
  position: absolute;
  top: 0;
  right: 50px;
  z-index: -1;
  `
const DecoratorLine = styled(Decorator2)`
  width: 600px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
`
