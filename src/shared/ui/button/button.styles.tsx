'use client'
import styled from "styled-components";
import { HoverBgColorVariations } from "./hover-bg-color-variations";

type HoverColorProps = { $hoverColor: HoverBgColorVariations };

export const BasicButton = styled.button`
    max-width: 300px;
    width: 100%;
    min-width: 100px;
    height: 50px;

    background-color:rgb(85, 96, 143);
    border: 2px solid transparent;
    color: #fff;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    
    font-weight: 600;
    font-size: 16px;
    
    border-radius: 5px;
    margin-top: 10px;
    
    transition: .2s;

    &:focus {
        outline: none;
        border: 2px solid white;
    }

    &:hover {
        cursor: pointer;
        background-color:rgb(63, 74, 122);
    }
`;

export const ErrorButton = styled(BasicButton)`
    background: rgb(255, 99, 71);
    margin-left: 10px;

    &:hover {
        background: rgb(211, 81, 58);
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

    background-color:rgb(85, 96, 143);
    color: #fff;
    
    border-radius: 50%;
    border: none;
    transition: .2s;
    
    &:focus {
        outline: none;
        border: 2px solid white;
    }

    &:hover {
        background-color: aliceblue;
        color: #000;
        cursor: pointer;
    }

`;

export const BackButton = styled(CalendarSelectorButton)`
    width: 40px;
    height: 40px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: transparent;
    &:hover {
        background-color: rgba(217, 206, 243, 0.6);
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

    background-color: transparent;
    color: white;

    margin: 0;

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

export const DataControlButton = styled(LightButton)<HoverColorProps>`
    height: 30px;
    width: auto; 

    display: flex;
    align-items: center;
    justify-content: center;
    
    margin: 0;
    padding-right: 10px; 
    
    font-size: 14px;
    font-weight: normal;
    
    transition: .1s;

    &:hover {
        ${({ $hoverColor }) => $hoverColor === HoverBgColorVariations.RED && `
            background-color: rgb(255, 63, 91);
        `}
        ${({ $hoverColor }) => $hoverColor === HoverBgColorVariations.GREEN && `
            background-color: rgb(75, 174, 79);
        `}
    }
    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;
