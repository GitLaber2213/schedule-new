import {
    ArrowsIcon, Button, ButtonVariations, HoverBgColorVariations, Icon, Loader, LoaderVariations, MinusIcon, PlusIcon, TrashIcon
} from "@/shared";
import { BorderBlock, StyledDataControlPanel } from "./list-management.styles";
import { IConfig } from "@/shared/types/config-type";
import { useListManagementApi } from "../hooks/use-list-management-api";
import { useListManagementHandlers } from "../hooks/use-list-management-handlers";
import { SearchInput } from "./search-input";



export const DataControlPanel = ({ config }: { config: IConfig }) => {
    const { addEntry, updateEntry, deleteChoice, isLoadingDeleteChoice, isErrorDelete, isErrorDeleteChoice } = useListManagementApi(config);
    const { selectAllItems, handleClearChoiceClick, handleManyEntriesDeleteClick } = useListManagementHandlers();

    if (isErrorDelete || isErrorDeleteChoice) {
        return <div>Произошла ошибка</div>;
    }

    return (
        <StyledDataControlPanel>
            <Button hoverColor={HoverBgColorVariations.GREEN} type_={ButtonVariations.DATA_CONTROL_BUTTON} onClick={addEntry}>
                <Icon pathIcon={PlusIcon.src} alt="plus" />
                Добавить
            </Button>

            <Button hoverColor={HoverBgColorVariations.GREEN} type_={ButtonVariations.DATA_CONTROL_BUTTON}
                disabled={!(selectAllItems.length > 0 && selectAllItems.length < 2)} onClick={() => updateEntry(selectAllItems[0])}>

                <Icon pathIcon={ArrowsIcon.src} alt="arrows" />
                Изменить выбранное
            </Button>

            <Button style={{ minWidth: '200px' }} hoverColor={HoverBgColorVariations.RED} type_={ButtonVariations.DATA_CONTROL_BUTTON}
                disabled={isLoadingDeleteChoice || selectAllItems.length === 0} onClick={() => { handleManyEntriesDeleteClick(); deleteChoice(selectAllItems) }}>

                {isLoadingDeleteChoice ? <Loader type={LoaderVariations.SMALL} /> : <>
                    <Icon pathIcon={TrashIcon.src} alt="trash" />
                    Удалить выбранное
                </>}
            </Button>

            <Button hoverColor={HoverBgColorVariations.GREEN} type_={ButtonVariations.DATA_CONTROL_BUTTON} disabled={selectAllItems.length === 0} onClick={handleClearChoiceClick}>
                <Icon pathIcon={MinusIcon.src} alt="minus" />
                Очистить выбор
            </Button>

            <BorderBlock>
                Всего выбрано: {selectAllItems.length}
            </BorderBlock>

            <SearchInput />

        </StyledDataControlPanel>
    );
};