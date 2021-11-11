/* global SVGSVGElement */
import { ReactElement, SVGProps } from 'react'
import styled, { css } from 'styled-components'

type TitleDecoratedProps = & {
    text?: string
}

export const TitleDecorated = ({ text }: TitleDecoratedProps):ReactElement => {
  return (
    <Container>
      <Decoration />
      <Content>

        <Title>
          {text}
        </Title>
      </Content>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Content = styled.div`
    margin: -50px 0 0 0;
`
const Title = styled.h1`
`

const SVG = ({ ...rest }: TitleDecoratedProps):ReactElement => {
  return (
    <svg {...rest} width='502' height='200' viewBox='0 0 502 200' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M6.88442 83.3885C7.86078 68.9921 18.9476 57.3303 33.2762 55.6279L461.994 4.69165C481.784 2.34033 498.324 19.5834 495.151 39.2588L473.429 173.943C471.026 188.842 457.93 199.636 442.847 199.151L31.0696 185.899C14.0919 185.352 0.954016 170.832 2.1034 153.884L6.88442 83.3885Z' fill='url(#paint0_linear_36_24)' />
      <path d='M37.5667 64.0425C38.5704 49.2439 50.2381 37.4001 65.02 36.175L463.284 3.16595C482.705 1.55629 498.482 18.6011 495.38 37.8401L473.638 172.647C471.147 188.092 457.204 199.031 441.609 197.773L60.2683 167.022C43.902 165.702 31.6374 151.471 32.7484 135.089L37.5667 64.0425Z' fill='url(#paint1_linear_36_24)' />
      <defs>
        <linearGradient id='paint0_linear_36_24' x1='30.7441' y1='176.427' x2='403.767' y2='-84.6289' gradientUnits='userSpaceOnUse'>
          <stop className='title-background-detach' />
          <stop className='title-background-primary' offset='1' />
        </linearGradient>
        <linearGradient id='paint1_linear_36_24' x1='30.7442' y1='176.427' x2='403.767' y2='-84.629' gradientUnits='userSpaceOnUse'>
          <stop className='title-background-secondary' />
          <stop className='title-background-primary' offset='1' />
        </linearGradient>
      </defs>
    </svg>
  )
}

const Decoration = styled(SVG)<SVGProps<SVGSVGElement>>`${({ theme }) => css`
    .title-background-primary {
        stop-color: ${theme.colors.primary100};
    }
    .title-background-secondary {
        stop-color: ${theme.colors.primary80};
    }
    .title-background-detach {
        stop-color: ${theme.colors.detach100};
    }
`}`
