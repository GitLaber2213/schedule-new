import { HTMLAttributes } from "react";
import { LayoutVariations } from "./layout-variations"
import { PageLayout, PanelLayout, WidgetLayout } from "./layout.styles"

type Props = {
    children: React.ReactNode;
    type: LayoutVariations;
} & HTMLAttributes<HTMLDivElement>;

const getLayoutType = (type: LayoutVariations) => ({
    [LayoutVariations.WIDGET]: WidgetLayout,
    [LayoutVariations.PAGE]: PageLayout,
    [LayoutVariations.PANEL]: PanelLayout,
} [type]);

export const Layout = ({children, type, ...HTMLAttributes}: Props) => {
    const StyledLayout = getLayoutType(type);
    return <StyledLayout {...HTMLAttributes}>{children}</StyledLayout>
}

