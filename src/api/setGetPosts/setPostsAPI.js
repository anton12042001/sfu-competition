import {getDatabase, ref,set} from "firebase/database";


export const setPostsAPI = (data,value) => {
    const db = getDatabase();
    return set(ref(db, 'posts/' + value), {
        title: data.title,
        body: data.body,
    })
}