'use client'
import { createContext } from 'react'
import { servicesData, blogsData, teamMembersData } from '@/public/assets/data';


export const HomeContext = createContext();

export const HomeProvider = ({children}) => {
    return(
        <HomeContext.Provider value={{servicesData, blogsData, teamMembersData}}>
            {children}
        </HomeContext.Provider>
    )
}