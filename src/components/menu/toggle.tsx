import { ReactElement } from 'react'
import styled, { css } from 'styled-components'

export const Toggle = ():ReactElement => {
  return (
    <Container>
      <Line position={3} />
      <Line position={2} />
      <Line position={1} />
    </Container>
  )
}
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 7px;
    width: 0;
    height: 0;
    opacity: 0;
    
    @media(max-width: 767px) {
        width: 70px;
        opacity: 1;
        height: auto;
    }
`
const Line = styled.span<{ position: 1 | 2 | 3 }>`${({ theme, position }) => css`
    display: block;
    height: 3px;
    width: ${`${10 + (10 * position)}px`};
    background: ${theme.colors.text100};
`}`
