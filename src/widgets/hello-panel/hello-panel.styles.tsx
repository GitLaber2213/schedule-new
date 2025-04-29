'use client';
import styled from "styled-components";


export const DashboardControlPanel = styled.div`
    display: flex;
    height: 100%; 
    justify-content: center;
    align-items: center;
    background-color: rgba(217, 206, 243, 0.2);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    padding: 20px;
    border-radius: 10px;

    @media (max-width: 840px) {
        flex-direction: column;
    }
`;

export const IconContainer = styled.div`
    display: flex;
    color: white;
    font-weight: 600;
    transition: all .2s;

    @media (max-width: 840px) {
        transform: rotate(90deg);
    }
`;

export const TextContainer = styled.div`
    width: 50%;
    display: flex;
    color: white;
    font-size: 14px;
`;