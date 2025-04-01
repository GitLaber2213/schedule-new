import { ButtonHTMLAttributes } from "react";
import { ButtonVariations } from "./button-variations"
import { AuthButton, BasicButton, CalendarSelectorButton, DeleteButton, ErrorButton, LightButton, SuccessButton, SwitchThemeButton } from "./button.styles"
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
    [ButtonVariations.DELETE_BUTTON]: DeleteButton,

}[type] || BasicButton);

export const Button = ({ children, type_, hoverColor, ...buttonHtmlAttributes }: Props) => {
    const StyledButton = getButtonType(type_);

    return <StyledButton hoverColor={hoverColor} {...buttonHtmlAttributes}>{children}</StyledButton>
};