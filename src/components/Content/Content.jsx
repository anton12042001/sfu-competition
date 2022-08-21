import React, {useState} from 'react';
import cl from './Content.module.css'
import {child, get, getDatabase, ref, set} from "firebase/database";
import ContentSetPostForm from "./ContentAddNewPost/ContentSetPostForm";
import {useDispatch, useSelector} from "react-redux";
import ContentPosts from "./ContentPosts/ContentPosts";
import {setPost} from "../../reduxTollkit/slices/postsSlice";


const Content = (props) => {

    const {id} = useSelector(state => state.user)
    const [value, setValue] = useState(0)
    const dbRef = ref(getDatabase());
    const dispatch = useDispatch()



    const handlePost = (data) => {
        const db = getDatabase();
        set(ref(db, 'posts/' + value), {
            title: data.title,
            body: data.body,
        }).then(() => {
            console.log("засеталсоь")

            get(child(dbRef, `posts/`))
                .then((snapshot) => {
                    let data = snapshot.val().pop()
                    console.log(data)
                    debugger
                        dispatch(setPost(data))
                }).catch((error) => {
                console.error(error);
            });

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