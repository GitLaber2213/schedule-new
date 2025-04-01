'use client';
import { Layout, LayoutVariations } from "@/shared";
import { HeaderWidget, SideBarWidget } from "@/widgets";
import styled from "styled-components";

const PanelWrapper = styled.div`
    display: flex;
    gap: 20px;
    margin: 20px;
    flex-wrap: wrap;
    width: calc(100vw - 40px);
    height: calc(100vh - 90px);
    @media (max-width: 640px) {
        width: 100%;
        flex-direction: column;
    }
`;


export default function DashboardLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <Layout type={LayoutVariations.PAGE}>
            <HeaderWidget />
            <PanelWrapper>
                <SideBarWidget />
                {children}
            </PanelWrapper>
        </Layout>
    );
}