import { ReactElement } from 'react'
import { MenuItem } from './menu-item'
import styled from 'styled-components/macro'
import { ReactComponent as HomeIcon } from 'assets/icons/home-icon.svg'
import { ReactComponent as ProfileIcon } from 'assets/icons/profile-icon.svg'
import { ReactComponent as WorksIcon } from 'assets/icons/works-icon.svg'
import { ReactComponent as SkillsIcon } from 'assets/icons/skills-icon.svg'
import { ReactComponent as ContactIcon } from 'assets/icons/contact-icon.svg'
import { useLanguageContext } from 'hooks/language'

export const MainMenu = (): ReactElement => {
  const { data } = useLanguageContext()
  return (
    <Navegation>
      <Menu>
        <MenuItem text={data.menuOption1} icon={HomeIcon} />
        <MenuItem text={data.menuOption2} icon={ProfileIcon} />
        <MenuItem text={data.menuOption3} icon={WorksIcon} />
        <MenuItem text={data.menuOption4} icon={SkillsIcon} />
        <MenuItem text={data.menuOption5} icon={ContactIcon} />
      </Menu>
    </Navegation>
  )
}

const Navegation = styled.nav`
    grid-area: menu;
`

const Menu = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px 0;
    gap: 40px;
`
