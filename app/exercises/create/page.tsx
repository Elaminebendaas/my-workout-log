"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function Create(){
    
    const { data: session, status } = useSession()
    const router = useRouter()

    if (status === "loading") {
      return <p>Loading...</p>
    }
  
    if (status === "unauthenticated") {
        router.push('/')
    }

    return(<>
    
    
    
    </>)
}