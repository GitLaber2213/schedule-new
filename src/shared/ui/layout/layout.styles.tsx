'use client'
import styled from "styled-components";




export const WidgetLayout = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0 10px 0;
    padding: 20px;
    border-radius: 10px;
    flex-direction: column;
    background-color: rgba(217, 206, 243, 0.2);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    border-top: 2px solid rgba(217, 206, 243, 0.8);
    border-bottom: 2px solid rgba(217, 206, 243, 0.8);
`;  

export const PageLayout = styled.div`
    display: grid;
    justify-items: center;
    align-items: center;
`;

export const PanelLayout = styled(WidgetLayout) `
    margin: 0;
    height: 100%;
    width: 100%;
    box-sizing: border-box; 
    margin-bottom: 5px;
    display: block;
    background-color: rgba(217, 206, 243, 0.1);
`;