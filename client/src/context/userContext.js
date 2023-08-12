import { createContext, useEffect, useReducer } from "react";
import userProvider from "./userProvides";

const INITIAL_STATE = {
    currentUser:localStorage.getItem("token")|| null,
};
export const UserContext = createContext(INITIAL_STATE);
export const UserContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userProvider, INITIAL_STATE);
    useEffect(() =>{
        localStorage.setItem("token",state.token)
    },[state.currentUser])
    return (
        <UserContext.Provider value={{ currentUser: state.currentUser, dispatch }}>
            {children}
        </UserContext.Provider>
    );
};