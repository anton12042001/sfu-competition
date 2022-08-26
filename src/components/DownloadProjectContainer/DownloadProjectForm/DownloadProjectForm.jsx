import React from 'react';
import {useForm} from "react-hook-form";
import {Controller} from "react-hook-form";
import MyInputSendProject from "../../UI/MyInputSendProject/MyInputSendProject"
import {useSelector} from "react-redux";

const DownloadProjectForm = ({isUserProject,loadProject,setIsUserProject}) => {

    const {email,phone,fullName,project} = useSelector(state => state.project)
    debugger

    const {
        handleSubmit,
        control,
    } = useForm({
        mode: "onBlur",
    });

    const disableInput = () => {
        setIsUserProject(false)
    }

    const onSubmit = (data) => {
        loadProject(data)
    }

    return (
        <form  onSubmit={handleSubmit(onSubmit)}>


            <Controller
                render={({field}) => {
                    return <MyInputSendProject type={"text"} placeholder={"Введите полное имя"}
                                               rules={true}
                                               label={"Полное имя: "}
                                               disabled={isUserProject}
                                               field={field}/>;
                }}
                defaultValue={fullName}
                control={control}
                name="fullName"
                rules={{required: "Поле обязательно к заполнению!"}}
            />
            <Controller
                render={({field}) => {
                    return <MyInputSendProject type={"email"} placeholder={"Ваш email"}
                                               rules={true}
                                               label={"Введите email"}
                                               disabled={isUserProject}
                                               field={field}/>;
                }}
                defaultValue={email}
                control={control}
                name="email"
                rules={{required: "Поле обязательно к заполнению!"}}
            />
            <Controller
                render={({field}) => {
                    return <MyInputSendProject type={"tel"} placeholder={"Ваш номер телефона"}
                                               rules={true}
                                               label={"Введите номер телефона"}
                                               disabled={isUserProject}
                                               field={field}/>;
                }}
                defaultValue={phone}
                control={control}
                name="phone"
                rules={{required: "Поле обязательно к заполнению!"}}
            />
            <Controller
                render={({field}) => {
                    return <MyInputSendProject type={"text"} placeholder={"Ваш проект"}
                                               rules={true}
                                               label={"Вставьте ссылку на ваш проект"}
                                               disabled={isUserProject}
                                               field={field}/>;
                }}
                defaultValue={project}
                control={control}
                name="project"
                rules={{required: "Поле обязательно к заполнению!"}}
            />
            <button disabled={isUserProject}  type={"submit"}>Сохранить</button>
            {isUserProject && <button onClick={disableInput}>Редактировать</button>}
        </form>
    );
};

export default DownloadProjectForm;