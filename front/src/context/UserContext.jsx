import React, { useState, useEffect } from "react"

const UserContext = React.createContext()

function UserContextProvider({children}) {
    
    const [isLogged, setIsLogged] = useState(() => false)
    const [userdata, setUserData] = useState(() => ({}))
    
    const handleSet = (obj) => {
        setUserData(obj)
    }

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('userdata'))
        if(data) {
            setUserData(data)
        }
    }, []);
    
    useEffect(() => {
        localStorage.setItem('userdata', JSON.stringify(userdata))
        if(userdata.numerodocumento) {
            setIsLogged(true)
        }
        else {
            setIsLogged(false)
        }
      }, [userdata]);

    return (
        <UserContext.Provider value={{isLogged: isLogged, userdata: userdata, handleSet: handleSet}}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserContextProvider}