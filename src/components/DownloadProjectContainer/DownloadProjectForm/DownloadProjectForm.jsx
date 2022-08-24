import React from 'react';
import {useForm} from "react-hook-form";
import {useSelector} from "react-redux";

const DownloadProjectForm = ({isUserProject,loadProject,setIsUserProject}) => {


    const {
        register,
        handleSubmit,
        
    } = useForm();

    const disableInput = () => {
        setIsUserProject(false)
    }

    const onSubmit = (data) => {
        loadProject(data)
    }

    return (
        <form  onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input disabled={isUserProject}  placeholder={"ФИО"}  {...register("fullName")} type="text"/>
            </div>
            <div>
                <input disabled={isUserProject} placeholder={"Ваш email"}  {...register("email")} type="email"/>
            </div>
            <div>
                <input disabled={isUserProject} placeholder={"Ваш номер телефона"}  {...register("phone")} type="tel"/>
            </div>
            <div>
                <input disabled={isUserProject} placeholder={"Ссылка на ваш проект"}  {...register("project")} type="text"/>
            </div>
            <button disabled={isUserProject}  type={"submit"}>Сохранить</button>
            {isUserProject && <button onClick={disableInput}>Редактировать</button>}
        </form>
    );
};

export default DownloadProjectForm;