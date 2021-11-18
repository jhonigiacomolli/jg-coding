/* global SVGProps */
import { ContectForm } from "components/contact-form";
import { ReactElement, SVGProps } from "react";
import styled from "styled-components";

export const FooterRight = ():ReactElement => {
    return (
        <Container>
            <TabletScreen />
            <ContectForm />
        </Container>
    )
}

const SVG = ({ ...rest }:SVGProps<SVGSVGElement>):ReactElement => {
    return (
        <svg { ...rest } width="568" height="834" viewBox="0 0 568 834" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 45C0 20.1472 20.1472 0 45 0H63.2432H511.568H522.784C547.637 0 567.784 20.1472 567.784 45V67.4595V749.081V787C567.784 811.853 547.637 832 522.784 832H493.297L101 834L44.1091 832.873C19.6083 832.388 0 812.388 0 787.882V780V67.4595V45Z" fill="url(#paint0_linear_31_36)"/>
            <rect x="28.1082" y="75.8921" width="508.757" height="677.405" rx="10" fill="#1F2024"/>
            <rect x="256.784" y="785.216" width="54.2162" height="20.4865" rx="3" stroke="url(#paint1_linear_31_36)" strokeWidth="2"/>
            <defs>
                <linearGradient id="paint0_linear_31_36" x1="323.243" y1="477.838" x2="-3.55154e-05" y2="2.40251e-05" gradientUnits="userSpaceOnUse">
                    <stop/>
                    <stop offset="1" stopColor="#1C1C1C"/>
                </linearGradient>
                <linearGradient id="paint1_linear_31_36" x1="220.649" y1="791.243" x2="330.27" y2="795.459" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#434343"/>
                    <stop offset="1" stopColor="#434343" stopOpacity="0"/>
                </linearGradient>
            </defs>
        </svg>
    )
}
const TabletScreen = styled(SVG)`
    position: absolute;
    z-index: -1;
    `

const Container = styled.div`
    max-width: 500px;
    position: relative;
    z-index: 29;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    padding: 30px;
` 