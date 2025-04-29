import { Button, ButtonVariations, HoverBgColorVariations, Icon, Input, InputVariations, KEYS_SYNONYMS, Loader, LoaderVariations, TrashIcon } from "@/shared";
import { BorderBlock, ListOfAddedData } from "./list-management.styles";
import { IConfig, KeySynonyms } from "@/shared/types/config-type";
import { useListManagementApi } from "../hooks/use-list-management-api";
import { useListManagementHandlers } from "../hooks/use-list-management-handlers";

type Props<T extends { id: number }> = {
    item: T;
    config: IConfig;
};

export const ListItem = <T extends { id: number }>({ item, config }: Props<T>) => {
    const { deleteEntry, isLoadingDelete, updateEntry } = useListManagementApi(config);
    const { handleCheckBoxChange, handleOneEntryDeleteClick, selectOneItem } = useListManagementHandlers(item.id);


    return (
        <ListOfAddedData>
            <BorderBlock>
                <Input type_={InputVariations.CHECK_BOX} type="checkbox" checked={selectOneItem} onChange={() => handleCheckBoxChange(item.id)} />
            </BorderBlock>

            <div style={{ display: 'flex', flexWrap: 'wrap' }} onClick={() => updateEntry(item.id)}>
                {Object.entries(item).map(([key, value]) => (
                    <BorderBlock key={key}>
                        {`${KEYS_SYNONYMS[key as keyof KeySynonyms] || key}: ${value}`}
                    </BorderBlock>
                ))}
            </div>

            <BorderBlock style={{ border: 'none', marginLeft: 'auto' }}>
                <Button style={{ minWidth: '120px' }} hoverColor={HoverBgColorVariations.RED} type_={ButtonVariations.DATA_CONTROL_BUTTON}
                    disabled={isLoadingDelete} onClick={() => { handleOneEntryDeleteClick(item.id); deleteEntry(item.id) }}>

                    {isLoadingDelete ? <Loader type={LoaderVariations.SMALL} /> :
                        <>
                            <Icon pathIcon={TrashIcon.src} alt="trash" />
                            Удалить
                        </>
                    }

                </Button>
            </BorderBlock>
        </ListOfAddedData>
    );
};