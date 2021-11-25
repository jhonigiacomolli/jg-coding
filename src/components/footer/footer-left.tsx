import { Link } from 'components/link'
import { TitleDecorated } from 'components/title/title-decorated'
import { useLanguageContext } from 'hooks/language'
import { ReactElement } from 'react'
import styled from 'styled-components'

export const FooterLeft = (): ReactElement => {
  const { data } = useLanguageContext()
  return (
    <Container>
      <Title text={data.titleContact} width={350} position='right' />
      <Content>
        <Link
          icon='whatsapp'
          text='+55 [49] 98801 7702'
          href='https://wa.me/5549988017702'
          target='_blank'
          rel='noopener noreferrer'
        />
        <Link
          icon='telegram'
          text='@jhonigiacomolli'
          href='https://t.me/jhonigiacomolli'
          target='_blank'
          rel='noopener noreferrer'
        />
        <Link
          icon='discord'
          text='jhonigiacomolli#6393'
        />
        <Link
          icon='mail'
          text='contact@jgcoding.com.br'
          href='mailto:contact@jgcoding.com.br'
          target='_blank'
          rel='noopener noreferrer'
        />
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
      </Content>
    </Container>
  )
}

const Container = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: flex-end;
`
const Title = styled(TitleDecorated)`
    margin: -120px 0 50px 0;

    @media(max-width: 991px) {
      width: 280px;
      margin: 0 0 50px 0;
      font-size: 1rem;
    }
`
const Content = styled.div`
    margin: 0 0 0 75px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`
