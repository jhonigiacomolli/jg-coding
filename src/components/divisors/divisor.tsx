/* global SVGSVGElement */
import { ReactElement, SVGProps } from 'react'
import styled, { css } from 'styled-components/macro'

type SvgProps = SVGProps<SVGSVGElement> & {
    position?: 'left' | 'right'
    overlap?: 'top' | 'bottom' | 'none'
    kind?: 'primary' | 'secondary'
}

const SVG = ({ ...rest }: SvgProps): ReactElement => {
  return (
    <svg {...rest} width='100vw' viewBox='0 0 1921 703' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path className='divisor-background' d='M1 702H1921V694.588L1 351.095V702Z' />
      <path d='M4.39001 3.21051L374.036 270.267C448.286 324.893 464.311 345.124 399.143 397.22L3.11877 700' stroke='url(#paint0_linear_115_3)' strokeOpacity='0.5' strokeWidth='5' strokeLinecap='round' />
      <path fillRule='evenodd' clipRule='evenodd' d='M1 119.829C19.4947 119.82 37.9932 125.148 52.1042 135.813L326 342.819C354.198 364.132 354.198 398.685 326 419.997L52.1042 627.004C37.9932 637.669 19.4948 642.997 1 642.988V119.829Z' fill='url(#paint1_linear_115_3)' />
      <path className='divisor-detail-1' fillRule='evenodd' clipRule='evenodd' d='M1 266.312C19.9405 266.038 38.9965 271.363 53.4498 282.286L190.871 386.148C219.069 407.46 219.069 442.013 190.871 463.325L53.4498 567.186C38.9965 578.11 19.9405 583.435 1 583.16V266.312Z' />
      <defs>
        <linearGradient id='paint0_linear_115_3' x1='156.629' y1='678.439' x2='191.119' y2='-83.4593' gradientUnits='userSpaceOnUse'>
          <stop className='divisor-detach-primary' />
          <stop className='divisor-detach-secondary' offset='1' />
        </linearGradient>
        <linearGradient id='paint1_linear_115_3' x1='271.189' y1='196.897' x2='-38.9773' y2='451.395' gradientUnits='userSpaceOnUse'>
          <stop className='divisor-detach-primary' offset='1' />
          <stop className='divisor-detach-secondary' />
        </linearGradient>
      </defs>
    </svg>
  )
}

export const Divisor = styled(SVG)`${({ theme, position = 'left', kind = 'primary', overlap = 'none' }) => css`
  margin-top: ${overlap === 'top' ? 'calc(-100vw * 0.36)' : '0px'};
  margin-bottom: ${overlap === 'bottom' ? 'calc(-100vw * 0.36)' : '0px'};
  transform: rotateY(${position === 'left' ? '0deg' : '180deg'});
  .divisor-background, .divisor-detail-1 {
      fill: ${kind === 'primary' ? theme.colors.primary70 : theme.colors.primary80};
  }
  .divisor-detach-primary {
      stop-color: ${theme.colors.detach100};
  }
  .divisor-detach-secondary {
      stop-color: ${theme.colors.detach100};
  }
`}`
