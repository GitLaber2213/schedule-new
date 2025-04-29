import { StyledScroll } from "./scroll.styles"

export const Scroll = ({children} : {children: React.ReactNode}) => {
    return (
        <StyledScroll>
            {children}
        </StyledScroll>
    )
}