"use client"

import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { Plus } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import ExcerciseContainer from "../components/ExercisesComponents/ExerciseContainer"
export default function Exercises(){

    const { data: session, status } = useSession()
    const router = useRouter()

    if (status === "loading") {
      return <p>Loading...</p>
    }
    if (status === "unauthenticated") {
        router.push('/')
    }
    return(
    <>
        <main className="">
            <h1 className="text-center text-4xl font-bold mb-10">Excercises</h1>

            <div className="flex justify-between items-end mb-4 ">
                <p className="font-semibold text-lg">Your Exercises</p>
                <Button asChild >
                        <Link href={'/exercises/create'}>
                            <Plus className="mr-2 h-4 w-4"/> New Exercise
                        </Link>
                </Button>
            </div>

            <Separator/>

          {  <ExcerciseContainer/>}
        </main>
    
    </>) 
}