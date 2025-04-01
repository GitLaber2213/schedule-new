import { InputHTMLAttributes } from "react";
import { AuthInput, DashboardInput, StyledCheckBox } from "./input.styles";
import { InputVariations } from "./input-variations";

type Props = {
    type_: InputVariations;
} & InputHTMLAttributes<HTMLInputElement>;

const getInputType = (type: InputVariations) => ({
    [InputVariations.AUTH]: AuthInput,
    [InputVariations.DASHBOARD]: DashboardInput,
    [InputVariations.CHECK_BOX]: StyledCheckBox

}[type] || AuthInput);

export const Input = ({type_,  ...inputHtmlAttributes }: Props) => {
    const StyledInput = getInputType(type_);

    return (
        <StyledInput {...inputHtmlAttributes}/>
    );
};