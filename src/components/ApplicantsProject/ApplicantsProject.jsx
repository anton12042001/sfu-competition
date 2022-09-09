import React from 'react';
import cl from './ApplicantsProject.module.css'
import Project from "./Project/Project";


const ApplicantsProject = (props) => {
    return (
        <div>
            <div className={cl.title} >Проекты абитуриентов.(Для администраторов)</div>
            {props.showProject.map(p => <Project
                email={p.email}
                phone={p.phone}
                fullName={p.fullName}
                project={p.project}
                key={p.id}
            />)}
        </div>
    );
};

export default ApplicantsProject;