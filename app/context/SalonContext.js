'use client'
import { createContext } from 'react'
import { servicesData, blogsData, teamMembersData, galleryData, faqs, steps, proocessSteps, testimonials, features, galleryVideoData } from '@/data/data';


export const SalonContext = createContext();

export const SalonProvider = ({children}) => {
    return(
        <SalonContext.Provider value={{servicesData, blogsData, teamMembersData, galleryData, faqs, steps, proocessSteps, testimonials, features, galleryVideoData}}>
            {children}
        </SalonContext.Provider>
    )
}