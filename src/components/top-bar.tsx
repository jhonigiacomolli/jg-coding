/* global HTMLSelectElement */
import { ChangeEvent, ReactElement, useEffect, useState } from 'react'
import styled, { css } from 'styled-components/macro'
import { Option, Select } from './styled-select'
import { Languages } from 'languages/@types'
import { useLanguageContext } from 'hooks/language'

export const Topbar = (): ReactElement => {
  const { data, changeLanguage } = useLanguageContext()
  const [lang, setLang] = useState<Languages>('en-US')

  useEffect(() => {
    changeLanguage(lang)
  }, [lang])

  function handleChangeLanguage (event: ChangeEvent<HTMLSelectElement>) {
    const value = event.target.value as Languages
    setLang(value)
  }

  return (
    <Container>
      <Content>
        {data.language}
        <Select value={lang} onChange={(event) => handleChangeLanguage(event)}>
          <Option value='en-US'>
            {data.langOption1}
          </Option>
          <Option value='pt-BR'>
            {data.langOption2}
          </Option>
        </Select>
      </Content>
    </Container>
  )
}

const Container = styled.div`${({ theme }) => css`
  width: 100%;
  grid-area: topbar;
  background: ${theme.colors.primary80};
  position: relative;
  z-index: 1;
`}`

const Content = styled.div`${({ theme }) => css`
  max-width: ${theme.sizes.boxed};
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  font-size: 1.2rem;
  color: ${theme.colors.text80};
`}`
