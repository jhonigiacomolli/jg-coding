/* global SVGSVGElement */
import { WorksProps } from 'data/types'
import { ReactElement, SVGProps, useEffect, useState } from 'react'
import styled from 'styled-components/macro'

type ScreenProps = {
    data: WorksProps
}

export const Screen = ({ data }: ScreenProps):ReactElement => {
  const [icon, setIcon] = useState<ReactElement>()
  const { type, image } = data

  useEffect(() => {
    type === 'desktop' && setIcon(<DesktopScreen />)
    type === 'mobile' && setIcon(MobileSVG)
  }, [type])

  return (
    <Container>
      {icon}
      <Image src={image} />
    </Container>
  )
}

const Container = styled.div`
    width: 45rem;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    contain: content;
`
const Image = styled.img`
    width: 28rem;
    margin: -52px -18px 20px 17px;
`

const DesktopSVG = ({ ...rest }: SVGProps<SVGSVGElement>): ReactElement => {
  return (
    <svg {...rest} viewBox='0 0 500 284' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <ellipse cx='250' cy='235.887' rx='250' ry='47.9839' fill='url(#paint0_radial_22_31)' />
      <rect x='67.7419' y='212.273' width='401.253' height='5.04267' fill='url(#paint1_linear_22_31)' />
      <path d='M67.982 217.195L469.355 217.075C450.29 223.036 444.214 228.562 402.119 226.44C402.119 226.44 167.875 226.32 137.259 226.44C106.643 226.56 90.3946 226.562 67.982 217.195Z' fill='url(#paint2_linear_22_31)' />
      <path fillRule='evenodd' clipRule='evenodd' d='M115.07 0C109.487 0 104.962 4.5258 104.962 10.1086V209.511C104.962 211.036 106.198 212.273 107.723 212.273H427.693C429.549 212.273 431.055 210.767 431.055 208.911V7.49535C431.055 3.35578 427.699 0 423.559 0H115.07ZM422.89 9.60511H113.366V202.667H422.89V9.60511Z' fill='black' />
      <path d='M227.427 212.273H309.55C308.235 216.01 306.669 217.315 301.506 217.315C296.343 217.315 243.155 217.315 237.512 217.315C231.869 217.315 229.427 215.898 227.427 212.273Z' fill='#8A8A8A' />
      <defs>
        <radialGradient id='paint0_radial_22_31' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(250 235.887) rotate(90) scale(47.9839 250)'>
          <stop stopColor='#0C0C0C' />
          <stop offset='1' stopColor='#0F0F0F' stopOpacity='0' />
        </radialGradient>
        <linearGradient id='paint1_linear_22_31' x1='26.5601' y1='212.273' x2='481.361' y2='212.273' gradientUnits='userSpaceOnUse'>
          <stop stopColor='#F5F5F5' />
          <stop offset='0.140625' stopColor='#313131' />
          <stop offset='0.296875' stopColor='#EDEDED' />
          <stop offset='0.671875' stopColor='#C4C4C4' />
          <stop offset='0.833333' stopColor='#767676' />
          <stop offset='1' stopColor='#F3F3F3' />
        </linearGradient>
        <linearGradient id='paint2_linear_22_31' x1='268.668' y1='217.075' x2='268.668' y2='226.903' gradientUnits='userSpaceOnUse'>
          <stop stopColor='#D1D1D1' />
          <stop offset='1' stopColor='#2E2E2E' />
        </linearGradient>
      </defs>
    </svg>
  )
}

const DesktopScreen = styled(DesktopSVG)`
    position: absolute;
`
const MobileSVG = (): ReactElement => {
  return (
    <svg width='122' height='283' viewBox='0 0 122 283' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path fillRule='evenodd' clipRule='evenodd' d='M121.04 257.537C119.206 257.87 116.099 259.77 114.619 259.817L110.806 26.2644L116.946 28.9314V27.0512L110.906 24.3109C110.199 22.0106 110.906 15.2699 110.125 11.8495C109.345 8.42913 108.419 7.58904 106.738 5.4088C105.785 4.222 105.585 4.50203 104.958 3.83529C104.832 3.58193 104.958 3.73528 104.585 3.42858C100.944 0.921634 96.1772 0.761616 91.9168 1.175C90.7633 1.30168 89.7098 1.52837 88.3297 1.65505C87.2496 1.70839 85.5161 1.93508 84.616 2.06176L62.4135 4.50203C58.7998 5.06209 50.7455 5.6955 47.5118 6.27556L19.9154 9.66927C14.3015 10.5827 10.061 10.1227 5.72052 14.5832L5.05378 15.3432C4.67308 15.7044 4.33118 16.1044 4.03367 16.5367C3.45864 17.3699 2.97787 18.2644 2.60018 19.2037C1.71941 21.3165 1.17931 23.5557 1 25.8377V93.3319L1.25336 244.315C1.25336 249.483 0.799978 256.503 1.75342 260.784C3.21358 267.451 7.75408 272.385 14.2481 273.099L29.1965 274.819C30.4084 274.918 31.6145 275.078 32.8102 275.299L51.3523 277.299C52.4791 277.472 53.8325 277.472 55.1127 277.679C56.5662 277.879 57.3196 277.932 58.8264 278.032L96.2039 281.933C101.271 282.086 103.651 283.553 110.205 280.213C111.968 279.322 113.605 278.201 115.073 276.879C120.94 270.825 121.04 265.478 121.04 257.543V257.537ZM5.01378 41.2128L106.285 32.1918L110.626 259.084L4.46705 251.483L5.01378 41.2128Z' fill='#191919' stroke='#2E2E2F' strokeWidth='0.92' strokeMiterlimit='10' />
      <path fillRule='evenodd' clipRule='evenodd' d='M121.04 258.297C120.84 257.917 116.7 54.7676 116.7 28.9381L110.279 26.2711L114.279 260.59C115.833 260.59 119.12 258.637 121.027 258.304L121.04 258.297Z' fill='#505050' />
      <path fillRule='evenodd' clipRule='evenodd' d='M116.713 27.0512L116.486 18.5903C116.313 15.3699 115.633 13.9231 114.179 11.9762C112.995 10.2111 111.528 8.65248 109.839 7.36234C108.585 6.32223 105.838 4.12198 104.145 3.84195C104.812 4.50869 105.025 4.22199 105.978 5.40879C107.759 7.58903 108.759 8.40246 109.539 11.8495C110.319 15.2966 109.639 22.0106 110.392 24.3109L116.713 27.0512Z' fill='#505050' />
      <path fillRule='evenodd' clipRule='evenodd' d='M38.1308 26.2644C38.6024 26.2999 39.043 26.5131 39.3635 26.8608C39.6841 27.2086 39.8607 27.665 39.8576 28.138C39.8675 28.1976 39.8675 28.2584 39.8576 28.318C39.8663 28.3844 39.8663 28.4516 39.8576 28.518C39.8586 28.9883 39.6888 29.4429 39.3798 29.7973C39.0707 30.1518 38.6435 30.3819 38.1774 30.4449C37.7007 30.3922 37.2604 30.1647 36.9415 29.8064C36.6226 29.4481 36.4477 28.9844 36.4506 28.5047C36.4377 28.4476 36.4377 28.3884 36.4506 28.3313C36.4376 28.2631 36.4376 28.1929 36.4506 28.1247C36.4511 27.6604 36.6227 27.2125 36.9327 26.8669C37.2427 26.5212 37.6693 26.302 38.1308 26.2511V26.2644Z' fill='#6B6B6B' />
      <path fillRule='evenodd' clipRule='evenodd' d='M52.8058 13.4964C54.0593 13.4964 55.1127 14.7365 55.1394 16.3033C55.166 17.8702 54.1326 19.1703 52.8791 19.1703C51.6257 19.1703 50.5455 17.9302 50.5455 16.3567C50.5455 14.7832 51.499 13.4964 52.8058 13.4964V13.4964Z' fill='#6B6B6B' />
      <path fillRule='evenodd' clipRule='evenodd' d='M44.8515 25.5577L60.9333 24.1109H61.1067C61.628 24.1133 62.1298 24.3089 62.5153 24.6599C62.9008 25.0109 63.1424 25.4923 63.1936 26.0111V26.0111V26.1911C63.1972 26.7106 63.0051 27.2125 62.6554 27.5967C62.3058 27.981 61.8242 28.2194 61.3067 28.2647L45.2316 29.7115H45.0515C44.538 29.7089 44.0437 29.5159 43.6643 29.1698C43.2849 28.8237 43.0475 28.3491 42.998 27.838V27.838V27.6579C42.9944 27.1411 43.1815 26.6412 43.5235 26.2537C43.8654 25.8662 44.3383 25.6184 44.8515 25.5577V25.5577Z' fill='black' stroke='black' strokeWidth='0.43' strokeMiterlimit='10' />
      <path fillRule='evenodd' clipRule='evenodd' d='M46.085 26.0111L60.3066 24.6776C60.3641 24.6692 60.4224 24.6692 60.4799 24.6776C60.9424 24.6778 61.3879 24.8522 61.7277 25.166C62.0675 25.4798 62.2766 25.9101 62.3135 26.3711V26.3711V26.5511C62.313 27.0084 62.1442 27.4495 61.8392 27.7901C61.5342 28.1308 61.1144 28.3472 60.6599 28.398L46.4317 29.7315H46.2317C45.7752 29.7312 45.3355 29.5587 45.0006 29.2485C44.6657 28.9383 44.4601 28.5131 44.4248 28.058V28.058V27.838C44.4209 27.3784 44.5892 26.934 44.8964 26.5923C45.2036 26.2505 45.6276 26.036 46.085 25.9911V26.0111Z' fill='#6B6B6B' />
      <path fillRule='evenodd' clipRule='evenodd' d='M52.8524 14.0764C53.3651 14.1296 53.8395 14.3724 54.1824 14.7573C54.5253 15.1421 54.712 15.6412 54.706 16.1567V16.33C54.706 17.5768 53.9259 18.5903 52.8991 18.5903C52.3645 18.5379 51.8721 18.2767 51.5289 17.8636C51.1856 17.4504 51.0191 16.9185 51.0656 16.3833C51.0656 15.1432 51.8457 14.1298 52.8458 14.0764H52.8524Z' fill='#4E4D4D' />
      <path fillRule='evenodd' clipRule='evenodd' d='M120.987 258.984L120.713 265.344C120.047 268.565 119.38 271.045 117.953 272.918C116.783 274.937 115.213 276.696 113.339 278.086C112.106 279.053 109.825 280.419 108.145 280.699C108.812 280.033 109.025 280.366 109.979 279.206C111.759 277.126 112.759 276.339 113.539 273.045C114.319 269.751 113.886 263.797 114.619 261.597L120.987 258.984Z' fill='#505050' />
    </svg>
  )
}