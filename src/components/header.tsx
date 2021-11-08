import { ReactElement } from 'react'
import styled from 'styled-components'
import { Logo } from './logo'
import { MainMenu } from './menu'
import { Topbar } from './top-bar'

export const Header = (): ReactElement => {
  return (
    <HeaderContainer>
      <Topbar />
      <MainMenu />
      <Logo />
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
    width: 100vw;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto 1fr;
    grid-template-areas: 
      'topbar'
      'menu'
      'logo'
    ;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;
`
