import React, {useEffect, useState} from 'react';
import cl from './Content.module.css'
import {child, get, getDatabase, ref} from "firebase/database";
import ContentSetPostForm from "./ContentAddNewPost/ContentSetPostForm";
import {useSelector} from "react-redux";
import ContentPosts from "./ContentPosts/ContentPosts";
import Loader from "../UI/Loader/Loader";


const Content = (props) => {
    const {id} = useSelector(state => state.user)


    const dataPosts = (data) => {
        props.handlePost(data)
    }
    
    //todo переписать проверку на админа


    return (
        <div className={cl.content}>
            <ContentPosts/>
            {id === "RQcab3sITterORwtMsDKI1xDFt73" && <ContentSetPostForm dataPosts={dataPosts}/>}
        </div>
    )
};

export default Content;