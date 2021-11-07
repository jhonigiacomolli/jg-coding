import styled, { css } from 'styled-components/macro'

export const Select = styled.select`${({ theme }) => css`
  min-width: 150px;
  margin: 10px 0;
  padding: 8px 30px;
  border: none;
  border-radius: 10px;
  box-shadow: none;
  color: ${theme.colors.text90};
  background: ${theme.colors.primary80};
  &:focus-visible {
    outline: none !important  ;
  }
`}`

export const Option = styled.option`${({ theme }) => css`
  color: ${theme.colors.text90};
`}`
