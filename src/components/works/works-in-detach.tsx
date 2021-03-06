import { ReactElement } from 'react'
import { WorksProps } from 'data/types'
import { Work } from 'components/works/work'
import { Button } from 'components/styled-button'
import styled from 'styled-components/macro'
import { works as worksData } from 'data/works'
import { useLanguageContext } from 'hooks/language'
import { useNavigate } from 'react-router-dom'

type WorksDetachProps = {
    numberItens: number
}
export const WorksDetach = ({ numberItens }:WorksDetachProps):ReactElement => {
  const { lang, data } = useLanguageContext()
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('portfolio')
  }

  return (
    <Container id='works'>
      {
        worksData[lang].map((work, index) => (
          index < numberItens && (
            <Work
              key={`${work.section}-${index}`}
              data={work as WorksProps}
              orientation={index % 2 === 0 ? 'left' : 'right'}
            />
          )
        ))
      }
      <Button onClick={handleNavigate}>
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

    @media(max-width: 991px) {
      margin-top: 100px;
    }
`
