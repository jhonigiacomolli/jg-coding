import { ReactElement } from 'react'
import styled, { css } from 'styled-components'
import { FooterLeft } from './footer-left'
import { FooterRight } from './footer-right'

export const Foooter = ():ReactElement => {
  return (
    <Container>
      <Content>
        <FooterLeft />
        <FooterRight />
      </Content>
    </Container>
  )
}

const Container = styled.footer`${({ theme }) => css`
  background: ${theme.colors.primary90};

  @media(max-width: 991px) {
    padding: 50px 0;
  }
`}`

const Content = styled.div`${({ theme }) => css`
  display: flex;
  max-width: ${theme.sizes.boxed};
  margin: 0 auto;

  @media(max-width: 991px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
  }
`}`
