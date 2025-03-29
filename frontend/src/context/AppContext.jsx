import { createContext, useState } from "react";

export const AppContext = createContext()

const AppContextProvider = (props)=>{
    const [user, setUser] = useState(true); // Simulating user authentication state
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <AppContext.Provider value={{ user, setUser, showDropdown, setShowDropdown }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;