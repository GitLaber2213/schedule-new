'use client';
import styled from "styled-components";



export const HeaderContainer = styled.h1`
    color: white; 
    width: 100%; 
    text-align: center; 
    margin-bottom: 20px; 
`;

export const OptionalMenuContainer = styled.div`
    height: 70px;
    margin-top: auto;
    display: flex;
    justify-content: flex-end; 
`;

export const InputsContainer = styled.div`
    height: calc(100% - 120px);
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 10px;
`;

export const BackButtonContainer = styled.div`
    position: absolute;
`;

export const InputName = styled.span`
    text-align: center;
    color: white;
    font-size: 18px;
    margin-right: 10px;
    font-weight: bold;
`;
