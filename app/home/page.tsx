"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation";
export default function Home(){
    const {data} = useSession();
    const router = useRouter()


    if(data){
        return(<>
    
    
            </>)
    }else{
        router.push('/')
    }

    
}