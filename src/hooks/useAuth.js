import {useSelector} from "react-redux";

export const useAuth = () => {
debugger
    const {email, token, id} = useSelector (state => state.auth)
    return {
        isAuth: !!email,
        email,
        token,
        id,
    }
}