import React from 'react';
import {useForm} from "react-hook-form";

const ChangeFullNameInput = (props) => {

    const {
        register,
        handleSubmit,
    } = useForm();

    const onSubmit = (data) => {
        props.changeFullName(data)
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("displayName")} type="text"/>
            <button type={"submit"}>Сохранить</button>
        </form>
    );
};

export default ChangeFullNameInput;