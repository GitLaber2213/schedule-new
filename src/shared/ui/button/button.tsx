import { ButtonHTMLAttributes } from "react";
import { ButtonVariations } from "./button-variations"
import { AuthButton, BackButton, BasicButton, CalendarSelectorButton, DataControlButton, ErrorButton, LightButton, SuccessButton, SwitchThemeButton } from "./button.styles"
import { HoverBgColorVariations } from "./hover-bg-color-variations";


type Props = {
    children: React.ReactNode;
    type_: ButtonVariations;
    hoverColor?: HoverBgColorVariations;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const getButtonType = (type: ButtonVariations) => ({
    [ButtonVariations.BASIC]: BasicButton,
    [ButtonVariations.ERROR]: ErrorButton,
    [ButtonVariations.SUCCESS]: SuccessButton,
    [ButtonVariations.CALENDAR_SELECTOR]: CalendarSelectorButton,
    [ButtonVariations.AUTH]: AuthButton,
    [ButtonVariations.SWITCH_THEME]: SwitchThemeButton,
    [ButtonVariations.LIGHT_BUTTON]: LightButton,
    [ButtonVariations.DATA_CONTROL_BUTTON]: DataControlButton,
    [ButtonVariations.BACK_BUTTON]: BackButton,

}[type] || BasicButton);

export const Button = ({ children, type_, hoverColor, ...buttonHtmlAttributes }: Props) => {
    const StyledButton = getButtonType(type_);

    let defaultHoverColor;
    
    if(!hoverColor) {
        defaultHoverColor = HoverBgColorVariations.GREEN
    } else {
        defaultHoverColor = hoverColor
    }





    return <StyledButton $hoverColor={defaultHoverColor} {...buttonHtmlAttributes}>{children}</StyledButton>
};