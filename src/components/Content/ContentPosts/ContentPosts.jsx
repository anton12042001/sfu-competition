import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Posts from "./Posts";
import GetPosts, {getPosts} from "../../../api/getPosts";
import {child, get, getDatabase, ref} from "firebase/database";
import {setPost} from "../../../reduxTollkit/slices/postsSlice";

const ContentPosts = () => {
    const {posts} = useSelector(state => state.posts)
    console.log(posts)


    const dbRef = ref(getDatabase());
    const dispatch = useDispatch()

        if (!posts.length){
            get(child(dbRef, `posts/`))
                .then((snapshot) => {
                    if (snapshot.exists()) {
                        let data = snapshot.val()
                        data.map(p => {
                            dispatch(setPost(p))
                        })
                    } else {
                        console.log("No data available");
                    }
                }).catch((error) => {
                console.error(error);
            });
        }

    return (
        <div>
            {posts.map(p => <Posts title={p.title} body={p.body} key={p.id} />)}
        </div>
    );
};

export default ContentPosts;