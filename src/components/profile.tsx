import { useLanguageContext } from 'hooks/language'
import { ReactElement } from 'react'
import styled, { css } from 'styled-components/macro'
import { Link } from './link'
import { Button } from './styled-button'

export const Profile = (): ReactElement => {
  const { data } = useLanguageContext()
  return (
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
  )
}
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
  @media(max-width: 480px) {
    margin-top: 150px;
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
