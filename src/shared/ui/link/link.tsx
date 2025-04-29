import Link from "next/link";
import { StyledLink } from "./link.styles";
import { HTMLAttributes } from "react";



type Props = {
    href: string;
    children: React.ReactNode
} & HTMLAttributes<HTMLAnchorElement>;


export const Link_ = ({ href, children, ...HTMLAtttributes }: Props) => {
    return (
        <Link href={href} style={{ outline: 'none', textDecoration: 'none'}} {...HTMLAtttributes}>
            <StyledLink>
                {children}
            </StyledLink>
        </Link>
    );
}