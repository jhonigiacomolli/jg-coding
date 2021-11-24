import { ReactElement } from 'react'
import styled, { css } from 'styled-components/macro'
import { ReactComponent as SVG } from 'assets/icons/whatsapp-icon.svg'
import { useGlobalContext } from 'hooks/global'

export const Chat = ():ReactElement => {
  const { position } = useGlobalContext()
  console.log(position)

  return (
    <Container position={position}>
      <Content>
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
`}`
const Content = styled.div`${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background: ${theme.colors.detach100};
    outline: 6px solid ${theme.colors.detach100Alpha};
    border: 3px solid ${theme.colors.text10};
`}`

const Icon = styled(SVG)`${({ theme }) => css`
    width: 55px;
    height: 35px;
    cursor: pointer;
    & path {
        fill: ${theme.colors.text10};
    }
`}`
