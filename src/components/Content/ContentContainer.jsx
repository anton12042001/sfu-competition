import React from 'react';
import Content from "./Content";
import {setPostsAPI} from "../../api/setGetPosts/setPostsAPI";
import {getPostsAPI} from "../../api/setGetPosts/getPostsAPI";
import {setPost} from "../../reduxTollkit/slices/postsSlice";
import {useState} from "react";
import {useDispatch} from "react-redux";
import cl from "./Content.module.css";
import Loader from "../UI/Loader/Loader";

const ContentContainer = () => {
    const [value, setValue] = useState(0)
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()

    const handlePost = (data) => {
        setPostsAPI(data, value).then(r => {
            setLoading(true)
            getPostsAPI(setValue).then((snapshot) => {
                setValue(snapshot.val().length)
                let data = snapshot.val().pop()
                dispatch(setPost(data))
                setLoading(false)
            })
        })
    }


    if (loading) {
        return <div className={cl.loader}><Loader/></div>
    }
    return (
        <div>
            <Content handlePost={handlePost} />
        </div>
    );
};

export default ContentContainer;