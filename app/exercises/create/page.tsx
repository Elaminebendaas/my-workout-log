"use client"
import style from './createexe.module.css'
import { redirect } from 'next/navigation'
import { useSession } from "next-auth/react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function Create(){


    async function createExer(formData: FormData){
      'use server'



    }


    
    const { data: session, status } = useSession()




    if (status === "loading") {
      return <p>Loading...</p>
    }
    if (status === "unauthenticated") {
        redirect('/')
    }
    return(<>
    

    <div>
      <h1 className={style.header}>Create an Exercise</h1>

      <form className={style.form} action={createExer}>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="exercise">Exercise</Label>
          <Input type="text" id="exercise" placeholder="Exercise Name" aria-required />
        </div>

        <Button type='submit'>Create Exercise</Button>

        
      </form>


    </div>
    
    
    </>)
}