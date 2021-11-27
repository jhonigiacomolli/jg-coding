import styled, { css } from 'styled-components/macro'
import { ReactComponent as BackToTopIcon } from 'assets/icons/back-to-top-icon.svg'
import { useGlobalContext } from 'hooks/global'
import { ReactElement } from 'react'

export const BackToTop = ():ReactElement => {
  const { position, updatePosition } = useGlobalContext()

  const handleTop = () => {
    window.scroll(0, 0)
    updatePosition(0)
  }

  return (
    <Container position={position} onClick={handleTop}>
      <Icon />
    </Container>
  )
}

type ContainerProps = {
    position: number
}
const Container = styled.div<ContainerProps>`${({ position }) => css`
    position: sticky;
    bottom: 0;
    left: 100vw;
    width: ${position > 5 ? '90px' : '0px'};
    height: ${position > 5 ? '70px' : '0px'};
    margin-top: ${position > 5 ? '-70px' : '0px'};
    margin-bottom: -100px;
    transition: height 0.6s;
    z-index: 999;

    @media(max-width: 991px) {
      width: ${position > 5 ? '60px' : '0px'};
      transform: scale(0.8);
    }
`}`
const Icon = styled(BackToTopIcon)`
    width: 50px;
    height: 35px;
    cursor: pointer;
`
