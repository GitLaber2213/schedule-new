'use client'

import { Table, TableVariations } from "@/shared"



export const ScheduleTable = () => {
    return (
        <div style={{ width: '100%' }}>
            <Table type={TableVariations.SCHEDULE} >
                <thead>
                    <Table.Row>
                        <Table.Header>Column 1</Table.Header>
                        <Table.Header>Column 2</Table.Header>
                        <Table.Header>Column 3</Table.Header>
                        <Table.Header>Column 4</Table.Header>
                        <Table.Header>Column 5</Table.Header>
                    </Table.Row>
                </thead>
                <tbody>
                    <Table.Row>
                        <Table.Cell>Cell 1</Table.Cell>
                        <Table.Cell>Cell 2</Table.Cell>
                        <Table.Cell>Cell 3</Table.Cell>
                        <Table.Cell>Cell 4</Table.Cell>
                        <Table.Cell>Cell 5</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Cell 1</Table.Cell>
                        <Table.Cell>Cell 2</Table.Cell>
                        <Table.Cell>Cell 3</Table.Cell>
                        <Table.Cell>Cell 4</Table.Cell>
                        <Table.Cell>Cell 5</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Cell 1</Table.Cell>
                        <Table.Cell>Cell 2</Table.Cell>
                        <Table.Cell>Cell 3</Table.Cell>
                        <Table.Cell>Cell 4</Table.Cell>
                        <Table.Cell>Cell 5</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Cell 1</Table.Cell>
                        <Table.Cell>Cell 2</Table.Cell>
                        <Table.Cell>Cell 3</Table.Cell>
                        <Table.Cell>Cell 4</Table.Cell>
                        <Table.Cell>Cell 5</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Cell 1</Table.Cell>
                        <Table.Cell>Cell 2</Table.Cell>
                        <Table.Cell>Cell 3</Table.Cell>
                        <Table.Cell>Cell 4</Table.Cell>
                        <Table.Cell>Cell 5</Table.Cell>
                    </Table.Row>
                </tbody>
            </Table>
        </div>
    )
}