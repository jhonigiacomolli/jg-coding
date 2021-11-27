import { ReactElement, useState } from 'react'
import { MenuItem } from './menu-item'
import styled, { css } from 'styled-components/macro'
import { ReactComponent as HomeIcon } from 'assets/icons/home-icon.svg'
import { ReactComponent as ProfileIcon } from 'assets/icons/profile-icon.svg'
import { ReactComponent as WorksIcon } from 'assets/icons/works-icon.svg'
import { ReactComponent as SkillsIcon } from 'assets/icons/skills-icon.svg'
import { ReactComponent as ContactIcon } from 'assets/icons/contact-icon.svg'
import { useLanguageContext } from 'hooks/language'
import { Toggle } from './toggle'

export const MainMenu = (): ReactElement => {
  const { data } = useLanguageContext()
  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle(old => !old)
  }
  return (
    <Navegation toggle={toggle}>
      <Menu toggle={toggle}>
        <MenuItem text={data.menuOption1} icon={HomeIcon} href='/' onClick={handleToggle} />
        <MenuItem text={data.menuOption2} icon={ProfileIcon} href='#profile' onClick={handleToggle} />
        <MenuItem text={data.menuOption3} icon={WorksIcon} href='#works' onClick={handleToggle} />
        <MenuItem text={data.menuOption4} icon={SkillsIcon} href='#skills' onClick={handleToggle} />
        <MenuItem text={data.menuOption5} icon={ContactIcon} href='#contact' onClick={handleToggle} />
      </Menu>
      <Toggle state={toggle} onClick={handleToggle} />
    </Navegation>
  )
}

const Navegation = styled.nav<{ toggle: boolean }>` ${({ toggle }) => css`
    width: 100%;
    grid-area: menu;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;

    @media(max-width: 767px) {
      justify-content: flex-end;
      align-items: ${toggle ? 'flex-start' : 'center'};
      padding: 0 30px;
      contain: content;
      position: ${toggle ? 'fixed' : 'relative'};
      width: ${toggle ? '100vw' : 'auto'};
      height: ${toggle ? '100%' : 'auto'};
      left: 0;
      top: 0;
      z-index: 99;
      background: ${toggle ? '#0f1115f0' : 'transparent'};
    }
`}`

const Menu = styled.ul<{ toggle: boolean }>` ${({ toggle }) => css`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px 0;
    gap: 40px;

    @media(max-width: 767px) {
      width: ${toggle ? '100vw' : 0};
      height: ${toggle ? '100vh' : 0};
      opacity: ${toggle ? 1 : 0};
      flex-direction: ${toggle ? 'column' : 'row'};
      position: ${toggle ? 'sticky' : 'relative'};
      left: 0;
    }
`}`
