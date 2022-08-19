import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext({})
const AppCOntextProvider = (props) => {
    // const a = 10
    // const isMobile = window.innerWidth()
    const { children, values = {} } = props
    return (
        <AppContext.Provider
            value={{

                ...values
            }}
        >
            {children}
        </AppContext.Provider>

    )
}
const useAppContext = () => useContext(AppContext)
export { AppCOntextProvider, useAppContext }