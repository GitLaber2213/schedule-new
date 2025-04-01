'use client'
import styled from "styled-components";
import { HoverBgColorVariations } from "./hover-bg-color-variations";

type HoverColorProps = { hoverColor: HoverBgColorVariations };

export const BasicButton = styled.button`
    max-width: 300px;
    width: 100%;
    min-width: 100px;
    height: 50px;
    border: 2px solid transparent;
    color: #fff;
    border-radius: 5px;
    background-color:rgb(85, 96, 143);
    font-weight: 600;
    font-size: 16px;
    margin-top: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);

    &:hover {
        cursor: pointer;
        background-color:rgb(63, 74, 122);
    }
`;

export const ErrorButton = styled(BasicButton)`
    background: rgb(201, 14, 14);
    &:hover {
        background: rgb(167, 18, 18);
    }
`;

export const SuccessButton = styled(BasicButton)`
    background: rgb(0, 182, 55);
    &:hover {
        background: rgb(27, 156, 27);
    }
`;

export const CalendarSelectorButton = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: none;
    background-color:rgb(85, 96, 143);
    transition: .2s;
    color: #fff;

    &:hover {
        background-color: aliceblue;
        color: #000;
        cursor: pointer;
    }

`;

export const AuthButton = styled(BasicButton)`
    height: 100%;
    max-width: 2000px;
    width: 100%;
    margin: 0;
`;

export const SwitchThemeButton = styled(BasicButton)`
    height: 100%;
    max-width: 2000px;
    width: 100%;
    margin: 0;
    background-color: transparent;
    color: white;

    &:hover {
        background-color: rgba(255, 255, 255, 0.4);
        color: rgb(63, 74, 122);
    }

`;

export const LightButton = styled(BasicButton)`
    background-color: rgba(255, 255, 255, 0.2);
    color: white;
    margin: 0;
    margin-bottom: 10px;
    &:hover {
        background-color: rgba(255, 255, 255, 0.4);
    }
`;

export const DeleteButton = styled(LightButton)<HoverColorProps>`
    margin: 0;
    height: 30px;
    width: auto; 
    font-size: 14px;
    font-weight: normal;
    display: flex;
    padding-right: 10px; 
    
    align-items: center;
    justify-content: center;
    transition: .1s;

    &:hover {
        ${({ hoverColor }) => hoverColor === HoverBgColorVariations.RED && `
            background-color: rgb(255, 63, 91);
        `}
        ${({ hoverColor }) => hoverColor === HoverBgColorVariations.GREEN && `
            background-color: rgb(75, 174, 79);
        `}
    }
`;
