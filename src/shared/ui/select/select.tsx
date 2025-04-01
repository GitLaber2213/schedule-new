import { SelectHTMLAttributes } from "react"
import { StyledOption, StyledSelect } from "./select.styles"


type Props = {
    children: React.ReactNode;
} & SelectHTMLAttributes<HTMLSelectElement>


const SelectComponent = ({ children, ...selectHTMLAttributes }: Props) => {
    return <StyledSelect {...selectHTMLAttributes}>{children}</StyledSelect>
}

const Option = ({ children }: Props) => {
    return <StyledOption>{children}</StyledOption>
}



SelectComponent.Option = Option;

export const Select = SelectComponent;