import styled from 'styled-components';

const StyledCalendarHeader = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    background-color: #55608f;
    color: white;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`;


export const CalendarHeader = (props: any) => {
    return (
        <StyledCalendarHeader>
            {`${props.currMonth} ${props.currYear}`}
        </StyledCalendarHeader>
    );
}
