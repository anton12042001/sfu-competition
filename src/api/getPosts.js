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
//             if (snapshot.exists()) {
//                 let data = snapshot.val()
//                 data.map(p => {
//                     dispatch(setPost(p))
//                 })
//             } else {
//                 console.log("No data available");
//             }
//         }).catch((error) => {
//         console.error(error);
//     });
// }
//
