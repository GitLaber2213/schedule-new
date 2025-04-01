import { Button, ButtonVariations, HoverBgColorVariations, Icon, Input, InputVariations, Trash } from "@/shared";
import { BorderBlock, ListOfAddedData } from "./list-management.styles";



export const ListItem = () => {
    return (
        <ListOfAddedData>
            <BorderBlock>
                <Input type_={InputVariations.CHECK_BOX} type="checkbox" />
            </BorderBlock>
            <BorderBlock>
                Группа: 26-тп
            </BorderBlock>
            <BorderBlock>
                Дисциплина: Алгоритмизация и программирование
            </BorderBlock>
            <BorderBlock>
                Преподаватель: Иванов Иван Иванович
            </BorderBlock>
            <BorderBlock>
                Аудитория: 305-к
            </BorderBlock>

            <BorderBlock style={{ border: 'none', marginLeft: 'auto' }}>
                <Button hoverColor={HoverBgColorVariations.RED} type_={ButtonVariations.DELETE_BUTTON}>
                    <Icon pathIcon={Trash.src} alt="trash" />
                    Удалить
                </Button>
            </BorderBlock>
        </ListOfAddedData>
    )
}