import { ReactElement } from 'react'
import styled, { css } from 'styled-components/macro'
import { Logo } from './logo'
import { MainMenu } from './menu'
import { Topbar } from './top-bar'
import BackgroundImage from 'assets/slide.jpg'
import { Divisor } from './divisors/divisor'
import { useLocation } from 'react-router-dom'
import { Profile } from './profile'

export const Header = (): ReactElement => {
  const { pathname } = useLocation()

  return (
    <HeaderContainer>
      <Topbar />
      <MainMenu />
      <Logo />
      <Background image={BackgroundImage} pathname={pathname}>
        {
          pathname === '/'
            ? <Content />
            : null
        }
      </Background>
      <HeaderDivisor overlap='top' />
    </HeaderContainer>
  )
}

const Background = styled.section<{ image: string, pathname: string }>`${({ theme, image, pathname }) => css`
  grid-area: headerbg;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100vw;
  height: ${`${pathname === '/' ? 1200 : 700}px`};
  margin: -390px 0 0 0;
  background-size: cover !important;
  background-position: center !important;
  background: linear-gradient(0deg, ${theme.colors.primary90alpha}, ${theme.colors.primary70alpha}), url(${image});

  @media(max-width: 991px) {
    height: ${`${pathname === '/' ? 1100 : 550}px`};
    margin: -340px 0 0 0;
  }
  @media(max-width: 480px) {
    height: ${`${pathname === '/' ? 900 : 450}px`};
    margin: -340px 0 0 0;
  }
`}`
const Content = styled(Profile)`
  z-index: 99;
`

const HeaderDivisor = styled(Divisor)`
  grid-area: divisor;
`

const HeaderContainer = styled.header`
    width: 100vw;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto 1fr;
    grid-template-areas: 
      'topbar'
      'menu'
      'logo'
      'headerbg'
      'divisor'
    ;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;

    @media(max-width: 767px) {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto 1fr;
      grid-template-areas: 
        "topbar topbar"
        "logo menu"
        "headerbg headerbg "
        "divisor divisor"
      ;
    }
`
