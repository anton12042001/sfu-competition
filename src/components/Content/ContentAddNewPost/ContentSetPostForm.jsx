import React from 'react';
import {useForm} from "react-hook-form";

const ContentSetPostForm = (props) => {
    const {
        register,
        handleSubmit,
        reset
    } = useForm();

    const onSubmit = (data) => {
        reset()
        props.dataPosts(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input placeholder={"Заголовок поста"}  {...register("title")} type="text"/>
            </div>
            <div>
                <input placeholder={"Описание поста"}  {...register("body")} type="text"/>
            </div>
            <button type={"submit"}>Добавить пост</button>
        </form>
    );
};

export default ContentSetPostForm;