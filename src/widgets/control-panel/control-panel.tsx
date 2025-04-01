'use client';

import { ListManagement, SearchPanel } from "@/features";
import styled from "styled-components";


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


export const ControlPanelWidget = () => {
    return (
        <DashboardControlPanel>
            <SearchPanel />
            <ListManagement />
        </DashboardControlPanel>
    )
}