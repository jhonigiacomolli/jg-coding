/* global SVGSVGElement */
/* global HTMLLIElement */
import { FunctionComponent, HTMLAttributes, ReactElement, SVGProps } from 'react'
import styled, { css } from 'styled-components/macro'

type MenuItemProps = HTMLAttributes<HTMLLIElement> & {
    text: string
    icon: FunctionComponent<SVGProps<SVGSVGElement>>
    href: string;
}

export const MenuItem = ({ text, icon: Icon, href, ...rest }: MenuItemProps): ReactElement => {
  return (
    <ListItem {...rest}>
      <Icon width={35} height={35} />
      <Link href={href}>
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
    text-decoration: none;
    font-size: 1.25rem;
    font-family: ${theme.fonts.secondary};
    color: ${theme.colors.text100};
`}`
