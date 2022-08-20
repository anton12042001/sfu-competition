import React from 'react';

const Posts = (props) => {
    return (
        <div>
            <div>{props.title}</div>
            <div>{props.body}</div>
            <div>======================</div>
        </div>
    );
};

export default Posts;