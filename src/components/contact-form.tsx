import { useLanguageContext } from 'hooks/language'
import styled, { css } from 'styled-components'
import { Textarea } from './styled-textarea'
import { Button } from './styled-button'
import { Input } from './styled-input'
import { ReactElement } from 'react'

export const ContactForm = ():ReactElement => {
  const { data } = useLanguageContext()
  return (
    <Form>
      <Title>
        {data.contactFormTitle}
      </Title>
      <Input type='text' placeholder={data.contactInputName} />
      <Input type='text' placeholder={data.contactInputEmail} />
      <Input type='text' placeholder={data.contactInputPhone} />
      <Input type='text' placeholder={data.contactInputSubject} />
      <Textarea placeholder={data.contactInputMessage} rows={10} />
      <ContactButton>
        {data.contactButton}
      </ContactButton>
    </Form>
  )
}

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin: -300px 0 100px 0;
`

const Title = styled.h2`${({ theme }) => css`
    font-size: 3rem;
    font-family: ${theme.fonts.secondary};
    color: ${theme.colors.detach100};
`}`

const ContactButton = styled(Button)`
    border-radius: 2.5rem
`
