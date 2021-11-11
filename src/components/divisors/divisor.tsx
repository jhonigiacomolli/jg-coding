/* global SVGSVGElement */
import { ReactElement, SVGProps } from 'react'
import styled, { css } from 'styled-components/macro'

type DivisorLeftProps = SVGProps<SVGSVGElement> & {
    positon?: 'left' | 'right'
}
const SVG = ({ ...rest }: DivisorLeftProps): ReactElement => {
  return (
    <svg {...rest} width='100vw' viewBox='0 0 1920 612' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path className='divisor-background' d='M0 604L1920 611.401V604L0 261V604Z' />
      <path d='M2.8258 3L310.958 225.295C372.851 270.765 386.21 287.605 331.886 330.97L1.76611 583' stroke='url(#paint0_linear_115_3)' strokeOpacity='0.5' strokeWidth='5' />
      <path fillRule='evenodd' clipRule='evenodd' d='M0 102.175C18.5019 102.168 37.0068 107.491 51.1232 118.145L262.392 277.589C290.605 298.882 290.605 333.404 262.392 354.697L51.1232 514.141C37.0068 524.795 18.5018 530.118 0 530.111V102.175Z' fill='url(#paint1_linear_115_3)' />
      <path className='divisor-detail-1' fillRule='evenodd' clipRule='evenodd' d='M0 224.105C18.8738 223.878 37.8431 229.199 52.2448 240.068L149.75 313.655C177.963 334.948 177.963 369.47 149.75 390.762L52.2448 464.35C37.8431 475.219 18.8738 480.54 0 480.312V224.105Z' />
      <defs>
        <linearGradient id='paint0_linear_115_3' x1='129.73' y1='565.053' x2='158.398' y2='-69.1467' gradientUnits='userSpaceOnUse'>
          <stop className='divisor-detach-primary' />
          <stop className='divisor-detach-secondary' offset='1' />
        </linearGradient>
        <linearGradient id='paint1_linear_115_3' x1='221.329' y1='165.216' x2='-32.4536' y2='373.749' gradientUnits='userSpaceOnUse'>
          <stop className='divisor-detach-primary' offset='1' />
          <stop className='divisor-detach-secondary' />
        </linearGradient>
      </defs>
    </svg>
  )
}
export const Divisor = styled(SVG)`${({ theme, positon = 'left' }) => css`
    position: relative;
    z-index: 10;
    margin: 330px 0 0 0; 
    .divisor-background, .divisor-detail-1 {
        fill: ${theme.colors.primary70};
    }
    .divisor-detach-primary {
        stop-color: ${theme.colors.detach100};
    }
    .divisor-detach-secondary {
        stop-color: ${theme.colors.detach100};
    }
    transform: rotateY(${positon === 'left' ? '0deg' : '180deg'});
`}`
