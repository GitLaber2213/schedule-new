'use client'
import styled from "styled-components";



export const AuthInput = styled.input`
    width: 100%;                 
    max-width: 300px;             
    min-width: 50px;            
    height: 50px;
    border: none;
    margin-top: 10px;
    color: white;
    border-radius: 5px;
    padding: 0 20px;
    background-color: rgba(217, 206, 243, 0.4);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    font-weight: 600;
    outline: none;
    font-size: 16px;
    box-sizing: border-box;
    border: 2px solid transparent;
    transition: border .2s;

    &::placeholder {
        color: rgb(255, 255, 255);
    }

    &:focus {
        border-color: white;
    }
`;

export const DashboardInput = styled(AuthInput)`
    margin: 0;
    margin-bottom: 10px;
    margin-right: 10px;
`;

export const StyledCheckBox = styled.input.attrs({ type: 'checkbox' })`
    position: relative;
    width: 20px;
    height: 20px;
    appearance: none;
    background-color: white;
    border-radius: 5px;
    cursor: pointer;
    transition: all .2s ease;

    &:focus {
        outline: 1px solid black;
    }

    &:checked:focus {
        outline: 1px solid white;
    }


    &:checked {
        background-color:rgb(85, 96, 143);
    }

    &:checked::before {
        content: "";
        position: absolute;
        top: 2px;
        left: 6px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        transform: rotate(45deg);
        transition: all 0.3s ease;
    }
`;



export const SmallInput = styled(DashboardInput)`
    height: 30px;
    font-size: 14px;
    margin: 0;

    &::placeholder {
        font-size: 14px;
    }

`;