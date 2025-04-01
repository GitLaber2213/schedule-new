'use client'
import { TabBar, UserInfo } from "@/features";
import { Scroll } from "@/shared";
import styled from "styled-components";

const SideBarContainer = styled.div`
    flex: 0 0 40%;
    height: 100%;
    max-width: 300px;
    min-width: 150px;
    background-color: rgba(217, 206, 243, 0.2);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    display: flex;
    border-radius: 10px;
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 20px;
    box-sizing: border-box;
`;

export const SideBarWidget = () => {
    return (
        <SideBarContainer>
            <UserInfo />
            <Scroll>
                <TabBar />
            </Scroll>
        </SideBarContainer>
    )
}