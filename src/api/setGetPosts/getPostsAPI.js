import {child, get, getDatabase, ref} from "firebase/database";

debugger

export const getPostsAPI = () => {
    const dbRef = ref(getDatabase());
    return get(child(dbRef, `posts/`))
}