import React from 'react';
import cl from "./DownloadProjectContainer.module.css"
import DownloadProjectForm from "./DownloadProjectForm/DownloadProjectForm";

const DownloadProject = ({isUserProject,handleProject,setIsUserProject}) => {

    const loadProject = (data) => {
        handleProject(data)
    }

    return (
        <div>
            <div className={cl.title} >Загрузка проекта</div>
            {isUserProject && <div>Ваш проект отправлен!</div>}
            <DownloadProjectForm
                setIsUserProject={setIsUserProject}
                isUserProject={isUserProject}
                loadProject={loadProject}
            />
        </div>
    );
};

export default DownloadProject;