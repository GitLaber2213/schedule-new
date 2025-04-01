'use client'
import { Button, ButtonVariations, Input, InputVariations, Layout, LayoutVariations, Routes } from "@/shared";
import { Container, Form } from "./auth.styles";
import { useRouter } from "next/navigation";


export const Auth = () => {
    const { replace } = useRouter();

    return (
        <Container>
            <Layout type={LayoutVariations.WIDGET}>
                <h1 style={{ color: "white" }}>Авторизация</h1>
                <Form onSubmit={(e) => { e.preventDefault(); replace(Routes.DASHBOARD) }}>
                    <Input type_={InputVariations.AUTH} placeholder="Логин" type="text" />
                    <Input type_={InputVariations.AUTH} placeholder="Пароль" type="password" />
                    <Button type_={ButtonVariations.BASIC}>Войти</Button>
                </Form>
            </Layout>
        </Container>
    );
};