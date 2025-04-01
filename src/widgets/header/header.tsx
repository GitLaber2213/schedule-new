'use client'
import { Button, ButtonVariations, Routes } from "@/shared";
import { HeaderBlock, HeaderContainer, TransparentHeaderBlock } from "./header.styles";
import { useRouter } from "next/navigation";


export const HeaderWidget = () => {
    const { push } = useRouter();

    return (
        <HeaderContainer>
            <TransparentHeaderBlock>
                <Button type_={ButtonVariations.SWITCH_THEME}>Темная тема</Button>
            </TransparentHeaderBlock>
            <HeaderBlock>
                <Button type_={ButtonVariations.AUTH} onClick={() => { push(Routes.AUTH) }}>Войти</Button>
            </HeaderBlock>
        </HeaderContainer>
    );
};
