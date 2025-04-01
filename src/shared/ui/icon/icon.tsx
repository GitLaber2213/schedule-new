import { ImgHTMLAttributes } from "react"
import { StyledIcon } from "./icon.styles"


type Props = {
    pathIcon: string
} & ImgHTMLAttributes<HTMLImageElement>


export const Icon = ({pathIcon, ...IconHTMLAttributes}: Props) => {
    return <StyledIcon src={pathIcon} {...IconHTMLAttributes}/>
}