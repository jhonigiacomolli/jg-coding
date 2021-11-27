import styled, { css } from 'styled-components/macro'

export const Button = styled.button`${({ theme }) => css`
    min-width: 250px;
    margin: 20px auto;
    padding: 10px;
    border: none;
    border-radius: 8px;
    font-size: 1.5rem;
    font-weight: 600;
    font-family: ${theme.fonts.secondary};
    color: ${theme.colors.text10};
    background: ${theme.colors.detach100};
`}`

export const ButtonLink = styled.a`${({ theme }) => css`
    min-width: 250px;
    margin: 20px auto;
    padding: 10px;
    border: none;
    border-radius: 8px;
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
    font-family: ${theme.fonts.secondary};
    color: ${theme.colors.text10};
    background: ${theme.colors.detach100};
`}`
