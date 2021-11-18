import styled, { css } from "styled-components/macro";

export const Textarea = styled.textarea`${({ theme }) => css`
    width: 100%;
    border-radius: 15px;
    padding: 10px 30px;
    border: none;
    color: ${theme.colors.text80};
    background: ${theme.colors.primary90};
`}`