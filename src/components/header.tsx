import { ReactElement } from 'react'
import styled from 'styled-components'
import { Topbar } from './top-bar'

export const Header = (): ReactElement => {
  return (
    <HeaderContainer>
      <Topbar />
    </HeaderContainer>
  )
}

export const HeaderContainer = styled.header`
    width: 100vw;
`
