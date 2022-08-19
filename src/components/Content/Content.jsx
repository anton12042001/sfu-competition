import React from 'react';
import cl from './Content.module.css'
import { getDatabase, ref, set } from "firebase/database";
import ContentSetPostForm from "./ContentAddNewPost/ContentSetPostForm";
import {useDispatch, useSelector} from "react-redux";
import {setPost} from "../../reduxTollkit/slices/postsSlice";
import ContentPosts from "./ContentPosts/ContentPosts";


const Content = () => {
    debugger
    const {id} = useSelector (state => state.user)
    const dispatch = useDispatch()


    const handlePost = (data) => {
        const db = getDatabase();
        set(ref(db, ), {
            title: data.title,
            body: data.body,
            image : data.image
        });
        dispatch(setPost(data))
    }

    return  (
        <div className={cl.content} >
            <ContentPosts/>
            {id === "RQcab3sITterORwtMsDKI1xDFt73" && <ContentSetPostForm handlePost={handlePost} />}
        </div>
    )
};

export default Content;