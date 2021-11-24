/* global SVGSVGElement */
import { FunctionComponent, ReactElement, SVGProps } from 'react'
import styled, { css } from 'styled-components/macro'

type MenuItemProps = {
    text: string
    icon: FunctionComponent<SVGProps<SVGSVGElement>>
}

export const MenuItem = ({ text, icon: Icon }: MenuItemProps): ReactElement => {
  return (
    <ListItem>
      <Icon width={35} height={35} />
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
