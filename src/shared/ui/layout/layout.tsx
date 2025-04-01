import { HTMLAttributes } from "react";
import { LayoutVariations } from "./layout-variations"
import { PagesLayout, PanelsLayout, WidgetsLayout } from "./layout.styles"

type Props = {
    children: React.ReactNode;
    type: LayoutVariations;
} & HTMLAttributes<HTMLDivElement>;

const getLayoutType = (type: LayoutVariations) => ({
    [LayoutVariations.WIDGET]: WidgetsLayout,
    [LayoutVariations.PAGE]: PagesLayout,
    [LayoutVariations.PANEL]: PanelsLayout,
} [type]);

export const Layout = ({children, type, ...HTMLAttributes}: Props) => {
    const StyledLayout = getLayoutType(type);
    return <StyledLayout {...HTMLAttributes}>{children}</StyledLayout>
}

