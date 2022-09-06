import React from 'react';
import {useForm} from "react-hook-form";
import cl from './ChangeEmailPopapForm.module.css'

const ChangeEmailPopapForm = (props) => {

    const {
        register,
        handleSubmit,
    } = useForm();

    const onSubmit = (data) => {
        props.reauthorization(data)
    }



    return (
        <form className={cl.reAuthForm} onSubmit={handleSubmit(onSubmit)}>
            Для смены пароля или электронной почты необходима повторая авторизация.
            <div><input {...register("email")} type="email"/></div>
            <div><input {...register("password")} type="password"/></div>
            <div>
                <button type={"submit"}>Авторизоваться</button>
            </div>
        </form>
    );
};

export default ChangeEmailPopapForm;