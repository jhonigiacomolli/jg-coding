import { ReactElement } from 'react'
import styled, { css } from 'styled-components/macro'
import { ReactComponent as SVG } from 'assets/icons/whatsapp-icon.svg'
import { useGlobalContext } from 'hooks/global'

export const Chat = ():ReactElement => {
  const { position } = useGlobalContext()

  return (
    <Container position={position}>
      <Content href='https://wa.me/5549988017702' target='_blank' rel='noopener noreferrer'>
        <Icon />
      </Content>
    </Container>
  )
}

type ContainerProps = {
    position: number
}
const Container = styled.div<ContainerProps>`${({ position }) => css`
    position: sticky;
    bottom: ${position > 5 ? '80px' : '0'};
    left: 100vw;
    width: 90px;
    height: 80px;
    transition: 0.6s;
    z-index: 999;

    @media(max-width: 991px) {
      bottom: ${position > 5 ? '70px' : '0'};
      width: 60px;
      transform: scale(0.8);
    }
`}`
const Content = styled.a`${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: ${theme.colors.detach100};
    outline: 6px solid ${theme.colors.detach100Alpha};
    border: 3px solid ${theme.colors.text10};
`}`

const Icon = styled(SVG)`${({ theme }) => css`
    width: 40px;
    height: 30px;
    cursor: pointer;
    & path {
        fill: ${theme.colors.text10};
    }
`}`
