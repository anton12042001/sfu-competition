import React, {useEffect, useState} from 'react';
import DownloadProject from "./DownloadProject";
import {useDispatch, useSelector} from "react-redux";
import {loadingProjectAPI} from "../../api/project/loadingProjectAPI";
import {getProjectAPI} from "../../api/project/getProjectAPI";
import Loader from "../UI/Loader/Loader";
import cl from "./DownloadProjectContainer.module.css"
import {getProject} from "../../reduxTollkit/slices/projectSlice";


const DownloadProjectContainer = () => {
    const {id} = useSelector(state => state.user)
    const [isUserProject, setIsUserProject] = useState(false)
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()


    useEffect(() => {
        getProjectAPI(id)
            .then((snapshot) => {
                if(snapshot.val()){
                    setIsUserProject(true)
                    dispatch(getProject(snapshot.val()))
                }
                setLoading(false)
            })
    }, [])


    const handleProject = (data) => {
        loadingProjectAPI(data, id).then(() => {
            getProjectAPI(id).then((snapshot) => {
                (snapshot.val() && setIsUserProject(true))
            })
        })

    }

    if (loading) {
        return <div className={cl.loader}><Loader/></div>
    }

    return (
        <div>
            <DownloadProject
                setIsUserProject={setIsUserProject}
                isUserProject={isUserProject}
                handleProject={handleProject}
            />
        </div>
    );
};

export default DownloadProjectContainer;