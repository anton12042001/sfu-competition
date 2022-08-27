import React from 'react';
import Login from "./Login";
import {setUser} from "../../../reduxTollkit/slices/userSlice";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {loginAPI} from "../../../api/login/loginAPI";
import firebase from "firebase/compat";

const LoginContainer = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogin = (email, password) => {
        loginAPI(email,password)
            .then(({user}) => {
                console.log(user)
                dispatch(setUser({email: user.email, id: user.uid, token: user.accessToken,}))
                navigate('/content')
            })
            .catch(console.error)
    }

    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then((result) => {
            // User is signed in. Get the ID token.
            return result.user.getIdToken();
        })
        .then((idToken) => {
            // Pass the ID token to the server.
            $.post(
                '/setCustomClaims',
                {
                    idToken: idToken
                },
                (data, status) => {
                    // This is not required. You could just wait until the token is expired
                    // and it proactively refreshes.
                    if (status == 'success' && data) {
                        const json = JSON.parse(data);
                        if (json && json.status == 'success') {
                            // Force token refresh. The token claims will contain the additional claims.
                            firebase.auth().currentUser.getIdToken(true);
                        }
                    }
                });
        }).catch((error) => {
        console.log(error);
    });




    return (
        <div>
            <Login handleLogin={handleLogin}/>
        </div>
    );
};

export default LoginContainer;