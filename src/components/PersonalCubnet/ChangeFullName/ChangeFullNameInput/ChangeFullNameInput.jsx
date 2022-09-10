import React from 'react';
import {useForm, Controller} from "react-hook-form";
import MyInputChangeFullName from "../../../UI/MyInputChangeFullName/MyInputChangeFullName";

const ChangeFullNameInput = (props) => {

    const {
        register,
        handleSubmit,
        control
    } = useForm();

    const onSubmit = (data) => {
        props.changeFullName(data)
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                render={({field,fieldState}) => {
                    return <MyInputChangeFullName type={"text"} placeholder={"Введите полное имя"}
                                         label={"Полное имя"}
                                         field={field}/>;
                }}
                defaultValue={props.displayName}
                control={control}
                name="displayName"
                rules={{required: "Поле обязательно к заполнению!", minLength:{
                        value: 5,
                        message: "Минимум 5 символов"
                    }}}
            />
            <button type={"submit"}>Сохранить</button>
        </form>
    );
};

export default ChangeFullNameInput;