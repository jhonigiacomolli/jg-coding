import { ReactElement } from "react";
import styled, { css } from "styled-components";
import { FooterRight } from "./footer-right";

export const Foooter = ():ReactElement => {
    return (
        <Container>
            <FooterRight />
        </Container>
    )
}

const Container = styled.footer`${({ theme }) => css`

`}`