'use client';
import styled from "styled-components";



export const StyledLink = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    max-width: 256px;
    width: 100%;
    margin-left: 10px;
    min-width: 100px;
    height: 46px;
    
    border: 2px solid transparent;
    border-radius: 5px;
    
    margin: 0;
    margin-bottom: 10px;
    outline: none;
    
    color: white;
    background-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);

    font-weight: 600;
    font-size: 16px;

    transition: .2s;
    
    &:hover {
        background-color: rgba(255, 255, 255, 0.4);
    }

    &:focus {
        outline: none;
        border: 2px solid white;
    }
`;