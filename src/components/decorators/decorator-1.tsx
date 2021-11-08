import { ReactElement } from 'react'

type DecoratorProps = {
    className?: string
}
export const Decorator1 = ({ className }: DecoratorProps): ReactElement => {
  return (
    <svg className={className ?? ''} width='736' height='604' viewBox='0 0 736 604' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <defs>
        <linearGradient id='paint0_linear_36:31' x1='738' y1='239' x2='-440.5' y2='390' gradientUnits='userSpaceOnUse'>
          <stop stopColor='#09090F' />
          <stop offset='1' stopColor='#09090F' stopOpacity='0' />
        </linearGradient>
      </defs>
      <path d='M0.5 198.99C0.5 173.83 17.8764 152.004 42.3967 146.364L669.797 2.07067C704.128 -5.82492 736.705 20.7338 735.886 55.9513L724.392 550.58C723.648 582.615 695.333 606.958 663.549 602.889L47.6426 524.036C20.6904 520.585 0.5 497.645 0.5 470.473V198.99Z' fill='url(#paint0_linear_36:31)' fillOpacity='0.25' />
    </svg>
  )
}
