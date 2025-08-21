'use client'
import { createContext } from 'react'
import { servicesData, blogsData, teamMembersData, galleryData } from '@/data/data';


export const SalonContext = createContext();

export const SalonProvider = ({children}) => {
    return(
        <SalonContext.Provider value={{servicesData, blogsData, teamMembersData, galleryData}}>
            {children}
        </SalonContext.Provider>
    )
}