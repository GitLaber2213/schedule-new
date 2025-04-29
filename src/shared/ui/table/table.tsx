'use client'
import { createContext, TableHTMLAttributes, useContext } from "react"
import { TableVariations } from "./table-variations"
import { CalendarTable, CalendarTableCell, CalendarTableHeader, CalendarTableRow, ScheduleTable, ScheduleTableCell, ScheduleTableHeader, ScheduleTableRow } from "./table.styles"


type Props = {
    type: TableVariations;
    children: React.ReactNode;
} & TableHTMLAttributes<HTMLTableElement>

type PropsChildren = {
    children: React.ReactNode;
    isDateOnCurrentMonth?: boolean;
}

const TableTypeContext = createContext<TableVariations | undefined>(undefined);

const useTableTypeContext = (): TableVariations => {
    const context = useContext(TableTypeContext);
    if (!context) {
        throw new Error("useTableContext must be used within a TableProvider");
    }
    return context
}

const getTableType = (type = TableVariations.SCHEDULE) => ({
    [TableVariations.SCHEDULE]: {
        Table: ScheduleTable,
        Header: ScheduleTableHeader,
        Cell: ScheduleTableCell,
        Row: ScheduleTableRow,
    },
    [TableVariations.CALENDAR]: {
        Table: CalendarTable,
        Header: CalendarTableHeader,
        Cell: CalendarTableCell,
        Row: CalendarTableRow,
    },
}[type])

const TableComponent = ({ children, type, ...tableHtmlAttributes }: Props) => {
    const { Table } = getTableType(type);

    return (
        <TableTypeContext.Provider value={type}>
            <Table {...tableHtmlAttributes}>
                <table>
                    {children}
                </table>
            </Table>
        </TableTypeContext.Provider>
    );
};

const StyledHeader = ({ children }: PropsChildren) => {
    const type = useTableTypeContext();
    const { Header } = getTableType(type);
    return <Header>{children}</Header>
};

const StyledCell = ({ children, isDateOnCurrentMonth }: PropsChildren) => {
    const type = useTableTypeContext();
    const { Cell } = getTableType(type);

    return <Cell $isDateOnCurrentMonth={isDateOnCurrentMonth}>{children}</Cell>
};

const StyledRow = ({ children }: PropsChildren) => {
    const type = useTableTypeContext();
    const { Row } = getTableType(type);

    return <Row>{children}</Row>
};

TableComponent.Header = StyledHeader;
TableComponent.Cell = StyledCell;
TableComponent.Row = StyledRow;

export const Table = TableComponent;

