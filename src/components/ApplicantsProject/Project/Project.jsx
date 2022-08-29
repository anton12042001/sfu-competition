import React from 'react';

const Project = (props) => {
    debugger
    return (
        <div>
            <div>Почта - {props.email}</div>
            <div>Полное имя - {props.fullName}</div>
            <div>Номер телефона - {props.phone}</div>
            <div>Ссылка на проект - <a href={props.project}>{props.project}</a></div>
            ========
        </div>
    );
};

export default Project;