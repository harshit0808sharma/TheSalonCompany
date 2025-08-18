'use client'
import { createContext, useState } from 'react'
import { servicesData, blogsData } from '@/public/assets/data';


export const HomeContext = createContext();

export const HomeProvider = ({children}) => {
    return(
        <HomeContext.Provider value={{servicesData, blogsData}}>
            {children}
        </HomeContext.Provider>
    )
}