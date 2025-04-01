'use client';
import styled from "styled-components";

export const ListOfAddedData = styled.div`
    width: 100%;
    min-height: 50px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    background-color: rgba(217, 206, 243, 0.4);


    border-radius: 10px;
    color: white;
    margin: 3px 0 3px 0; 

    &:hover {
        background-color: rgba(217, 206, 243, 0.8);
        cursor: pointer;
    }
`;

export const BorderBlock = styled.div`
    display: flex;
    height: 70%;
    padding: 0 15px;
    margin: 10px 0;
    align-items: center;
    justify-content: center;
    border-right: 2px solid rgba(217, 206, 243, 0.8);

    @media (max-width: 800px) {
        width: 100%;
        border-right: none;
    }
`;

export const StyledDataControlPanel = styled.div`
    display: flex; 
    gap: 10px; 
    flex-wrap: wrap; 
    align-items: center; 
    color: white;
`;