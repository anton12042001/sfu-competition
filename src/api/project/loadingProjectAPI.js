import {getDatabase, ref, set} from "firebase/database";

export const loadingProjectAPI = (data,id) => {
    const db = getDatabase();
   return set(ref(db, 'project/' + `${id}`), {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        project: data.project,
    })
}