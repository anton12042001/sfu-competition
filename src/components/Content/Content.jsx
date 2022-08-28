import React from 'react';
import cl from './Content.module.css'
import ContentSetPostForm from "./ContentAddNewPost/ContentSetPostForm";
import {useSelector} from "react-redux";
import ContentPosts from "./ContentPosts/ContentPosts";


const Content = (props) => {
    const {id} = useSelector(state => state.user)
    const dataPosts = (data) => {
        props.handlePost(data)
    }

    //todo переписать проверку на админа
//Реализация бд части

    return (
        <div className={cl.content}>
            <ContentPosts/>
            {id === "RQcab3sITterORwtMsDKI1xDFt73" && <ContentSetPostForm dataPosts={dataPosts}/>}
        </div>
    )
};

export default Content;