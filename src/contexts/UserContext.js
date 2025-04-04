import { createContext, useState } from "react";

const UserContext = createContext({
    isLoggedIn: false,
    userName: ''
})

export const UserProvider = ({ children }) => {

    const [userContext, setUserContext] = useState({
        isLoggedIn: false,
        userName: ''
    })

    return (
        <UserContext value={{ ...userContext, setUserContext }}>
            {children}
        </UserContext>
    )
}


export default UserContext;