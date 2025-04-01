import { Button, ButtonVariations } from '@/shared';
import styled from 'styled-components'

const StyledCalendarSelector = styled.div`
    background-color: #55608f;
    height: 50px;
    display: flex;
    text-align: center;
    margin: 0 auto;
    justify-content: center;
    color: white;
    align-items: center;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`;

type Props = {
    decrementMonthsClick: () => void,
    getCurrentMonthClick: () => void,
    incrementMonthsClick: () => void
}

export const CalendarSelector = ({ decrementMonthsClick, getCurrentMonthClick, incrementMonthsClick }: Props) => {
    return (
        <StyledCalendarSelector>
                <Button type_={ButtonVariations.CALENDAR_SELECTOR} onClick={() => { decrementMonthsClick() }}>{"<"}</Button>
                <Button type_={ButtonVariations.CALENDAR_SELECTOR} onClick={() => { getCurrentMonthClick() }}>=</Button>
                <Button type_={ButtonVariations.CALENDAR_SELECTOR} onClick={() => { incrementMonthsClick() }}>{`>`}</Button>
        </StyledCalendarSelector>
    );
}



