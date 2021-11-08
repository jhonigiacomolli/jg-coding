/* global HTMLAnchorElement */
import { HTMLProps, ReactElement } from 'react'
import styled, { css } from 'styled-components/macro'
import Linkedin from 'assets/linkedin-icon.svg'
import Github from 'assets/github-icon.svg'
import Mail from 'assets/contact-icon.svg'
import Telegram from 'assets/telegram-icon.svg'
import Discord from 'assets/discord-icon.svg'
import Whatsapp from 'assets/whatsapp-icon.svg'
import Product from 'assets/product-icon.svg'

type LinkProps = HTMLProps<HTMLAnchorElement> & {
    text: string
    icon?: 'linkedin' | 'github' | 'mail' | 'telegram' | 'discord' | 'whatsapp' | 'product'
}
export const Link = ({ text, icon = 'product', href, target, rel }: LinkProps): ReactElement => {
  const icons: {[key: string]: string} = {
    linkedin: Linkedin,
    github: Github,
    mail: Mail,
    telegram: Telegram,
    discrod: Discord,
    whatsapp: Whatsapp,
    product: Product,
  }
  return (
    <Container href={href} target={target} rel={rel}>
      <Icon src={icons[icon]} />
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
    font-size: 2rem;
    font-weight: 100;
    font-family: ${theme.fonts.secondary};
    color: ${theme.colors.text100};
`}`
const Icon = styled.img``
