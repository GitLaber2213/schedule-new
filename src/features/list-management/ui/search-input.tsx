import { Input, InputVariations } from "@/shared";
import { AppDispatch, RootState } from "@/shared/types/store-type";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDebounce } from "use-debounce";
import { listManagementSlice } from "../model/list-management.slice";



export const SearchInput = () => {
    const [text, setText] = useState('');
    const [value] = useDebounce(text, 500);

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(listManagementSlice.actions.changeSearchText(value));
    }, [value]);



    return (
        <Input type_={InputVariations.SMALL} type="text" placeholder="Поиск" value={text} onChange={(e) => setText(e.target.value)} />
    );
};