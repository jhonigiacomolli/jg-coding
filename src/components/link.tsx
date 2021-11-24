/* global HTMLAnchorElement */
/* global SVGSVGElement */
import styled, { css } from 'styled-components/macro'
import { FunctionComponent, HTMLProps, ReactElement, SVGAttributes } from 'react'
import { ReactComponent as Linkedin } from 'assets/icons/linkedin-icon.svg'
import { ReactComponent as Github } from 'assets/icons/github-icon.svg'
import { ReactComponent as Mail } from 'assets/icons/contact-icon.svg'
import { ReactComponent as Telegram } from 'assets/icons/telegram-icon.svg'
import { ReactComponent as Discord } from 'assets/icons/discord-icon.svg'
import { ReactComponent as Whatsapp } from 'assets/icons/whatsapp-icon.svg'
import { ReactComponent as Product } from 'assets/icons/product-icon.svg'

type Icon = 'linkedin' | 'github' | 'mail' | 'telegram' | 'discord' | 'whatsapp' | 'product'

type LinkProps = HTMLProps<HTMLAnchorElement> & {
    text: string
    icon?: Icon
}

export const Link = ({ text, icon = 'product', href, target, rel }: LinkProps): ReactElement => {
  const icons: {[key in Icon]: FunctionComponent<SVGAttributes<SVGSVGElement>>} = {
    linkedin: Linkedin,
    github: Github,
    mail: Mail,
    telegram: Telegram,
    discord: Discord,
    whatsapp: Whatsapp,
    product: Product,
  }
  const Icon = icons[icon]

  return (
    <Container href={href} target={target} rel={rel}>
      <Icon
        width={27}
        height={27}
      />
      {text}
    </Container>
  )
}

const Container = styled.a`${({ theme }) => css`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin: 10px 0;
  text-decoration: none;
  cursor: pointer;
  font-size: 1.8rem;
  font-weight: 100;
  font-family: ${theme.fonts.secondary};
  color: ${theme.colors.text100};
`}`
