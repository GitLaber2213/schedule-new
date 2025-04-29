import {
    BackIcon, Button, ButtonVariations, Form, FormVariations, Icon, Input,
    InputVariations, Layout, LayoutVariations, Loader, LoaderVariations, Scroll, useGetRouteConfig
} from "@/shared";
import { BackButtonContainer, HeaderContainer, InputName, InputsContainer, OptionalMenuContainer } from "./CRUD-form.styles";
import { useForm } from "react-hook-form";
import { useDataCRUDApi } from "../hooks/use-data-CRUD-api";
import { Fragment } from "react";




export const CRUDForm = ({ controlPanelPath, id }: { controlPanelPath: string, id?: number }) => {
    const { config } = useGetRouteConfig(controlPanelPath);
    if (!config) return null;
    
    type EntryType = typeof config.DATA_TYPE;

    const { addEntry, updateEntry, getEntry, onCancel, isLoadingAddQuery, isLoadingUpdateQuery } = useDataCRUDApi(config, id);
    const { register, handleSubmit, reset } = useForm<EntryType>();

    //эта хуета ререндерит компоненту бесконечно
    // if(id) getEntry().then(({ entryData }: { entryData: EntryType | null, isLoadingGetEntry: boolean, isErrorGetEntry: boolean }) => reset(entryData));


    console.log("bebra");

    const loading = id ? isLoadingUpdateQuery : isLoadingAddQuery;

    return (
        <Layout type={LayoutVariations.PANEL}>
            <Form type={FormVariations.CRUD} onSubmit={handleSubmit(id ? updateEntry : addEntry)}>
                <BackButtonContainer>
                    <Button type_={ButtonVariations.BACK_BUTTON} onClick={onCancel} type="button">
                        <Icon style={{ marginRight: "2px" }} pathIcon={BackIcon.src} />
                    </Button>
                </BackButtonContainer>

                <HeaderContainer>{id ? config.CRUD_FORM?.HEADER_UPDATE : config.CRUD_FORM?.HEADER_ADD}</HeaderContainer>

                <InputsContainer>
                    <Scroll>
                        {config?.CRUD_FORM?.INPUTS.map((input, index) =>
                            <Fragment key={index}>
                                <InputName key={input.placeholder}>{input.placeholder}:</InputName>
                                <Input
                                    type_={InputVariations.DASHBOARD}
                                    key={input.name}
                                    type={input.type}
                                    placeholder={input.placeholder}
                                    required={input.required}
                                    {...register(input.name)}
                                />
                            </Fragment>)}
                    </Scroll>
                </InputsContainer>

                <OptionalMenuContainer>
                    <Button style={{ marginLeft: "0 auto" }} type_={ButtonVariations.BASIC} disabled={loading} type="submit">
                        {loading ? <Loader type={LoaderVariations.SMALL} /> : id ? 'Изменить' : 'Добавить'}
                    </Button>
                    <Button style={{ marginLeft: "0 auto" }} type_={ButtonVariations.ERROR} onClick={onCancel} type="button">Отмена</Button>
                </OptionalMenuContainer>
            </Form>
        </Layout>
    );
};