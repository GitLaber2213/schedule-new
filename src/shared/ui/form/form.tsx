import React from "react"
import { FormVariations } from "./form-variations"
import { AuthForm, CRUDForm } from "./form.styles"


type Props = {
    type: FormVariations,
    children: React.ReactNode,
} & React.FormHTMLAttributes<HTMLFormElement>

const getTypeForm = (type: FormVariations) => ({
    [FormVariations.AUTH]: AuthForm,
    [FormVariations.CRUD]: CRUDForm,
}[type])




export const Form = ({children, type, ...formHtmlAttributes}: Props) => {
    const StyledForm = getTypeForm(type);
    
    return (
        <StyledForm {...formHtmlAttributes}>
            {children}
        </StyledForm>
    )
}