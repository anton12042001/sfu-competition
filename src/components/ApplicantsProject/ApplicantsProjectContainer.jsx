import React, {useEffect} from 'react';
import ApplicantsProject from "./ApplicantsProject";
import {child, get, getDatabase, ref} from "firebase/database";
import {adminShowProject} from "../../reduxTollkit/slices/projectSlice";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import cl from "./ApplicantsProject.module.css";

const ApplicantsProjectContainer = () => {

    const {showProject} = useSelector(state => state.project)
    const dispatch = useDispatch()
    const {email} = useSelector(state => state.user)
    const navigate = useNavigate()


    if(!email) {
        navigate('/authorization')
    }


    useEffect(() => {
        const dbRef = ref(getDatabase());
        (!showProject.length && get(child(dbRef, `project/`))
            .then((snapshot) => {
                debugger
                !showProject.length && Object.values(snapshot.val()).reverse().map(p => {dispatch(adminShowProject(p))})

            }))
    },[])


    if (!showProject.length) {
        return <div className={cl.notPosts}>Проектов не найдено...</div>
    }
    

    return (
        <div>
            <ApplicantsProject showProject={showProject} />
        </div>
    );
};

export default ApplicantsProjectContainer;