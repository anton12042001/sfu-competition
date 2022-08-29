import React from 'react';

const MyInputSendProject = (props) => {
    const { field } = props
    return (
        <div>
            <label>{props.label}</label>
            <input
                disabled={props.disabled}
                type={props.type}
                placeholder={props.placeholder}
                {...field}
            />
        </div>
    );
};

export default MyInputSendProject;