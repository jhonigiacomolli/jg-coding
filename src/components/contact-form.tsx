import { useLanguageContext } from "languages/context";
import { ReactElement } from "react";
import styled, { css } from "styled-components";
import { Button } from "./styled-button";
import { Input } from "./styled-input";
import { Textarea } from "./styled-textarea";

export const ContectForm = ():ReactElement => {
    const { data } = useLanguageContext()
    return (
        <Form>
            <Title>
                { data.contactFormTitle }
            </Title>
            <Input type="text" placeholder={data.contactInputName} />
            <Input type="text" placeholder={data.contactInputEmail} />
            <Input type="text" placeholder={data.contactInputPhone} />
            <Input type="text" placeholder={data.contactInputSubject} />
            <Textarea placeholder={data.contactInputMessage} rows={10} />
            <ContactButton>
                { data.contactButton }
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
`

const Title = styled.h2`${({ theme }) => css`
    font-size: 3rem;
    font-family: ${theme.fonts.secondary};
    color: ${theme.colors.detach100};
`}`

const ContactButton = styled(Button)`
    border-radius: 2.5rem
`