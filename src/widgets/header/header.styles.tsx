'use client'
import styled from "styled-components";



export const HeaderContainer = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    background-color: rgba(255, 255, 255, 0.2);
    justify-content: flex-start;
`;


export const HeaderBlock = styled.div`
    width: 50%;
    height: 100%;
    background-color:rgb(85, 96, 143);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    clip-path: polygon(0 0, 95% 0, 100% 100%, 5% 100%);
`;

export const TransparentHeaderBlock = styled(HeaderBlock)`
    background-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;