import React, {useState} from 'react';
import cl from './Content.module.css'
import {getDatabase, ref, set} from "firebase/database";
import ContentSetPostForm from "./ContentAddNewPost/ContentSetPostForm";
import {useDispatch, useSelector} from "react-redux";
import {setPost} from "../../reduxTollkit/slices/postsSlice";
import ContentPosts from "./ContentPosts/ContentPosts";


const Content = (props) => {

    const {id} = useSelector(state => state.user)
    const dispatch = useDispatch()


    const [value,setValue] = useState(0)

    const handlePost = (data) => {
        const db = getDatabase();
        let keyBd = 0
        set(ref(db,'posts/' + value), {
            title: data.title,
            body: data.body,
            image: data.image
        }).then(() => {
            dispatch(setPost(data))
        })
            .catch(console.error)
        setValue(value + 1)
    }




    //todo переписать проверку на админа
    return (
        <div className={cl.content}>
            <ContentPosts/>
            {id === "RQcab3sITterORwtMsDKI1xDFt73" && <ContentSetPostForm handlePost={handlePost}/>}
        </div>
    )
};

export default Content;