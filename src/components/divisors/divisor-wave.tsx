/* global SVGSVGElement */
import { ReactElement, SVGProps } from 'react'
import styled, { css } from 'styled-components/macro'

type SvgProps = SVGProps<SVGSVGElement> & {
    overlap?: 'top' | 'bottom' | 'both'
}
const SVG = ({ overlap, ...rest }:SvgProps):ReactElement => {
  return (
    <svg {...rest} width='100vw' viewBox='0 0 1920 484' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path className='divisor-wave-bg' d='M1920 225C1226 -53 936.5 498 0 130V432C1137.53 250.076 1648 259.309 1920 483.5V225Z' />
      <path className='divisor-wave-bg' d='M1920 225C1226 -53 936.5 498 0 130V432C1137.53 250.076 1648 259.309 1920 483.5V225Z' />
      <path className='divisor-wave-bg' fillRule='evenodd' clipRule='evenodd' d='M1829.98 195.31C1860.38 203.762 1890.4 214.071 1920 226.5V438.5C1917.36 436.321 1914.69 434.162 1912 432.023V225C1884.03 213.795 1856.71 203.936 1829.98 195.31ZM991.724 221.565C730.127 272.687 435.128 302.348 0.000244141 133.127V0C317.888 267.217 658.908 261.931 991.724 221.565Z' fillOpacity='0.5' />
    </svg>
  )
}
export const DivisorWave = styled(SVG)`${({ overlap, theme }) => css`
    margin-top: ${overlap === 'both' ? '-235px' : (overlap === 'top' ? '-485px' : '0px')};
    margin-bottom: ${overlap === 'both' ? '-175px' : (overlap === 'bottom' ? '-485px' : '0px')};
    .divisor-wave-bg {
        fill: ${theme.colors.primary90};
    }
`}`
