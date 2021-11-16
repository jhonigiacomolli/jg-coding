import { ReactElement } from 'react'
import { Screen } from './screen'
import { WorksProps } from 'data/types'
import { WorkBox } from './work-box'
import styled, { css } from 'styled-components'

type WorkProps = {
    data: WorksProps
    orientation?: 'right' | 'left'
}

export const Work = ({ data, orientation = 'left' }:WorkProps):ReactElement => {
  return (
    <Container position={orientation}>
      <Screen data={data} />
      <Timeline />
      <WorkBox data={data} arrowPosition={orientation} />
    </Container>
  )
}

const Container = styled.div<{position: 'right' | 'left'}>`${({ position }) => css`
    display: flex;
    flex-direction: ${position === 'left' ? 'row' : 'row-reverse'};
    align-items: flex-start;
    justify-content: center;
    gap: 100px;
    margin: 15px 0;
`}`

const Timeline = styled.div`${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5px;
    height: 350px;
    margin: -50px 0 0 0;
    background: ${theme.colors.primary80};
    &::after {
        content: '';
        width: 2rem;
        height: 2rem;
        display: block;
        position: absolute;
        border-radius: 50%;
        border: 0.6rem solid ${theme.colors.primary80};
        background: ${theme.colors.detach100};
    }
`}`
