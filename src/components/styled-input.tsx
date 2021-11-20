import styled, { css } from 'styled-components/macro'

export const Input = styled.input`${({ theme }) => css`
    width: 100%;
    border-radius: 15px;
    padding: 10px 30px;
    border: none;
    color: ${theme.colors.text80};
    height: ${theme.sizes.inputHeight};
    background: ${theme.colors.primary90};
`}`
