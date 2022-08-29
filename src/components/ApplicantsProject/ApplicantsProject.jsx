import React, {useEffect} from 'react';
import cl from './ApplicantsProjectContainer.module.css'
import {child, get, getDatabase, ref} from "firebase/database";
import {useDispatch, useSelector} from "react-redux";
import {adminShowProject} from "../../reduxTollkit/slices/projectSlice";
import Project from "./Project/Project";
import {setPost} from "../../reduxTollkit/slices/postsSlice";

const ApplicantsProject = () => {

    const {showProject} = useSelector(state => state.project)
    debugger
    const dispatch = useDispatch()


    useEffect(() => {
        const dbRef = ref(getDatabase());
        (!showProject.length && get(child(dbRef, `project/`))
            .then((snapshot) => {
                debugger
                !showProject.length && Object.values(snapshot.val()).map(p => {dispatch(adminShowProject(p))})

            }))
    },[])




    if (!showProject.length) {
        return <div className={cl.notPosts}>Проектов не найдено...</div>
    }


    return (
        <div>
            <div className={cl.title} >Проекты абитуриентов.(Для администраторов)</div>
            {showProject.map(p => <Project
                email={p.email}
                phone={p.phone}
                fullName={p.fullName}
                project={p.project}
                key={p.id}
            />)}
        </div>
    );
};

export default ApplicantsProject;