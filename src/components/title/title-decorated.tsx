/* global SVGSVGElement */
import { ReactElement, SVGProps, useEffect, useState } from 'react'
import styled, { css } from 'styled-components'

type TitleDecoratedProps = & {
    text?: string
    icon?: ReactElement
    width?: number
    className?: string
}

export const TitleDecorated = ({ text, icon, width = 500, className }: TitleDecoratedProps):ReactElement => {
  const [title, setTitle] = useState('')
  const [subtitle, setSubtitle] = useState('')

  useEffect(() => {
    const textArr: string[] = text?.split(' ') ?? []
    const textTitle = textArr.length > 0
      ? (
          textArr.length > 1
            ? textArr.slice(1, textArr.length).toString()
            : textArr[0]
        )
      : ''
    console.log(textArr.slice(1, textArr.length))

    setTitle(textTitle)
    setSubtitle(textArr.length > 1 ? textArr[0] : '')
  }, [text])

  return (
    <Container className={className} width={width}>
      <Decoration width={width} />
      <Content>
        {icon}
        <TextContent>
          <Subtitle>
            {subtitle}
          </Subtitle>
          <Title>
            {title}
          </Title>
        </TextContent>
      </Content>
    </Container>
  )
}

const Container = styled.div<{ width?: number }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: -250px auto 0 auto;
    position: relative;
    width: ${({ width }) => `${width}px`};
    z-index: 19;
`
const Content = styled.div`
    width: 100%;
    display: flex;  
    align-items: flex-end;
    justify-content: flex-start;
    margin: -200px 0 0 0;
    padding: 0 10px;
    gap: 20px;
`
const TextContent = styled.div`
  display: flex;  
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 15px;
`

const Title = styled.h1`${({ theme }) => css`
  margin: -5px 0;
  font-family: ${theme.fonts.secondary};
  font-size: ${theme.sizes.title};
  color: ${theme.colors.detach100};
`}`

const Subtitle = styled.h2`${({ theme }) => css`
  margin: 0;
  font-family: ${theme.fonts.secondary};
  font-size: ${theme.sizes.subtitle};
  color: ${theme.colors.text100};
`}`

const SVG = ({ ...rest }: SVGProps<SVGSVGElement>):ReactElement => {
  return (
    <svg {...rest} width='100%' viewBox='0 0 502 200' fill='none' xmlns='http://www.w3.org/2000/svg'>
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
