import { ReactElement } from 'react'
import styled, { css } from 'styled-components/macro'

type MenuItemProps = {
    text: string
    icon?: string
}

export const MenuItem = ({ text, icon }: MenuItemProps): ReactElement => {
  return (
    <ListItem>
      <Icon src={icon} alt={`${text}-icon`} />
      <Link>
        {text}
      </Link>
    </ListItem>
  )
}

const ListItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
`
const Link = styled.a`${({ theme }) => css`
    text-transform: uppercase;
    font-size: 1.25rem;
    font-family: ${theme.fonts.secondary};
    color: ${theme.colors.text100};
`}`
const Icon = styled.img`${({ theme }) => css`
    max-width: ${theme.sizes.icons.width};
`}`
