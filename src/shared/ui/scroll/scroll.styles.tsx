'use client'
import styled from "styled-components";



export const StyledScroll = styled.div`
    flex: 1;
    margin: 0;
    display: block;
    margin: 10px 0 10px 0;
    height: 95%;
    box-sizing: border-box;
    overflow-y: auto;
    overflow-x: hidden;
    &::-webkit-scrollbar {
        width: 4px;
    }
        
    &::-webkit-scrollbar-thumb {
        background-color: white;
        border-radius: 100%;
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: rgba(255, 255, 255, 0.6);
    }

    &::-webkit-scrollbar-track {
        background-color: transparent;
    }
`;