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
    @media (max-width: 840px) {
        width: 100%;
        flex-direction: column;
    }
`;

const DashboardControlPanel = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%; 
    background-color: rgba(217, 206, 243, 0.2);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    overflow: hidden;
    flex: 1;
    box-sizing: border-box; 
    padding: 20px;
`;


export default function DashboardLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    
    return (
        <Layout type={LayoutVariations.PAGE}>
            <HeaderWidget />
            <PanelWrapper>
                <SideBarWidget />
                <DashboardControlPanel>
                    {children}
                </DashboardControlPanel>
            </PanelWrapper>
        </Layout>
    );
}