'use client'
import { createContext, useState } from 'react'
import { servicesData, blogsData, teamMembersData, galleryData, faqs, steps, proocessSteps, testimonials, features, galleryVideoData } from '@/data/data';


export const SalonContext = createContext();

export const SalonProvider = ({children}) => {
    const [theme, setTheme] = useState(false);
    return(
        <SalonContext.Provider value={{theme, setTheme, servicesData, blogsData, teamMembersData, galleryData, faqs, steps, proocessSteps, testimonials, features, galleryVideoData}}>
            {children}
        </SalonContext.Provider>
    )
}