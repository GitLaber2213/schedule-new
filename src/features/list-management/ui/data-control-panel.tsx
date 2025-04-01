import { Arrows, Button, ButtonVariations, HoverBgColorVariations, Icon, Minus, Plus, Trash } from "@/shared";
import { BorderBlock, StyledDataControlPanel } from "./list-management.styles";



export const DataControlPanel = () => {
    return (
        <StyledDataControlPanel>
            <Button hoverColor={HoverBgColorVariations.GREEN} type_={ButtonVariations.DELETE_BUTTON}>
                <Icon pathIcon={Plus.src} alt="plus" />
                Добавить
            </Button>
            <Button hoverColor={HoverBgColorVariations.GREEN} type_={ButtonVariations.DELETE_BUTTON}>
                <Icon pathIcon={Minus.src} alt="trash" />
                Очистить выбор
            </Button>
            <Button hoverColor={HoverBgColorVariations.GREEN} type_={ButtonVariations.DELETE_BUTTON}>
                <Icon pathIcon={Arrows.src} alt="arrows" />
                Изменить выбранное
            </Button>
            <Button hoverColor={HoverBgColorVariations.RED} type_={ButtonVariations.DELETE_BUTTON}>
                <Icon pathIcon={Trash.src} alt="trash" />
                Удалить выбранное
            </Button>
            <BorderBlock>
                Всего выбрано: 20
            </BorderBlock>
        </StyledDataControlPanel>
    );
}