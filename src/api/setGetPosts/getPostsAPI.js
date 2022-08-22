import {useDispatch} from "react-redux";
import {child, getDatabase, ref,get} from "firebase/database";
import {setPost} from "../../reduxTollkit/slices/postsSlice";
debugger

export const getPostsAPI = (setValue) => {
    const dbRef = ref(getDatabase());
    return get(child(dbRef, `posts/`))
}