import React, {useEffect, useState} from 'react';
import cl from './Content.module.css'
import {child, get, getDatabase, ref} from "firebase/database";
import ContentSetPostForm from "./ContentAddNewPost/ContentSetPostForm";
import {useSelector} from "react-redux";
import ContentPosts from "./ContentPosts/ContentPosts";
import Loader from "../UI/Loader/Loader";


const Content = (props) => {
    const [value, setValue] = useState(0)
    const [loading, setLoading] = useState(false)
    const {id} = useSelector(state => state.user)

    const dbRef = ref(getDatabase());


    useEffect(() => {
        get(child(dbRef, `posts/`))
            .then((snapshot) => {
                setValue(snapshot.val().length)
            }).catch((error) => {
            console.error(error);
        });
    }, [])


    const dataPosts = (data) => {
        props.handlePost(data)
    }



    //todo переписать проверку на админа


    if (loading) {
        return <div className={cl.loader}><Loader/></div>
    }

    return (
        <div className={cl.content}>
            <ContentPosts/>
            {id === "RQcab3sITterORwtMsDKI1xDFt73" && <ContentSetPostForm dataPosts={dataPosts}/>}
        </div>
    )
};

export default Content;