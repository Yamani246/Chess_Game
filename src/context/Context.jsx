import {createContext,useContext} from 'react'

export const AppContext = createContext() 

export function useAppContext () {
    return useContext(AppContext)
}

export const AppProvider=AppContext.Provider