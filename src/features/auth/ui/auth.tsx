'use client'
import { Button, ButtonVariations, Error, ErrorVariations, Form, FormVariations, Input, InputVariations, Layout, LayoutVariations, ROUTES } from "@/shared";
import { Container } from "./auth.styles";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

interface IForm {
    login: string;
    password: string;
}


export const Auth = () => {
    const { replace } = useRouter();

    const { register, handleSubmit, formState } = useForm<IForm>({
        mode: "onChange",
    });

    const onSubmit: SubmitHandler<IForm> = (data) => {
        // dispatch(authSlice.actions.setFormData(data));
        replace(ROUTES.DASHBOARD.PATH);
    };

    const loginError = formState.errors.login?.message;
    const passwordError = formState.errors.password?.message;

    return (
        <Container>
            <Layout type={LayoutVariations.WIDGET}>
                <h1 style={{ color: "white" }}>Авторизация</h1>
                <Form type={FormVariations.AUTH} onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        type_={InputVariations.AUTH}
                        placeholder="Логин"
                        type="text"
                        autoComplete="username"
                        {...register('login', {
                            required: 'Это поле обязательно'
                        })}
                    />
                    {loginError && <Error type={ErrorVariations.INPUT}>{loginError}</Error>}

                    <Input
                        type_={InputVariations.AUTH}
                        placeholder="Пароль"
                        type="password"
                        autoComplete="current-password"
                        {...register('password', {
                            required: 'Это поле обязательно'
                        })}
                    />
                    {passwordError && <Error type={ErrorVariations.INPUT}>{passwordError}</Error>}
                    <Button type_={ButtonVariations.BASIC}>Войти</Button>
                </Form>
            </Layout>
        </Container>
    );
};