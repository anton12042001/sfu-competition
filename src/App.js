import React, {useEffect} from "react"
import cl from "./App.module.css"
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
import {Route, Routes, useNavigate} from "react-router-dom"
import Authorization from "./components/Authorization/Authorization";
import {useAuth} from "./hooks/useAuth";
import ContentContainer from "./components/Content/ContentContainer";


function App() {
    const {isAuth} = useAuth()
    const navigate = useNavigate()


    return (
        <div className={cl.appContainer}>

                <Header/>
                <Navbar/>
            <div className={cl.appWrapperContent} >
                <Routes>
                    <Route path={'/authorization'} element={<Authorization/>} />
                    <Route path={'/content'} element={<ContentContainer/>} />
                </Routes>
            </div>
        </div>
    )
}

export default App;
