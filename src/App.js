import React from "react"
import cl from "./App.module.css"
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
import {Routes, Route, useNavigate} from "react-router-dom"
import Authorization from "./components/Authorization/Authorization";
import {useAuth} from "./hooks/useAuth";

function App() {
    const {isAuth} = useAuth()
    const navigate = useNavigate()

    return (
    <div className={cl.appContainer}>
      <Header/>
      <Navbar/>
        <Routes>
            <Route path={'/authorization'} element={<Authorization/>} />
            <Route path={'/home'} element={<Content/>} />
        </Routes>
    </div>
  )
}

export default App;
