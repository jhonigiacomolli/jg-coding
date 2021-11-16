import { ReactElement } from 'react'
import worksData from 'data/works.json'
import { Work } from 'components/works/work'
import { WorksProps } from 'data/types'
import { Button } from 'components/styled-button'
import styled from 'styled-components'

type WorksDetachProps = {
    numberItens: number
}
export const WorksDetach = ({ numberItens }:WorksDetachProps):ReactElement => {
  return (
    <Container>
      {
                worksData.map((work, index) => (
                  index < numberItens && (
                    <Work
                      data={work as WorksProps}
                      orientation={index % 2 === 0 ? 'left' : 'right'}
                    />
                  )
                ))
            }
      <Button>
        See more
      </Button>
    </Container>
  )
}

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
