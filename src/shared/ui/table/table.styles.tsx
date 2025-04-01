'use client'
import styled from "styled-components";

type StyledCellProps = {
    isDateOnCurrentMonth?: boolean;
}

export const ScheduleTable = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    table {
        width: 100%;
        max-width: 1200px;
        border-collapse: collapse;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        margin-left: 10px;
        margin-right: 10px;
        border-radius: 10px;
        overflow: hidden;
    }

    @media (max-width: 768px) {
        table {
            max-width: 100%;
        }
    }

    @media (max-width: 480px) {
        table {
            max-width: 100%;
        }
    }
`;

export const ScheduleTableHeader = styled.th`
    padding: 15px;
    background-color: #55608f;
    color: #fff;
    text-align: left;
`;

export const ScheduleTableRow = styled.tr`
    border-bottom: 5px solid rgba(255, 255, 255, 0.5);

    &:nth-last-child(1) {
        border-bottom: none;
    }
`;

export const ScheduleTableCell = styled.td`
    padding: 15px;
    background-color: rgba(255, 255, 255, 0.2);
    color: #fff;
    position: relative;
`;


export const CalendarTable = styled.div`
    width: 300px;

    table {
        table-layout: fixed;
        width: 100%;
        height: 100%;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        text-align: center;
        font-weight: normal;
    }
`;

export const CalendarTableHeader = styled.th`
    font-weight: normal;
    background-color: rgba(255, 255, 255, 0.2);
    padding: 5px 0 5px 0;
    color:white;
    
    &:nth-last-child(-n + 2) {
        color: red;
    }
`;

export const CalendarTableCell = styled.td<StyledCellProps>`
    background-color: rgba(255, 255, 255, 0.2);
    padding: 5px 0 5px 0;
    transition: .2s;
    color: white;
    &:nth-last-child(-n + 2) {
        color: red;
    }
        
    ${({ isDateOnCurrentMonth }) => !isDateOnCurrentMonth && `
        background-color: transparent;
        color: rgba(255, 255, 255, 0.5);
    `}
`;

export const CalendarTableRow = styled.tr`
`;