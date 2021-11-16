import { WorksProps } from 'data/types'
import { ReactElement } from 'react'
import styled, { css } from 'styled-components/macro'
import DesktopIcon from 'assets/icons/product-icon.svg'

type WorkBoxProps = {
    arrowPosition?: 'right' | 'left'
    data: WorksProps
}
export const WorkBox = ({ arrowPosition, data }: WorkBoxProps):ReactElement => {
  const { section, title, description, label, link } = data

  return (
    <Container arrowPosition={arrowPosition}>
      <Content>
        <SectionTitle>
          {section}
        </SectionTitle>
        <Title>
          {title}
        </Title>
        <Description>
          {description}
        </Description>
        <Link href={link} target='_blank' rel='noopener noreferrer'>
          <Icon src={DesktopIcon} alt='Endereço do site' />
          {label}
        </Link>
      </Content>
    </Container>
  )
}

const Container = styled.div<{ arrowPosition?: 'right' | 'left' }>`${({ theme, arrowPosition = 'left' }) => css`
    max-width: 45rem;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: ${arrowPosition === 'left' ? 'flex-start' : 'flex-end'};
    border-radius: 20px;
    margin-top: 25px;
    padding: 0;
    background: ${theme.colors.primary80};
    &::before {
        content: '';
        display: block;
        position: absolute;
        width: 40px;
        height: 40px;
        margin-left: ${arrowPosition === 'left' ? '-20px' : 'auto'};
        margin-right: ${arrowPosition === 'right' ? '-20px' : 'auto'};
        transform: rotate(45deg);
        border-radius: 0 10px;
        z-index: -1;
        background: ${theme.colors.primary80};
    }
`}`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 10px 30px;
`
const SectionTitle = styled.span`${({ theme }) => css`
    font-size: 1.8rem;
    font-family: ${theme.fonts.secondary};
    color: ${theme.colors.text80};
`}`

const Title = styled.h2`${({ theme }) => css`
    font-size: 2.8rem;
    margin: 5px 0;
    font-family: ${theme.fonts.secondary};
    color: ${theme.colors.detach100};
`}`

const Description = styled.p`${({ theme }) => css`
    font-size: 1.4rem;
    margin: 5px 0;
    font-family: ${theme.fonts.secondary};
    color: ${theme.colors.text80};
`}`

const Link = styled.a`${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    margin: 1.5rem 0;
    font-size: 1.8rem;
    text-decoration: none;
    font-family: ${theme.fonts.secondary};
    color: ${theme.colors.text100};
`}`

const Icon = styled.img`
    width: 2.5rem;
    height: 2.5rem;
`
