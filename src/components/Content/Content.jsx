import React, {useEffect, useState} from 'react';
import cl from './Content.module.css'
import {child, get, getDatabase, ref, set} from "firebase/database";
import ContentSetPostForm from "./ContentAddNewPost/ContentSetPostForm";
import {useDispatch, useSelector} from "react-redux";
import ContentPosts from "./ContentPosts/ContentPosts";
import {setPost} from "../../reduxTollkit/slices/postsSlice";
import Loader from "../UI/Loader/Loader";


const Content = (props) => {

    const [value, setValue] = useState(0)
    const [loading, setLoading] = useState(false)
    const {id} = useSelector(state => state.user)
    const dispatch = useDispatch()

    const dbRef = ref(getDatabase());


    useEffect(() => {
        setLoading(true)
        get(child(dbRef, `posts/`))
            .then((snapshot) => {
                setValue(snapshot.val().length)
            }).catch((error) => {
            console.error(error);
        });
        setLoading(false)
    }, [])


    const handlePost = (data) => {
        const db = getDatabase();
        set(ref(db, 'posts/' + value), {
            title: data.title,
            body: data.body,
        }).then(() => {
            setLoading(true)
            get(child(dbRef, `posts/`))
                .then((snapshot) => {
                    setValue(snapshot.val().length)
                    let data = snapshot.val().pop()
                    dispatch(setPost(data))
                    setLoading(false)
                }).catch((error) => {
                console.error(error);
            });
        })
            .catch(console.error)
    }


    //todo переписать проверку на админа


    if (loading) {
        return <div className={cl.loader}><Loader/></div>
    }

    return (
        <div className={cl.content}>

            <ContentPosts/>
            {id === "RQcab3sITterORwtMsDKI1xDFt73" && <ContentSetPostForm handlePost={handlePost}/>}
        </div>
    )
};

export default Content;