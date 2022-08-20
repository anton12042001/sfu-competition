// import {child, get, getDatabase, ref} from "firebase/database";
// import React from "react";
// import {useDispatch} from "react-redux";
// import {setPost} from "../reduxTollkit/slices/postsSlice";
//
// export const getPosts = () => {
//     const dbRef = ref(getDatabase());
//     const dispatch = useDispatch()
//     get(child(dbRef, `posts/`))
//         .then((snapshot) => {
//         if (snapshot.exists()) {
//             console.log(snapshot.val())
//             dispatch(setPost(snapshot.val()))
//         } else {
//             console.log("No data available");
//         }
//     }).catch((error) => {
//         console.error(error);
//     });
// }

