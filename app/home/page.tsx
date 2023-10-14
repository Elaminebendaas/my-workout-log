"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation";
export default function Home(){
    const {data, status} = useSession();
    const router = useRouter()

    if(status === "loading"){
        return(<>
        <h1>Loading....</h1>
            </>)
    }else if(status === 'unauthenticated'){
        router.push('/')
    }

    
    return(
        
    <>
    {console.log(data)}
    {data?.user?.image?.toString === String  ?  <p>hello</p> : <img src={data?.user?.image} alt="Google Account" />}
    
    <h2>Name: {data?.user?.name}</h2>
    <h3>Email: {data?.user?.email}</h3>
    
    </>)

    
}