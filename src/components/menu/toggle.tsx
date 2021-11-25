/* global HTMLDivElement */
import { HTMLAttributes, ReactElement } from 'react'
import styled, { css } from 'styled-components'

type ToggleProps = HTMLAttributes<HTMLDivElement> & {
  state: boolean
}
export const Toggle = ({ state, ...rest }:ToggleProps):ReactElement => {
  return (
    <Container state={state} {...rest}>
      <Line position={3} state={state} />
      <Line position={2} state={state} />
      <Line position={1} state={state} />
    </Container>
  )
}
const Container = styled.div<ToggleProps>`${({ state }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: ${state ? 0 : '7px'};
    width: 0;
    height: 0;
    opacity: 0;
    
    @media(max-width: 767px) {
        width: 70px;
        opacity: 1;
        height: auto;
        padding: ${state ? '70px 0' : 0};
        position: ${state ? 'absolute' : 'relative'};
    }
`}`
const Line = styled.span<{ position: 1 | 2 | 3, state: boolean }>`${({ theme, position, state }) => css`
    display: block;
    height: 3px;
    width: ${
      state
      ? position === 2 ? 0 : '30px'
      : `${10 + (10 * position)}px`
    };
    transform: ${
      state
      ? position === 1 ? 'matrix(1, -1, 0, 1, 0, -3)' : 'matrix(1, 1, 0, 1, 0, 3)'
      : 'rotate(0, 0)'
    };
    background: ${theme.colors.text100};
    transition: 0.6s;
`}`
