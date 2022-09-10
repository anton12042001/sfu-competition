import React from 'react';

const MyInputChangeFullName = (props) => {


    const { field } = props
    const { fieldState } = props


    return (
        <div>
            <label>{props.label}</label>
            <input type="text"
                   {...fieldState}
                   {...field}
                   type={props.type}
                   placeholder={props.placeholder}
            />
        </div>
    );
};

export default MyInputChangeFullName;