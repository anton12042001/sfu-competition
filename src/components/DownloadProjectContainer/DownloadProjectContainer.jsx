import React, {useEffect, useState} from 'react';
import DownloadProject from "./DownloadProject";
import {child, get, getDatabase, ref, set} from "firebase/database";
import {useSelector} from "react-redux";


const DownloadProjectContainer = () => {
    const {id} = useSelector(state => state.user)
    const [isUserProject, setIsUserProject] = useState(false)


    useEffect(() => {
        const dbRef = ref(getDatabase());
        get(child(dbRef, `project/${id}`))
            .then((snapshot) => {
                (snapshot.val() && setIsUserProject(true) )
            })
    }, [])


    const handleProject = (data) => {
        const db = getDatabase();
        set(ref(db, 'project/' + `${id}`), {
            fullName: data.fullName,
            email: data.email,
            phone: data.phone,
            project: data.project,
        }).then(() => {
            const dbRef = ref(getDatabase());
            get(child(dbRef, `project/${id}`))
                .then((snapshot) => {
                    (snapshot.val() && setIsUserProject(true) )
                })
        })

    }


    return (
        <div>
            <DownloadProject setIsUserProject={setIsUserProject} isUserProject={isUserProject}  handleProject={handleProject}/>
        </div>
    );
};

export default DownloadProjectContainer;