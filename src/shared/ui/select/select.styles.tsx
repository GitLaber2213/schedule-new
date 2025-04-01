'use client'
import styled from "styled-components";



export const StyledSelect = styled.select`
    width: 100%;                 
    max-width: 300px;             
    min-width: 50px;            
    height: 50px;
    border: none;
    color: white;
    border-radius: 5px;
    margin-right: 10px;
    margin-bottom: 10px;
    padding-left: 10px;
    background-color: rgba(217, 206, 243, 0.4);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    font-weight: 600;
    font-size: 16px;
    box-sizing: border-box;
`;

export const StyledOption = styled.option`
    font-weight:bold;
    background-color: rgba(217, 206, 243, 1);
    heigth: 50px;
`;