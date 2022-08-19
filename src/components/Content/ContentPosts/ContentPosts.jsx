import React from 'react';
import {useSelector} from "react-redux";
import Posts from "./Posts";

const ContentPosts = () => {
    const {posts} = useSelector (state => state.posts)
    debugger
    return (
        <div>
            {posts.map(p => <Posts title={p.title} body={p.body} image={p.image} key={p.id} />)}
        </div>
    );
};

export default ContentPosts;