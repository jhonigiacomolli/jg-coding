import { ReactElement } from 'react'

type DecoratorProps = {
    className?: string
}
export const Decorator2 = ({ className }: DecoratorProps):ReactElement => {
  return (
    <svg className={className ?? ''} width='704' height='603' viewBox='0 0 704 603' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M662.039 147.983L66.5836 4.82005C33.7344 -3.07773 2.30664 22.2607 3.05743 56.0376L14.0288 549.617C14.711 580.307 41.9212 603.59 72.3479 599.517L656.832 521.291C682.406 517.868 701.5 496.048 701.5 470.246V198.056C701.5 174.251 685.185 153.548 662.039 147.983Z' stroke='#00FF00' strokeOpacity='0.25' strokeWidth='5' />
    </svg>
  )
}
