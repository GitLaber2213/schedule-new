'use client'
import { useEffect, useState } from 'react';
import { CalendarHeader } from './calendar-header';
import { CalendarSelector } from './calendar-selector';
import { Table, TableVariations } from '@/shared';

type DayInfo = {
    day: number;
    isCurrentMonth: boolean;
}

export const Calendar = () => {
    const [dateArray, setDateArray] = useState<DayInfo[]>([]);
    const [currYear, setCurrYear] = useState<number>(new Date().getFullYear());
    const [currMonth, setCurrMonth] = useState<number>(new Date().getMonth());

    const weekDaysNames = [
        { weekDayName: "" },
        { weekDayName: "Пн" },
        { weekDayName: "Вт" },
        { weekDayName: "Ср" },
        { weekDayName: "Чт" },
        { weekDayName: "Пт" },
        { weekDayName: "Сб" },
        { weekDayName: "Вс" },
    ];


    const GetMonth = (currMonth: number): string => {
        const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
            "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

        return (months[currMonth]);
    };

    useEffect(() => {
        let newDateArray = [];
        let firstDayOfMonth = new Date(currYear, currMonth, 0).getDay(),
            lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate(),
            lastDayOfMonth = new Date(currYear, currMonth, lastDateOfMonth).getDay(),
            lastDayOfLastMonth = new Date(currYear, currMonth, 0).getDate();

        for (let i = firstDayOfMonth; i > 0; i--) {
            newDateArray.push({ day: lastDayOfLastMonth - i + 1, isCurrentMonth: false });
        }

        for (let i = 1; i <= lastDateOfMonth; i++) {
            newDateArray.push({day:i, isCurrentMonth: true});
        }

        for (let i = lastDayOfMonth; i < lastDayOfLastMonth; i++) {
            if (newDateArray.length >= 42) {
                break;
            } else {
                newDateArray.push({day: i - lastDayOfMonth + 1, isCurrentMonth: false});
            }
        }
        setDateArray(newDateArray);
    }, [currMonth, currYear]);


    const incrementMonthsClick = (): void => {
        setCurrMonth(prevMonth => prevMonth + 1);
        if (currMonth > 10) {
            setCurrYear(prevYear => prevYear + 1);
            setCurrMonth(0);
        };

    }

    const getCurrentMonthClick = (): void => {
        setCurrMonth(new Date().getMonth());
        setCurrYear(new Date().getFullYear());
    };

    const decrementMonthsClick = (): void => {
        setCurrMonth(prevMonth => prevMonth - 1);
        if (currMonth < 1) {
            setCurrYear(prevYear => prevYear - 1);
            setCurrMonth(11);
        };
    };

    let firstWeek: DayInfo[] = dateArray.slice(0, 7),
        secondWeek: DayInfo[] = dateArray.slice(7, 14),
        thirdWeek: DayInfo[] = dateArray.slice(14, 21),
        fourthWeek: DayInfo[] = dateArray.slice(21, 28),
        fifthWeek: DayInfo[] = dateArray.slice(28, 35),
        sixthWeek: DayInfo[] = dateArray.slice(35, 42);

    return (
        <div>
            <CalendarHeader currMonth={GetMonth(currMonth)} currYear={currYear} />


            <Table type={TableVariations.CALENDAR}>
                <thead>
                    <Table.Row>
                        {weekDaysNames.map(el => <Table.Header key={el.weekDayName}>{el.weekDayName}</Table.Header>)}
                    </Table.Row>
                </thead>
                <tbody>
                    <Table.Row>
                        <Table.Cell isDateOnCurrentMonth={true}>{">"}</Table.Cell>
                        {firstWeek.map(el => <Table.Cell isDateOnCurrentMonth={el.isCurrentMonth}>{el.day}</Table.Cell>)}
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell isDateOnCurrentMonth={true}>{">"}</Table.Cell>
                        {secondWeek.map(el => <Table.Cell isDateOnCurrentMonth={el.isCurrentMonth}>{el.day}</Table.Cell>)}
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell isDateOnCurrentMonth={true}>{">"}</Table.Cell>
                        {thirdWeek.map(el => <Table.Cell isDateOnCurrentMonth={el.isCurrentMonth}>{el.day}</Table.Cell>)}
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell isDateOnCurrentMonth={true}>{">"}</Table.Cell>
                        {fourthWeek.map(el => <Table.Cell isDateOnCurrentMonth={el.isCurrentMonth}>{el.day}</Table.Cell>)}
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell isDateOnCurrentMonth={true}>{">"}</Table.Cell>
                        {fifthWeek.map(el => <Table.Cell isDateOnCurrentMonth={el.isCurrentMonth}>{el.day}</Table.Cell>)}
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell isDateOnCurrentMonth={true}>{">"}</Table.Cell>
                        {sixthWeek.map(el => <Table.Cell isDateOnCurrentMonth={el.isCurrentMonth}>{el.day}</Table.Cell>)}
                    </Table.Row>
                </tbody>
            </Table>

            <CalendarSelector
                incrementMonthsClick={incrementMonthsClick}
                getCurrentMonthClick={getCurrentMonthClick}
                decrementMonthsClick={decrementMonthsClick}
                />
        </div>
    );
};