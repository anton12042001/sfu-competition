import React from 'react';
import {useForm} from "react-hook-form";

const FormAuthRegister = (props) => {
    const {
        register,
        handleSubmit,
        reset
    } = useForm();

    const onSubmit = (data) => {
        reset()
        props.signUpDB(data.email, data.password)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input placeholder={"Введите email"}  {...register("email")} type="email"/>
            </div>
            <div>
                <input placeholder={"Введите пароль"}  {...register("password")} type="password"/>
            </div>
            <button type={"submit"}>Зарегистрироваться</button>
        </form>
    );
};

export default FormAuthRegister;