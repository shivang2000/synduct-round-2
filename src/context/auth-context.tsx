"use client"

import { auth } from "@/firebase"
import { User } from "firebase/auth"
import React, {createContext, useContext, useEffect, useState} from "react"

type  AuthContextType = {
    currentUser: User | null
} 

const AuthContext = createContext<AuthContextType>({
    currentUser: null
})

export const AuthProvider = ({children}:{children: React.ReactNode}) =>{

    const [currentUser, setCurrentUser] = useState<User | null>(null)

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user ?? null)
        })

        return () => unsubscribe()
    },[])

    return (
        <AuthContext.Provider value={{
            currentUser
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)