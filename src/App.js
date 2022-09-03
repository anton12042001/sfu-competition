import React from "react"
import cl from "./App.module.css"
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom"
import Authorization from "./components/Authorization/Authorization";
import ContentContainer from "./components/Content/ContentContainer";
import DownloadProjectContainer from "./components/DownloadProjectContainer/DownloadProjectContainer";
import ApplicantsProjectContainer from "./components/ApplicantsProject/ApplicantsProjectContainer";
import EmailVerificationContainer from "./components/EmailVerification/EmailVerificationContainer";
import PersonalCubnet from "./components/PersonalCubnet/PersonalCubnet";


function App() {

    return (
        <div className={cl.appContainer}>
                <Header/>
                <Navbar/>
            <div className={cl.appWrapperContent} >
                <Routes>
                    <Route path={'/authorization'} element={<Authorization/>} />
                    <Route path={'/content'} element={<ContentContainer/>} />
                    <Route path={'/project'} element={<DownloadProjectContainer/>} />
                    <Route path={'/adminsShowProject'} element={<ApplicantsProjectContainer/>} />
                    <Route path={'/mailVerification'} element={<EmailVerificationContainer/>} />
                    <Route path={'/personalCubnet'} element={<PersonalCubnet/>} />
                </Routes>
            </div>
        </div>
    )
}

export default App;
