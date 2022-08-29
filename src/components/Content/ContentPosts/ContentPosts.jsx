import React from 'react';
import {useSelector} from "react-redux";
import Posts from "./Posts";
import cl from './ContentPosts.module.css'


const ContentPosts = () => {
    const {posts} = useSelector(state => state.posts)
    if (!posts.length) {
        return <div className={cl.notPosts}>Посты не найдены...</div>
    }

    return (
        <div>
            {posts.map(p => <Posts title={p.title} body={p.body} key={p.id}/>)}
        </div>
    );
};

export default ContentPosts;