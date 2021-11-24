import styled, { css } from 'styled-components/macro'
import { useLanguageContext } from 'hooks/language'
import { ReactElement } from 'react'

export const Copyright = ():ReactElement => {
  const { data } = useLanguageContext()
  return (
    <Container>
      <Content>
        <Text>
          {data.copyrightMessage}
        </Text>
        <Title>
          Jhoni Giacomolli
        </Title>
      </Content>
    </Container>
  )
}

const Container = styled.section`${({ theme }) => css`
    background: ${theme.colors.primary90};
`}`
const Content = styled.div`${({ theme }) => css`
    max-width: ${theme.sizes.boxed};
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px 0;
    width: 100%;
    border-top: 2px solid ${theme.colors.primary70};
`}`
const Text = styled.p`${({ theme }) => css`
    font-size: 1.6rem;
    margin: 0;
    color: ${theme.colors.text90};
`}`
const Title = styled.span`${({ theme }) => css`
    font-size: 1.6rem;
    color: ${theme.colors.detach100};
    margin: 0 10px;
`}`
