import {child, get, getDatabase, ref} from "firebase/database";


export const getProjectAPI = (id,) => {
    const dbRef = ref(getDatabase());
    return get(child(dbRef, `project/${id}`))
}