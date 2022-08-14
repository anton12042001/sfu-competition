import React from "react";
import { useForm } from "react-hook-form";


const FormAuthLogin = (props) => {
    const {
        register,
        handleSubmit,
        reset
    } = useForm();

const onSubmit = (data) => {
    debugger
    props.handleLogin(data.email, data.password)
}

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("email")} type="email"/>
                <input {...register("password")} type="password"/>
                <button type={"submit"}>Войти</button>
            </form>
        </div>
    );
};

export default FormAuthLogin;