import {child, get, getDatabase, ref} from "firebase/database";



export const getPostsAPI = () => {
    const dbRef = ref(getDatabase());
    return get(child(dbRef, `posts/`))
}