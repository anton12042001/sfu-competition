import React from 'react';
import {useForm} from "react-hook-form";

const FormAuthRegister = (props) => {
    const {
        register,
        handleSubmit,
        reset
    } = useForm();

    const onSubmit = (data) => {
        debugger
        props.handleRegister(data.email, data.password)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("email")} type="email"/>
            <input {...register("password")} type="password"/>
            <button type={"submit"}>Зарегистрироваться</button>
        </form>
    );
};

export default FormAuthRegister;