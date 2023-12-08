"use client"  
import style from './createexe.module.css'
import { redirect } from 'next/navigation'
import { useSession } from "next-auth/react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { createExercise } from '../actions'
import { useCallback } from 'react'
import { useToast } from '@/components/ui/use-toast'





export default function Create(){
  const { data: session, status } = useSession()
  const {toast} = useToast()

  const onSubmit = useCallback(
    async (formData: FormData) => {
      if(session?.user?.email === undefined){
        
        return toast({
          title: "Error",
          description: "There was an auth error",
          variant: 'destructive'
        })
      }
      if(session?.user?.email === null){
       return toast({
        title: "Error",
        description: "There was an auth error",
        variant: 'destructive'
      }) 
      }
      const res = await createExercise(formData, session?.user?.email)

      if(res){
        return redirect('/exercises')
      }else{
        toast({
          title: "Error",
          description: "The exercise name cannot be blank",
          variant: 'destructive'
        })
      }
    },
    [session, toast],
  )
  

    if (status === "loading") {
      return <p>Loading...</p>
    }
    if (status === "unauthenticated") {
        redirect('/')
    }
    return(<>
    

    <div>
      <h1 className={style.header}>Create an Exercise</h1>

      <form className={style.form} action={onSubmit}>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="exercise">Exercise</Label>
          <Input type="text" name='exercise' id="exercise" placeholder="Exercise Name" aria-required />
        </div>

        <Button type='submit'>Create Exercise</Button>

        
      </form>


    </div>
    
    
    </>)
}