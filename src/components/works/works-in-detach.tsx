import { ReactElement } from 'react'
import { WorksProps } from 'data/types'
import { Work } from 'components/works/work'
import { Button } from 'components/styled-button'
import styled from 'styled-components/macro'
import worksData from 'data/works.json'
import { useLanguageContext } from 'hooks/language'

type WorksDetachProps = {
    numberItens: number
}
export const WorksDetach = ({ numberItens }:WorksDetachProps):ReactElement => {
  const { lang, data } = useLanguageContext()
  return (
    <Container>
      {
        worksData[lang].map((work, index) => (
          index < numberItens && (
            <Work
              data={work as WorksProps}
              orientation={index % 2 === 0 ? 'left' : 'right'}
            />
          )
        ))
      }
      <Button>
        {data.worksButton}
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
